import type { Metadata } from 'next'

import { A, AppLegalPage, Mail, Section } from '@/components/AppLegal'

export const metadata: Metadata = {
  title: 'Delete Your Hey Markham Account',
  description:
    'How to delete your Hey Markham app account and its data, in the app or by request, and what is deleted.',
  alternates: { canonical: '/app/delete-account' },
}

export default function AppDeleteAccountPage() {
  return (
    <AppLegalPage title="Delete Your Account">
      <p className="mb-8 text-lg">
        You can delete your Hey Markham account and its data at any time, in the app or by asking us.
      </p>

      <Section title="In the app">
        <ol>
          <li>Open Hey Markham and make sure you&rsquo;re signed in</li>
          <li>Tap the gear icon at the top right to open Settings</li>
          <li>At the bottom of Settings, tap Manage account</li>
          <li>Type DELETE and tap Delete my account</li>
        </ol>
      </Section>

      <Section title="Without the app">
        <p>
          Email <Mail />{' '}from the email address you use to sign in, with the subject &ldquo;Delete my Hey Markham
          account&rdquo;. If you used Sign in with Apple and hid your email, tell us that and we&rsquo;ll help you
          confirm the account. We may ask you to confirm the request before we delete anything, and we complete
          requests within 30 days.
        </p>
      </Section>

      <Section title="What is deleted">
        <ul>
          <li>Your profile: first name, home address, postal code and preferred language</li>
          <li>Your question history and saved questions</li>
          <li>Your sign-in (your Hey Markham account in Google Identity Platform)</li>
        </ul>
        <p>
          {/* CONFIRM: backup retention (30 days assumed). */}
          These are deleted right away from the live service. Copies in backups are removed within 30 days. Feedback
          ratings and questions asked as a guest aren&rsquo;t linked to any account, so they can&rsquo;t be found or
          deleted by account.
        </p>
        <p>
          Deleting your Hey Markham account doesn&rsquo;t delete your Google or Apple account itself. To also stop
          sharing your Apple ID with Hey Markham, go to your iPhone&rsquo;s Settings, your name, Sign in with Apple.
        </p>
      </Section>

      <Section title="Questions">
        <p>
          Email <Mail />. See also the <A href="/app/privacy">app privacy policy</A>.
        </p>
      </Section>
    </AppLegalPage>
  )
}
