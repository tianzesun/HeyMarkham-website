'use server';

import { randomUUID } from 'crypto';
import { z } from 'zod';
import {
  MAX_FILE_BYTES, attachmentName, detectDocument, isSafeLink, roleSubject, type DocumentKind,
} from '@/lib/careers';
import { isLocale, localeName, type Locale } from '@/lib/i18n';

// Job applications from /careers, emailed to the hiring inbox with the résumé and cover letter attached.
// Nothing is stored on the site: the files exist only for the length of this request and in the email.
//
// Configuration, set in Vercel's environment settings (never in the repo):
// - RESEND_API_KEY      API key for Resend (resend.com), the email service that delivers the message
// - CAREERS_FROM_EMAIL  sender on a domain verified in Resend, e.g. "Hey Markham Careers <careers@aydenait.com>"
// - CAREERS_TO_EMAIL    where applications go (defaults to contact@aydenait.com)
//
// Logs never include the applicant's details or files, only a reference number and what failed.

const RETENTION_MONTHS = 12;

type Field = 'role' | 'name' | 'email' | 'phone' | 'link' | 'workAuth' | 'resume' | 'coverLetter' | 'consent';

const copy: Record<Locale, {
  role: string;
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  phoneInvalid: string;
  linkInvalid: string;
  workAuth: string;
  resumeMissing: string;
  fileTooLarge: (label: string) => string;
  fileType: (label: string) => string;
  resumeLabel: string;
  coverLabel: string;
  consent: string;
  notConfigured: (ref: string) => string;
  failed: (ref: string) => string;
}> = {
  en: {
    role: 'Please choose a role',
    nameMin: 'Name must be at least 2 characters',
    nameMax: 'Name must be 100 characters or fewer',
    emailInvalid: 'Please enter a valid email address',
    phoneInvalid: 'Please enter a valid phone number, or leave it blank',
    linkInvalid: 'Links must start with https://, or leave it blank',
    workAuth: 'Please tell us whether you’re legally entitled to work in Canada',
    resumeMissing: 'Please attach your résumé',
    fileTooLarge: (label) => `Your ${label} is larger than 2 MB. Please attach a smaller file.`,
    fileType: (label) => `Your ${label} must be a PDF or Word file (.pdf, .doc or .docx).`,
    resumeLabel: 'résumé',
    coverLabel: 'cover letter',
    consent: 'Please agree to the privacy notice so we can review your application',
    notConfigured: (ref) => `We couldn’t send your application. Please email it to contact@aydenait.com instead. (Ref: ${ref})`,
    failed: (ref) => `We couldn’t send your application. Please try again in a few minutes. (Ref: ${ref})`,
  },
  zh: {
    role: '请选择申请职位',
    nameMin: '姓名至少需要 2 个字符',
    nameMax: '姓名不能超过 100 个字符',
    emailInvalid: '请输入有效的电子邮箱地址',
    phoneInvalid: '请输入有效的电话号码，或留空',
    linkInvalid: '链接须以 https:// 开头，或留空',
    workAuth: '请告诉我们您是否有在加拿大合法工作的资格',
    resumeMissing: '请上传您的简历',
    fileTooLarge: (label) => `您的${label}超过 2 MB，请上传较小的文件。`,
    fileType: (label) => `您的${label}须为 PDF 或 Word 文件（.pdf、.doc 或 .docx）。`,
    resumeLabel: '简历',
    coverLabel: '求职信',
    consent: '请同意隐私声明，以便我们审阅您的申请',
    notConfigured: (ref) => `我们无法提交您的申请。请改发邮件至 contact@aydenait.com。（编号：${ref}）`,
    failed: (ref) => `我们无法提交您的申请。请几分钟后重试。（编号：${ref}）`,
  },
  fr: {
    role: 'Veuillez choisir un poste',
    nameMin: 'Le nom doit compter au moins 2 caractères',
    nameMax: 'Le nom doit compter 100 caractères ou moins',
    emailInvalid: 'Veuillez entrer une adresse courriel valide',
    phoneInvalid: 'Veuillez entrer un numéro de téléphone valide, ou laisser le champ vide',
    linkInvalid: 'Les liens doivent commencer par https://, ou laissez le champ vide',
    workAuth: 'Veuillez nous indiquer si vous êtes légalement autorisé à travailler au Canada',
    resumeMissing: 'Veuillez joindre votre CV',
    fileTooLarge: (label) => `Votre ${label} dépasse 2 Mo. Veuillez joindre un fichier plus petit.`,
    fileType: (label) => `Votre ${label} doit être un fichier PDF ou Word (.pdf, .doc ou .docx).`,
    resumeLabel: 'CV',
    coverLabel: 'lettre de présentation',
    consent: 'Veuillez accepter l’avis de confidentialité pour que nous puissions examiner votre candidature',
    notConfigured: (ref) => `Nous n’avons pas pu envoyer votre candidature. Envoyez-la plutôt à contact@aydenait.com. (Réf. : ${ref})`,
    failed: (ref) => `Nous n’avons pas pu envoyer votre candidature. Veuillez réessayer dans quelques minutes. (Réf. : ${ref})`,
  },
};

export type ApplicationResult =
  | { success: true; error: null; field: null }
  | { success: false; error: string; field: Field | null };

