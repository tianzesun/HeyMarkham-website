import type { Metadata } from 'next'

import { CareersPage } from '@/components/pages/CareersPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Hey Markham team: we’re hiring data quality and community and growth interns, plus business development, AI/RAG and full-stack engineering, and a privacy, security and accessibility advisor. Hybrid in Markham and the GTA.',
  alternates: { canonical: '/careers', languages: languageAlternates('/careers') },
}

export default function CareersPageEn() {
  return <CareersPage locale="en" />
}
