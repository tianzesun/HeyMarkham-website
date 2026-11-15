import type { Metadata } from 'next'
import { Link2, Smartphone, Sparkles, ThumbsUp, Wrench } from 'lucide-react'

import { AppLegalPage, Mail } from '@/components/AppLegal'
import { formatReleaseDate, latestRelease, releaseId, releases, type Release } from '@/lib/releases'

export const metadata: Metadata = {
  title: 'What’s New in the App',
  description: `What changed in each version of the Hey Markham app. The latest is ${latestRelease.version}: ${latestRelease.title}.`,
  alternates: { canonical: '/app/releases' },
}

const groups = [
  { key: 'new', label: 'New', Icon: Sparkles, tone: 'text-emerald-600 dark:text-emerald-400' },
  { key: 'improved', label: 'Improved', Icon: ThumbsUp, tone: 'text-primary-600 dark:text-primary-400' },
  { key: 'fixed', label: 'Fixed', Icon: Wrench, tone: 'text-amber-600 dark:text-amber-400' },
] as const

const delivery: Record<Release['delivery'], string> = {
  store: 'App Store and Google Play',
  automatic: 'Automatic update',
}

export default function AppReleasesPage() {
  return (
    <AppLegalPage title="What&rsquo;s New" updated={formatReleaseDate(latestRelease.date)}>
      <p className="mb-4 text-lg">
        What changed in each version of the Hey Markham app, newest first. Your version is at the bottom of
        Settings in the app.
      </p>
      <p className="mb-12 text-sm text-slate-500 dark:text-slate-400">
        New features come in versions like 1.1 and 1.2, through the App Store or Google Play. Fixes come in versions
        like 1.1.1 and may arrive on their own the next time you open the app.
      </p>

      <ol className="relative border-l border-slate-200 dark:border-slate-800">
        {releases.map((release) => (
          <ReleaseEntry key={release.version} release={release} latest={release === latestRelease} />
        ))}
      </ol>

      <p className="mt-4 text-sm">
        Something not working after an update? Email <Mail />, and include your version.
      </p>
    </AppLegalPage>
  )
}

function ReleaseEntry({ release, latest }: { release: Release; latest: boolean }) {
  const id = releaseId(release.version)
  return (
    <li id={id} className="mb-12 ml-6 scroll-mt-24">
      <span
        className={`absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full ring-4 ring-white dark:ring-slate-950 ${
          latest ? 'bg-primary-600 dark:bg-primary-400' : 'bg-slate-300 dark:bg-slate-700'
        }`}
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
          <a href={`#${id}`} className="group inline-flex items-center gap-2">
            Version {release.version}
            <Link2
              className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100"
              aria-label={`Link to version ${release.version}`}
            />
          </a>
        </h2>
        {latest && (
          <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300">
            Latest
          </span>
        )}
      </div>
      <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-slate-500 dark:text-slate-400">
        <time dateTime={release.date}>{formatReleaseDate(release.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span className="inline-flex items-center gap-1">
          <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
          {delivery[release.delivery]}
        </span>
      </p>
      <p className="mt-3 mb-5 font-medium text-slate-900 dark:text-white">{release.title}</p>

      {groups.map(({ key, label, Icon, tone }) => {
        const items = release[key]
        if (!items?.length) return null
        return (
          <section key={key} className="mb-5">
            <h3 className={`mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide ${tone}`}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </h3>
            <ul className="ml-5 list-disc space-y-1.5">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )
      })}
    </li>
  )
}
