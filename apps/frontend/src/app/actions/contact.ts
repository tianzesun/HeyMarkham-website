'use server';

import { randomUUID } from 'crypto';
import { z } from 'zod';
import { isLocale, type Locale } from '@/lib/i18n';

// Validation and delivery messages, in the language of the page the form is on
const copy: Record<Locale, {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  subjectMin: string;
  subjectMax: string;
  messageMin: string;
  messageMax: string;
  fallback: string;
  webhookMissing: (ref: string) => string;
  webhookFailed: (ref: string) => string;
}> = {
  en: {
    nameMin: 'Name must be at least 2 characters',
    nameMax: 'Name must be 100 characters or fewer',
    emailInvalid: 'Please enter a valid email address',
    subjectMin: 'Subject must be at least 3 characters',
    subjectMax: 'Subject must be 200 characters or fewer',
    messageMin: 'Message must be at least 10 characters',
    messageMax: 'Message must be 5,000 characters or fewer',
    fallback: 'Please check the form and try again',
    webhookMissing: (ref) => `We couldn't send your message. Please email contact@aydenait.com instead. (Ref: ${ref})`,
    webhookFailed: (ref) => `We couldn't send your message. Please try again later. (Ref: ${ref})`,
  },
  zh: {
    nameMin: '姓名至少需要 2 个字符',
    nameMax: '姓名不能超过 100 个字符',
    emailInvalid: '请输入有效的电子邮箱地址',
    subjectMin: '主题至少需要 3 个字符',
    subjectMax: '主题不能超过 200 个字符',
    messageMin: '留言至少需要 10 个字符',
    messageMax: '留言不能超过 5,000 个字符',
    fallback: '请检查表单内容后重试',
    webhookMissing: (ref) => `我们无法发送您的留言。请改发邮件至 contact@aydenait.com。（编号：${ref}）`,
    webhookFailed: (ref) => `我们无法发送您的留言。请稍后重试。（编号：${ref}）`,
  },
  fr: {
    nameMin: 'Le nom doit compter au moins 2 caractères',
    nameMax: 'Le nom doit compter 100 caractères ou moins',
    emailInvalid: 'Veuillez entrer une adresse courriel valide',
    subjectMin: 'L’objet doit compter au moins 3 caractères',
    subjectMax: 'L’objet doit compter 200 caractères ou moins',
    messageMin: 'Le message doit compter au moins 10 caractères',
    messageMax: 'Le message doit compter 5\u00a0000 caractères ou moins',
    fallback: 'Veuillez vérifier le formulaire et réessayer',
    webhookMissing: (ref) => `Nous n’avons pas pu envoyer votre message. Écrivez-nous plutôt à contact@aydenait.com. (Réf.\u00a0: ${ref})`,
    webhookFailed: (ref) => `Nous n’avons pas pu envoyer votre message. Veuillez réessayer plus tard. (Réf.\u00a0: ${ref})`,
  },
};

function contactSchema(locale: Locale) {
  const t = copy[locale];
  return z.object({
    name: z.string().trim().min(2, t.nameMin).max(100, t.nameMax),
    email: z.string().trim().email(t.emailInvalid).max(254, t.emailInvalid),
    subject: z.string().trim().min(3, t.subjectMin).max(200, t.subjectMax),
    message: z.string().trim().min(10, t.messageMin).max(5000, t.messageMax),
  });
}

export async function submitContactForm(
  formData: FormData,
  requestedLocale: Locale = 'en'
) {
  // The locale comes from the browser, so don't trust it to be one we have copy for
  const locale: Locale = isLocale(requestedLocale) ? requestedLocale : 'en';
  const t = copy[locale];

  // Spam trap: real visitors never see the "contact_hp" field, so anything in it is a bot.
  // Report success so the bot has no signal to adapt to, but send nothing.
  if (String(formData.get('contact_hp') ?? '').trim() !== '') {
    return {
      success: true,
      error: null,
    };
  }

  // Validate
  const validatedFields = contactSchema(locale).safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    // Say which field to fix: the schema's messages name it ("Message must be at least 10 characters")
    return {
      success: false,
      error: validatedFields.error.issues[0]?.message ?? t.fallback,
    };
  }

  // Delivery endpoint is injected by the hosting platform's secret store, never committed
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const correlationId = randomUUID();

  if (!webhookUrl) {
    console.error(`[contact ${correlationId}] CONTACT_WEBHOOK_URL is not configured`);
    return {
      success: false,
      error: t.webhookMissing(correlationId),
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validatedFields.data, correlationId }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(`status ${response.status}`);
    }
  } catch (err) {
    // Log the failure reason only; the submission contains personal information
    console.error(`[contact ${correlationId}] Delivery failed: ${err instanceof Error ? err.message : 'unknown error'}`);
    return {
      success: false,
      error: t.webhookFailed(correlationId),
    };
  }

  return {
    success: true,
    error: null,
  };
}
