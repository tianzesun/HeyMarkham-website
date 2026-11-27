'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, FileText, Lock, Send, Upload, X } from 'lucide-react';
import { submitApplication, type ApplicationResult } from '../app/actions/apply';
import { ACCEPT_ATTRIBUTE, ACCEPTED_EXTENSIONS, CAREER_ROLES, GENERAL_ROLE, MAX_FILE_BYTES, extensionOf } from '../lib/careers';
import type { Locale } from '../lib/i18n';

type Field = Exclude<ApplicationResult['field'], null>;

const copy: Record<Locale, {
  role: string;
  rolePlaceholder: string;
  general: string;
  name: string;
  email: string;
  phone: string;
  link: string;
  optional: string;
  workAuth: string;
  yes: string;
  no: string;
  resume: string;
  coverLetter: string;
  fileHint: string;
  choose: string;
  remove: (name: string) => string;
  tooLarge: string;
  badType: string;
  privacyTitle: string;
  privacy: string;
  consent: string;
  submit: string;
  sending: string;
  failed: string;
  successTitle: string;
  successText: string;
  another: string;
  spamLabel: string;
}> = {
  en: {
    role: 'Role',
    rolePlaceholder: 'Choose a role',
    general: 'Something else (general application)',
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    link: 'LinkedIn or portfolio',
    optional: '(optional)',
    workAuth: 'Are you legally entitled to work in Canada?',
    yes: 'Yes',
    no: 'No',
    resume: 'Résumé',
    coverLetter: 'Cover letter',
    fileHint: 'PDF or Word, up to 2 MB',
    choose: 'Choose a file',
    remove: (name) => `Remove ${name}`,
    tooLarge: 'This file is larger than 2 MB. Please choose a smaller one.',
    badType: 'Please choose a PDF or Word file (.pdf, .doc or .docx).',
    privacyTitle: 'Privacy notice',
    privacy:
      'Aydenait Solutions, which makes Hey Markham, uses your application only to consider you for roles with us. It’s sent by email to our hiring team through our email provider, Resend, which processes it in the United States; it isn’t stored on this website. We keep applications for 12 months, then delete them. To see your application or have it deleted sooner, email contact@aydenait.com.',
    consent: 'I’ve read the privacy notice and agree to my application being used this way.',
    submit: 'Submit application',
    sending: 'Sending…',
    failed: 'We couldn’t send your application. Please try again in a few minutes.',
    successTitle: 'Application sent',
    successText: 'Thank you for applying to Hey Markham. We’ll review your application and reply by email.',
    another: 'Submit another application',
    spamLabel: 'Leave this field empty',
  },
  zh: {
    role: '申请职位',
    rolePlaceholder: '请选择职位',
    general: '其他（一般申请）',
    name: '姓名',
    email: '电子邮箱',
    phone: '电话',
    link: 'LinkedIn 或作品集链接',
    optional: '（选填）',
    workAuth: '您是否有在加拿大合法工作的资格？',
    yes: '是',
    no: '否',
    resume: '简历',
    coverLetter: '求职信',
    fileHint: 'PDF 或 Word 文件，不超过 2 MB',
    choose: '选择文件',
    remove: (name) => `移除 ${name}`,
    tooLarge: '此文件超过 2 MB，请选择较小的文件。',
    badType: '请选择 PDF 或 Word 文件（.pdf、.doc 或 .docx）。',
    privacyTitle: '隐私声明',
    privacy:
      'Hey Markham 的开发者 Aydenait Solutions 仅将您的申请用于考虑您是否适合我们的职位。申请会通过我们的邮件服务商 Resend 以电子邮件发送给招聘团队，Resend 在美国处理这些信息；本网站不会保存您的申请。我们会保留申请 12 个月，之后删除。如需查看您的申请或提前删除，请发邮件至 contact@aydenait.com。',
    consent: '我已阅读隐私声明，并同意按上述方式使用我的申请。',
    submit: '提交申请',
    sending: '提交中…',
    failed: '我们无法提交您的申请。请几分钟后重试。',
    successTitle: '申请已提交',
    successText: '感谢您申请加入 Hey Markham。我们会审阅您的申请，并通过邮件回复您。',
    another: '再提交一份申请',
    spamLabel: '请留空此字段',
  },
  fr: {
    role: 'Poste',
    rolePlaceholder: 'Choisissez un poste',
    general: 'Autre (candidature spontanée)',
    name: 'Nom complet',
    email: 'Courriel',
    phone: 'Téléphone',
    link: 'LinkedIn ou portfolio',
    optional: '(facultatif)',
    workAuth: 'Êtes-vous légalement autorisé à travailler au Canada?',
    yes: 'Oui',
    no: 'Non',
    resume: 'CV',
    coverLetter: 'Lettre de présentation',
    fileHint: 'PDF ou Word, 2 Mo au maximum',
    choose: 'Choisir un fichier',
    remove: (name) => `Retirer ${name}`,
    tooLarge: 'Ce fichier dépasse 2 Mo. Veuillez en choisir un plus petit.',
    badType: 'Veuillez choisir un fichier PDF ou Word (.pdf, .doc ou .docx).',
    privacyTitle: 'Avis de confidentialité',
    privacy:
      'Aydenait Solutions, qui conçoit Hey Markham, utilise votre candidature uniquement pour l’examiner en vue de postes chez nous. Elle est envoyée par courriel à notre équipe de recrutement par l’intermédiaire de notre fournisseur de courriel, Resend, qui la traite aux États-Unis; elle n’est pas conservée sur ce site. Nous conservons les candidatures 12 mois, puis les supprimons. Pour consulter votre candidature ou la faire supprimer plus tôt, écrivez à contact@aydenait.com.',
    consent: 'J’ai lu l’avis de confidentialité et j’accepte que ma candidature soit utilisée de cette façon.',
    submit: 'Envoyer ma candidature',
    sending: 'Envoi en cours…',
    failed: 'Nous n’avons pas pu envoyer votre candidature. Veuillez réessayer dans quelques minutes.',
    successTitle: 'Candidature envoyée',
    successText: 'Merci d’avoir postulé chez Hey Markham. Nous examinerons votre candidature et vous répondrons par courriel.',
    another: 'Envoyer une autre candidature',
    spamLabel: 'Laissez ce champ vide',
  },
};

