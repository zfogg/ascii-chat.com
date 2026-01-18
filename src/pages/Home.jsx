export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-cyan-400">💻</span>
            <span className="text-purple-400">📸</span>{' '}
            <span className="text-cyan-400">ascii</span>
            <span className="text-gray-500">-</span>
            <span className="text-teal-400">chat</span>{' '}
            <span className="text-pink-400">🔡</span>
            <span className="text-purple-400">💬</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-2">Video chat in your terminal</p>
          <p className="text-gray-400">
            Real-time terminal-based video conferencing with ASCII art rendering, end-to-end encryption, and audio support
          </p>
        </header>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2">
            ⚡ Quick Start
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Start a server</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300">{`# Register with ACDS and get a session string
ascii-chat server`}<span className="text-gray-500">{`
# Session: happy-sunset-ocean`}</span></code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Join a session</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300">{`# Connect using the session string
ascii-chat happy-sunset-ocean`}<span className="text-gray-500">{`
# That's it! No configuration needed.`}</span></code></pre>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 border-b border-purple-900/50 pb-2">
            ✨ Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-cyan-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">📺 Terminal Video</h3>
              <p className="text-gray-300">
                Webcam video rendered as ASCII art in real-time. Works in any terminal—rxvt-unicode, iTerm, Kitty, even SSH sessions.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">🔒 End-to-End Encryption</h3>
              <p className="text-gray-300">
                Ed25519 authentication with X25519 key exchange. Your video and audio never leave the secure tunnel between peers.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-teal-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-300 mb-3">🎤 Voice Chat</h3>
              <p className="text-gray-300">
                Real-time audio with Opus encoding. Talk while you see each other's ASCII faces. Multi-client audio mixing supported.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-pink-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-pink-300 mb-3">🌍 Zero Config Discovery</h3>
              <p className="text-gray-300">
                Share a memorable three-word string like <code className="text-pink-400 bg-gray-950 px-2 py-1 rounded">happy-sunset-ocean</code>. ACDS handles NAT traversal automatically.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-cyan-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">👥 Multi-Client</h3>
              <p className="text-gray-300">
                3+ people can join the same session. Video grid layout automatically adjusts, like Zoom but in your terminal.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">🎨 Customizable Rendering</h3>
              <p className="text-gray-300">
                Choose ASCII palettes, color modes (16/256/truecolor), and rendering styles. Half-block mode for higher detail.
              </p>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 border-b border-teal-900/50 pb-2">
            📦 Installation
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Pre-built static binaries (all platforms)</h3>
              <div className="bg-gray-900/50 border border-cyan-900/30 rounded-lg p-6">
                <p className="text-gray-300 mb-3">
                  Download pre-built static binaries for <strong className="text-cyan-400">macOS</strong>, <strong className="text-purple-400">Linux</strong>, and <strong className="text-teal-400">Windows</strong>:
                </p>
                <a
                  href="https://github.com/zfogg/ascii-chat/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  📦 Download Latest Release
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">macOS (Homebrew)</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300">{`brew tap zfogg/ascii-chat
brew install ascii-chat`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-300 mb-3">Arch Linux (AUR)</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300">{`paru -S ascii-chat
# or
yay -S ascii-chat`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-300 mb-3">Build from source</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300">{`git clone https://github.com/zfogg/ascii-chat.git
cd ascii-chat

# Linux/macOS
./scripts/install-deps.sh

# Windows
./scripts/install-deps.ps1

cmake --preset default && cmake --build build
./build/bin/ascii-chat`}</code></pre>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-pink-400 mb-6 border-b border-pink-900/50 pb-2">
            💻 Usage Examples
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Local connection (no ACDS)</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Server binds to localhost
`}</span>{`ascii-chat server

`}<span className="text-gray-500">{`# Client connects to localhost
`}</span>{`ascii-chat client`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Internet session with ACDS</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Server registers with official ACDS
`}</span>{`ascii-chat server
`}<span className="text-gray-500">{`# Session: happy-sunset-ocean

`}</span><span className="text-gray-500">{`# Client looks up session and connects automatically
`}</span>{`ascii-chat happy-sunset-ocean`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-300 mb-3">Authenticated session with SSH keys</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Server with Ed25519 key
`}</span>{`ascii-chat server --key ~/.ssh/id_ed25519

`}<span className="text-gray-500">{`# Client authenticates with their key
`}</span>{`ascii-chat happy-sunset-ocean --key ~/.ssh/id_ed25519`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-300 mb-3">Mirror mode (test webcam locally)</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# View your webcam as ASCII without connecting anywhere
`}</span>{`ascii-chat mirror --palette blocks --color-mode truecolor`}</code></pre>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2">
            📚 Documentation
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/man"
              className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-cyan-300 font-semibold mb-1">📖 Man Page</h3>
              <p className="text-gray-400 text-sm">Complete command-line reference</p>
            </a>

            <a
              href="/crypto"
              className="bg-gray-900/50 border border-purple-900/50 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-purple-300 font-semibold mb-1">🔐 Cryptography</h3>
              <p className="text-gray-400 text-sm">Encryption, keys, and authentication</p>
            </a>

            <a
              href="https://zfogg.github.io/ascii-chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-teal-900/50 rounded-lg p-4 hover:border-teal-500/50 transition-colors"
            >
              <h3 className="text-teal-300 font-semibold mb-1">📘 API Documentation</h3>
              <p className="text-gray-400 text-sm">Full Doxygen reference for developers</p>
            </a>

            <a
              href="https://discovery.ascii-chat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-pink-900/50 rounded-lg p-4 hover:border-pink-500/50 transition-colors"
            >
              <h3 className="text-pink-300 font-semibold mb-1">🔍 ACDS Server</h3>
              <p className="text-gray-400 text-sm">Discovery service public keys</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p className="mb-2">
            <a href="https://github.com/zfogg/ascii-chat" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              📦 GitHub
            </a>
            {' · '}
            <a href="https://github.com/zfogg/ascii-chat/issues" className="text-purple-400 hover:text-purple-300 transition-colors">
              🐛 Issues
            </a>
            {' · '}
            <a href="https://github.com/zfogg/ascii-chat/releases" className="text-teal-400 hover:text-teal-300 transition-colors">
              📦 Releases
            </a>
          </p>
          <p className="text-sm">
            ascii-chat · Video chat in your terminal
          </p>
        </footer>
      </div>
    </div>
  )
}
