import { A, AppLegalPage, Mail, Notice, Section } from '../AppLegal'
import type { Locale } from '../../lib/i18n'

// /app/support, /zh/app/support and /fr/app/support. One structure, every language: strings live in `copy`,
// links stay in the JSX and follow `locale` through <A> / <Mail />.
const copy: Record<Locale, {
  title: string;
  introStart: string;
  introEnd: string;
  citySection: string;
  cityParaStart: string;
  cityParaEnd: string;
  faqSection: string;
  needAccountQ: string;
  needAccountA: string;
  voiceQ: string;
  voiceA: string;
  languageQ: string;
  languageA: string;
  wrongAnswerQ: string;
  wrongAnswerA: string;
  passwordQ: string;
  passwordA: string;
  versionQ: string;
  versionA: string;
  versionLink: string;
  versionB: string;
  deleteQ: string;
  deleteA: string;
  deleteLink: string;
  deleteB: string;
  aboutSection: string;
}> = {
  en: {
    title: 'Support',
    introStart:
      'Hey Markham answers questions about City of Markham services, by voice or by typing, with links to the official sources. For help with the app, email ',
    introEnd: '.',
    citySection: 'Questions about City services or your City account',
    cityParaStart:
      'Contact the City of Markham directly: call the Contact Centre at 905-477-5530 or visit ',
    cityParaEnd: '. In the app, tap Contact the City on the home screen.',
    faqSection: 'Common questions',
    needAccountQ: 'Do I need an account?',
    needAccountA: 'No. Choose Continue as guest. Sign in only if you want your questions, settings and profile kept.',
    voiceQ: 'Voice isn’t working.',
    voiceA:
      'Allow microphone access for Hey Markham in your phone’s settings (in the app: Settings, Voice, Microphone access). For French, Mandarin or Cantonese, your phone may need that speech language downloaded.',
    languageQ: 'How do I change the language?',
    languageA:
      'Settings, Language. Hey Markham answers, listens and reads aloud in English, French, Mandarin or Cantonese.',
    wrongAnswerQ: 'An answer looks wrong.',
    wrongAnswerA:
      'Tap the thumbs-down under it so we can improve it, and check the linked official page. If something seems seriously wrong, email us.',
    passwordQ: 'I forgot my password.',
    passwordA: 'On the sign-in screen, enter your email and tap Forgot password?',
    versionQ: 'Which version do I have, and what changed?',
    versionA: 'Your version is at the bottom of Settings. See ',
    versionLink: 'What’s new',
    versionB: ' for the changes in each version.',
    deleteQ: 'How do I delete my account?',
    deleteA: 'See ',
    deleteLink: 'Delete your account',
    deleteB: '.',
    aboutSection: 'About Hey Markham',
  },
  zh: {
    title: '帮助与支持',
    introStart:
      'Hey Markham 用语音或文字回答有关万锦市服务的问题，并附上官方来源链接。需要应用帮助，请发邮件至 ',
    introEnd: '。',
    citySection: '关于市府服务或市政府账户的问题',
    cityParaStart: '请直接联系万锦市：致电联系中心 905-477-5530，或访问 ',
    cityParaEnd: '。在应用内，点击首页的“联系市府”。',
    faqSection: '常见问题',
    needAccountQ: '需要注册账户吗？',
    needAccountA: '不需要。选择“以访客身份继续”即可。只有希望保留您的提问、设置和个人资料时才需要登录。',
    voiceQ: '语音功能无法使用。',
    voiceA:
      '请在手机设置中允许 Hey Markham 使用麦克风（应用内：设置 › 语音 › 麦克风访问）。使用法语、普通话或粤语时，手机可能需要先下载对应的语言包。',
    languageQ: '如何切换语言？',
    languageA: '在“设置 › 语言”中切换。Hey Markham 可以用英语、法语、普通话或粤语作答、聆听和朗读。',
    wrongAnswerQ: '某个回答看起来有误。',
    wrongAnswerA:
      '点击回答下方的“踩”告诉我们，同时请核对所链接的官方页面。如果发现严重问题，请给我们发邮件。',
    passwordQ: '忘记密码怎么办？',
    passwordA: '在登录页面输入您的邮箱，然后点击“忘记密码？”。',
    versionQ: '我用的是哪个版本？有什么改动？',
    versionA: '版本号在“设置”页面底部。各版本的改动请查看 ',
    versionLink: '更新日志',
    versionB: '。',
    deleteQ: '如何删除账户？',
    deleteA: '请查看 ',
    deleteLink: '删除账户',
    deleteB: '。',
    aboutSection: '关于 Hey Markham',
  },
  fr: {
    title: 'Aide',
    introStart:
      'Hey Markham répond aux questions sur les services de la Ville de Markham, à voix haute ou par écrit, avec des liens vers les sources officielles. Pour obtenir de l’aide avec l’application, écrivez à ',
    introEnd: '.',
    citySection: 'Questions sur les services de la Ville ou sur votre compte municipal',
    cityParaStart:
      'Communiquez directement avec la Ville de Markham\u00a0: appelez le Centre de contact au 905-477-5530 ou consultez ',
    cityParaEnd: '. Dans l’application, touchez Joindre la Ville sur l’écran d’accueil.',
    faqSection: 'Questions fréquentes',
    needAccountQ: 'Ai-je besoin d’un compte?',
    needAccountA:
      'Non. Choisissez Continuer en tant qu’invité. Connectez-vous seulement si vous voulez conserver vos questions, vos paramètres et votre profil.',
    voiceQ: 'La voix ne fonctionne pas.',
    voiceA:
      'Autorisez l’accès au microphone pour Hey Markham dans les réglages de votre téléphone (dans l’application\u00a0: Paramètres, Voix, accès au microphone). Pour le français, le mandarin ou le cantonais, votre téléphone devra peut-être télécharger cette langue de reconnaissance vocale.',
    languageQ: 'Comment changer de langue?',
    languageA:
      'Paramètres, Langue. Hey Markham répond, écoute et lit à voix haute en anglais, en français, en mandarin ou en cantonais.',
    wrongAnswerQ: 'Une réponse semble inexacte.',
    wrongAnswerA:
      'Touchez le pouce vers le bas sous la réponse pour nous aider à l’améliorer, et vérifiez la page officielle en lien. Si quelque chose semble gravement erroné, écrivez-nous.',
    passwordQ: 'J’ai oublié mon mot de passe.',
    passwordA: 'Sur l’écran de connexion, entrez votre courriel et touchez Mot de passe oublié?',
    versionQ: 'Quelle version ai-je, et qu’est-ce qui a changé?',
    versionA: 'Votre version est indiquée au bas des Paramètres. Consultez ',
    versionLink: 'Nouveautés',
    versionB: ' (en anglais) pour les changements apportés à chaque version.',
    deleteQ: 'Comment supprimer mon compte?',
    deleteA: 'Consultez ',
    deleteLink: 'Supprimer votre compte',
    deleteB: ' (en anglais).',
    aboutSection: 'À propos de Hey Markham',
  },
}

