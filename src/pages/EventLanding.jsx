import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function getTimeLeft(targetDate) {
  const total = targetDate - new Date()
  return {
    total,
    days: Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((total / 1000 / 60) % 60), 0),
    seconds: Math.max(Math.floor((total / 1000) % 60), 0),
  }
}

const speakers = [
  { name: 'Dr. Amara Osei', role: 'Head of AI Research, Nyra Labs', icon: '🧠' },
  { name: 'Ben Fletcher', role: 'CTO, Scalewise', icon: '⚙️' },
  { name: 'Ling Zhou', role: 'Product Lead, Formic', icon: '🚀' },
]

const agenda = [
  { time: '9:00 AM', title: 'Opening Keynote: The Next Decade of Automation' },
  { time: '10:30 AM', title: 'Panel: Scaling AI Products Responsibly' },
  { time: '1:00 PM', title: 'Workshop: Building with Agentic Workflows' },
  { time: '3:30 PM', title: 'Closing Talk & Live Q&A' },
]

export default function EventLanding() {
  const targetDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 12) // 12 days out
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-slate-950 to-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">
            ← FORWARD/2026
          </Link>
          <button className="bg-emerald-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-emerald-400 transition text-sm">
            Reserve Your Seat
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-14 text-center">
        <p className="text-emerald-400 font-semibold tracking-[0.3em] text-xs uppercase mb-4">
          Free Virtual Summit · Oct 14, 2026
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          The Future of Work is <span className="text-emerald-400">Automated</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
          Join 5,000+ builders for a half-day summit on AI, automation, and what
          it actually takes to ship agentic products in 2026.
        </p>

        {/* Countdown */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds },
          ].map((unit) => (
            <div key={unit.label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 min-w-[80px]">
              <div className="text-3xl font-bold tabular-nums">{String(unit.value).padStart(2, '0')}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">{unit.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Signup form */}
      <section className="max-w-md mx-auto px-6 py-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-center mb-1">Save your free seat</h2>
          <p className="text-slate-400 text-sm text-center mb-6">Limited to 5,000 attendees</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <button className="w-full bg-emerald-500 text-black font-bold py-3 rounded-lg hover:bg-emerald-400 transition">
              Reserve My Free Seat →
            </button>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Speakers */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {speakers.map((s) => (
            <div key={s.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl mx-auto mb-4">
                {s.icon}
              </div>
              <h3 className="font-bold">{s.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{s.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="bg-white/[0.03] border-y border-white/10 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Agenda</h2>
          <div className="space-y-4">
            {agenda.map((item) => (
              <div key={item.time} className="flex gap-6 items-center border-b border-white/10 pb-4">
                <span className="text-emerald-400 font-mono text-sm w-20 shrink-0">{item.time}</span>
                <span className="text-slate-200">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">
        © 2026 Forward Summit. Built as a portfolio demo.
      </footer>
    </div>
  )
}
