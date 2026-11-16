import { 
  Mic, Search, Brain, ShieldCheck, Mail, Phone, CheckCircle2, Clock,
  AlertCircle, MessageSquare, Users,
  MousePointer, Link2, Home, Baby, Heart, Zap, Smartphone,
  Volume2, Headphones, CreditCard, BookOpen, Car, Droplets,
  Leaf, Waves, Trees, CalendarDays, Camera, Navigation, Languages, LayoutGrid, Bell,
  ArrowRight, ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroTryLive, StoreButton } from '../components/HeroTryLive';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
import { RevealOnScroll } from '../components/RevealOnScroll';
import { faqDatabase } from '../lib/faq-data';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../lib/links';
import { latestRelease } from '../lib/releases';
import { AnswerSource } from '../components/AnswerSource';

// Server-rendered; only FAQSection and ContactForm hydrate in the browser
export default function HomePage() {
  // Real screenshots from the Hey Markham app
  const appScreenshots = [
    {
      src: '/screenshots/app-home.png',
      alt: 'Hey Markham app home screen asking “What would you like to know?”, with a mic button and a box to type a question',
    },
    {
      src: '/screenshots/app-services.png',
      alt: 'Hey Markham app Services screen with Contact the City and topics like Waste & recycling, Property tax and Parking',
    },
  ];

  // Counted from the data, so it stays true as more answers are checked
  const checkedAnswerCount = faqDatabase.filter(item => item.source).length;

  const answerQualities = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Answers in Seconds",
      description: "Ask in plain words and get the answer straight away, instead of clicking through menus or waiting on hold.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: `${checkedAnswerCount} Answers Checked`,
      description: "Every answer in our FAQ is checked against an official source, mostly markham.ca, and the list keeps growing.",
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "One Click to the Source",
      description: "Every checked answer links to the exact City page it came from, so you can confirm it yourself.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "No Guessing",
      description: "If Hey Markham doesn't know, it says so and points you to the City's Contact Centre at 905-477-5530.",
    },
  ];

  // App section: each spotlight pairs a screenshot with the feature it shows; keep in step with lib/releases.ts
  const appSpotlights = {
    answer: {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Answers you can check",
      description: "Ask by voice or text and get a short answer, with every official markham.ca page it came from. Tap Listen to hear it read aloud.",
      src: '/screenshots/app-answer.png',
      alt: 'Hey Markham answering "When is yard waste picked up?", with five official markham.ca sources and a Listen button',
    },
    report: {
      icon: <Camera className="w-5 h-5" />,
      title: "Report a problem with a photo",
      description: "Snap a pothole, graffiti or a missed pickup. Hey Markham suggests the type of problem and drafts the details; you check them and send the report to the City from your own email.",
      src: '/screenshots/app-report.png',
      alt: 'Hey Markham Report a problem screen with Take a photo, a problem type, details and Use where I am',
    },
    events: {
      icon: <CalendarDays className="w-5 h-5" />,
      title: "What's on around the city",
      description: "Upcoming City events from markham.ca, with dates, times and places.",
      src: '/screenshots/app-events.png',
      alt: 'Hey Markham Events screen listing upcoming City events with dates, times and places',
    },
    inbox: {
      icon: <Bell className="w-5 h-5" />,
      title: "Service updates in your inbox",
      description: "Closures, road work and City news, and you choose which notifications you get.",
      src: '/screenshots/app-inbox.png',
      alt: 'Hey Markham Inbox with service updates such as a facility closure and road work, and City news',
    },
  };

  const appExtras = [
    {
      icon: <Navigation className="w-5 h-5" />,
      title: "Directions to nearby places",
      description: "Parks, libraries, community centres and recycling depots, in Apple Maps or Google Maps.",
    },
    {
      icon: <Trees className="w-5 h-5" />,
      title: "Parks & trails",
      description: "Splash pads, trails, park sizes and how to book a park.",
    },
    {
      icon: <Languages className="w-5 h-5" />,
      title: "Four languages",
      description: "English, French, Mandarin or Cantonese, for menus, answers, listening and reading aloud.",
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Widget & shortcuts",
      description: "Ask from an Android home-screen widget or an app icon shortcut.",
    },
  ];

  // Examples in this section were checked on markham.ca on November 15, 2026; recheck before changing them
  // The City's own app, as its markham.ca page describes it (checked November 15, 2026). Only list
  // what that page says, and keep it fair: the two apps do different jobs
  const ACCESS_MARKHAM_URL = 'https://www.markham.ca/about-city-markham/access-markham-mobile-app';
  const accessMarkhamFeatures = [
    "Recycling and garbage collection schedule with personalized notifications",
    "What Goes Where search for disposing of items",
    "Winter maintenance",
    "Bikeways, parks and paths",
    "Report a problem",
  ];
  const heyMarkhamDifferences = [
    "Ask any City question in your own words, by voice or text",
    "Short answers with the markham.ca pages they come from",
    "English, French, Mandarin or Cantonese, with answers read aloud",
    "City events, directions to nearby places and a service updates inbox",
    "Report a problem with a photo that drafts the details for you",
  ];

  // Roadmap stages, from what works today to what's planned; Now must match what the app and site really do
  const roadmapStages = [
    {
      key: 'now',
      label: 'Now',
      theme: 'Ask & report',
      description: 'Answers from official City information, and a few things you can already do in the app.',
      icon: <CheckCircle2 className="w-5 h-5" />,
      items: [
        { icon: <Leaf className="w-4 h-4" />, title: 'Garbage & Recycling', description: 'Collection schedules, zones, what goes where' },
        { icon: <Trees className="w-4 h-4" />, title: 'Parks & Recreation', description: 'Park locations, facilities, programs' },
        { icon: <CalendarDays className="w-4 h-4" />, title: 'Events & Activities', description: 'Community events, workshops' },
        { icon: <Camera className="w-4 h-4" />, title: 'Report a Problem', description: 'Potholes, graffiti, missed pickups, with a photo' },
        { icon: <Navigation className="w-4 h-4" />, title: 'Directions', description: 'To parks, libraries, community centres, depots' },
      ],
    },
    {
      key: 'next',
      label: 'Next',
      theme: 'Book & apply',
      description: 'Connecting to City systems, so you can act without leaving the conversation.',
      icon: <Clock className="w-5 h-5" />,
      items: [
        { icon: <BookOpen className="w-4 h-4" />, title: 'Library System', description: 'Check books, renew items' },
        { icon: <Waves className="w-4 h-4" />, title: 'Recreation Booking', description: 'Book pools, courts' },
        { icon: <Car className="w-4 h-4" />, title: 'Permit Applications', description: 'Parking, building permits' },
      ],
    },
    {
      key: 'later',
      label: 'Later',
      theme: 'Pay',
      description: 'Bills and payments in the same place you ask your questions.',
      icon: <CreditCard className="w-5 h-5" />,
      items: [
        { icon: <Home className="w-4 h-4" />, title: 'Property Tax', description: 'View, pay, payment plans' },
        { icon: <Droplets className="w-4 h-4" />, title: 'Water Bills', description: 'View and pay water bills' },
        { icon: <CreditCard className="w-4 h-4" />, title: 'Fines & Fees', description: 'Parking tickets' },
      ],
    },
  ];

  // Per-stage colours: Now is live (green), Next is in progress (amber), Later is planned (slate)
  const roadmapTones: Record<string, { node: string; badge: string; card: string; icon: string }> = {
    now: {
      node: 'bg-green-500 text-white ring-green-100 dark:ring-green-900/60',
      badge: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
      card: 'border-green-300 dark:border-green-700 shadow-lg shadow-green-900/5',
      icon: 'bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    },
    next: {
      node: 'bg-amber-400 text-white ring-amber-100 dark:ring-amber-900/60',
      badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
      card: 'border-slate-200 dark:border-slate-700',
      icon: 'bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    },
    later: {
      node: 'bg-white text-slate-500 ring-slate-200 border-2 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:ring-slate-800',
      badge: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
      card: 'border-slate-200 dark:border-slate-700 border-dashed',
      icon: 'bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300',
    },
  };

  const clickProblemStats = [
    { value: "4", label: "Clicks", description: "From the homepage to the fence rules in the example above" },
    { value: "Several", label: "Separate Systems", description: "Waste, recreation, libraries and transit each have their own" },
    { value: "Office hours", label: "Phone Support", description: "Questions don't stop when lines close" },
    { value: "1", label: "Question", description: "All Hey Markham needs" },
  ];

  // Each story matches a checked answer in lib/faq-data.ts; keep the claims to what that answer says
  const winStories = [
    {
      icon: <Home className="w-6 h-6" />,
      persona: "The New Homeowner",
      question: '"I just moved to Unionville. Can I park on the street overnight?"',
      traditionalPath: "Know to look under Permits, Licences & Taxes → Parking → Overnight Street Parking Request → Read the rules, fees and limits",
      heymarkhamPath: "Ask the question → Hear the overnight rules and that you can request an exemption online → Follow the link to apply",
      outcome: "From question to the application page in one step"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      persona: "The Busy Parent",
      question: '"Where can my kids go swimming this weekend?"',
      traditionalPath: "Sports, Recreation & Fitness → Sports & Recreation Programs → Swimming → Public Swims & Aquafit → Open the booking system for drop-in times",
      heymarkhamPath: "Ask naturally → Hear which public swims Markham offers → Follow the link to drop-in times",
      outcome: "Straight to the schedule, without the menus"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      persona: "The Senior",
      question: '"Where can I go to cool off during a heat warning?"',
      traditionalPath: "Call during office hours → Wait on hold if lines are busy → Write down the address",
      heymarkhamPath: "Ask out loud → Hear that community centres open as cooling centres during heat warnings → Get directions to the nearest one in the app",
      outcome: "The answer and the way there, without waiting on hold"
    },
  ];

  const ragBenefits = [
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "Verified by Source",
      description: "Answers link back to the official city page they came from, so you can check the information for yourself."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Language",
      description: 'Talk to it like a neighbour. Ask "Hey, what can I put in my blue bin?" instead of guessing the right search words.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Understands What You Mean",
      description: "Ask the same thing in different words and still get the right answer, not a list of pages that happen to share a word."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Says When It Doesn't Know",
      description: "Answers come from official city information. If the answer isn't there, Hey Markham says so and points you to the right contact instead of guessing."
    },
  ];

  const howItWorksSteps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Ask",
      description: "Say or type your question in your own words, the way you'd ask a neighbour.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Get the answer",
      description: "A short, plain answer, with a link to the official City page it came from.",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Get it done",
      description: "Follow the link to apply, pay or book, or call the right department. In the app, get directions or report a problem too.",
    },
  ];

  // A real worked example for the three steps; every fact is on the City's pet licence page
  const PET_LICENCE_URL = 'https://www.markham.ca/permits-licences-taxes/animal-services/pet-licence';
  const workedExample = {
    question: "Does my cat need a licence if it's microchipped?",
    answer: "Yes. Dogs and cats in Markham need a licence, even if they have a microchip. You can register online, and licences expire on December 31 each year.",
    action: "Register your pet online",
  };


  return (
    <div className="min-h-screen w-full flex flex-col bg-white dark:bg-slate-950">
      <RevealOnScroll />
      <div className="flex-grow">
        <HeroTryLive />

        {/* Quick and accurate: proof points that are true of the checked FAQ answers */}
        <section className="py-14 px-6 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-3">
              Quick Answers You Can Trust
            </h2>
            <p data-reveal className="text-slate-300 text-center max-w-2xl mx-auto mb-10" style={{ transitionDelay: '0.1s' }}>
              Speed is only useful if the answer is right. Hey Markham is built for both.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {answerQualities.map((quality, i) => (
                <div data-reveal key={quality.title} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-primary-600/30 text-primary-200 flex items-center justify-center mb-4">
                    {quality.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{quality.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice-First Experience Section */}
        <section className="py-16 px-6 bg-primary-700 dark:bg-primary-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                <Volume2 className="w-4 h-4" />
                Voice-First Experience
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                Just Say &ldquo;Hey Markham&rdquo; — Get Answers Instantly
              </h2>
              <p className="text-lg text-primary-200">
                Like having a personal city assistant in your pocket. Ask out loud, hear the answer, any time of day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* App Screenshots */}
              <div className="flex justify-center items-start gap-4 sm:gap-6">
                {appScreenshots.map((shot, i) => (
                  <div
                    key={shot.src}
                    className={`w-36 sm:w-48 lg:w-56 bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-2 shadow-2xl border-4 border-slate-700 ${i === 1 ? 'mt-12' : ''}`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1080}
                      height={2424}
                      sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 144px"
                      className="w-full h-auto rounded-[1.5rem] sm:rounded-[2rem]"
                    />
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Volume2 className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Natural Voice Recognition</h3>
                    <p className="text-primary-200 text-sm">Ask in plain Canadian English, the way you&rsquo;d ask a neighbour.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Answers Read Aloud</h3>
                    <p className="text-primary-200 text-sm">In the app, listen to answers instead of reading them, and choose the voice that reads them.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">In the App or Your Browser</h3>
                    <p className="text-primary-200 text-sm">Ask in the Hey Markham app, or in your web browser on any phone or computer. In a browser, voice works best in Chrome, Edge and Safari.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mic className="w-6 h-6 text-primary-200" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Tap the Mic and Ask</h3>
                    <p className="text-primary-200 text-sm">Tap the mic and ask your question out loud, or type it if you&rsquo;d rather.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-primary-800 dark:bg-primary-950 border-b border-primary-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8 text-primary-200 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>No account needed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Answers link to official sources</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Powered by public city data</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-400" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </section>

        {/* In the App: a bento grid, each screenshot in the tile for its feature */}
        <section id="app" className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-primary-50 dark:from-slate-950 dark:to-slate-900 scroll-mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                The Hey Markham app
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                More Than Answers, in the App
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400" style={{ transitionDelay: '0.1s' }}>
                For iPhone and Android. Ask a question, then get it done.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Answers: the tall tile */}
              <SpotlightTile
                feature={appSpotlights.answer}
                tone="bg-primary-100/70 dark:bg-primary-900/40 border-primary-200 dark:border-primary-800"
                chip="bg-white text-primary-700 dark:bg-primary-800 dark:text-primary-200"
                className="sm:col-span-2 lg:row-span-2"
                peek="min-h-[22rem] lg:min-h-0 flex-1"
                phone="w-56 sm:w-64"
              />
              {/* Report: wide tile, phone beside the text on larger screens */}
              <SpotlightTile
                feature={appSpotlights.report}
                tone="bg-sky-50 dark:bg-sky-950/40 border-sky-100 dark:border-sky-900"
                chip="bg-white text-sky-700 dark:bg-sky-900 dark:text-sky-200"
                className="sm:col-span-2 sm:flex-row"
                body="sm:w-1/2 sm:pr-0"
                peek="h-64 sm:h-auto sm:w-1/2"
                phone="w-44 sm:top-8"
              />
              <SpotlightTile
                feature={appSpotlights.events}
                tone="bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900"
                chip="bg-white text-rose-700 dark:bg-rose-900 dark:text-rose-200"
                peek="h-52"
                phone="w-44"
              />
              <SpotlightTile
                feature={appSpotlights.inbox}
                tone="bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900"
                chip="bg-white text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200"
                peek="h-52"
                phone="w-44"
              />

              {appExtras.map((extra, i) => (
                <div data-reveal key={extra.title} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                      {extra.icon}
                    </span>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{extra.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{extra.description}</p>
                </div>
              ))}
            </div>

            {/* How Hey Markham differs from the City's Access Markham app */}
            <div data-reveal className="mt-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Already use Access Markham?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                Access Markham is the City of Markham&rsquo;s official app, organized by feature. Hey Markham starts with your question. They do different jobs, so many residents will want both.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Access Markham, from the City</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {accessMarkhamFeatures.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    Best for your own collection calendar and pickup notifications.
                  </p>
                </div>
                <div className="rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Hey Markham</h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    {heyMarkhamDifferences.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    Best when you have a question and don&rsquo;t know where on markham.ca the answer is.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
                Hey Markham is independent and isn&rsquo;t affiliated with the City of Markham. Access Markham features as listed on{' '}
                <a href={ACCESS_MARKHAM_URL} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">the City&rsquo;s Access Markham page</a>, November 2026.
              </p>
            </div>

            {/* Download band, dark because the store buttons are styled for the hero's dark background */}
            <div data-reveal className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 px-6 py-8 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Get the Hey Markham app</h3>
                <p className="text-sm text-slate-400">
                  Use it as a guest, or sign in with Apple, Google or email to keep your questions and settings.
                </p>
                <Link href="/app/releases" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary-300 hover:underline">
                  What&rsquo;s new in version {latestRelease.version}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-3 flex-shrink-0">
                <StoreButton href={GOOGLE_PLAY_URL} store="Google Play" lead="Get it on" />
                <StoreButton href={APP_STORE_URL} store="the App Store" lead="Download on" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Why not just search markham.ca? */}
        <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                Why Not Just Search markham.ca?
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400" style={{ transitionDelay: '0.1s' }}>
                The answers are on markham.ca. Finding them is the hard part.
              </p>
            </div>

            {/* The click path: real menus on markham.ca */}
            <div className="mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <MousePointer className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The &ldquo;Multiple-Click&rdquo; Problem</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Finding simple info shouldn&rsquo;t be this hard</p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    <strong>Example:</strong> &ldquo;How tall can my backyard fence be?&rdquo;
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">Home</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">About the City of Markham</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">City Hall</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full">By-Laws</span>
                    <span className="text-slate-400">→</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full font-medium">Fences &amp; Swimming Pools</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    Fence rules sit under &ldquo;About the City&rdquo;, and the link is about 100 links down the By-Laws page, after a long list of by-law PDFs. Searching markham.ca for the question finds nothing.
                  </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {clickProblemStats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Search box vs. Hey Markham */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Search className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">The Search Box Problem</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Search matches words, not what you mean</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                      markham.ca search
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">User asks:</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">&ldquo;Can my visitor park on the street tonight?&rdquo;</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-2xl">↓</div>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">Search results:</p>
                      <p className="text-sm text-red-700 dark:text-red-300">No results found.</p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Search just &ldquo;park&rdquo; instead and you get 1,976 results, from Parks to Parking. Checked November 15, 2026.
                    </p>
                  </div>
                </div>

                <div className="border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                      Hey Markham
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">User asks:</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">&ldquo;Can my visitor park on the street tonight?&rdquo;</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-2xl">↓</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">Hey Markham response:</p>
                      <p className="text-sm text-green-700 dark:text-green-300">&ldquo;Street parking isn&rsquo;t allowed from 2:30 AM to 6 AM unless signs say otherwise, but you can request an overnight exemption online for $6 a night, up to 10 a year per licence plate.&rdquo;</p>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        <AnswerSource source="https://www.markham.ca/permits-licences-taxes/parking/overnight-street-parking-request" linkClassName="hover:text-primary-600 dark:hover:text-primary-300" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What makes the answers good */}
        <section id="features" className="py-16 px-6 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                Purpose-Built for Markham
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400" style={{ transitionDelay: '0.1s' }}>
                Built on official City of Markham information, not the open internet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ragBenefits.map((benefit, i) => (
              <div data-reveal key={i} className="hover:-translate-y-1.5 hover:shadow-xl flex gap-4 p-6 rounded-xl bg-primary-50 dark:bg-slate-900 border border-primary-100 dark:border-slate-800" style={{ transitionDelay: `${i * 0.12}s` }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works, for residents: three steps beside a real worked example */}
        <section id="solution" className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                From Question to Done
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400" style={{ transitionDelay: '0.1s' }}>
                Three steps, and no menus to dig through.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* The steps, joined by a line */}
              <ol className="lg:col-span-5 relative space-y-8">
                {howItWorksSteps.map((step, i) => (
                  <li data-reveal key={step.title} className="relative flex gap-5" style={{ transitionDelay: `${i * 0.1}s` }}>
                    {i < howItWorksSteps.length - 1 && (
                      <span className="absolute left-6 top-12 -bottom-8 w-0.5 -translate-x-1/2 bg-primary-200 dark:bg-primary-800" aria-hidden="true" />
                    )}
                    <span className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ring-8 ring-slate-50 dark:ring-slate-900 ${i === howItWorksSteps.length - 1 ? 'bg-green-500 text-white' : 'bg-primary-600 text-white'}`}>
                      {step.icon}
                    </span>
                    <div className="pt-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">Step {i + 1}</p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* The same three steps on a real question */}
              <div data-reveal className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl p-5 sm:p-8" style={{ transitionDelay: '0.15s' }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">A real example</p>

                <div className="flex justify-end items-start gap-3 mb-5">
                  <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary-700 text-white px-4 py-3 text-sm sm:text-base">
                    {workedExample.question}
                  </p>
                  <StepBadge n={1} />
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <StepBadge n={2} />
                  <div className="flex-1 rounded-2xl rounded-tl-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-3">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Hey Markham</p>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">{workedExample.answer}</p>
                    <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      <AnswerSource source={PET_LICENCE_URL} linkClassName="hover:text-primary-600 dark:hover:text-primary-300" />
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StepBadge n={3} done />
                  <a
                    href={PET_LICENCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
                  >
                    {workedExample.action}
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Win Stories */}
        <section className="py-16 px-6 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                How It Works For You
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400" style={{ transitionDelay: '0.1s' }}>
                Everyday questions, answered in one step
              </p>
            </div>

            <div className="space-y-6">
              {winStories.map((story, i) => (
                <div data-reveal key={i} className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                        {story.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{story.persona}</h3>
                        <p className="text-primary-600 dark:text-primary-400 text-sm italic">{story.question}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                          <span className="text-sm font-medium text-red-700 dark:text-red-300">The Usual Way</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{story.traditionalPath}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm font-medium text-green-700 dark:text-green-300">With Hey Markham</span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{story.heymarkhamPath}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      {story.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap: a journey from Now to Later; a rail across the top on desktop, down the left on phones */}
        <section className="py-16 md:py-20 px-6 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <p data-reveal className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                Roadmap
              </p>
              <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                All Your City Services in One Place
              </h2>
              <p data-reveal className="text-lg text-slate-600 dark:text-slate-400" style={{ transitionDelay: '0.1s' }}>
                From answers today, to booking and applying, to paying your bills.
              </p>
            </div>

            <div className="relative">
              {/* Desktop rail through the stage nodes: live, then in progress, then planned */}
              <div className="hidden lg:block absolute top-6 left-[16.66%] right-[16.66%] h-1 rounded-full bg-gradient-to-r from-green-500 via-amber-400 to-slate-300 dark:to-slate-600" aria-hidden="true" />

              <ol className="relative grid lg:grid-cols-3 lg:items-start gap-8 lg:gap-6">
                {roadmapStages.map((stage, i) => {
                  const tone = roadmapTones[stage.key];
                  const last = i === roadmapStages.length - 1;
                  return (
                    <li data-reveal key={stage.key} className="relative pl-16 lg:pl-0" style={{ transitionDelay: `${i * 0.12}s` }}>
                      {/* Phone rail down to the next stage */}
                      {!last && <div className="lg:hidden absolute left-6 top-12 -bottom-8 w-1 -translate-x-1/2 rounded-full bg-slate-300 dark:bg-slate-700" aria-hidden="true" />}

                      <div className="absolute left-0 top-0 lg:static lg:flex lg:justify-center lg:mb-6">
                        <span className={`relative z-10 w-12 h-12 rounded-full ring-8 flex items-center justify-center ${tone.node}`}>
                          {stage.icon}
                        </span>
                      </div>

                      <div className={`rounded-2xl bg-white dark:bg-slate-800 border p-6 ${tone.card}`}>
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stage.theme}</h3>
                          <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${tone.badge}`}>
                            {stage.key === 'now' ? 'Live now' : stage.label}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">{stage.description}</p>
                        <ul className="space-y-3">
                          {stage.items.map((item) => (
                            <li key={item.title} className="flex gap-3">
                              <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${tone.icon}`}>
                                {item.icon}
                              </span>
                              <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
              Next and Later are plans, and may change.
            </p>
          </div>
        </section>

        <FAQSection />

         {/* Contact Section */}
         <section id="contact" className="py-16 md:py-20 px-6 bg-primary-700 dark:bg-primary-900">
           <div className="max-w-5xl mx-auto">
             <div className="text-center mb-12">
               <p className="text-sm font-semibold uppercase tracking-wider text-primary-200 mb-3">
                 For the City of Markham and other municipalities
               </p>
               <h2 data-reveal className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                 Bring Hey Markham to Your Residents
               </h2>
               <p data-reveal className="text-primary-100" style={{ transitionDelay: '0.1s' }}>
                 Start with a pilot. See the results. Then decide.
               </p>
               <p className="mt-3 text-sm text-primary-200">
                 Residents: have feedback or a question about Hey Markham? Use the same form.
               </p>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
               {/* Contact Info */}
               <div data-reveal className="space-y-8">
                 <div className="text-left">
                   <h3 className="text-xl font-bold text-white mb-4">Why Choose Hey Markham?</h3>
                   <div className="space-y-4">
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Zap className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Quick Implementation</h4>
                         <p className="text-primary-200 text-sm">Starts from the information already on your public website. No system replacement needed.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <Users className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Ease the Load on Staff</h4>
                         <p className="text-primary-200 text-sm">Answers routine questions around the clock, so staff can focus on the complex ones.</p>
                       </div>
                     </div>
                     <div className="flex gap-4">
                       <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                         <ShieldCheck className="w-5 h-5 text-primary-200" />
                       </div>
                       <div>
                         <h4 className="text-white font-medium">Privacy and Accessibility First</h4>
                         <p className="text-primary-200 text-sm">Designed around Canadian privacy law and accessibility standards. We&rsquo;ll walk your team through our approach during the pilot.</p>
                       </div>
                     </div>
                   </div>
                 </div>

                 <div className="pt-6">
                   <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                   <div className="space-y-3">
                     <div className="flex items-center gap-3 text-primary-200">
                       <Mail className="w-5 h-5" />
                       <a href="mailto:contact@aydenait.com" className="hover:text-white transition-colors">contact@aydenait.com</a>
                     </div>
                     <div className="flex items-center gap-3 text-primary-200">
                       <Phone className="w-5 h-5" />
                       <a href="tel:+12898599523" className="hover:text-white transition-colors">289-859-9523</a>
                     </div>
                   </div>
                 </div>
               </div>

               <ContactForm />
             </div>
           </div>
         </section>
      </div>
    </div>
  );
}

interface SpotlightFeature {
  icon: React.ReactNode
  title: string
  description: string
  src: string
  alt: string
}

// An app feature with its screenshot rising from the bottom edge of the tile
function SpotlightTile({ feature, tone, chip, className = '', body = '', peek, phone }: {
  feature: SpotlightFeature
  tone: string
  chip: string
  className?: string
  body?: string
  peek: string
  phone: string
}) {
  return (
    <div data-reveal className={`flex flex-col overflow-hidden rounded-2xl border ${tone} ${className}`}>
      <div className={`p-6 md:p-8 ${body}`}>
        <span className={`inline-flex w-10 h-10 rounded-xl items-center justify-center shadow-sm mb-4 ${chip}`}>
          {feature.icon}
        </span>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
      </div>
      <div className={`relative ${peek}`}>
        <div className={`absolute left-1/2 top-0 -translate-x-1/2 ${phone} bg-slate-900 rounded-t-[2rem] p-2 pb-0 border-4 border-b-0 border-slate-700 shadow-2xl`}>
          <Image
            src={feature.src}
            alt={feature.alt}
            width={1080}
            height={2424}
            sizes="256px"
            className="w-full h-auto rounded-t-[1.5rem]"
          />
        </div>
      </div>
    </div>
  )
}

// Ties a part of the worked example to its numbered step
function StepBadge({ n, done = false }: { n: number; done?: boolean }) {
  return (
    <span
      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
        done ? 'bg-green-500 text-white' : 'bg-primary-600 text-white'
      }`}
      aria-label={`Step ${n}`}
    >
      {n}
    </span>
  )
}
