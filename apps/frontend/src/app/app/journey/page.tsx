import type { Metadata } from 'next'

import { JourneyPage } from '@/components/pages/JourneyPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Community Journey',
  description:
    'How the Community Journey in the Hey Markham app works: levels, what helps you grow, the sky each level brings, and who can see it.',
  alternates: { canonical: '/app/journey', languages: languageAlternates('/app/journey') },
}

export default function AppJourneyPage() {
  return <JourneyPage locale="en" />
}
