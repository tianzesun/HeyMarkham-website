import { Source_Sans_3, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SkipLink } from '../components/SkipLink'

export { metadata, viewport } from './metadata'

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  // Only bold is used (headings)
  weight: ['700'],
  display: 'swap',
  variable: '--font-serif',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: theme-init.js may add the "dark" class before React hydrates
    <html lang="en-CA" className={`scroll-smooth ${sourceSans.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <head>
        {/* Must run before first paint to avoid a light flash in dark mode; it's tiny and same-origin (CSP 'self') */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/theme-init.js" />
        {/* Sets lang="zh-Hans" on /zh pages before first paint (the layout always renders en-CA) */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/lang-init.js" />
      </head>
      <body className="font-sans relative overflow-x-hidden">
        {/* Skip Navigation Link for Accessibility */}
        <SkipLink />


        <Header />
        <main id="main-content" className="pt-16 relative z-10" role="main">
          {children}
        </main>
        <Footer />
        {/* Cookie-free visit counts; what's collected is described on the privacy page */}
        <Analytics />
      </body>
    </html>
  )
}
