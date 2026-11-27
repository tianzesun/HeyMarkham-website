// Two locales: English lives at the root (/), Simplified Chinese under /zh.
// Existing URLs never change, so links, sitemap entries and store listings stay valid.
//
// How a component learns its locale:
// - Pages (server) receive it from their route file: app/zh/app/support/page.tsx passes 'zh'.
// - Global chrome rendered by the root layout (Header, Footer, SkipLink) can't get props from
//   the layout (it doesn't know the route), so those client components read it from usePathname().
// - <html lang> is set pre-paint by public/lang-init.js; hreflang alternates come from each
//   route's metadata (alternates.languages below).
//
// Translation notes for UI copy:
// - Proper nouns: "Hey Markham" and "markham.ca" stay in English; the City of Markham is 万锦市;
//   neighbourhood and street names (Unionville, Cornell, Highway 7) stay in English.
// - Punctuation in Chinese strings: full-width ，。：；？！and “ ” 《》. No em dashes (——) in UI copy.
// - Note: "Aydenait" is a proper noun and stays in English even in Chinese copy

export type Locale = 'en' | 'zh'

export const LOCALES: readonly Locale[] = ['en', 'zh'] as const

/** <html lang> for each locale; lang-init.js applies the zh value before first paint */
export const htmlLang: Record<Locale, string> = {
  en: 'en-CA',
  zh: 'zh-Hans',
}

/** The <html lang> value the Chinese pages should carry */
export const zhLang = htmlLang.zh

/** Shown in the language switcher */
export const localeName: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'zh' : 'en'
}

/** /zh and everything under it is Chinese; everything else is English */
export function localeOf(pathname: string): Locale {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en'
}

/**
 * The same page in another locale:
 *   '/privacy' -> '/zh/privacy', '/zh/privacy' -> '/privacy'
 *   '/#features' -> '/zh#features', '/zh#features' -> '/#features'
 * Anchors and query strings are preserved.
 */
export function localisePath(pathname: string, locale: Locale): string {
  const hashAt = pathname.indexOf('#')
  const path = hashAt === -1 ? pathname : pathname.slice(0, hashAt)
  const hash = hashAt === -1 ? '' : pathname.slice(hashAt)
  const bare = path === '/zh' ? '/' : path.startsWith('/zh/') ? path.slice(3) : path
  if (locale === 'en') return bare + hash
  return (bare === '/' || bare === '' ? '/zh' : `/zh${bare}`) + hash
}

/** Prefix a root-relative path (no hash needed) with the locale: '/privacy' -> '/zh/privacy' */
export function localePath(path: string, locale: Locale): string {
  return localisePath(path, locale)
}

/**
 * hreflang alternates for a canonical path, for metadata.alternates.languages.
 * x-default points at English, the primary language of the site.
 */
export function languageAlternates(path: string): Record<string, string> {
  const bare = path.startsWith('/zh') ? localisePath(path, 'en') : path
  return {
    en: bare,
    'zh-Hans': localisePath(bare, 'zh'),
    'x-default': bare,
  }
}

/**
 * Links shared by a locale's navigation: the home page in this locale,
 * so '/#features' becomes '/zh#features' on Chinese pages.
 */
export function localeHome(locale: Locale): string {
  return locale === 'zh' ? '/zh' : '/'
}
