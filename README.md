# Hey Markham Website

The website for Hey Markham, a city life assistant for Markham residents: https://heymarkham.vercel.app

Residents say what they need, by voice or text. Hey Markham finds the answer in official City of Markham
information and shows its sources, points them to whoever handles it (including agencies that aren't the
City), and helps them get it done. When it doesn't know, it says so. It works in English, French, Mandarin
and Cantonese, in the web browser and in the iPhone and Android app.

The site explains what Hey Markham does, links to the live assistant, and hosts the app's support pages.

## What's on the site

- **Home** (`/`): what Hey Markham does, the app, how answers are checked, the roadmap, a searchable FAQ
  of answers checked against official sources, and a contact form for municipalities and residents
- **App pages** (`/app/*`): What's new (release notes, opened from the app's Settings), support, privacy
  policy, terms of use, account deletion and the Community Journey
- **Invites** (`/i/<code>`): the page a shared invite code opens
- **Website privacy policy** (`/privacy`)

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Validation | Zod (contact form) |
| Language | TypeScript |
| Monorepo | pnpm workspaces + Turborepo |
| Hosting | Vercel, with Vercel Analytics |

## Getting started

Needs Node 24 and pnpm (version set in `packageManager` in `package.json`).

```bash
pnpm install          # at the repo root
cd apps/frontend
pnpm dev              # http://localhost:3000
```

Checks, run in `apps/frontend` (CI runs type-check, test and build on every push and pull request):

```bash
pnpm type-check       # TypeScript
pnpm lint             # ESLint
pnpm test             # FAQ matching, release notes and invite codes
pnpm build            # production build
pnpm check-sources    # every FAQ source page on markham.ca still loads (also runs weekly in GitHub Actions)
```

The contact form sends to the webhook in `CONTACT_WEBHOOK_URL`, set in Vercel's environment settings. It
is never committed; without it the form shows an error with a reference ID.

## Project structure

```
HeyMarkham-website/
├── apps/
│   └── frontend/             # The Next.js site
│       ├── src/
│       │   ├── app/          # Pages, metadata, sitemap, icons and the contact form action
│       │   ├── components/   # Header, footer, FAQ, contact form and other parts of the pages
│       │   ├── lib/          # FAQ answers, release notes, invite codes and links
│       │   └── styles/       # Global CSS
│       ├── public/           # App screenshots and static files
│       └── scripts/          # check-sources.ts
├── packages/
│   └── ui/                   # Shared UI components
└── website/                  # Legacy static version of the site, not deployed
```

## Keeping it accurate

- **Release notes**: add each app version at the top of `apps/frontend/src/lib/releases.ts` when it
  reaches residents, matching `CHANGELOG.md` in HeyMarkham-mobile.
- **Feature claims** on the home page must match a release note or the app and API code.
- **FAQ answers** in `apps/frontend/src/lib/faq-data.ts` each cite the official page they were checked
  against. When `check-sources` reports a moved page, re-check the answer against the new one.
- **Store links and the live assistant URL** are in `apps/frontend/src/lib/links.ts`. Store buttons show
  "Coming soon" until their URLs are filled in.

## Deployment

Vercel deploys every push to `main`. Production only goes live after the GitHub CI job passes.

---

Hey Markham is independent and isn't affiliated with the City of Markham. Built by
[Aydenait Solutions](https://aydenait.com).
