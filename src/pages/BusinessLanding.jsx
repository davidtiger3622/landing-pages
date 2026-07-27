import { Link } from 'react-router-dom'

const menuHighlights = [
  { name: 'Charred Ribeye', desc: 'Dry-aged 28 days, rosemary butter', price: '$42', icon: '🥩' },
  { name: 'Smoked Brisket', desc: '14-hour slow smoke, house rub', price: '$28', icon: '🔥' },
  { name: 'Blackened Salmon', desc: 'Cajun spice, citrus glaze', price: '$26', icon: '🐟' },
]

const testimonials = [
  { name: 'Marcus T.', text: 'Best steak I\'ve had in this city, hands down. The char on that ribeye is unreal.', rating: 5 },
  { name: 'Priya R.', text: 'Ambiance is dark, moody, and exactly what you want for a date night.', rating: 5 },
  { name: 'Daniel O.', text: 'Service was fast even on a packed Friday night. Will be back.', rating: 5 },
]

const hours = [
  { day: 'Mon – Thu', time: '5:00 PM – 10:00 PM' },
  { day: 'Fri – Sat', time: '5:00 PM – 12:00 AM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function BusinessLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-wide">
            ← EMBER<span className="text-red-600">&</span>OAK
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#menu" className="hover:text-red-500">Menu</a>
            <a href="#reviews" className="hover:text-red-500">Reviews</a>
            <a href="#visit" className="hover:text-red-500">Visit</a>
            <button className="bg-red-600 text-white px-5 py-2 rounded font-semibold hover:bg-red-700 transition">
              Reserve a Table
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-red-500 font-semibold tracking-[0.3em] text-sm uppercase mb-4">
          Fire-Grilled · Slow-Smoked
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
          EMBER <span className="text-red-600">&</span> OAK
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
          A steakhouse built around fire — dry-aged cuts, live-fire cooking,
          and a room that feels like it means it.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="bg-red-600 text-white px-8 py-3.5 rounded font-bold hover:bg-red-700 transition">
            Reserve a Table
          </button>
          <button className="border border-white/20 text-white px-8 py-3.5 rounded font-bold hover:border-white/40 transition">
            View Menu
          </button>
        </div>
      </section>

      {/* Menu highlights */}
      <section id="menu" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-red-500 font-semibold tracking-[0.2em] text-xs uppercase mb-3">Signature Dishes</p>
          <h2 className="text-3xl md:text-4xl font-black">From the Fire</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuHighlights.map((item) => (
            <div key={item.name} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-red-600/40 transition group">
              <div className="h-48 bg-gradient-to-br from-red-900 via-black to-gray-900 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <span className="text-red-500 font-bold">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-white/[0.03] py-20 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-red-500 font-semibold tracking-[0.2em] text-xs uppercase mb-3">Word on the Street</p>
            <h2 className="text-3xl md:text-4xl font-black">What Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-black/40 rounded-2xl p-6 border border-white/10">
                <div className="text-red-500 mb-3">{'★'.repeat(t.rating)}</div>
                <p className="text-gray-300 text-sm leading-relaxed">"{t.text}"</p>
                <p className="mt-4 font-semibold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit / Hours / Map */}
      <section id="visit" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-red-500 font-semibold tracking-[0.2em] text-xs uppercase mb-3">Visit Us</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Come Hungry</h2>
            <div className="space-y-3 mb-8">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between border-b border-white/10 pb-2 text-sm">
                  <span className="text-gray-400">{h.day}</span>
                  <span className="font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">📍 214 Furnace Row, Downtown District</p>
            <p className="text-gray-400 text-sm mt-1">📞 (555) 019-4482</p>
          </div>
          <div className="h-72 rounded-2xl bg-gradient-to-br from-gray-900 via-red-950 to-black border border-white/10 flex items-center justify-center text-gray-500 text-sm">
            Map placeholder
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 border-t border-white/10">
        <h2 className="text-3xl font-black">Tables are limited. Book ahead.</h2>
        <button className="mt-8 bg-red-600 text-white px-8 py-3.5 rounded font-bold hover:bg-red-700 transition">
          Reserve a Table
        </button>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          © 2026 Ember &amp; Oak.
        </div>
      </footer>
    </div>
  )
}
