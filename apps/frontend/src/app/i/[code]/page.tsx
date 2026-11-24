import type { Metadata } from 'next'
import Link from 'next/link'

import { CopyCode } from '@/components/CopyCode'
import { StoreButton } from '@/components/HeroTryLive'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/links'
import { inviteDeepLink, sanitizeInviteCode } from '@/lib/invite'

// Where a resident's invite link goes (the API's referrals.invite_link setting,
// https://heymarkham.vercel.app/i/{code}). The app opens heymarkham://invite/<code>, keeps the
// code and sends it after sign-in; a code can also be typed in the app. The bonus minutes are
// dashboard settings, so this page names no numbers.

export const metadata: Metadata = {
  title: 'You’re invited to Hey Markham',
  description: 'A neighbour invited you to Hey Markham, the AI assistant for life in Markham.',
  // One person's link: never in search results
  robots: { index: false, follow: false },
}

const link = 'text-primary-600 dark:text-primary-400 underline'

export default async function InvitePage({ params }: { params: Promise<{ code: string }> }) {
  const code = sanitizeInviteCode((await params).code)

  return (
    <div className="bg-white dark:bg-slate-950">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-slate-700 dark:text-slate-300 leading-relaxed">
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Hey Markham app</p>
        {code ? (
          <>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              A neighbour invited you to Hey Markham
            </h1>
            <p className="mb-8 text-lg">
              Hey Markham answers your questions about life in Markham, from garbage day to property tax, and can read
              its answers aloud. Sign in with this invite, and you and your neighbour both get bonus read-aloud minutes.
            </p>

            <a
              href={inviteDeepLink(code)}
              className="inline-flex items-center justify-center rounded-xl bg-primary-600 hover:bg-primary-700 px-6 py-3 text-base font-semibold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
            >
              Open in Hey Markham
            </a>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Works on a phone with the app installed. It keeps your code for when you sign in.
            </p>

            <section className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-2">Your invite code</h2>
              <p
                className="font-mono text-3xl md:text-4xl font-bold tracking-[0.2em] text-slate-900 dark:text-white mb-4"
                aria-label={`Invite code ${code.split('').join(' ')}`}
              >
                {code}
              </p>
              <p className="mb-4">
                Have the app already? Sign in and enter this code within 14 days of first signing in.
              </p>
              <CopyCode code={code} />
            </section>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
              This invite link isn&rsquo;t complete
            </h1>
            <p className="mb-8 text-lg">
              Ask the person who sent it for the whole link, or for their invite code. You can still get Hey Markham
              below.
            </p>
          </>
        )}

        {/* Dark, because the store buttons are styled for a dark background, as on the home page */}
        <div className="mt-10 rounded-2xl bg-slate-900 border border-slate-800 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">Get the Hey Markham app</h2>
            <p className="text-sm text-slate-400">
              {code
                ? 'Install it, then come back to this page and tap Open in Hey Markham.'
                : 'Use it as a guest, or sign in to keep your questions and settings.'}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 flex-shrink-0">
            <StoreButton href={GOOGLE_PLAY_URL} store="Google Play" lead="Get it on" />
            <StoreButton href={APP_STORE_URL} store="the App Store" lead="Download on" />
          </div>
        </div>

        <p className="mt-10 text-sm">
          Hey Markham is an independent app by AydenAIT, not affiliated with the City of Markham. See the{' '}
          <Link href="/app/privacy" className={link}>app privacy policy</Link> for how invites work.
        </p>
        <p className="mt-6">
          <Link href="/" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
            &larr; Back to Hey Markham
          </Link>
        </p>
      </article>
    </div>
  )
}
