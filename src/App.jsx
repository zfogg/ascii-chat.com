import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Crypto from './pages/Crypto'
import Man from './pages/Man'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/man" element={<Man />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}
