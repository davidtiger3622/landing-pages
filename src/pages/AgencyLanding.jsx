import { Link } from 'react-router-dom'

const services = [
  { number: '01', title: 'Brand Identity', desc: 'Logos, systems, and visual languages that stick.' },
  { number: '02', title: 'Web Design', desc: 'Sites that convert, not just sites that look nice.' },
  { number: '03', title: 'Motion & Video', desc: 'Content that stops the scroll.' },
  { number: '04', title: 'Growth Strategy', desc: 'Positioning and campaigns backed by data.' },
]

const clients = ['NOVA', 'ORBIT', 'FERN', 'HALO', 'DRIFT', 'ATLAS']

const work = [
  { title: 'Orbit Rebrand', tag: 'Branding · 2026', accent: 'from-amber-400 to-orange-600' },
  { title: 'Fern App Launch', tag: 'Product · 2026', accent: 'from-lime-400 to-emerald-600' },
  { title: 'Halo Campaign', tag: 'Growth · 2025', accent: 'from-fuchsia-400 to-purple-600' },
]

export default function AgencyLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="font-black text-xl tracking-tight">
            ← STUDIO/9
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <button className="bg-amber-400 text-black px-5 py-2 rounded-full font-bold hover:bg-amber-300 transition">
              Start a Project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <p className="text-amber-400 font-semibold tracking-[0.3em] text-xs uppercase mb-6">
          Full-Service Creative Agency
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
          We build brands<br />people <span className="text-amber-400">actually</span> remember.
        </h1>
        <p className="mt-8 text-lg text-white/60 max-w-xl">
          Studio/9 partners with ambitious companies to design identities,
          products, and campaigns that don't blend in.
        </p>
        <button className="mt-10 bg-amber-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-amber-300 transition">
          Start a Project →
        </button>
      </section>

      {/* Client marquee */}
      <section className="border-y border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {clients.map((c) => (
            <span key={c} className="text-white/30 font-black text-xl tracking-widest">{c}</span>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {work.map((w) => (
            <div key={w.title} className="group cursor-pointer">
              <div className={`h-64 rounded-2xl bg-gradient-to-br ${w.accent} mb-4 group-hover:scale-[1.02] transition-transform duration-300`} />
              <h3 className="font-bold text-lg">{w.title}</h3>
              <p className="text-white/50 text-sm mt-1">{w.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white/[0.03] border-y border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {services.map((s) => (
              <div key={s.number} className="flex gap-6 border-b border-white/10 pb-8">
                <span className="text-amber-400 font-black text-2xl">{s.number}</span>
                <div>
                  <h3 className="font-bold text-xl">{s.title}</h3>
                  <p className="text-white/50 mt-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black">Got a brand worth building?</h2>
        <p className="mt-4 text-white/60">Let's make something people can't ignore.</p>
        <button className="mt-8 bg-amber-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-amber-300 transition">
          Start a Project
        </button>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        © 2026 Studio/9. Built as a portfolio demo.
      </footer>
    </div>
  )
}
