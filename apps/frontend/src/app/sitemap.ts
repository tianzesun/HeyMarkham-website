import type { MetadataRoute } from 'next'

import { languageAlternates, localisePath } from '@/lib/i18n'
import { latestRelease } from '@/lib/releases'

const SITE = 'https://heymarkham.vercel.app'

// hreflang links for a page that exists in both languages
const languages = (path: string) => ({
  languages: Object.fromEntries(
    Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, `${SITE}${href === '/' ? '' : href}`]),
  ),
})

// The Chinese version of a translated page, with the same hreflang links
const zh = (path: string, entry: MetadataRoute.Sitemap[number]): MetadataRoute.Sitemap[number] => ({
  ...entry,
  url: `${SITE}${localisePath(path, 'zh')}`,
  alternates: languages(path),
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://heymarkham.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: languages('/'),
    },
    zh('/', { url: '', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 }),
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
    zh('/app/support', { url: '', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }),
    {
      url: 'https://heymarkham.vercel.app/app/journey',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: languages('/app/journey'),
    },
    zh('/app/journey', { url: '', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }),
    {
      url: 'https://heymarkham.vercel.app/app/releases',
      lastModified: new Date(`${latestRelease.date}T12:00:00Z`),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
