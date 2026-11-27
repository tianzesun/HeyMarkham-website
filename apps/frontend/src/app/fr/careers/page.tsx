import type { Metadata } from 'next'

import { CareersPage } from '@/components/pages/CareersPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Carrières',
  description:
    'Joignez-vous à l’équipe Hey Markham\u00a0: nous recrutons des stagiaires en qualité des données et en communauté et croissance, ainsi qu’en développement des affaires, en ingénierie IA/RAG et full stack et en confidentialité, sécurité et accessibilité. Mode hybride à Markham et dans la RGT.',
  alternates: { canonical: '/fr/careers', languages: languageAlternates('/fr/careers') },
}

export default function CareersPageFr() {
  return <CareersPage locale="fr" />
}
