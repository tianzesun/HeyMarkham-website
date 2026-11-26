import { ArrowUpRight, Smartphone, Sparkles } from 'lucide-react'

import { APP_STORE_URL, GOOGLE_PLAY_URL, LIVE_URL } from '../lib/links'

// One from each everyday job: pickup, a repair, a permit, a referral, your own ward
const heroExamples = [
  'When is my next garbage pickup?',
  'There’s a pothole on my street',
  'Do I need a permit for a deck?',
  'Who do I call about a missed blue box?',
  'Who is my councillor?',
]

// Server-rendered hero: no client JavaScript. Visitors try the real assistant, which searches
// official City of Markham information, instead of an in-browser demo.
export function HeroTryLive() {
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
            Now live for Markham residents
          </div>
        </div>

        <h1 className="animate-rise text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
          Say what you need.{' '}
          <span className="block text-balance text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">
            Hey Markham handles the city part.
          </span>
        </h1>

        <p className="animate-rise text-xl md:text-2xl text-slate-300 mb-6 max-w-2xl mx-auto [animation-delay:100ms]">
          Your city life assistant for Markham. Ask in your own words, by voice or text. It finds the answer in official
          City information, points you to whoever handles it, and helps you get it done. If it doesn&rsquo;t know, it
          says so.
        </p>

        {/* The kinds of things residents ask, so the range shows before the first scroll */}
        <ul className="animate-rise [animation-delay:150ms] flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto" aria-label="Things you can ask">
          {heroExamples.map(example => (
            <li key={example} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
              &ldquo;{example}&rdquo;
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
            Try Hey Markham live
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <p className="text-sm text-slate-400 -mt-3">Opens the assistant in a new tab. No account needed.</p>

          <div className="flex flex-col items-center gap-3">
            <p className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              Get the app: ask by voice, in English, French, Mandarin or Cantonese
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <StoreButton href={GOOGLE_PLAY_URL} store="Google Play" lead="Get it on" />
              <StoreButton href={APP_STORE_URL} store="the App Store" lead="Download on" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Also used by the homepage's app section
export function StoreButton({ href, store, lead }: { href: string; store: string; lead: string }) {
  const body = (
    <>
      <span className="block text-[11px] uppercase tracking-wide text-slate-400">{href ? lead : 'Coming soon to'}</span>
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
