import type { Metadata } from 'next'

import { CareersPage } from '@/components/pages/CareersPage'
import { languageAlternates } from '@/lib/i18n'

export const metadata: Metadata = {
  title: '加入我们',
  description:
    '加入 Hey Markham 团队：我们正在招聘业务拓展经理、数据质量实习生、社区与增长专员、AI／RAG 工程师、全栈工程师，以及隐私、安全与无障碍顾问。万锦市及大多伦多地区混合办公。',
  alternates: { canonical: '/zh/careers', languages: languageAlternates('/zh/careers') },
}

export default function CareersPageZh() {
  return <CareersPage locale="zh" />
}
