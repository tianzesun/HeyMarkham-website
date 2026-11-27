import type { MetadataRoute } from 'next'

import { availableLocales, languageAlternates, localisePath } from '@/lib/i18n'
import { latestRelease } from '@/lib/releases'

const SITE = 'https://heymarkham.vercel.app'

// hreflang links for a page, one per language it exists in
const languages = (path: string) => ({
  languages: Object.fromEntries(
    Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, `${SITE}${href === '/' ? '' : href}`]),
  ),
})

// The translated versions of a page, each with the same hreflang links
const translations = (path: string, entry: Omit<MetadataRoute.Sitemap[number], 'url'>): MetadataRoute.Sitemap =>
  availableLocales(path)
    .filter(locale => locale !== 'en')
    .map(locale => ({ ...entry, url: `${SITE}${localisePath(path, locale)}`, alternates: languages(path) }))

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://heymarkham.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: languages('/'),
    },
    ...translations('/', { lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 }),
    {
      url: 'https://heymarkham.vercel.app/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://heymarkham.vercel.app/app/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://heymarkham.vercel.app/app/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://heymarkham.vercel.app/app/delete-account',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://heymarkham.vercel.app/app/support',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: languages('/app/support'),
    },
    ...translations('/app/support', { lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }),
    {
      url: 'https://heymarkham.vercel.app/app/journey',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: languages('/app/journey'),
    },
    ...translations('/app/journey', { lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }),
    {
      url: 'https://heymarkham.vercel.app/app/releases',
      lastModified: new Date(`${latestRelease.date}T12:00:00Z`),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