export function SupportPage({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <AppLegalPage locale={locale} title={t.title}>
      <p className="mb-8 text-lg">
        {t.introStart}
        <Mail />
        {t.introEnd}
      </p>

      <Section title={t.citySection}>
        <p>
          {t.cityParaStart}
          <A href="https://www.markham.ca" locale={locale}>markham.ca</A>
          {t.cityParaEnd}
        </p>
      </Section>

      <Section title={t.faqSection}>
        <p>
          <b>{t.needAccountQ}</b> {t.needAccountA}
        </p>
        <p>
          <b>{t.voiceQ}</b> {t.voiceA}
        </p>
        <p>
          <b>{t.languageQ}</b> {t.languageA}
        </p>
        <p>
          <b>{t.wrongAnswerQ}</b> {t.wrongAnswerA}
        </p>
        <p>
          <b>{t.passwordQ}</b> {t.passwordA}
        </p>
        <p>
          <b>{t.versionQ}</b> {t.versionA}
          <A href="/app/releases" locale={locale}>{t.versionLink}</A>
          {t.versionB}
        </p>
        <p>
          <b>{t.deleteQ}</b> {t.deleteA}
          <A href="/app/delete-account" locale={locale}>{t.deleteLink}</A>
          {t.deleteB}
        </p>
      </Section>

      <Section title={t.aboutSection}>
        <Notice locale={locale} />
      </Section>
    </AppLegalPage>
  )
}
