'use client';

import { useState } from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import { submitContactForm } from '../app/actions/contact';
import type { Locale } from '../lib/i18n';

const copy: Record<Locale, {
  name: string;
  namePlaceholder: string;
  email: string;
  subject: string;
  subjectPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  spamLabel: string;
  sending: string;
  send: string;
  idle: string;
  success: string;
  failed: string;
  failedToSend: string;
}> = {
  en: {
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    subject: 'Subject',
    subjectPlaceholder: 'How can we help?',
    message: 'Message',
    messagePlaceholder: 'Tell us more about your needs...',
    spamLabel: 'Leave this field empty',
    sending: 'Sending...',
    send: 'Send Message',
    idle: 'We’ll reply by email as soon as we can',
    success: 'Message sent! We’ll get back to you shortly.',
    failed: 'Failed to send',
    failedToSend: 'Failed to send message',
  },
  zh: {
    name: '姓名',
    namePlaceholder: '您的姓名',
    email: '电子邮箱',
    subject: '主题',
    subjectPlaceholder: '我们能帮您什么？',
    message: '留言',
    messagePlaceholder: '请详细说明您的需求……',
    spamLabel: '请留空此字段',
    sending: '发送中…',
    send: '发送留言',
    idle: '我们会尽快通过邮件回复您',
    success: '留言已发送！我们会尽快与您联系。',
    failed: '发送失败',
    failedToSend: '留言发送失败',
  },
  fr: {
    name: 'Nom',
    namePlaceholder: 'Votre nom',
    email: 'Courriel',
    subject: 'Objet',
    subjectPlaceholder: 'Comment pouvons-nous vous aider?',
    message: 'Message',
    messagePlaceholder: 'Parlez-nous de vos besoins…',
    spamLabel: 'Laissez ce champ vide',
    sending: 'Envoi en cours…',
    send: 'Envoyer le message',
    idle: 'Nous vous répondrons par courriel dès que possible',
    success: 'Message envoyé! Nous vous répondrons sous peu.',
    failed: 'Échec de l’envoi',
    failedToSend: 'Le message n’a pas pu être envoyé',
  },
};

export const ContactForm = ({ locale }: { locale: Locale }) => {
  const t = copy[locale];
  // Optimistic update for contact form
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [optimisticContact, setOptimisticContact] = useState<{ status: 'idle' | 'success' | 'error'; error: string | null }>(
    { status: 'idle', error: null }
  );

  return (
    <div data-reveal style={{ transitionDelay: '0.2s' }}>
      <form 
        onSubmit={async (e) => {
          e.preventDefault();
          if (isSubmittingContact) return;
          const form = e.currentTarget;
          const formData = new FormData(form);
          setIsSubmittingContact(true);
          try {
            const result = await submitContactForm(formData, locale);
            if (result.success) {
              setOptimisticContact({ status: 'success', error: null });
              form.reset();
            } else {
              setOptimisticContact({ status: 'error', error: result.error || t.failed });
            }
          } catch {
            setOptimisticContact({ status: 'error', error: t.failedToSend });
          } finally {
            setIsSubmittingContact(false);
          }
        }}
        className="space-y-5 bg-white/10 p-6 rounded-xl border border-white/20"
      >
        {/* Spam trap: hidden from people and screen readers, but bots fill it in */}
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="contact_hp">{t.spamLabel}</label>
          <input type="text" id="contact_hp" name="contact_hp" tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-2">
            {t.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder={t.namePlaceholder}
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-2">
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder="your@email.com"
            required
            maxLength={254}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-primary-100 mb-2">
            {t.subject}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            placeholder={t.subjectPlaceholder}
            required
            minLength={3}
            maxLength={200}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-2">
            {t.message}
          </label>
           <textarea
             id="message"
             name="message"
             rows={4}
             className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
             placeholder={t.messagePlaceholder}
             required
             minLength={10}
             maxLength={5000}
           />
        </div>
        
        <div>
          <button 
            type="submit"
            disabled={isSubmittingContact}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 text-primary-700 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmittingContact ? t.sending : t.send}
            <ArrowRight size={18} />
          </button>
        </div>
        
         {/* Status message */}
         <div className="text-center text-sm min-h-[20px]">
          {optimisticContact.status === 'idle' && (
            <p className="text-primary-200">
              {t.idle}
            </p>
          )}
          {optimisticContact.status === 'success' && (
            <p className="text-green-300">
              {t.success}
            </p>
          )}
          {optimisticContact.status === 'error' && (
            <p className="text-red-300">
              {optimisticContact.error || t.failedToSend}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
