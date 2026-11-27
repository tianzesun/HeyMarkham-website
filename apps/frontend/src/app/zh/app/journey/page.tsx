import type { Metadata } from 'next'

import { JourneyPage } from '@/components/pages/JourneyPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: '社区之旅',
  description: 'Hey Markham 应用中的社区之旅如何运作：等级、成长方式、每个等级带来的天空，以及谁能看到。',
  alternates: { canonical: '/zh/app/journey', languages: languageAlternates('/zh/app/journey') },
}

export default function AppJourneyPageZh() {
  return <JourneyPage locale="zh" />
}
