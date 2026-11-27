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
 * Pages that exist in Chinese, as their English path. Add a path here when its /zh route ships;
 * links to any other page stay on the English version instead of a /zh 404.
 */
export const TRANSLATED_PATHS: readonly string[] = ['/', '/app/support', '/app/journey']

/** The English path of any URL, without /zh, query string, hash or trailing slash */
function barePath(pathname: string): string {
  const path = pathname.split(/[?#]/)[0] || '/'
  const english = path === '/zh' ? '/' : path.startsWith('/zh/') ? path.slice(3) : path
  return english.length > 1 ? english.replace(/\/+$/, '') : english
}

/** Whether this page has a Chinese version (accepts English or /zh paths, with or without a hash) */
export function hasTranslation(pathname: string): boolean {
  return TRANSLATED_PATHS.includes(barePath(pathname))
}

/**
 * The same page in another locale:
 *   '/app/support' -> '/zh/app/support', '/zh/app/support' -> '/app/support'
 *   '/#features' -> '/zh#features', '/zh#features' -> '/#features'
 * Anchors and query strings are preserved. A page with no Chinese version stays English:
 *   '/privacy' -> '/privacy'
 */
export function localisePath(pathname: string, locale: Locale): string {
  const cut = pathname.search(/[?#]/)
  const path = cut === -1 ? pathname : pathname.slice(0, cut)
  const suffix = cut === -1 ? '' : pathname.slice(cut)
  const bare = path === '/zh' ? '/' : path.startsWith('/zh/') ? path.slice(3) : path
  if (locale === 'en' || !hasTranslation(bare)) return bare + suffix
  return (bare === '/' || bare === '' ? '/zh' : `/zh${bare}`) + suffix
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
