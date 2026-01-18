import { useLocation } from 'react-router-dom'
import TrackedLink from './TrackedLink'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <TrackedLink
            to="/"
            label="Nav - Logo"
            className="text-2xl font-bold"
          >
            <span className="text-cyan-400">ascii</span>
            <span className="text-purple-400">-</span>
            <span className="text-teal-400">chat</span>
          </TrackedLink>

          <div className="flex gap-6">
            <TrackedLink
              to="/"
              label="Nav - Home"
              className={`transition-colors ${
                isActive('/')
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              Home
            </TrackedLink>
            <TrackedLink
              to="/crypto"
              label="Nav - Crypto"
              className={`transition-colors ${
                isActive('/crypto')
                  ? 'text-purple-400'
                  : 'text-gray-400 hover:text-purple-300'
              }`}
            >
              Crypto
            </TrackedLink>
            <TrackedLink
              to="/man"
              label="Nav - Man"
              className={`transition-colors ${
                isActive('/man')
                  ? 'text-pink-400'
                  : 'text-gray-400 hover:text-pink-300'
              }`}
            >
              Man
            </TrackedLink>
            <TrackedLink
              to="/env"
              label="Nav - Env"
              className={`transition-colors ${
                isActive('/env')
                  ? 'text-green-400'
                  : 'text-gray-400 hover:text-green-300'
              }`}
            >
              Env
            </TrackedLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
