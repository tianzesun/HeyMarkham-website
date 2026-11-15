import type { MetadataRoute } from 'next'

import { latestRelease } from '@/lib/releases'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://heymarkham.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
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
    },
    {
      url: 'https://heymarkham.vercel.app/app/releases',
      lastModified: new Date(`${latestRelease.date}T12:00:00Z`),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
