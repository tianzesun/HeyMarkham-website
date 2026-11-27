import Link from 'next/link'

import { localeHome, localisePath, type Locale } from '../lib/i18n'

// Shared pieces for the mobile app's pages (/app/privacy, /app/terms, /app/delete-account,
// /app/support, /app/releases). The App Store and Google Play link to these, and the app links to them from its
// sign-in screen and Settings. Keep them accurate to what the app and its API actually do
// (HeyMarkham-mobile and HeyMarkham repos).
//
// CONFIRM before publishing (each is marked where it appears):
// - whether any question is sent to an external AI service (e.g. Google Gemini) in production
// - how long question logs that aren't linked to an account are kept
// - how long deleted data can remain in backups

export const APP_EMAIL = 'contact@aydenait.com'
export const APP_UPDATED: Record<Locale, string> = {
  en: 'November 2026',
  zh: '2026年11月',
  fr: 'novembre 2026',
}

const link = 'text-primary-600 dark:text-primary-400 underline'

const copy: Record<Locale, {
  eyebrow: string;
  lastUpdated: string;
  privacy: string;
  terms: string;
  deleteAccount: string;
  support: string;
  whatsNew: string;
  back: string;
  notice: string;
}> = {
  en: {
    eyebrow: 'Hey Markham app',
    lastUpdated: 'Last updated:',
    privacy: 'App privacy policy',
    terms: 'App terms of use',
    deleteAccount: 'Delete your account',
    support: 'App support',
    whatsNew: 'What’s new',
    back: '← Back to Hey Markham',
    notice:
      'Hey Markham is an independent app made by AydenAIT Solution Inc. It is not affiliated with, endorsed by or operated by the City of Markham. Answers are based on publicly available City of Markham information. For official decisions or anything about your own City account, contact the City of Markham directly.',
  },
  zh: {
    eyebrow: 'Hey Markham 应用',
    lastUpdated: '最后更新：',
    privacy: '应用隐私政策',
    terms: '应用使用条款',
    deleteAccount: '删除账户',
    support: '应用帮助',
    whatsNew: '更新日志',
    back: '← 返回 Hey Markham',
    notice:
      'Hey Markham 是 AydenAIT Solution Inc. 开发的独立应用，与万锦市没有隶属关系，未获得其背书，也不由万锦市运营。回答基于万锦市公开发布的信息。如需官方决定，或涉及您本人的市政府账户，请直接联系万锦市。',
  },
  fr: {
    eyebrow: 'Application Hey Markham',
    lastUpdated: 'Dernière mise à jour\u00a0:',
    privacy: 'Politique de confidentialité de l’application',
    terms: 'Conditions d’utilisation de l’application',
    deleteAccount: 'Supprimer votre compte',
    support: 'Aide sur l’application',
    whatsNew: 'Nouveautés',
    back: '← Retour à Hey Markham',
    notice:
      'Hey Markham est une application indépendante conçue par AydenAIT Solution Inc. Elle n’est ni affiliée à la Ville de Markham, ni approuvée ou exploitée par celle-ci. Les réponses sont fondées sur l’information publique de la Ville de Markham. Pour une décision officielle ou toute question sur votre propre compte municipal, communiquez directement avec la Ville de Markham.',
  },
}

export function AppLegalPage({
  locale = 'en',
  title,
  updated,
  children,
}: {
  locale?: Locale
  title: string
  updated?: string
  children: React.ReactNode
}) {
  const t = copy[locale]
  const internal = (path: string) => localisePath(path, locale)
  return (
    <div className="bg-white dark:bg-slate-950">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">{t.eyebrow}</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">{title}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">{t.lastUpdated} {updated ?? APP_UPDATED[locale]}</p>
        {children}
        <p className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href={internal('/app/privacy')} className={link}>{t.privacy}</Link>
          <Link href={internal('/app/terms')} className={link}>{t.terms}</Link>
          <Link href={internal('/app/delete-account')} className={link}>{t.deleteAccount}</Link>
          <Link href={internal('/app/support')} className={link}>{t.support}</Link>
          <Link href={internal('/app/releases')} className={link}>{t.whatsNew}</Link>
        </p>
        <p className="mt-6">
          <Link href={localeHome(locale)} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">{t.back}</Link>
        </p>
      </article>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:mb-1">
      <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      {children}
    </section>
  )
}

export function Mail() {
  return <a href={`mailto:${APP_EMAIL}`} className={link}>{APP_EMAIL}</a>
}

// Internal hrefs follow the locale ('/app/privacy' -> '/zh/app/privacy'); external ones don't
export function A({ href, locale = 'en', children }: { href: string; locale?: Locale; children: React.ReactNode }) {
  const external = href.startsWith('http')
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>{children}</a>
  ) : (
    <Link href={localisePath(href, locale)} className={link}>{children}</Link>
  )
}

export function Notice({ locale = 'en' }: { locale?: Locale }) {
  return <p>{copy[locale].notice}</p>
}
