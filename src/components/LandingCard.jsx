import { Link } from 'react-router-dom'

export default function LandingCard({ title, description, path, gradient }) {
  return (
    <Link
      to={path}
      className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Live preview */}
      <div className="relative h-56 overflow-hidden bg-gray-900 pointer-events-none" aria-hidden="true">
        <iframe
          src={path}
          title={title}
          className="absolute top-0 left-0 origin-top-left w-[1440px] h-[900px] scale-[0.28]"
          tabIndex={-1}
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5`}>
        <span className="text-white font-bold text-lg">{title}</span>
        <span className="text-white/90 text-sm mt-1">{description}</span>
        <span className="mt-3 inline-block text-white text-sm font-semibold underline underline-offset-4">
          View live →
        </span>
      </div>

      {/* Always-visible label (bottom bar, visible before hover) */}
      <div className="bg-white px-5 py-4 group-hover:opacity-0 transition-opacity duration-200">
        <h2 className="font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mt-0.5">{description}</p>
      </div>
    </Link>
  )
}
