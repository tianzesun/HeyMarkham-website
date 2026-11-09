import type { Metadata } from 'next'

import { A, AppLegalPage, Mail, Notice, Section } from '@/components/AppLegal'

export const metadata: Metadata = {
  title: 'App Terms of Use',
  description:
    'Terms for using the Hey Markham mobile app, including how its AI answers should be used and its independence from the City of Markham.',
  alternates: { canonical: '/app/terms' },
}

export default function AppTermsPage() {
  return (
    <AppLegalPage title="Terms of Use">
      <p className="mb-8 text-lg">
        These terms apply to the Hey Markham app, made by AydenAIT Solution Inc. (&ldquo;AydenAIT&rdquo;,
        &ldquo;we&rdquo;). By using the app you agree to them.
      </p>

      <Section title="Not the City of Markham">
        <Notice />
      </Section>

      <Section title="About the answers">
        <ul>
          <li>
            Answers are written by artificial intelligence from public City of Markham information. They can be
            incomplete, out of date or wrong.
          </li>
          <li>
            Each answer links to its sources. Check the official City page, or contact the City, before you rely on an
            answer for a decision, a deadline, a payment or anything with legal or financial effect.
          </li>
          <li>Answers are general information, not legal, financial or professional advice.</li>
        </ul>
      </Section>

      <Section title="Your account">
        <p>
          You can use the app as a guest or create an account. Keep your sign-in secure; you are responsible for
          activity on your account. You can delete your account at any time (Settings, Manage account).
        </p>
      </Section>

      <Section title="Acceptable use">
        <ul>
          <li>Don&rsquo;t use the app for anything unlawful, or to harass anyone</li>
          <li>Don&rsquo;t try to break, overload, scrape or get around the security of the app or its service</li>
          <li>
            Don&rsquo;t include other people&rsquo;s personal information, or your own sensitive details, in questions
          </li>
        </ul>
        <p>We may suspend access that breaks these terms.</p>
      </Section>

      <Section title="The app">
        <p>
          The app is provided &ldquo;as is&rdquo;. We work to keep it available and accurate but don&rsquo;t guarantee
          it will always be available, error-free or up to date. To the extent the law allows, AydenAIT is not liable
          for losses arising from use of, or reliance on, the app or its answers.
        </p>
      </Section>

      <Section title="Privacy">
        <p>
          Our <A href="/app/privacy">app privacy policy</A> explains what the app collects and how to access or delete
          it.
        </p>
      </Section>

      <Section title="Changes and law">
        <p>
          We may update these terms; the date at the top shows the latest version. These terms are governed by the laws
          of Ontario and the federal laws of Canada that apply there.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Email <Mail />.
          <br />
          AydenAIT Solution Inc., Toronto, Ontario, Canada
        </p>
      </Section>
    </AppLegalPage>
  )
}
