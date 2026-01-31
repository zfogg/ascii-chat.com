import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-12 sm:mb-16 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
            <span className="text-red-400">404</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-300 mb-4">Page Not Found</p>
          <p className="text-base sm:text-lg text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            ← Back to Home
          </Link>
        </header>

        {/* Quick Links */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6 border-b border-cyan-900/50 pb-2">
            Quick Links
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/man"
              className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-cyan-300 font-semibold mb-1">📖 Man Page</h3>
              <p className="text-gray-400 text-sm">Complete command-line reference</p>
            </Link>

            <Link
              to="/crypto"
              className="bg-gray-900/50 border border-purple-900/50 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-purple-300 font-semibold mb-1">🔐 Cryptography</h3>
              <p className="text-gray-400 text-sm">Encryption, keys, and authentication</p>
            </Link>

            <Link
              to="/man#ENVIRONMENT"
              className="bg-gray-900/50 border border-green-900/50 rounded-lg p-4 hover:border-green-500/50 transition-colors"
            >
              <h3 className="text-green-300 font-semibold mb-1">🌍 Environment Variables</h3>
              <p className="text-gray-400 text-sm">See man page ENVIRONMENT section</p>
            </Link>

            <a
              href="https://github.com/zfogg/ascii-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-teal-900/50 rounded-lg p-4 hover:border-teal-500/50 transition-colors"
            >
              <h3 className="text-teal-300 font-semibold mb-1">📦 GitHub</h3>
              <p className="text-gray-400 text-sm">View source code and releases</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
