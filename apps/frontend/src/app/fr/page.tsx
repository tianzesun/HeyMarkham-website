import type { Metadata } from 'next'

import { HomePage } from '@/components/pages/HomePage'
import { languageAlternates } from '@/lib/i18n'

const title = 'Hey Markham\u00a0: votre assistant de vie urbaine à Markham'
const description =
  'Dites à Hey Markham ce dont vous avez besoin, à voix haute ou par écrit. Il trouve la réponse dans l’information officielle de la Ville de Markham, vous indique qui s’en occupe et vous aide à passer à l’action\u00a0: jours de collecte, signalements, permis, impôt foncier et plus encore.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/fr', languages: languageAlternates('/fr') },
  openGraph: { title, description, url: '/fr', siteName: 'Hey Markham', locale: 'fr_CA', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function HomeFr() {
  return <HomePage locale="fr" />
}
