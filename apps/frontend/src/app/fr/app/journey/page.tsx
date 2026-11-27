import type { Metadata } from 'next'

import { JourneyPage } from '@/components/pages/JourneyPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Parcours communautaire',
  description:
    'Comment fonctionne le parcours communautaire de l’application Hey Markham\u00a0: les niveaux, ce qui vous fait progresser, le ciel de chaque niveau et qui peut le voir.',
  alternates: { canonical: '/fr/app/journey', languages: languageAlternates('/fr/app/journey') },
}

export default function AppJourneyPageFr() {
  return <JourneyPage locale="fr" />
}