const input =
  'w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors';
const inputBorder = (invalid: boolean) =>
  invalid ? 'border-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-700';
const label = 'block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1.5';

/**
 * The job application form on /careers. Each role's Apply link points to #apply-<role id>, which picks
 * that role here and scrolls to the form. Files are checked here for a quick answer, and again on the
 * server, which is the check that counts.
 */
export function ApplicationForm({ locale, roleTitles }: { locale: Locale; roleTitles: string[] }) {
  const t = copy[locale];
  const formRef = useRef<HTMLFormElement>(null);
  const roleRef = useRef<HTMLSelectElement>(null);
  const [role, setRole] = useState('');
  const [files, setFiles] = useState<{ resume: string; coverLetter: string }>({ resume: '', coverLetter: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<{ message: string; field: Field | null } | null>(null);

  // #apply-<role id> chooses that role and brings the form into view, from the page's Apply links or a shared URL
  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith('#apply-')) return;
      const id = hash.slice('#apply-'.length);
      if (CAREER_ROLES.some(r => r.id === id) || id === GENERAL_ROLE.id) setRole(id);
      setSent(false);
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      roleRef.current?.focus({ preventScroll: true });
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  // Point the visitor at the field the server refused
  useEffect(() => {
    if (!error?.field) return;
    formRef.current?.querySelector<HTMLElement>(`[name="${error.field}"]`)?.focus();
  }, [error]);

  const pickFile = (field: 'resume' | 'coverLetter') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return setFiles(f => ({ ...f, [field]: '' }));
    const problem = file.size > MAX_FILE_BYTES
      ? t.tooLarge
      : !(ACCEPTED_EXTENSIONS as readonly string[]).includes(extensionOf(file.name)) ? t.badType : null;
    if (problem) {
      e.currentTarget.value = '';
      setFiles(f => ({ ...f, [field]: '' }));
      setError({ message: problem, field });
      return;
    }
    if (error?.field === field) setError(null);
    setFiles(f => ({ ...f, [field]: file.name }));
  };

  const clearFile = (field: 'resume' | 'coverLetter') => {
    const el = formRef.current?.querySelector<HTMLInputElement>(`input[name="${field}"]`);
    if (el) el.value = '';
    setFiles(f => ({ ...f, [field]: '' }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    setSending(true);
    setError(null);
    try {
      const result = await submitApplication(new FormData(form), locale);
      if (result.success) {
        form.reset();
        setRole('');
        setFiles({ resume: '', coverLetter: '' });
        setSent(true);
      } else {
        setError({ message: result.error, field: result.field });
      }
    } catch {
      // A network failure or a request over the size limit never reaches the action's own errors
      setError({ message: t.failed, field: null });
    } finally {
      setSending(false);
    }
  };

  const invalid = (field: Field) => error?.field === field;
  const describedBy = (field: Field, hint?: string) =>
    [hint, invalid(field) ? 'apply-error' : null].filter(Boolean).join(' ') || undefined;

  if (sent) {
    return (
      <div role="status" className="rounded-2xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/40 p-8 text-center">
        <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-600 dark:text-green-400" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{t.successTitle}</h3>
        <p className="text-slate-700 dark:text-slate-300 max-w-md mx-auto">{t.successText}</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-primary-700 dark:text-primary-300 underline hover:no-underline"
        >
          {t.another}
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      encType="multipart/form-data"
      className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-5"
    >
      {/* Spam trap: hidden from people and screen readers, but bots fill it in */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="apply_hp">{t.spamLabel}</label>
        <input type="text" id="apply_hp" name="apply_hp" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="apply-role" className={label}>{t.role}</label>
        <select
          ref={roleRef}
          id="apply-role"
          name="role"
          required
          value={role}
          onChange={e => setRole(e.target.value)}
          aria-invalid={invalid('role') || undefined}
          aria-describedby={describedBy('role')}
          className={`${input} ${inputBorder(invalid('role'))}`}
        >
          <option value="" disabled>{t.rolePlaceholder}</option>
          {CAREER_ROLES.map((r, i) => (
            <option key={r.id} value={r.id}>{roleTitles[i]}</option>
          ))}
          <option value={GENERAL_ROLE.id}>{t.general}</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="apply-name" className={label}>{t.name}</label>
          <input id="apply-name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100}
            aria-invalid={invalid('name') || undefined} aria-describedby={describedBy('name')}
            className={`${input} ${inputBorder(invalid('name'))}`} />
        </div>
        <div>
          <label htmlFor="apply-email" className={label}>{t.email}</label>
          <input id="apply-email" name="email" type="email" autoComplete="email" required maxLength={254}
            aria-invalid={invalid('email') || undefined} aria-describedby={describedBy('email')}
            className={`${input} ${inputBorder(invalid('email'))}`} />
        </div>
        <div>
          <label htmlFor="apply-phone" className={label}>
            {t.phone} <span className="font-normal text-slate-500 dark:text-slate-400">{t.optional}</span>
          </label>
          <input id="apply-phone" name="phone" type="tel" autoComplete="tel" maxLength={30}
            aria-invalid={invalid('phone') || undefined} aria-describedby={describedBy('phone')}
            className={`${input} ${inputBorder(invalid('phone'))}`} />
        </div>
        <div>
          <label htmlFor="apply-link" className={label}>
            {t.link} <span className="font-normal text-slate-500 dark:text-slate-400">{t.optional}</span>
          </label>
          <input id="apply-link" name="link" type="url" inputMode="url" placeholder="https://" maxLength={300}
            aria-invalid={invalid('link') || undefined} aria-describedby={describedBy('link')}
            className={`${input} ${inputBorder(invalid('link'))}`} />
        </div>
      </div>

      <fieldset aria-describedby={describedBy('workAuth')}>
        <legend className={label}>{t.workAuth}</legend>
        <div className="flex gap-6">
          {(['yes', 'no'] as const).map(value => (
            <label key={value} className="inline-flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200 cursor-pointer">
              <input type="radio" name="workAuth" value={value} required className="w-4 h-4 accent-primary-600" />
              {value === 'yes' ? t.yes : t.no}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        <FileField
          name="resume" title={t.resume} hint={t.fileHint} choose={t.choose} remove={t.remove}
          required fileName={files.resume} invalid={invalid('resume')} describedBy={describedBy('resume', 'resume-hint')}
          onChange={pickFile('resume')} onClear={() => clearFile('resume')}
        />
        <FileField
          name="coverLetter" title={t.coverLetter} optional={t.optional} hint={t.fileHint} choose={t.choose} remove={t.remove}
          fileName={files.coverLetter} invalid={invalid('coverLetter')} describedBy={describedBy('coverLetter', 'coverLetter-hint')}
          onChange={pickFile('coverLetter')} onClear={() => clearFile('coverLetter')}
        />
      </div>

      <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
          <Lock className="w-4 h-4" aria-hidden="true" />
          {t.privacyTitle}
        </p>
        <p id="privacy-notice" className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{t.privacy}</p>
        <label className="mt-3 flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200 cursor-pointer">
          <input
            type="checkbox" name="consent" required
            aria-describedby={['privacy-notice', invalid('consent') ? 'apply-error' : null].filter(Boolean).join(' ')}
            aria-invalid={invalid('consent') || undefined}
            className="mt-0.5 w-4 h-4 flex-shrink-0 accent-primary-600"
          />
          {t.consent}
        </label>
      </div>

      {error && (
        <p id="apply-error" role="alert" className="text-sm text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-lg px-4 py-3">
          {error.message}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        {sending ? t.sending : t.submit}
      </button>
    </form>
  );
}

// A file picker styled as a drop area. The real input covers the whole box, so clicking, keyboard focus
// and dragging a file onto it all work natively.
function FileField({ name, title, optional, hint, choose, remove, required = false, fileName, invalid, describedBy, onChange, onClear }: {
  name: 'resume' | 'coverLetter';
  title: string;
  optional?: string;
  hint: string;
  choose: string;
  remove: (name: string) => string;
  required?: boolean;
  fileName: string;
  invalid: boolean;
  describedBy?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}) {
  const id = `apply-${name}`;
  return (
    <div>
      <label htmlFor={id} className={label}>
        {title} {optional && <span className="font-normal text-slate-500 dark:text-slate-400">{optional}</span>}
      </label>
      <div
        className={`relative rounded-xl border-2 border-dashed px-4 py-5 text-center transition-colors focus-within:ring-2 focus-within:ring-primary-500 ${
          invalid ? 'border-red-500 dark:border-red-400' : fileName ? 'border-primary-400 bg-primary-50/60 dark:bg-primary-900/20' : 'border-slate-300 dark:border-slate-700 hover:border-primary-400'
        }`}
      >
        <input
          id={id} name={name} type="file" accept={ACCEPT_ATTRIBUTE} required={required}
          onChange={onChange} aria-invalid={invalid || undefined} aria-describedby={describedBy}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        {fileName ? (
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
            <FileText className="w-4 h-4 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            <span className="truncate">{fileName}</span>
          </p>
        ) : (
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-primary-700 dark:text-primary-300">
            <Upload className="w-4 h-4" aria-hidden="true" />
            {choose}
          </p>
        )}
        <p id={`${name}-hint`} className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>
      </div>
      {fileName && (
        <button
          type="button"
          onClick={onClear}
          className="mt-1.5 inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 hover:text-red-700 dark:hover:text-red-300"
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
          {remove(fileName)}
        </button>
      )}
    </div>
  );
}
