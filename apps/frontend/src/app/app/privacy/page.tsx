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
        <A href="/privacy">website privacy policy</A> covers this website.
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
          your voice into text. Hey Markham receives only the text, never the recording. Read-aloud answers are spoken,
          in the voice you choose, by Microsoft Azure AI Speech in Canada: the Hey Markham service sends it the
          answer&rsquo;s text, which can include your address if the answer is about your home, and plays back the
          audio. {/* CONFIRM: Microsoft's current retention terms for text-to-speech input. */}
          If that isn&rsquo;t available, your phone speaks the answer instead.
        </p>
        <p>
          <b>Your account (signed in only).</b> Your sign-in is managed by Google Identity Platform, which holds your
          email address and how you sign in (Google, Apple, Microsoft, or email and password). We never see or store your
          password. Our service stores only a random account identifier, your question history (up to the most recent
          500 questions), your saved questions (up to 50) and your optional profile.
        </p>
        <p>
          <b>Your optional profile (signed in only).</b> First and last name, email, phone number, home address, postal
          code and preferred language. Every field is optional. We use your address to give answers about your home,
          such as services for your street. Your name, email, phone and address fill in a problem report only if you
          turn on &ldquo;Fill in from my profile&rdquo;.
        </p>
        <p>
          <b>Location (only if you allow it).</b> The app asks for location only when you tap &ldquo;Use my
          location&rdquo; under an answer, such as one about your ward or the nearest library, or &ldquo;Use where I
          am&rdquo; in a problem report. Your phone then asks for
          your permission, for use only while you use the app, never in the background. Once you allow it, your
          phone&rsquo;s position, rounded to about 100 metres, is sent with each question. It is used only to answer questions about where you are, such as your
          ward and councillor or the nearest library, community centre or park. It is not stored or logged, and
          answers don&rsquo;t repeat it. When you tap &ldquo;Use where I am&rdquo; in a problem report, your phone finds
          your exact position and its street address, and they go only into the report you send to the City, not to
          the Hey Markham service. You can stop location at any time in your phone&rsquo;s settings.
        </p>
        <p>
          <b>Problem reports (only if you send one).</b> A report is an email that you send from your own email app to
          the City of Markham (customerservice@markham.ca). It holds what you put in it: the type of problem, the
          details, the location, your contact details if you add them, and a photo if you take or choose one. Hey
          Markham doesn&rsquo;t receive the email. Photos are made smaller, and their location data removed, before
          they leave your phone. If you add a photo, the app may send it, with your note, to the Hey Markham service
          to suggest the type of problem and draft the details. The photo is read on our own server, isn&rsquo;t sent to
          any other company, and isn&rsquo;t stored or logged. Once you send a report, the City handles it under its own
          privacy policy. A copy of each report you send (the type of problem, the location, the details, the date and
          a smaller copy of the photo, but not your contact details) is kept on your phone under My reports, so you can
          follow up on it. It isn&rsquo;t sent to us, and you can delete it at any time.
        </p>
        <p>
          <b>Notifications (only if you allow them).</b> The app asks once whether it may send notifications. If you
          allow them, your phone is registered with the Hey Markham service using a random identifier created by the
          app, a push token from your phone&rsquo;s notification service, the kinds of message you chose (alerts, news,
          service updates, offers), and your phone&rsquo;s platform, system version and app version. This isn&rsquo;t
          linked to your account. It is used only to send the messages you chose, and is no longer used once your
          phone stops accepting them, for example after you remove the app. You can change your choices in the inbox
          or turn notifications off in your phone&rsquo;s settings.
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
          <b>Pickup day (only if you set one).</b> The collection day and week you choose are stored only on your
          phone. To show your pickup dates, the app asks the Hey Markham service for that collection zone&rsquo;s
          calendar, such as &ldquo;Thursday A&rdquo;; the request isn&rsquo;t linked to your account. If you choose
          to find your pickup day by address (typed, or from your profile), the address goes to the Hey Markham
          service, which looks it up in the City&rsquo;s collection calendar, as the City&rsquo;s own website does,
          to find your collection zone. The address isn&rsquo;t stored or logged; only the zone is kept, on your
          phone. Pickup reminders, if you turn them on, are scheduled on your phone; nothing about them is sent to
          us.
        </p>
        <p>
          <b>Calendar (only if you add your pickups to it).</b> If you tap &ldquo;Add to my calendar&rdquo;, the app
          asks for permission to add events to your phone&rsquo;s calendar, and adds your coming pickup days to it. On
          iPhone it asks only to add events. On Android, the permission also covers reading, but the app only looks
          up which calendars your phone has, to add to the main one, and only removes events it added itself. It
          doesn&rsquo;t read your other events, and nothing from your calendar is sent to us. If your calendar
          syncs with an account such as Google or iCloud, the added events sync with it like any others.
        </p>
        <p>
          <b>What goes where.</b> When you look up how to dispose of an item, the words you search for and the item
          you open go to the Hey Markham service, which looks them up in the City of Markham&rsquo;s sorting guide.
          The search isn&rsquo;t linked to your account or location. If you search with a photo, it is made smaller
          and its location data removed before it leaves your phone, then read on our own server to name the item.
          It isn&rsquo;t sent to any other company, and isn&rsquo;t stored or logged.
        </p>
        <p>
          <b>Property tax reminders (only if you turn them on).</b> The app gets the City&rsquo;s published due dates
          from the Hey Markham service and schedules the reminders on your phone. Nothing about you or your property
          is sent for this.
        </p>
        <p>
          <b>What we don&rsquo;t collect.</b> No location unless you allow it, and never in the background; no
          contacts or files, no photos except one you add to a problem report or search with in What goes where, no advertising identifiers, no tracking across other apps or websites, and no ads. Please don&rsquo;t include personal
          details such as your SIN, health information or account numbers in a question.
        </p>
      </Section>

      <Section title="How we use it">
        <ul>
          <li>To answer your questions using public City of Markham information</li>
          <li>To keep your history, saved questions, settings and profile when you are signed in</li>
          <li>If you allow location, to answer questions about where you are</li>
          <li>If you allow notifications, to send the kinds of message you chose</li>
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
            <b>Microsoft</b>, if you choose Continue with Microsoft. We ask Microsoft only for your email address.
          </li>
          <li>
            <b>Apple or Google speech services</b> on your phone, when you speak a question.
          </li>
          <li>
            <b>Microsoft</b> (Azure AI Speech, in Canada) reads answers aloud. It receives the text of the answer, not
            your question or account.
          </li>
          <li>
            <b>ReCollect</b> (Recollect Systems Inc.) runs the City of Markham&rsquo;s collection calendar and sorting
            guide. The Hey Markham service asks it for a collection zone&rsquo;s dates, for the items you look up in
            What goes where, and, only if you find your pickup day by address, for that address&rsquo;s collection
            zone. It doesn&rsquo;t receive your account or location.
          </li>
          <li>
            <b>Expo</b> (650 Industries, Inc.) and your phone&rsquo;s notification service (Apple Push Notification
            service or Google Firebase Cloud Messaging) deliver notifications, if you allow them. They receive the push
            token and the message, not your questions or account.
          </li>
        </ul>
        <p>
          Google, Apple and Expo may process information outside Canada, including in the United States, where it is subject
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
          <li>Allow or stop location in your phone&rsquo;s settings</li>
          <li>Allow or turn off notifications, and choose which kinds you get, in the inbox or your phone&rsquo;s settings</li>
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
