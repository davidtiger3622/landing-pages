import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-black text-slate-700">404</h1>
        <p className="mt-4 text-slate-400">This page doesn't exist in the showcase.</p>
        <Link
          to="/"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          ← Back to Gallery
        </Link>
      </div>
    </div>
  )
}
