import { A, AppLegalPage, Section } from '../AppLegal'
import type { Locale } from '../../lib/i18n'

// /app/journey and /zh/app/journey. One structure, both languages: strings live in `copy`,
// links stay in the JSX and follow `locale` through <A>.
const copy: Record<Locale, {
  title: string;
  intro: string;
  growsSection: string;
  droppingBy: string;
  droppingByText: string;
  todayQ: string;
  todayQText: string;
  feedback: string;
  feedbackText: string;
  progress: string;
  levelsSection: string;
  levelsP1: string;
  levelsP2: string;
  levelsP3: string;
  whoSection: string;
  whoStart: string;
  whoLink: string;
  whoEnd: string;
  mottoSection: string;
  motto: string;
}> = {
  en: {
    title: 'Community Journey',
    intro:
      'Your Community Journey is a small thank-you for being part of Hey Markham. It grows on its own as you use the app, and every level brings a new sky for the app. There’s nothing you have to do.',
    growsSection: 'How it grows',
    droppingBy: 'Dropping by.',
    droppingByText: 'Each day you open Hey Markham while signed in counts once.',
    todayQ: 'Today’s question.',
    todayQText:
      'The journey has a “which bin?” question each day, from the City’s sorting guide. Answering it counts once a day, right or wrong.',
    feedback: 'Feedback.',
    feedbackText: 'Feedback from Settings that tells us something counts too, up to twice a month.',
    progress:
      'Each of these counts the same, and none of them is a must. Your progress shows on a trail, one stop for each level, with a bar to the next. There are no points to count, no rankings and no streaks, so skipping a day loses nothing.',
    levelsSection: 'Levels and skies',
    levelsP1:
      'There are seven levels. Each has a name and a badge, and your badge becomes your picture in the app. To see your trail, open the menu at the top right of the home screen, then Community Journey.',
    levelsP2:
      'Every level brings a sky: the colours of the home screen, the buttons and your questions. Markham Blue is everyone’s from the start, then come Rouge Valley, Midnight Sky, Northern Lights, Lakeside Sunset, Autumn Maple and, at the top, Markham Gold. Choose any sky you’ve unlocked under Your skies on the journey. Signing out goes back to Markham Blue.',
    levelsP3: 'Everyone gets the same City information and services, whatever their level.',
    whoSection: 'Who can see it',
    whoStart:
      'Only you. Your level is kept with your Hey Markham account and isn’t shown to anyone else. Guests don’t have a journey. Deleting your account deletes your journey too (see ',
    whoLink: 'Delete your account',
    whoEnd: ').',
    mottoSection: 'Our motto',
    motto: 'Every resident matters. Every contribution counts.',
  },
  zh: {
    title: '社区之旅',
    intro:
      '您的社区之旅（Community Journey）是参与 Hey Markham 的一份小小谢意。它会随着您使用应用而自行成长，每升一级，应用都会带来一片新的天空。您无需做任何事。',
    growsSection: '如何成长',
    droppingBy: '常来看看。',
    droppingByText: '登录状态下，每天打开 Hey Markham 一次即计入一次。',
    todayQ: '今日问题。',
    todayQText:
      '社区之旅每天会有一道“该扔哪个桶？”的问题，取自市府的分类指南。无论答对还是答错，每天作答一次即计入一次。',
    feedback: '反馈。',
    feedbackText: '在“设置”中提交的、能给我们启发的反馈也会计入，每月最多两次。',
    progress:
      '这些方式的计分相同，而且都不是必须做的。您的进度显示在一条路线上，每升一级有一个站点，还有一个通往下一级的进度条。这里没有积分可累计，没有排名，也没有连续打卡，所以少用一天不会有任何损失。',
    levelsSection: '等级与天空',
    levelsP1:
      '共有七个等级。每个等级都有名称和徽章，您的徽章会成为您在应用中的头像。要查看您的路线，请打开首页右上角的菜单，然后选择“社区之旅”。',
    levelsP2:
      '每升一级都会带来一片天空：首页、按钮和您的提问都会随之变色。Markham Blue 是所有人一开始的颜色，之后依次是 Rouge Valley、Midnight Sky、Northern Lights、Lakeside Sunset、Autumn Maple，最高等级是 Markham Gold。您可以在社区之旅的“您的天空”下选择任何已解锁的天空。退出登录后会恢复为 Markham Blue。',
    levelsP3: '无论等级如何，每位居民获得的市府信息和服务都相同。',
    whoSection: '谁能看到',
    whoStart:
      '只有您自己。您的等级保存在您的 Hey Markham 账户中，不会展示给任何其他人。访客没有社区之旅。删除账户也会一并删除您的社区之旅（参见 ',
    whoLink: '删除账户',
    whoEnd: '）。',
    mottoSection: '我们的座右铭',
    motto: '每一位居民都很重要。每一份贡献都有意义。',
  },
}

export function JourneyPage({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <AppLegalPage locale={locale} title={t.title}>
      <p className="mb-8 text-lg">{t.intro}</p>

      <Section title={t.growsSection}>
        <p>
          <b>{t.droppingBy}</b> {t.droppingByText}
        </p>
        <p>
          <b>{t.todayQ}</b> {t.todayQText}
        </p>
        <p>
          <b>{t.feedback}</b> {t.feedbackText}
        </p>
        <p>{t.progress}</p>
      </Section>

      <Section title={t.levelsSection}>
        <p>{t.levelsP1}</p>
        <p>{t.levelsP2}</p>
        <p>{t.levelsP3}</p>
      </Section>

      <Section title={t.whoSection}>
        <p>
          {t.whoStart}
          <A href="/app/delete-account" locale={locale}>
            {t.whoLink}
          </A>
          {t.whoEnd}
        </p>
      </Section>

      <Section title={t.mottoSection}>
        <p>{t.motto}</p>
      </Section>
    </AppLegalPage>
  )
}
