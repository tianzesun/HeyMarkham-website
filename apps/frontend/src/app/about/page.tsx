import type { Metadata } from 'next'

import { AboutPage } from '@/components/pages/AboutPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'About Aydenait Solutions',
  description:
    'Hey Markham is made by Aydenait Solutions, a Toronto-based AI company that designs, builds and supports AI systems for education, civic services and finance.',
  alternates: { canonical: '/about', languages: languageAlternates('/about') },
}

export default function AboutPageEn() {
  return <AboutPage locale="en" />
}
