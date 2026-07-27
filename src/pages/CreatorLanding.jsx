import { Link } from 'react-router-dom'

const linkStack = [
  { label: '🎥 Watch my latest video', sub: 'YouTube · 2.4M views', color: 'bg-white' },
  { label: '🛍️ Shop my merch', sub: 'Limited summer drop', color: 'bg-white' },
  { label: '📸 Behind the scenes', sub: 'Instagram exclusive', color: 'bg-white' },
  { label: '🎙️ Listen to my podcast', sub: 'New episode every Tuesday', color: 'bg-white' },
  { label: '💌 Join my newsletter', sub: 'Weekly, no spam, ever', color: 'bg-white' },
]

const socials = [
  { icon: '📷', label: 'Instagram' },
  { icon: '🎵', label: 'TikTok' },
  { icon: '▶️', label: 'YouTube' },
  { icon: '🐦', label: 'Twitter/X' },
]

export default function CreatorLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-start justify-center py-16 px-6">
      <div className="w-full max-w-md">
        {/* Back link */}
        <Link to="/" className="text-sm text-purple-700 font-medium hover:underline mb-6 inline-block">
          ← Back to gallery
        </Link>

        {/* Profile */}
        <div className="text-center mt-4 mb-8">
          <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center text-4xl shadow-lg ring-4 ring-white/60">
            🌸
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">@juliahearts</h1>
          <p className="mt-2 text-gray-600 text-sm max-w-xs mx-auto">
            lifestyle · beauty · slow mornings ☕️ <br />
            sharing the little things that make life soft
          </p>
        </div>

        {/* Socials row */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socials.map((s) => (
            <div
              key={s.label}
              title={s.label}
              className="w-11 h-11 rounded-full bg-white/70 backdrop-blur flex items-center justify-center text-lg shadow-sm hover:scale-110 hover:bg-white transition-transform cursor-pointer"
            >
              {s.icon}
            </div>
          ))}
        </div>

        {/* Link stack */}
        <div className="space-y-3">
          {linkStack.map((link) => (
            <button
              key={link.label}
              className={`w-full ${link.color} rounded-2xl px-5 py-4 text-left shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border border-white/50`}
            >
              <p className="font-semibold text-gray-800">{link.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{link.sub}</p>
            </button>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition shadow-lg">
            💌 Work with me
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          Built as a portfolio demo · not a real profile
        </p>
      </div>
    </div>
  )
}
