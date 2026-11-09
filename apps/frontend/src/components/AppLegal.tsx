import Link from 'next/link'

// Shared pieces for the mobile app's policy pages (/app/privacy, /app/terms, /app/delete-account,
// /app/support). The App Store and Google Play link to these, and the app links to them from its
// sign-in screen and Settings. Keep them accurate to what the app and its API actually do
// (HeyMarkham-mobile and HeyMarkham repos).
//
// CONFIRM before publishing (each is marked where it appears):
// - whether any question is sent to an external AI service (e.g. Google Gemini) in production
// - how long question logs that aren't linked to an account are kept
// - how long deleted data can remain in backups

export const APP_EMAIL = 'contact@aydenait.com'
export const APP_UPDATED = 'November 2026'

const link = 'text-primary-600 dark:text-primary-400 underline'

export function AppLegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-950">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Hey Markham app</p>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-3">{title}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Last updated: {APP_UPDATED}</p>
        {children}
        <p className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/app/privacy" className={link}>App privacy policy</Link>
          <Link href="/app/terms" className={link}>App terms of use</Link>
          <Link href="/app/delete-account" className={link}>Delete your account</Link>
          <Link href="/app/support" className={link}>App support</Link>
        </p>
        <p className="mt-6">
          <Link href="/" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">&larr; Back to HeyMarkham</Link>
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

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http')
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>{children}</a>
  ) : (
    <Link href={href} className={link}>{children}</Link>
  )
}

export function Notice() {
  return (
    <p>
      Hey Markham is an independent app made by AydenAIT Solution Inc. It is not affiliated with, endorsed by or
      operated by the City of Markham. Answers are based on publicly available City of Markham information. For
      official decisions or anything about your own City account, contact the City of Markham directly.
    </p>
  )
}
