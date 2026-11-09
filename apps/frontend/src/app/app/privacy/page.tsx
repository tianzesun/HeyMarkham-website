import type { Metadata } from 'next'

import { A, AppLegalPage, Mail, Notice, Section } from '@/components/AppLegal'

export const metadata: Metadata = {
  title: 'App Privacy Policy',
  description:
    'What the Hey Markham mobile app collects, why, who processes it, how long it is kept and how to access or delete it.',
  alternates: { canonical: '/app/privacy' },
}

export default function AppPrivacyPage() {
  return (
    <AppLegalPage title="Privacy Policy">
      <p className="mb-8 text-lg">
        This policy explains how AydenAIT Solution Inc. (&ldquo;AydenAIT&rdquo;, &ldquo;we&rdquo;) handles personal
        information in the Hey Markham app for iPhone and Android. We handle personal information in accordance with
        Canada&rsquo;s <i>Personal Information Protection and Electronic Documents Act</i> (PIPEDA). The{' '}
        <A href="/privacy">website privacy policy</A> covers this website and its demo.
      </p>

      <Section title="Two ways to use the app">
        <ul>
          <li>
            <b>As a guest.</b> No account. Your questions are not saved to an account or kept on your phone after you
            leave.
          </li>
          <li>
            <b>Signed in.</b> You choose to create an account (with Google, Apple, or an email and password) so the app
            can keep your question history, saved questions, settings and optional profile.
          </li>
        </ul>
      </Section>

      <Section title="What we collect">
        <p>
          <b>Your questions.</b> When you ask a question, typed or spoken, its text is sent to the Hey Markham service so
          it can be answered. If you are signed in, the question and its answer are added to your history.{' '}
          {/* CONFIRM: retention for questions not linked to an account (12 months assumed). */}
          Questions that aren&rsquo;t linked to an account may be reviewed, without your name, to improve answers, and
          are kept for up to 12 months.
        </p>
        <p>
          <b>Voice.</b> When you speak, your phone&rsquo;s own speech service (Apple on iPhone, Google on Android) turns
          your voice into text. Hey Markham receives only the text, never the recording. Read-aloud answers are spoken by
          your phone.
        </p>
        <p>
          <b>Your account (signed in only).</b> Your sign-in is managed by Google Identity Platform, which holds your
          email address and how you sign in (Google, Apple, or email and password). We never see or store your
          password. Our service stores only a random account identifier, your question history (up to the most recent
          500 questions), your saved questions (up to 50) and your optional profile.
        </p>
        <p>
          <b>Your optional profile (signed in only).</b> First name, home address, postal code and preferred language.
          Every field is optional. We use your address only to give answers about your home, such as services for your
          street.
        </p>
        <p>
          <b>Feedback.</b> If you rate an answer as helpful or not, we receive the rating with the question and answer,
          not linked to your account.
        </p>
        <p>
          <b>On your phone.</b> Your language, appearance and similar settings are stored on your phone. When you sign
          in, a sign-in token is kept in your phone&rsquo;s secure storage (Keychain or Keystore).
        </p>
        <p>
          <b>What we don&rsquo;t collect.</b> No location from your phone, no contacts, photos or files, no advertising
          identifiers, no tracking across other apps or websites, and no ads. Please don&rsquo;t include personal
          details such as your SIN, health information or account numbers in a question.
        </p>
      </Section>

      <Section title="How we use it">
        <ul>
          <li>To answer your questions using public City of Markham information</li>
          <li>To keep your history, saved questions, settings and profile when you are signed in</li>
          <li>To find questions the app answers poorly, and improve answers</li>
          <li>To keep the service secure and prevent abuse</li>
        </ul>
        <p>We do not sell personal information and do not use it for advertising.</p>
      </Section>

      <Section title="Who processes it">
        <ul>
          <li>
            <b>The Hey Markham service</b> runs on servers in Ontario, Canada.{' '}
            {/* CONFIRM: if any question can be sent to an external AI service such as Google Gemini, name it here. */}
            Answers are generated on those servers; questions are not sent to outside AI companies.
          </li>
          <li>
            <b>Google</b> (Google Identity Platform) manages sign-in and, if you choose it, Sign in with Google.
          </li>
          <li>
            <b>Apple</b>, if you choose Sign in with Apple. We ask Apple for no name or email.
          </li>
          <li>
            <b>Apple or Google speech services</b> on your phone, when you speak a question.
          </li>
        </ul>
        <p>
          Google and Apple may process information outside Canada, including in the United States, where it is subject
          to local laws. We may also disclose personal information where required by law. Links in answers open City
          of Markham web pages, which have their own privacy policies.
        </p>
      </Section>

      <Section title="How we protect it">
        <ul>
          <li>All connections use encrypted HTTPS</li>
          <li>Your profile, question history and saved questions are encrypted in our database (AES-256-GCM)</li>
          <li>Questions are kept out of our application logs</li>
          <li>Access to personal information is limited to the people who need it to run the service</li>
        </ul>
      </Section>

      <Section title="How long we keep it">
        <p>
          Account information is kept until you delete it or your account. You can remove single questions or clear
          your history at any time. {/* CONFIRM: backup retention (30 days assumed). */}
          Deleted data can remain in backups for up to 30 days before it is removed.
        </p>
      </Section>

      <Section title="Your choices and rights">
        <ul>
          <li>Use the app as a guest, without an account</li>
          <li>View and change your profile in Settings, Your profile</li>
          <li>Delete single questions or your whole history in Your questions</li>
          <li>
            Delete your account in the app (Settings, Manage account) or by request, as explained on the{' '}
            <A href="/app/delete-account">account deletion page</A>
          </li>
          <li>
            Ask to access or correct the personal information we hold, by emailing <Mail />
          </li>
        </ul>
        <p>
          We respond within 30 days. If you are not satisfied with our response, you may contact the{' '}
          <A href="https://www.priv.gc.ca">Office of the Privacy Commissioner of Canada</A>.
        </p>
      </Section>

      <Section title="Children">
        <p>Hey Markham is meant for adults and is not directed at children under 13.</p>
      </Section>

      <Section title="About the City of Markham">
        <Notice />
      </Section>

      <Section title="Changes to this policy">
        <p>
          We may update this policy. The date at the top shows the latest version, and we will tell you in the app
          before a change that affects how your information is used.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For privacy questions or requests, email <Mail />.
          <br />
          AydenAIT Solution Inc., Toronto, Ontario, Canada
        </p>
      </Section>
    </AppLegalPage>
  )
}
