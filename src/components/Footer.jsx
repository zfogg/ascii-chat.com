export default function Footer() {
  return (
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
        {' · '}
        <a href="https://discovery.ascii-chat.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
          🔍 ACDS
        </a>
      </p>
      <p className="text-sm">
        ascii-chat · Video chat in your terminal
      </p>
      <p className="text-sm mt-2">
        made with 💛 by{' '}
        <a href="https://zfo.gg" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          @zfogg
        </a>
      </p>
    </footer>
  )
}
