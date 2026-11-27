import type { Metadata } from 'next'

import { CareersPage } from '@/components/pages/CareersPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Carrières',
  description:
    'Joignez-vous à l’équipe Hey Markham\u00a0: nous recrutons en développement des affaires, en qualité des données, en communauté et croissance, en ingénierie IA/RAG et full stack, ainsi qu’en confidentialité, sécurité et accessibilité. Mode hybride à Markham et dans la RGT.',
  alternates: { canonical: '/fr/careers', languages: languageAlternates('/fr/careers') },
}

export default function CareersPageFr() {
  return <CareersPage locale="fr" />
}
