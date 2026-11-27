// Three locales: English lives at the root (/), Simplified Chinese under /zh, Canadian French under /fr.
// Existing URLs never change, so links, sitemap entries and store listings stay valid.
//
// How a component learns its locale:
// - Pages (server) receive it from their route file: app/zh/app/support/page.tsx passes 'zh'.
// - Global chrome rendered by the root layout (Header, Footer, SkipLink) can't get props from
//   the layout (it doesn't know the route), so those client components read it from usePathname().
// - <html lang> is set pre-paint by public/lang-init.js; hreflang alternates come from each
//   route's metadata (alternates.languages below).
//
// Adding a language: add it to Locale, LOCALES, htmlLang, hreflang, localeName and TRANSLATED_PATHS,
// then TypeScript lists every `copy` object that needs the new strings. Update lang-init.js too.
//
// Translation notes for UI copy:
// - Proper nouns: "Hey Markham", "markham.ca", "Aydenait Solutions" and app or product names stay in English;
//   neighbourhood and street names (Unionville, Cornell, Highway 7) stay as they are.
// - Chinese: the City of Markham is 万锦市; address the reader as 您. Full-width punctuation
//   ，。：；？！and “ ” 《》. No em dashes (——) in UI copy.
// - French: Canadian French (fr-CA). The City of Markham is « la Ville de Markham »; address the
//   reader as « vous ». Canadian typography, as in the mobile app: guillemets « » with non-breaking
//   spaces inside and a non-breaking space before a colon (write \u00a0 in strings), but no space
//   before ? ! ; Feature names match the app's French labels (HeyMarkham-mobile src/i18n).
//   No em dashes in UI copy.

export type Locale = 'en' | 'zh' | 'fr'

export const LOCALES: readonly Locale[] = ['en', 'zh', 'fr'] as const

/** Narrow an untrusted value (a server action argument, say) to a Locale */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/** <html lang> for each locale; lang-init.js applies these before first paint */
export const htmlLang: Record<Locale, string> = {
  en: 'en-CA',
  zh: 'zh-Hans',
  fr: 'fr-CA',
}

/** Shown in the language switcher, each in its own language */
export const localeName: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  fr: 'Français',
}

/** URL prefix for each locale */
const prefix: Record<Locale, string> = { en: '', zh: '/zh', fr: '/fr' }

/** The locale whose prefix a path starts with, if any */
function prefixedLocale(path: string): Locale | null {
  for (const locale of LOCALES) {
    const p = prefix[locale]
    if (p && (path === p || path.startsWith(`${p}/`))) return locale
  }
  return null
}

/** /zh and /fr and everything under them are Chinese and French; everything else is English */
export function localeOf(pathname: string): Locale {
  return prefixedLocale(pathname.split(/[?#]/)[0]) ?? 'en'
}

/**
 * Pages that exist in each language, as their English path. Add a path here when its route ships
 * (app/zh/... or app/fr/...); links to any other page stay on the English version instead of a 404.
 */
export const TRANSLATED_PATHS: Record<Exclude<Locale, 'en'>, readonly string[]> = {
  zh: ['/', '/app/support', '/app/journey', '/careers', '/about'],
  fr: ['/', '/app/support', '/app/journey', '/careers', '/about'],
}

/** The English path, without a locale prefix (path must already be free of query and hash) */
function stripPrefix(path: string): string {
  const locale = prefixedLocale(path)
  const english = locale ? path.slice(prefix[locale].length) || '/' : path || '/'
  return english.length > 1 ? english.replace(/\/+$/, '') : english
}

/** Whether this page exists in `locale` (accepts any locale's path, with or without a hash) */
export function hasTranslation(pathname: string, locale: Locale): boolean {
  if (locale === 'en') return true
  return TRANSLATED_PATHS[locale].includes(stripPrefix(pathname.split(/[?#]/)[0]))
}

/** The languages this page exists in, English first */
export function availableLocales(pathname: string): Locale[] {
  return LOCALES.filter(locale => hasTranslation(pathname, locale))
}

/**
 * The same page in another locale:
 *   '/app/support' -> '/zh/app/support', '/fr/app/support' -> '/app/support'
 *   '/#features' -> '/fr#features', '/zh#features' -> '/fr#features'
 * Anchors and query strings are preserved. A page with no version in that locale stays English:
 *   '/privacy' -> '/privacy'
 */
export function localisePath(pathname: string, locale: Locale): string {
  const cut = pathname.search(/[?#]/)
  const path = cut === -1 ? pathname : pathname.slice(0, cut)
  const suffix = cut === -1 ? '' : pathname.slice(cut)
  const bare = stripPrefix(path)
  if (locale === 'en' || !hasTranslation(bare, locale)) return bare + suffix
  return (bare === '/' ? prefix[locale] : `${prefix[locale]}${bare}`) + suffix
}

/** hreflang code for each locale */
const hreflang: Record<Locale, string> = { en: 'en', zh: 'zh-Hans', fr: 'fr-CA' }

/**
 * hreflang alternates for a path (in any locale), for metadata.alternates.languages.
 * Lists only the languages the page exists in; x-default points at English, the site's primary language.
 */
export function languageAlternates(path: string): Record<string, string> {
  const bare = localisePath(path, 'en')
  const alternates: Record<string, string> = {}
  for (const locale of availableLocales(bare)) alternates[hreflang[locale]] = localisePath(bare, locale)
  alternates['x-default'] = bare
  return alternates
}

/**
 * Links shared by a locale's navigation: the home page in this locale,
 * so '/#features' becomes '/zh#features' on Chinese pages.
 */
export function localeHome(locale: Locale): string {
  return prefix[locale] || '/'
}

/** Wrap text in the quotation marks its language uses: “…” in English and Chinese, « … » in French */
export function quote(text: string, locale: Locale): string {
  return locale === 'fr' ? `« ${text} »` : `“${text}”`
}
