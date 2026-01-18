import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Crypto from './pages/Crypto'
import Man from './pages/Man'
import Env from './pages/Env'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/man" element={<Man />} />
        <Route path="/env" element={<Env />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}
