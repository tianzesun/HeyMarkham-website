import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://heymarkham.vercel.app'),
  title: {
    default: 'Hey Markham: Quick Answers on City of Markham Services',
    template: '%s | Hey Markham',
  },
  description: 'Quick answers about City of Markham services by voice or text, with links to official pages: garbage, parking, permits, property tax, recreation and events.',
  keywords: [
    'Hey Markham', 'Hey Markham app', 'City of Markham', 'Markham city services', 'Markham app',
    'Markham garbage collection', 'Markham recycling', 'Markham parking', 'Markham permits',
    'Markham property tax', 'Markham parks', 'Markham events', 'Markham Ontario', 'voice assistant'
  ],
  authors: [{ name: 'Hey Markham' }],
  creator: 'Hey Markham',
  publisher: 'Aydenait Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Hey Markham: Quick Answers on City of Markham Services',
    description: 'Quick answers about City of Markham services, any time, with links to official pages. On the web or in the app.',
    url: 'https://heymarkham.vercel.app',
    siteName: 'Hey Markham',
    locale: 'en_CA',
    type: 'website',
    // Image comes from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey Markham: Quick Answers on City of Markham Services',
    description: 'Quick answers about City of Markham services, any time, with links to official pages. On the web or in the app.',
    creator: '@heymarkham',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology',
  applicationName: 'Hey Markham',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Hey Markham',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};
