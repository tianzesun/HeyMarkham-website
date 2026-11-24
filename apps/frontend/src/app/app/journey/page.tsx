import type { Metadata } from 'next'

import { A, AppLegalPage, Section } from '@/components/AppLegal'

export const metadata: Metadata = {
  title: 'Community Journey',
  description:
    'How the Community Journey in the Hey Markham app works: levels, what helps you grow, the sky each level brings, and who can see it.',
  alternates: { canonical: '/app/journey' },
}

export default function AppJourneyPage() {
  return (
    <AppLegalPage title="Community Journey">
      <p className="mb-8 text-lg">
        Your Community Journey is a small thank-you for being part of Hey Markham. It grows on its own as you use the
        app, and every level brings a new sky for the app. There&rsquo;s nothing you have to do.
      </p>

      <Section title="How it grows">
        <p>
          <b>Dropping by.</b> Each day you open Hey Markham while signed in counts once.
        </p>
        <p>
          <b>Today&rsquo;s question.</b> The journey has a &ldquo;which bin?&rdquo; question each day, from the
          City&rsquo;s sorting guide. Answering it counts once a day, right or wrong.
        </p>
        <p>
          <b>Feedback.</b> Feedback from Settings that tells us something counts too, up to twice a month.
        </p>
        <p>
          Each of these counts the same, and none of them is a must. Your progress shows on a trail, one stop for each
          level, with a bar to the next. There are no points to count, no rankings and no streaks, so skipping a day
          loses nothing.
        </p>
      </Section>

      <Section title="Levels and skies">
        <p>
          There are seven levels. Each has a name and a badge, and your badge becomes your picture in the app. To see your
          trail, open the menu at the top right of the home screen, then Community Journey.
        </p>
        <p>
          Every level brings a sky: the colours of the home screen, the buttons and your questions. Markham Blue is
          everyone&rsquo;s from the start, then come Rouge Valley, Midnight Sky, Northern Lights, Lakeside Sunset, Autumn
          Maple and, at the top, Markham Gold. Choose any sky you&rsquo;ve unlocked under Your skies on the journey.
          Signing out goes back to Markham Blue.
        </p>
        <p>Everyone gets the same City information and services, whatever their level.</p>
      </Section>

      <Section title="Who can see it">
        <p>
          Only you. Your level is kept with your Hey Markham account and isn&rsquo;t shown to anyone else. Guests
          don&rsquo;t have a journey. Deleting your account deletes your journey too (see{' '}
          <A href="/app/delete-account">Delete your account</A>).
        </p>
      </Section>

      <Section title="Our motto">
        <p>Every resident matters. Every contribution counts.</p>
      </Section>
    </AppLegalPage>
  )
}
