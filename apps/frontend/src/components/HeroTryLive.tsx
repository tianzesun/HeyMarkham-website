import { ArrowUpRight, Smartphone, Sparkles } from 'lucide-react'

import { APP_STORE_URL, GOOGLE_PLAY_URL, LIVE_URL } from '../lib/links'

import type { Locale } from '../lib/i18n'

const copy: Record<Locale, {
  badge: string
  titleLead: string
  titleRest: string
  intro: string
  examplesLabel: string
  examples: string[]
  tryLive: string
  tryLiveNote: string
  getApp: string
  googlePlayLead: string
  appStoreLead: string
  appStore: string
  comingSoon: string
}> = {
  en: {
    badge: 'Now live for Markham residents',
    titleLead: 'Say what you need.',
    titleRest: 'Hey Markham handles the city part.',
    intro:
      'Your city life assistant for Markham. Ask in your own words, by voice or text. It finds the answer in official City information, points you to whoever handles it, and helps you get it done. If it doesn’t know, it says so.',
    examplesLabel: 'Things you can ask',
    // One from each everyday job: pickup, a repair, a permit, a referral, your own ward
    examples: [
      'When is my next garbage pickup?',
      'There’s a pothole on my street',
      'Do I need a permit for a deck?',
      'Who do I call about a missed blue box?',
      'Who is my councillor?',
    ],
    tryLive: 'Try Hey Markham live',
    tryLiveNote: 'Opens the assistant in a new tab. No account needed.',
    getApp: 'Get the app: ask by voice, in English, French, Mandarin or Cantonese',
    googlePlayLead: 'Get it on',
    appStoreLead: 'Download on',
    appStore: 'the App Store',
    comingSoon: 'Coming soon to',
  },
  zh: {
    badge: '现已面向万锦市居民开放',
    titleLead: '说出您的需要。',
    titleRest: '市政的事，交给 Hey Markham。',
    intro:
      '您的万锦市城市生活助手。用您自己的话提问，语音或文字都可以。它从万锦市官方信息中找到答案，告诉您该找哪个部门或机构，并帮您把事情办好。不知道的，它会直接告诉您。',
    examplesLabel: '您可以这样问',
    examples: [
      '下次收垃圾是哪天？',
      '我家街上有个坑洼',
      '建露台需要许可证吗？',
      '蓝色回收箱漏收了，该打给谁？',
      '我的市议员是谁？',
    ],
    tryLive: '在线体验 Hey Markham',
    tryLiveNote: '在新标签页中打开助手，无需注册账户。',
    getApp: '下载应用：支持语音提问，可使用英语、法语、普通话或粤语',
    googlePlayLead: '立即下载',
    appStoreLead: '前往下载',
    appStore: 'App Store',
    comingSoon: '即将登陆',
  },
}

export function HeroTryLive({ locale = 'en' }: { locale?: Locale }) {
  const t = copy[locale]
  return (
    <section
      id="try"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Old links to /#demo land here too */}
      <span id="demo" className="absolute -top-16" aria-hidden="true" />
      {/* Radial gradient instead of a blur filter: same soft glow, far cheaper to paint */}
      <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(98,125,152,0.18)_0%,transparent_65%)]" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-600/20 rounded-full text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">
            <Sparkles className="w-4 h-4" />
            {t.badge}
          </div>
        </div>

        <h1 className="animate-rise text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
          {t.titleLead}{' '}
          <span className="block text-balance text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
            {t.titleRest}
          </span>
        </h1>

        <p className="animate-rise text-xl md:text-2xl text-slate-300 mb-6 max-w-2xl mx-auto [animation-delay:100ms]">
          {t.intro}
        </p>

        {/* The kinds of things residents ask, so the range shows before the first scroll */}
        <ul className="animate-rise [animation-delay:150ms] flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto" aria-label={t.examplesLabel}>
          {t.examples.map(example => (
            <li key={example} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
              {locale === 'zh' ? `“${example}”` : <>&ldquo;{example}&rdquo;</>}
            </li>
          ))}
        </ul>

        <div className="animate-fade-up [animation-delay:200ms] flex flex-col items-center gap-6">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold shadow-lg shadow-primary-900/40 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
          >
            {t.tryLive}
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <p className="text-sm text-slate-400 -mt-3">{t.tryLiveNote}</p>

          <div className="flex flex-col items-center gap-3">
            <p className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              {t.getApp}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <StoreButton href={GOOGLE_PLAY_URL} store="Google Play" lead={t.googlePlayLead} soon={t.comingSoon} />
              <StoreButton href={APP_STORE_URL} store={t.appStore} lead={t.appStoreLead} soon={t.comingSoon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Also used by the homepage's app section
export function StoreButton({ href, store, lead, soon = 'Coming soon to' }: { href: string; store: string; lead: string; soon?: string }) {
  const body = (
    <>
      <span className="block text-[11px] uppercase tracking-wide text-slate-400">{href ? lead : soon}</span>
      <span className="block text-base font-semibold text-white">{store}</span>
    </>
  )
  const base = 'min-w-[11rem] px-5 py-2.5 rounded-xl border text-left leading-tight'
  if (!href) {
    return (
      <span aria-disabled="true" className={`${base} border-slate-600 bg-slate-800/60 opacity-70 cursor-default`}>
        {body}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border-slate-500 bg-black hover:border-slate-300 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300`}
    >
      {body}
    </a>
  )
}
