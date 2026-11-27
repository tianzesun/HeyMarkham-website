import type { Metadata } from 'next'

import { SupportPage } from '@/components/pages/SupportPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: '应用帮助',
  description:
    'Hey Markham 手机应用帮助：登录、语音与语言、错误回答，以及如何联系万锦市。',
  alternates: { canonical: '/zh/app/support', languages: languageAlternates('/zh/app/support') },
}

export default function AppSupportPageZh() {
  return <SupportPage locale="zh" />
}
