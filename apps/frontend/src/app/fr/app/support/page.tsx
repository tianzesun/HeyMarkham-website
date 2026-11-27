import type { Metadata } from 'next'

import { SupportPage } from '@/components/pages/SupportPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Aide sur l’application',
  description:
    'Aide pour l’application mobile Hey Markham\u00a0: connexion, voix et langues, réponses inexactes, et comment joindre la Ville de Markham.',
  alternates: { canonical: '/fr/app/support', languages: languageAlternates('/fr/app/support') },
}

export default function AppSupportPageFr() {
  return <SupportPage locale="fr" />
}
