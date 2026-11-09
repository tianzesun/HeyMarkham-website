import type { Metadata } from 'next'

import { A, AppLegalPage, Mail, Notice, Section } from '@/components/AppLegal'

export const metadata: Metadata = {
  title: 'App Support',
  description:
    'Help with the Hey Markham mobile app: signing in, voice and languages, wrong answers, and how to contact the City of Markham.',
  alternates: { canonical: '/app/support' },
}

export default function AppSupportPage() {
  return (
    <AppLegalPage title="Support">
      <p className="mb-8 text-lg">
        Hey Markham answers questions about City of Markham services, by voice or by typing, with links to the official
        sources. For help with the app, email <Mail />.
      </p>

      <Section title="Questions about City services or your City account">
        <p>
          Contact the City of Markham directly: call the Contact Centre at 905-477-5530 or visit{' '}
          <A href="https://www.markham.ca">markham.ca</A>. In the app, tap Contact the City on the home screen.
        </p>
      </Section>

      <Section title="Common questions">
        <p>
          <b>Do I need an account?</b> No. Choose Continue as guest. Sign in only if you want your questions, settings
          and profile kept.
        </p>
        <p>
          <b>Voice isn&rsquo;t working.</b> Allow microphone access for Hey Markham in your phone&rsquo;s settings
          (in the app: Settings, Voice, Microphone access). For French, Mandarin or Cantonese, your phone may need that
          speech language downloaded.
        </p>
        <p>
          <b>How do I change the language?</b> Settings, Language. Hey Markham answers, listens and reads aloud in
          English, French, Mandarin or Cantonese.
        </p>
        <p>
          <b>An answer looks wrong.</b> Tap the thumbs-down under it so we can improve it, and check the linked official
          page. If something seems seriously wrong, email us.
        </p>
        <p>
          <b>I forgot my password.</b> On the sign-in screen, enter your email and tap Forgot password?
        </p>
        <p>
          <b>How do I delete my account?</b> See <A href="/app/delete-account">Delete your account</A>.
        </p>
      </Section>

      <Section title="About Hey Markham">
        <Notice />
      </Section>
    </AppLegalPage>
  )
}
