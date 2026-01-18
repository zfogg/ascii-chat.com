import Footer from '../components/Footer'
import TrackedLink from '../components/TrackedLink'

export default function Env() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-green-400">🌍</span> Environment Variables
          </h1>
          <p className="text-xl text-gray-300">
            Configuration through environment variables
          </p>
        </header>

        {/* Security Variables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6 border-b border-green-900/50 pb-2">
            🔒 Security Variables
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">ASCII_CHAT_INSECURE_NO_HOST_IDENTITY_CHECK</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-red-400">Purpose:</strong> Disables host identity verification (known_hosts checking)</p>
                <p><strong className="text-purple-400">Values:</strong> <code className="bg-gray-950 px-2 py-1 rounded">1</code> (enable), unset or any other value (disable, default)</p>
                <p className="bg-red-950/30 border border-red-700/50 rounded p-3 mt-3">
                  <strong className="text-red-300">⚠️ DANGER:</strong> This completely bypasses security checks and makes connections vulnerable to man-in-the-middle attacks
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">SSH_AUTH_SOCK</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-green-400">Purpose:</strong> SSH agent socket for secure key authentication</p>
                <p><strong className="text-purple-400">Values:</strong> Path to SSH agent socket (e.g., <code className="bg-gray-950 px-2 py-1 rounded">/tmp/ssh-XXXXXX/agent.12345</code>)</p>
                <p><strong className="text-cyan-400">Security:</strong> ✅ Secure - uses SSH agent for key management</p>
                <p><strong className="text-teal-400">When to use:</strong> Preferred method for SSH key authentication (automatically detected)</p>
                <p><strong className="text-pink-400">Used for:</strong> SSH key authentication without storing passphrases in environment</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">ASCII_CHAT_KEY_PASSWORD</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-yellow-400">Purpose:</strong> Provides key passphrase for encrypted SSH or GPG keys</p>
                <p><strong className="text-purple-400">Values:</strong> The passphrase string for your encrypted key</p>
                <p><strong className="text-cyan-400">Security:</strong> ⚠️ Sensitive data - contains your key passphrase - prefer ssh-agent/gpg-agent</p>
                <p><strong className="text-teal-400">When to use:</strong> When using encrypted keys and you want to avoid interactive passphrase prompts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Variables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6 border-b border-green-900/50 pb-2">
            🖥️ Terminal Detection Variables
          </h2>

          <p className="text-gray-300 mb-6">
            These variables are automatically set by your terminal and system. ascii-chat reads them to detect display capabilities.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">TERM</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-cyan-400">Purpose:</strong> Terminal type detection for display capabilities</p>
                <p><strong className="text-purple-400">Set by:</strong> Terminal emulators</p>
                <p><strong className="text-pink-400">Used for:</strong> Determining color support, character encoding, and display features</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">COLORTERM</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-purple-400">Purpose:</strong> Additional terminal color capability detection</p>
                <p><strong className="text-cyan-400">Set by:</strong> Modern terminal emulators</p>
                <p><strong className="text-pink-400">Used for:</strong> Enhanced color support detection beyond TERM</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">LANG</code>, <code className="bg-gray-950 px-3 py-1 rounded">LC_ALL</code>, <code className="bg-gray-950 px-3 py-1 rounded">LC_CTYPE</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-teal-400">Purpose:</strong> Locale and character encoding detection</p>
                <p><strong className="text-cyan-400">Set by:</strong> System locale</p>
                <p><strong className="text-pink-400">Used for:</strong> UTF-8 support detection and character encoding</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">TTY</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-pink-400">Purpose:</strong> Terminal device detection</p>
                <p><strong className="text-cyan-400">Set by:</strong> Terminal sessions</p>
                <p><strong className="text-purple-400">Used for:</strong> Determining if running in a real terminal vs. script</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">LINES</code>, <code className="bg-gray-950 px-3 py-1 rounded">COLUMNS</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-cyan-400">Purpose:</strong> Terminal size detection for display dimensions</p>
                <p><strong className="text-purple-400">Set by:</strong> Terminal emulators</p>
                <p><strong className="text-pink-400">Used for:</strong> Auto-detecting optimal video dimensions</p>
              </div>
            </div>
          </div>
        </section>

        {/* System Variables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 border-b border-purple-900/50 pb-2">
            💻 System Variables
          </h2>

          <div className="space-y-8">
            {/* POSIX */}
            <div>
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">POSIX (Linux/macOS)</h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-teal-900/30 rounded-lg p-6">
                  <h4 className="text-green-300 font-semibold text-xl mb-3">
                    <code className="bg-gray-950 px-3 py-1 rounded">USER</code>
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-teal-400">Purpose:</strong> Username detection for system identification</p>
                    <p><strong className="text-cyan-400">Set by:</strong> POSIX systems</p>
                    <p><strong className="text-pink-400">Used for:</strong> System user identification and logging</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6">
                  <h4 className="text-green-300 font-semibold text-xl mb-3">
                    <code className="bg-gray-950 px-3 py-1 rounded">HOME</code>
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-purple-400">Purpose:</strong> User home directory for configuration files</p>
                    <p><strong className="text-cyan-400">Set by:</strong> System</p>
                    <p><strong className="text-pink-400">Used for:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>SSH key auto-detection (<code className="bg-gray-950 px-2 py-1 rounded">~/.ssh/</code>)</li>
                      <li>Configuration file paths (<code className="bg-gray-950 px-2 py-1 rounded">~/.config/ascii-chat/</code>)</li>
                      <li>Path expansion with <code className="bg-gray-950 px-2 py-1 rounded">~</code> prefix</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Windows */}
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Windows</h3>
              <div className="space-y-6">
                <div className="bg-gray-900/50 border border-cyan-900/30 rounded-lg p-6">
                  <h4 className="text-green-300 font-semibold text-xl mb-3">
                    <code className="bg-gray-950 px-3 py-1 rounded">USERNAME</code>
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-cyan-400">Purpose:</strong> Username detection for system identification</p>
                    <p><strong className="text-purple-400">Set by:</strong> Windows system</p>
                    <p><strong className="text-pink-400">Used for:</strong> System user identification and logging</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6">
                  <h4 className="text-green-300 font-semibold text-xl mb-3">
                    <code className="bg-gray-950 px-3 py-1 rounded">USERPROFILE</code>
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-purple-400">Purpose:</strong> User home directory for configuration files</p>
                    <p><strong className="text-cyan-400">Set by:</strong> Windows system</p>
                    <p><strong className="text-pink-400">Used for:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>SSH key auto-detection</li>
                      <li>Configuration file paths (<code className="bg-gray-950 px-2 py-1 rounded">%APPDATA%\ascii-chat\</code>)</li>
                      <li>Path expansion with <code className="bg-gray-950 px-2 py-1 rounded">~</code> prefix</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-teal-900/30 rounded-lg p-6">
                  <h4 className="text-green-300 font-semibold text-xl mb-3">
                    <code className="bg-gray-950 px-3 py-1 rounded">_NT_SYMBOL_PATH</code>
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p><strong className="text-teal-400">Purpose:</strong> Windows debug symbol path for crash analysis</p>
                    <p><strong className="text-cyan-400">Set by:</strong> Windows debug tools</p>
                    <p><strong className="text-pink-400">Used for:</strong> Enhanced crash reporting and debugging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development/Testing Variables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-pink-400 mb-6 border-b border-pink-900/50 pb-2">
            🧪 Development & Testing Variables
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-pink-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">CI</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-pink-400">Purpose:</strong> Continuous Integration environment detection</p>
                <p><strong className="text-purple-400">Values:</strong> Any non-empty value indicates CI environment</p>
                <p><strong className="text-cyan-400">Used for:</strong> Adjusting test behavior and terminal detection in automated environments</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-cyan-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">TESTING</code>, <code className="bg-gray-950 px-3 py-1 rounded">CRITERION_TEST</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-cyan-400">Purpose:</strong> Test environment detection</p>
                <p><strong className="text-purple-400">Values:</strong> Any non-empty value indicates test environment</p>
                <p><strong className="text-pink-400">Used for:</strong> Reducing test data sizes and adjusting performance expectations</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">WEBCAM_DISABLED</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-purple-400">Purpose:</strong> Automatically enables test pattern mode without requiring <code className="bg-gray-950 px-2 py-1 rounded">--test-pattern</code> flag</p>
                <p><strong className="text-cyan-400">Values:</strong> <code className="bg-gray-950 px-2 py-1 rounded">1</code>, <code className="bg-gray-950 px-2 py-1 rounded">true</code>, <code className="bg-gray-950 px-2 py-1 rounded">yes</code>, or <code className="bg-gray-950 px-2 py-1 rounded">on</code> (case-insensitive)</p>
                <p><strong className="text-pink-400">Used for:</strong> CI/CD pipelines and testing environments where no physical webcam is available</p>
                <p><strong className="text-teal-400">Effect:</strong> Sets test pattern mode, using generated pattern instead of webcam input</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-teal-900/30 rounded-lg p-6">
              <h3 className="text-green-300 font-semibold text-xl mb-3">
                <code className="bg-gray-950 px-3 py-1 rounded">ASCIICHAT_QUERY_SERVER</code>
              </h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-teal-400">Purpose:</strong> Path to ascii-query-server executable for development</p>
                <p><strong className="text-purple-400">Values:</strong> Full path to the query server binary</p>
                <p><strong className="text-pink-400">Used for:</strong> Development and testing when the query server is not in standard locations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
