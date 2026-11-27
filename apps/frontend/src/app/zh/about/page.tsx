import type { Metadata } from 'next'

import { AboutPage } from '@/components/pages/AboutPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: '关于 Aydenait Solutions',
  description:
    'Hey Markham 由 Aydenait Solutions 开发。这是一家总部位于多伦多的 AI 公司，为教育、市政服务和金融领域设计、开发并维护 AI 系统。',
  alternates: { canonical: '/zh/about', languages: languageAlternates('/zh/about') },
}

export default function AboutPageZh() {
  return <AboutPage locale="zh" />
}
