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
    version: '1.8.0',
    date: '2026-11-20',
    delivery: 'store',
    title: 'Markham’s weather on your home screen, and chats you can pick up where you left off',
    new: [
      'Markham’s weather on the home screen: the temperature and a sun, cloud, rain or snow icon, from Environment Canada. Tap it for the forecast, or in snow or freezing rain, to ask when your street will be plowed.',
      'A quiet weather scene behind the home screen, like falling snow or a glow of sun. Turn it off in Settings, under Preferences.',
      'Pick up a past chat: in Your questions, tap a chat to reopen it and keep asking, and Hey Markham remembers what you talked about. Swipe a chat to the left to delete it.',
      'An Account screen: tap your name in Settings to find your profile, your questions, Sign out and Delete account.',
      'As a guest, you can ask 10 questions a day. Sign in to keep asking.',
    ],
    improved: [
      'Trending questions are behind the fire icon at the top right of the home screen.',
      'Your profile shows your initials and fills in as you type, and Save is always at the bottom. If you signed in with Google or Apple, your email comes from there. To remove something, clear it and tap Save.',
      'Report a problem and What goes where: tap the camera to take a photo. On Report a problem and Pickup day, the location button is inside the address box.',
      'Send feedback: if you signed in with Google or Apple, turn on Reply to me instead of typing your email.',
      'Boxes you type in look and work the same everywhere, with an outline that stands out while you type and a message right under them if something’s wrong.',
      'Signing out removes your reports from this phone, with their photos and locations. Your pickup day, theme and language stay.',
      'Answers start sooner: Hey Markham waits less for your location before each question.',
      'Stop works right away, and tapping a notification opens that message.',
      'Your pickup card stays current: it moves on to the next pickup in the evening, after midnight, and once you’re back online.',
      'Leaving a report you haven’t sent asks first, so it isn’t lost by accident.',
      'Messages about problems, like “try again in a minute”, are in your language.',
    ],
    fixed: [
      'Deleting your account now deletes all of it, including your sign-in. If you signed in a while ago, you’re asked to sign in again first.',
      'Asking your next question right after an answer no longer marks that answer as stopped, and it’s still saved to Your questions.',
      'A phone call or a lost connection while you’re speaking no longer sends half a question.',
      'If your profile can’t load, you see Try again instead of an empty form that could clear your details when saved.',
      'When you’re offline, Hey Markham says it can’t connect instead of asking you to sign in.',
      'On Android, a report you didn’t send no longer shows as sent to the City.',
      'Words you’re still speaking when you tap Send are kept in your report.',
      'With VoiceOver, you can now choose options in Settings, like your language, and hear photo and safety messages on Report a problem.',
    ],
  },
  {
    version: '1.6.2',
    date: '2026-11-18',
    delivery: 'store',
    title: 'Your questions and reports, where you’d look for them',
    improved: [
      'Your questions: tap the clock at the top of the home screen to see what you’ve asked and ask again. It’s there when you’re signed in.',
      'My reports: find the problems you’ve reported in Services, right under Report a problem.',
      'Settings is just settings now.',
    ],
    fixed: [
      'Boxes you type in, like your profile or a report, have outlines that are easier to see, in light and dark mode.',
    ],
  },
  {
    version: '1.6.1',
    date: '2026-11-18',
    delivery: 'store',
    title: 'A calmer sign-in that’s easy to read in dark mode, and simpler screens',
    improved: [
      'A calmer sign-in screen: only the Hey Markham logo moves.',
      'Your profile is simpler: just your name, email, phone and address, in one list.',
      'Report a problem has fewer headings and notes. The safety warning, where your report goes and the link to the City’s own form are still there.',
      'In Settings, About and My reports show just their names.',
      'Your question history stays quick to scroll, even after you show many older questions.',
    ],
    fixed: [
      'In dark mode, Continue with Google and the Sign in / Create account switch were hard to read. They’re now white with blue text.',
    ],
  },
  {
    version: '1.6.0',
    date: '2026-11-18',
    delivery: 'store',
    title: 'A simpler sign-in, widgets you can see, and an easier way to set your pickup day',
    new: [
      'Share Hey Markham: tap Share Hey Markham in Settings to send the app to friends and family, by text, email or any app on your phone.',
      'Traffic alerts on their own: road closures and road work in Markham now come under Traffic in your notification settings, so you can turn them off and still get other service updates.',
    ],
    improved: [
      'A cleaner sign-in screen: choose Google, Apple or email, and the email form only appears when you need it.',
      'Set your pickup day faster: tap Use my current location to find your address, or pick your day on a simple week strip.',
      'Scrolling your inbox no longer opens a message’s Delete button by accident. Swipe clearly to the left when you want to delete one.',
      'Less clutter: official City links in Services show just their names, and Send feedback no longer asks for a rating. You can rate the app in the App Store or Google Play.',
    ],
    fixed: [
      'Hey Markham’s home-screen widgets on Android now show up. Before, they could be invisible after you added them.',
    ],
  },
  {
    version: '1.5.0',
    date: '2026-11-16',
    delivery: 'store',
    title: 'Pickup days in your calendar and on your home screen, and your reports in one place',
    new: [
      'Add your pickup days to your calendar: tap Add to my calendar on the Pickup day screen, and each coming pickup goes into the calendar your phone uses, like Google, iCloud or Outlook. Tap it again later to add new dates.',
      'A Pickup day widget for Android: see your next pickup and what goes out right on your home screen. Tap it to open your pickup calendar.',
      'My reports: problems you report to the City are kept on your phone, with your photo, so you can see what you sent and when. Follow up by email, track it on markham.ca, or call the City in one tap.',
      'School buses: find bus delays and cancellations, look up your bus stop, and sign up for email alerts, with Student Transportation Services of York Region, who run school buses for the school boards.',
    ],
    improved: [
      'Deleting inbox messages is easier: swipe a message left, or tap Select to choose several and delete them at once.',
      'A tidier Pickup day screen: the calendar’s icons are named in a legend below it.',
      'Services is simpler: Pickup day is in Waste & recycling, and Contact the City and Report a problem are just one tap.',
    ],
  },
  {
    version: '1.4.0',
    date: '2026-11-15',
    delivery: 'store',
    title: 'What goes where from a photo, reminders for tax and holiday pickups, and City messages in your language',
    new: [
      'Not sure what something is called? Take or choose a photo in What goes where, and Hey Markham names the item and shows where it goes in the City of Markham’s sorting guide. Your photo isn’t kept.',
      'Property tax reminders: the Property tax topic shows the due dates the City has published, and can remind you a week or a day before. Reminders are set on your phone, and new dates are picked up as soon as the City publishes them.',
      'Holiday pickup changes: when a holiday moves your pickup, like Christmas Day to Saturday, the app shows it on your Pickup day and home screen. With pickup reminders on, you also get a heads-up the day before your usual pickup, so you know not to put your bins out.',
      'City messages in your language: if you use Hey Markham in French, Mandarin or Cantonese, news, events and alerts in your inbox are translated for you. Tap a message to read it in full, or Learn more for the City’s original.',
      'Find your pickup day by address: type your Markham address, or use the one in your profile, and Hey Markham looks up your exact collection schedule with the City, so garbage weeks are never mixed up. Your address isn’t kept.',
      'A pickup calendar: see the coming months at a glance, with each pickup day’s bins shown in the City’s colours. Tap a day to see what goes out.',
      'Make Services your own: touch and hold a card to drag it where you want it, or hide services you don’t use. Contact the City and Report a problem are always at the top.',
    ],
    improved: [
      'Tidy your inbox: touch and hold a message to delete it, or delete the messages you’ve read, or all of them, at once.',
      'Search your inbox to find a message quickly.',
      'Pickup day now has its own place in Services, and if you chose your day by hand, the app offers to check it with your address.',
    ],
  },
  {
    version: '1.3.0',
    date: '2026-11-15',
    delivery: 'store',
    title: 'What goes where, and pickup reminders',
    new: [
      'What goes where: search for any item, like a pizza box, batteries or an old TV, and see whether it goes in the blue box, green bin or garbage, out as a bulky item, or to a drop-off. It comes from the City of Markham’s sorting guide, with the City’s instructions and directions to depots.',
      'If an item goes out at the curb, you’ll see when it next goes out on your pickup day.',
      'Pickup reminders: get a reminder the night before at 7 PM, or the morning of at 6 AM. Turn it on from the Pickup day screen. Reminders are set on your phone and follow holiday changes.',
    ],
    improved: [
      'Settings is tidier: About Hey Markham, What’s new, the privacy policy and terms are now together under About, with Help & support and Send feedback on the main Settings page.',
    ],
    fixed: ['“Tap the mic to ask” and other centred text no longer lose their last word on some Android phones.'],
  },
  {
    version: '1.2.0',
    date: '2026-11-15',
    delivery: 'store',
    title: 'Your pickup day, with the next pickup on the home screen',
    new: [
      'Set your pickup day once and see your next curbside pickup and what goes out: garbage, green bin, blue box, yard material and bulky items. Choose your collection day, then the date your next garbage goes out.',
      'Your next pickup shows on the home screen, and the Pickup day screen lists the coming weeks, with holiday changes. It comes from the City of Markham’s collection calendar.',
      'Your pickup day stays on your phone. Your address isn’t sent, and markham.ca’s address lookup is one tap away if you’re not sure of your day.',
    ],
    fixed: ['Send feedback now says what’s missing, instead of seeming to do nothing.'],
  },
  {
    version: '1.1.0',
    date: '2026-11-15',
    delivery: 'store',
    title: 'Report a problem with a photo, get directions to parks and see City events',
    new: [
      'Report a problem to the City with a photo, like a pothole, graffiti or a missed pickup. Hey Markham suggests the type of problem and drafts the details; you check them and send the report to the City from your own email.',
      'Say the details instead of typing them, and tap Use where I am to add the exact spot and street address.',
      'Parks & trails: the nearest park, splash pads, trails and how to book a park.',
      'Directions to nearby parks, libraries, community centres and recycling depots in Apple Maps or Google Maps. Parks show their size and how many kilometres of paths they have, and About tells you more.',
      'Events: what’s coming up at the City, from markham.ca’s event listings.',
    ],
    improved: [
      'Reports can fill in your name, email, phone and address from your profile, only if you turn on Fill in from my profile.',
      'Photos are made smaller and their location data is removed before they leave your phone.',
      'Fixes can now reach you without waiting for a store update.',
      'Send feedback from Settings: rate the app, share an idea or report a problem.',
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
