import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Real-time Analytics',
    desc: 'Track every metric that matters, updated live, no refresh needed.',
    icon: '📊',
  },
  {
    title: 'Team Collaboration',
    desc: 'Share dashboards and insights across your entire team instantly.',
    icon: '🤝',
  },
  {
    title: 'Custom Reports',
    desc: 'Build reports tailored to your business in minutes, not hours.',
    icon: '📈',
  },
  {
    title: 'API Access',
    desc: 'Pull your data anywhere with our developer-friendly REST API.',
    icon: '⚡',
  },
]

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    desc: 'For individuals getting started',
    features: ['1 dashboard', 'Basic analytics', 'Community support'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    desc: 'For growing teams',
    features: ['Unlimited dashboards', 'Advanced analytics', 'Team collaboration', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organizations',
    features: ['Everything in Pro', 'SSO & advanced security', 'Dedicated account manager', 'Custom SLA'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function SaasLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-indigo-600">
            ← Pulse
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          New: AI-powered insights
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Analytics that actually
          <span className="text-indigo-600"> make sense</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Pulse turns your raw data into decisions your whole team can act on —
          no data scientist required.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            Start Free Trial
          </button>
          <button className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-semibold hover:border-gray-300 transition">
            Watch Demo
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-400">No credit card required · 14-day free trial</p>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Everything you need to move fast</h2>
          <p className="mt-3 text-gray-500">Built for teams who want answers, not spreadsheets.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg">{f.title}</h3>
              <p className="mt-2 text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-3 text-gray-500">Start free. Upgrade when you're ready.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 ${
                  tier.highlight
                    ? 'bg-indigo-600 text-white shadow-2xl scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`font-bold text-lg ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mt-1 ${tier.highlight ? 'text-indigo-100' : 'text-gray-500'}`}>
                  {tier.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className={tier.highlight ? 'text-indigo-200' : 'text-gray-400'}>{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${tier.highlight ? 'text-indigo-50' : 'text-gray-600'}`}>
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-lg font-semibold transition ${
                    tier.highlight
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to see your data differently?</h2>
        <p className="mt-3 text-gray-500">Join thousands of teams already using Pulse.</p>
        <button className="mt-8 bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
          © 2026 Pulse Analytics.
        </div>
      </footer>
    </div>
  )
}
