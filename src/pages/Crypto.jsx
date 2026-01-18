import Footer from '../components/Footer'

export default function Crypto() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-purple-400">🔐</span> Cryptography
          </h1>
          <p className="text-xl text-gray-300">
            End-to-end encryption with Ed25519 authentication and X25519 key exchange
          </p>
        </header>

        {/* ACDS Note */}
        <div className="mb-12 bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
          <p className="text-gray-300">
            <strong className="text-purple-300">Note:</strong> Looking for ACDS cryptography details or public keys?
            See the{' '}
            <a
              href="https://discovery.ascii-chat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
            >
              ACDS documentation
            </a>
            {' '}for discovery service crypto architecture.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2">
            🔒 How It Works
          </h2>

          <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-4">
              ascii-chat uses <strong className="text-purple-300">libsodium</strong> for cryptography—the same library that powers Signal, WireGuard, and Zcash.
            </p>
            <p className="text-gray-300">
              Every connection performs a Diffie-Hellman key exchange to establish a secure tunnel. Your video and audio are encrypted
              with <code className="text-cyan-400 bg-gray-950 px-2 py-1 rounded">XSalsa20-Poly1305</code> before leaving your machine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 border border-cyan-900/30 rounded-lg p-4">
              <h3 className="text-cyan-300 font-semibold mb-2">Authentication</h3>
              <p className="text-sm text-gray-400">Ed25519 signatures verify identity</p>
            </div>
            <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-4">
              <h3 className="text-purple-300 font-semibold mb-2">Key Exchange</h3>
              <p className="text-sm text-gray-400">X25519 ECDH for perfect forward secrecy</p>
            </div>
            <div className="bg-gray-900/50 border border-teal-900/30 rounded-lg p-4">
              <h3 className="text-teal-300 font-semibold mb-2">Encryption</h3>
              <p className="text-sm text-gray-400">XSalsa20-Poly1305 AEAD cipher</p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 border-b border-teal-900/50 pb-2">
            🔬 Technical Details
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-cyan-900/30 rounded-lg p-6">
              <h3 className="text-cyan-300 font-semibold mb-3">Handshake Protocol</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Client and server exchange Ed25519 public keys (optional identity verification)</li>
                <li>Both sides generate ephemeral X25519 keypairs</li>
                <li>Diffie-Hellman key exchange computes shared secret</li>
                <li>Shared secret derives session keys for XSalsa20-Poly1305 encryption</li>
                <li>All packets encrypted with session keys</li>
              </ol>
            </div>

            <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6">
              <h3 className="text-purple-300 font-semibold mb-3">Encryption Algorithms</h3>
              <ul className="space-y-2 text-gray-300">
                <li><code className="text-cyan-400 bg-gray-950 px-2 py-1 rounded">Ed25519</code> - Identity signatures (64 bytes)</li>
                <li><code className="text-purple-400 bg-gray-950 px-2 py-1 rounded">X25519</code> - ECDH key exchange (32 bytes)</li>
                <li><code className="text-teal-400 bg-gray-950 px-2 py-1 rounded">XSalsa20-Poly1305</code> - AEAD cipher (encrypt + authenticate)</li>
                <li><code className="text-pink-400 bg-gray-950 px-2 py-1 rounded">Blowfish</code> - Block cipher (SSH private key encryption)</li>
                <li><code className="text-cyan-400 bg-gray-950 px-2 py-1 rounded">BLAKE2b</code> - Key derivation function</li>
                <li><code className="text-purple-400 bg-gray-950 px-2 py-1 rounded">Argon2</code> - Password hashing (memory-hard KDF)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-teal-900/30 rounded-lg p-6">
              <h3 className="text-teal-300 font-semibold mb-3">Perfect Forward Secrecy</h3>
              <p className="text-gray-300">
                Each connection generates new ephemeral keys. Even if your long-term SSH/GPG key is compromised,
                past sessions cannot be decrypted. Keys are never stored—only used for the duration of the connection.
              </p>
            </div>
          </div>
        </section>

        {/* SSH Keys */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 border-b border-purple-900/50 pb-2">
            🔑 SSH Key Authentication
          </h2>

          <p className="text-gray-300 mb-6">
            Use your existing SSH Ed25519 keys for authentication. No need to generate new keys—ascii-chat reads the same keys you use for GitHub, servers, and git.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Server with SSH key</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300">{`# Server authenticates with its key
ascii-chat server --key ~/.ssh/id_ed25519`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Client connects with their key</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300">{`# Client authenticates with their key
ascii-chat happy-sunset-ocean --key ~/.ssh/id_ed25519`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-300 mb-3">Encrypted SSH keys</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Prompts for passphrase or uses ssh-agent
`}</span>{`ascii-chat server --key ~/.ssh/id_ed25519_encrypted

`}<span className="text-gray-500">{`# Or set passphrase via environment variable
`}</span>{`export ASCII_CHAT_KEY_PASSWORD="my-passphrase"
ascii-chat server --key ~/.ssh/id_ed25519_encrypted`}</code></pre>
            </div>
          </div>
        </section>

        {/* GPG Keys */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 border-b border-teal-900/50 pb-2">
            🛡️ GPG Key Authentication
          </h2>

          <p className="text-gray-300 mb-6">
            GPG Ed25519 keys work via <strong className="text-teal-300">gpg-agent</strong>—no passphrase prompts needed. Perfect for automated deployments.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Using GPG key ID</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Server with GPG key (short/long/full fingerprint)
`}</span>{`ascii-chat server --key gpg:7FE90A79F2E80ED3

`}<span className="text-gray-500">{`# Client connects with their GPG key
`}</span>{`ascii-chat happy-sunset-ocean --key gpg:897607FA43DC66F612710AF97FE90A79F2E80ED3`}</code></pre>
            </div>
          </div>
        </section>

        {/* Password Encryption */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-pink-400 mb-6 border-b border-pink-900/50 pb-2">
            🔐 Password-Based Encryption
          </h2>

          <p className="text-gray-300 mb-6">
            Simple password encryption for quick sessions. Can be combined with key authentication for defense-in-depth.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Password-only</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Server sets password
`}</span>{`ascii-chat server --password "correct-horse-battery-staple"

`}<span className="text-gray-500">{`# Client must know the password
`}</span>{`ascii-chat client 192.168.1.100 --password "correct-horse-battery-staple"`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">Key + Password (maximum security)</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Both SSH key and password required
`}</span>{`ascii-chat server --key ~/.ssh/id_ed25519 --password "extra-secret"

`}<span className="text-gray-500">{`# Client needs both to connect
`}</span>{`ascii-chat happy-sunset-ocean --key ~/.ssh/id_ed25519 --password "extra-secret"`}</code></pre>
            </div>
          </div>
        </section>

        {/* Server Verification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2">
            ✅ Server Identity Verification
          </h2>

          <p className="text-gray-300 mb-6">
            Prevent man-in-the-middle attacks by verifying the server's public key before connecting.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">Verify with local public key file</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Client verifies server identity
`}</span>{`ascii-chat happy-sunset-ocean --server-key ~/.ssh/server1.pub`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-teal-300 mb-3">Verify with GitHub GPG keys</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Fetches server's GPG keys from GitHub
`}</span>{`ascii-chat happy-sunset-ocean --server-key github:zfogg.gpg`}</code></pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-300 mb-3">Verify with GPG key ID</h3>
              <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Verify against specific GPG key
`}</span>{`ascii-chat happy-sunset-ocean --server-key gpg:897607FA43DC66F6`}</code></pre>
            </div>
          </div>
        </section>

        {/* Key Whitelisting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 border-b border-purple-900/50 pb-2">
            👥 Key Whitelisting
          </h2>

          <p className="text-gray-300 mb-6">
            Restrict connections to known peers by maintaining whitelists of trusted public keys. Works both ways—servers can whitelist clients, and clients can whitelist servers.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Server Whitelisting Clients</h3>
              <p className="text-gray-300 mb-4">Restrict which clients can connect to your server.</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">Whitelist file (authorized_keys format)</h4>
                  <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Create allowed_clients.txt with one public key per line
`}</span>{`cat allowed_clients.txt
`}<span className="text-gray-500">{`# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIF... alice@example.com
# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIG... bob@example.com

`}</span><span className="text-gray-500">{`# Server only accepts whitelisted clients
`}</span>{`ascii-chat server --key ~/.ssh/id_ed25519 --client-keys allowed_clients.txt`}</code></pre>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Whitelist GitHub user's GPG keys</h4>
                  <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Fetch all GPG keys from GitHub user
`}</span>{`ascii-chat server --key gpg:MYKEYID --client-keys github:zfogg.gpg

`}<span className="text-gray-500">{`# Client must authenticate with their GPG key
`}</span>{`ascii-chat happy-sunset-ocean --key gpg:897607FA43DC66F6`}</code></pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">Client Whitelisting Servers</h3>
              <p className="text-gray-300 mb-4">Only connect to servers with known, trusted keys.</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-teal-300 mb-3">Verify with local key file</h4>
                  <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Client verifies server matches this exact key
`}</span>{`ascii-chat happy-sunset-ocean --server-key ~/.ssh/known_server.pub`}</code></pre>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-pink-300 mb-3">Verify with GitHub SSH keys</h4>
                  <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Fetches server's SSH keys from GitHub
`}</span>{`ascii-chat happy-sunset-ocean --server-key github:zfogg.keys`}</code></pre>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-300 mb-3">Verify with GitHub GPG keys</h4>
                  <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Fetches server's GPG keys from GitHub
`}</span>{`ascii-chat happy-sunset-ocean --server-key github:zfogg.gpg`}</code></pre>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Verify with GPG key ID</h4>
                  <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Verify against specific GPG key from keyring
`}</span>{`ascii-chat happy-sunset-ocean --server-key gpg:897607FA43DC66F6`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* No Encryption */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-pink-400 mb-6 border-b border-pink-900/50 pb-2">
            🚫 Disabling Encryption
          </h2>

          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6 mb-6">
            <p className="text-yellow-200">
              <strong>⚠️ Warning:</strong> Only disable encryption for local testing on trusted networks. Your video and audio will be sent unencrypted over the network.
            </p>
          </div>

          <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-x-auto"><code className="text-teal-300"><span className="text-gray-500">{`# Server with encryption disabled
`}</span>{`ascii-chat server --no-encrypt

`}<span className="text-gray-500">{`# Client must also disable encryption
`}</span>{`ascii-chat client 127.0.0.1 --no-encrypt`}</code></pre>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2">
            📚 Learn More
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://zfogg.github.io/ascii-chat/group__handshake.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-cyan-300 font-semibold mb-1">🔐 Handshake Protocol</h3>
              <p className="text-gray-400 text-sm">Detailed protocol documentation</p>
            </a>

            <a
              href="https://libsodium.gitbook.io/doc/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/50 border border-purple-900/50 rounded-lg p-4 hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-purple-300 font-semibold mb-1">📖 libsodium Docs</h3>
              <p className="text-gray-400 text-sm">Cryptography library reference</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
