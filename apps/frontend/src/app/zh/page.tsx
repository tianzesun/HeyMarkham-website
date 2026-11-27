import type { Metadata } from 'next'

import { HomePage } from '@/components/pages/HomePage'
import { languageAlternates } from '@/lib/i18n'

const title = 'Hey Markham：您的万锦市城市生活助手'
const description =
  '用语音或文字告诉 Hey Markham 您需要什么。它从万锦市官方信息中找到答案，告诉您该找谁，并帮您把事情办好：收垃圾日、报告问题、许可证、地税等。'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/zh', languages: languageAlternates('/zh') },
  openGraph: { title, description, url: '/zh', siteName: 'Hey Markham', locale: 'zh_CN', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
}

export default function HomeZh() {
  return <HomePage locale="zh" />
}
