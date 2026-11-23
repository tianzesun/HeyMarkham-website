import type { Metadata } from 'next'

import { A, AppLegalPage, Section } from '@/components/AppLegal'

export const metadata: Metadata = {
  title: 'Community Journey',
  description:
    'How the Community Journey in the Hey Markham app works: levels, what helps you grow, what each level brings, and who can see it.',
  alternates: { canonical: '/app/journey' },
}

export default function AppJourneyPage() {
  return (
    <AppLegalPage title="Community Journey">
      <p className="mb-8 text-lg">
        Your Community Journey is a small thank-you for being part of Hey Markham. It grows on its own as you use the
        app. There&rsquo;s nothing you have to do.
      </p>

      <Section title="How it grows">
        <p>
          <b>Dropping by.</b> Each day you open Hey Markham while signed in counts once.
        </p>
        <p>
          <b>Helping answers get better.</b> A thumbs-up or thumbs-down on an answer, or feedback from Settings, counts
          too, if you feel like it.
        </p>
        <p>
          Your progress to the next level shows as a bar and a percentage. There are no points to count and no rankings.
        </p>
      </Section>

      <Section title="Levels">
        <p>
          There are seven levels. Each has a name and a badge, and your badge becomes your picture in the app. In the app,
          Settings, Community Journey shows every level, which ones you&rsquo;ve reached, and what the next one brings.
        </p>
        <p>
          Some levels unlock extras, like a new look for the app. Everyone gets the same City information and services,
          whatever their level.
        </p>
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
