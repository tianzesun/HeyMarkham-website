// Release notes for the Hey Markham app, shown at /app/releases. The app's Settings links to
// /app/releases#v<version>, so every version residents can have installed needs an entry.
//
// Add a release at the top when it reaches residents (store approval or `eas update`), with the
// same version as app.json in HeyMarkham-mobile and its CHANGELOG.md. Write for residents: what
// they can do now or what works better, not how it was built.
//
// Versions: a new feature is a minor version (1.1.0 -> 1.2.0) and comes as a store update;
// a fix is a patch (1.1.0 -> 1.1.1) and may come as an automatic update, with no store visit.

export type Delivery = 'store' | 'automatic'

export interface Release {
  version: string
  /** The day it reached residents, YYYY-MM-DD (Toronto time) */
  date: string
  delivery: Delivery
  /** One line on what matters most in this version */
  title: string
  new?: string[]
  improved?: string[]
  fixed?: string[]
}

export const releases: Release[] = [
  {
    version: '1.1.0',
    date: '2026-11-15',
    delivery: 'store',
    title: 'Report a problem with a photo, find parks and see City events',
    new: [
      'Report a problem to the City with a photo, like a pothole, graffiti or a missed pickup. Hey Markham suggests the type of problem and drafts the details; you check them and send the report to the City from your own email.',
      'Say the details instead of typing them, and tap Use where I am to add the exact spot and street address.',
      'Parks & trails: the nearest park, splash pads, trails and how to book a park.',
      'Events: what’s coming up at the City, from markham.ca’s event listings.',
    ],
    improved: [
      'Reports can fill in your name, email, phone and address from your profile, only if you turn on Fill in from my profile.',
      'Photos are made smaller and their location data is removed before they leave your phone.',
      'Fixes can now reach you without waiting for a store update.',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-11-14',
    delivery: 'store',
    title: 'The first release of Hey Markham',
    new: [
      'Ask about City of Markham services by voice or by typing. Answers link to the official pages they come from.',
      'Answers can be read aloud. Choose the voice and how it reads.',
      'English, French, Mandarin or Cantonese, for menus, answers, listening and reading aloud.',
      'Services: topics with common questions, official links and search.',
      'Trending and seasonal questions to get you started.',
      'Use your location, if you allow it, for your ward and the nearest places.',
      'Contact the City from the app: the Contact Centre, email and the City’s request form.',
      'An inbox, with choices about which notifications you get.',
      'Sign in with Apple, Google or email to keep your questions and settings, or continue as a guest. You can delete your account in the app.',
      'App icon shortcuts and an Android home-screen widget.',
      'Light and dark appearance, and screen readers announce when an answer is ready.',
    ],
  },
]

export const latestRelease = releases[0]

/** The page anchor for a version: /app/releases#v1.1.0 */
export function releaseId(version: string): string {
  return `v${version}`
}

/** -1, 0 or 1, comparing MAJOR.MINOR.PATCH numerically */
export function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] < pb[i] ? -1 : 1
  }
  return 0
}

/** "November 15, 2026" */
export function formatReleaseDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Toronto',
  })
}
