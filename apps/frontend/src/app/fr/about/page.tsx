import type { Metadata } from 'next'

import { AboutPage } from '@/components/pages/AboutPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'À propos d’Aydenait Solutions',
  description:
    'Hey Markham est conçu par Aydenait Solutions, une entreprise d’IA établie à Toronto qui conçoit, bâtit et soutient des systèmes d’IA pour l’éducation, les services municipaux et la finance.',
  alternates: { canonical: '/fr/about', languages: languageAlternates('/fr/about') },
}

export default function AboutPageFr() {
  return <AboutPage locale="fr" />
}
