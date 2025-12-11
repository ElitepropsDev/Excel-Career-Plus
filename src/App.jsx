import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import Spinner from './components/Spinner'

// Pages
import Home from './pages/Home'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Partners from './pages/Partners.jsx'
import About from './pages/About.jsx'
import Faq from './pages/Faq.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import SearchPage from './pages/SearchPage.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'
import KnowledgeHub from './pages/KnowledgeHub.jsx'

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [loading, setLoading] = useState(true)

  // Handle loading state
  useEffect(() => {
    const handleLoad = () => setLoading(false)

    if (document.readyState === "complete") {
      setLoading(false)
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => window.removeEventListener("load", handleLoad)
  }, [])

  if (loading) return <Spinner />

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Router>
        <ScrollToTop />

        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path='/knowledgeHub' element = {<KnowledgeHub />} />
        </Routes>

        <Footer theme={theme} />
      </Router>
    </div>
  )
}

export default App
