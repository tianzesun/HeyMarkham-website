import type { Metadata } from 'next'

import { SupportPage } from '@/components/pages/SupportPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'App Support',
  description:
    'Help with the Hey Markham mobile app: signing in, voice and languages, wrong answers, and how to contact the City of Markham.',
  alternates: { canonical: '/app/support', languages: languageAlternates('/app/support') },
}

export default function AppSupportPage() {
  return <SupportPage locale="en" />
}
