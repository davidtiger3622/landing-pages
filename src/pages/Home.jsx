import LandingCard from '../components/LandingCard'

const pages = [
  {
    title: 'SaaS Landing',
    description: 'Hero, features, pricing, CTA',
    path: '/saas',
    gradient: 'from-indigo-600 via-indigo-500/80 to-transparent',
  },
  {
    title: 'Business / Service',
    description: 'Restaurant, gym, agency-style layout',
    path: '/business',
    gradient: 'from-orange-600 via-orange-500/80 to-transparent',
  },
  {
    title: 'Creator / Personal',
    description: 'Portfolio, link-in-bio energy',
    path: '/creator',
    gradient: 'from-pink-600 via-pink-500/80 to-transparent',
  },
  {
    title: 'Event / Webinar',
    description: 'Countdown timer, signup form',
    path: '/event',
    gradient: 'from-emerald-600 via-emerald-500/80 to-transparent',
  },
  {
    title: 'Agency',
    description: 'Bold, client-facing showcase',
    path: '/agency',
    gradient: 'from-amber-500 via-amber-400/80 to-transparent',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Landing Pages
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
            landing page samples.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <LandingCard key={page.path} {...page} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-slate-500 text-sm">
          Built with React, Vite &amp; Tailwind CSS
        </div>
      </div>
    </div>
  )
}