/** Drop control characters (line breaks included), so nothing can break out of an email line or subject */
const oneLine = (value: FormDataEntryValue | null) => String(value ?? '').replace(/\p{C}+/gu, ' ').trim();

function schema(t: (typeof copy)[Locale]) {
  return z.object({
    role: z.string().refine(id => roleSubject(id) !== null, t.role),
    name: z.string().min(2, t.nameMin).max(100, t.nameMax),
    email: z.string().email(t.emailInvalid).max(254, t.emailInvalid),
    phone: z.string().max(30, t.phoneInvalid).regex(/^[0-9+().\-\s]*$/, t.phoneInvalid),
    link: z.string().max(300, t.linkInvalid).refine(v => v === '' || isSafeLink(v), t.linkInvalid),
    workAuth: z.enum(['yes', 'no'], { message: t.workAuth }),
    consent: z.literal('on', { message: t.consent }),
  });
}

type Checked = { kind: DocumentKind; bytes: Uint8Array };

/** A file field: missing (null), or its real type and bytes, or the reason it's refused */
async function readDocument(value: FormDataEntryValue | null): Promise<Checked | null | 'tooLarge' | 'badType'> {
  if (!(value instanceof File) || value.size === 0) return null;
  if (value.size > MAX_FILE_BYTES) return 'tooLarge';
  const bytes = new Uint8Array(await value.arrayBuffer());
  const kind = detectDocument(bytes, value.name);
  return kind ? { kind, bytes } : 'badType';
}

export async function submitApplication(formData: FormData, requestedLocale: Locale = 'en'): Promise<ApplicationResult> {
  // The locale comes from the browser, so don't trust it to be one we have copy for
  const locale: Locale = isLocale(requestedLocale) ? requestedLocale : 'en';
  const t = copy[locale];
  const ref = randomUUID();

  // Spam trap: real visitors never see this field. Report success so bots learn nothing, send nothing.
  if (oneLine(formData.get('apply_hp')) !== '') return { success: true, error: null, field: null };

  const parsed = schema(t).safeParse({
    role: oneLine(formData.get('role')),
    name: oneLine(formData.get('name')),
    email: oneLine(formData.get('email')),
    phone: oneLine(formData.get('phone')),
    link: oneLine(formData.get('link')),
    workAuth: oneLine(formData.get('workAuth')),
    consent: oneLine(formData.get('consent')),
  });
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return { success: false, error: issue?.message ?? t.failed(ref), field: (issue?.path[0] as Field) ?? null };
  }
  const data = parsed.data;

  const resume = await readDocument(formData.get('resume'));
  if (resume === null) return { success: false, error: t.resumeMissing, field: 'resume' };
  if (resume === 'tooLarge') return { success: false, error: t.fileTooLarge(t.resumeLabel), field: 'resume' };
  if (resume === 'badType') return { success: false, error: t.fileType(t.resumeLabel), field: 'resume' };

  const cover = await readDocument(formData.get('coverLetter'));
  if (cover === 'tooLarge') return { success: false, error: t.fileTooLarge(t.coverLabel), field: 'coverLetter' };
  if (cover === 'badType') return { success: false, error: t.fileType(t.coverLabel), field: 'coverLetter' };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CAREERS_FROM_EMAIL;
  const to = process.env.CAREERS_TO_EMAIL || 'contact@aydenait.com';
  if (!apiKey || !from) {
    console.error(`[apply ${ref}] RESEND_API_KEY or CAREERS_FROM_EMAIL is not configured`);
    return { success: false, error: t.notConfigured(ref), field: null };
  }

  const role = roleSubject(data.role) as string;
  const received = new Date();
  const deleteBy = new Date(received);
  deleteBy.setMonth(deleteBy.getMonth() + RETENTION_MONTHS);
  const day = (d: Date) => d.toISOString().slice(0, 10);

  // Plain text only: nothing the applicant typed is ever interpreted as HTML
  const text = [
    `New application: ${role}`,
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || 'not given'}`,
    `Link: ${data.link || 'not given'}`,
    `Legally entitled to work in Canada: ${data.workAuth === 'yes' ? 'Yes' : 'No'}`,
    `Applied from the ${localeName[locale]} page`,
    '',
    `Attached: résumé${cover ? ' and cover letter' : ' (no cover letter)'}`,
    `Received: ${day(received)}   Reference: ${ref}`,
    '',
    `The privacy notice on the form says applications are kept for ${RETENTION_MONTHS} months. Please delete this one by ${day(deleteBy)}.`,
    'Reply to this email to answer the applicant directly.',
  ].join('\n');

  const attachments = [
    { filename: attachmentName('Resume', data.name, resume.kind), content: Buffer.from(resume.bytes).toString('base64') },
    ...(cover
      ? [{ filename: attachmentName('Cover letter', data.name, cover.kind), content: Buffer.from(cover.bytes).toString('base64') }]
      : []),
  ];

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // A retried request with the same reference is delivered once
        'Idempotency-Key': ref,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Application: ${role} · ${data.name}`,
        text,
        attachments,
      }),
      signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error(`status ${response.status}`);
  } catch (err) {
    // The reason only: the application holds personal information
    console.error(`[apply ${ref}] Delivery failed: ${err instanceof Error ? err.message : 'unknown error'}`);
    return { success: false, error: t.failed(ref), field: null };
  }

  return { success: true, error: null, field: null };
}
