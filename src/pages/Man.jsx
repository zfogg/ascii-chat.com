import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

export default function Man() {
  const [manHtml, setManHtml] = useState('')

  useEffect(() => {
    fetch('/ascii-chat-man.html')
      .then(r => r.text())
      .then(html => {
        // Extract just the body content
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
        if (bodyMatch) {
          setManHtml(bodyMatch[1])
        } else {
          setManHtml(html)
        }
      })
      .catch(e => console.error('Failed to load man page:', e))
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">📖</span> Man Page
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Complete command-line reference for ascii-chat
          </p>
        </header>

        {/* Man page content */}
        <div
          className="man-page-content"
          dangerouslySetInnerHTML={{ __html: manHtml }}
        />

        {/* Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  )
}
