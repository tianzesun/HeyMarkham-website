import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://heymarkham.vercel.app'),
  title: {
    default: 'Hey Markham: Your City Life Assistant for Markham',
    template: '%s | Hey Markham',
  },
  description: 'Tell Hey Markham what you need, by voice or text. It finds the answer in official City of Markham information, points you to whoever handles it, and helps you get it done: pickup days, reporting problems, permits, property tax and more.',
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
    title: 'Hey Markham: Your City Life Assistant for Markham',
    description: 'Say what you need. Hey Markham finds out from official City pages, points you the right way, and helps you get it done. On the web or in the app.',
    url: 'https://heymarkham.vercel.app',
    siteName: 'Hey Markham',
    locale: 'en_CA',
    type: 'website',
    // Image comes from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey Markham: Your City Life Assistant for Markham',
    description: 'Say what you need. Hey Markham finds out from official City pages, points you the right way, and helps you get it done. On the web or in the app.',
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
