import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import Spinner from './components/Spinner'  // 🌀 Added spinner import

// Pages
import Home from './pages/Home'
import Programs from './pages/Programs'
import Projects from './pages/Projects'
import CapacityDevelopment from './pages/CapacityDevelopment'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

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
  const [loading, setLoading] = useState(true) // 🌀 Added loading state

  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
  const handleLoad = () => setLoading(false)

  if (document.readyState === "complete") {
    setLoading(false)
  } else {
    window.addEventListener("load", handleLoad)
  }

  return () => window.removeEventListener("load", handleLoad)
}, [])


  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (loading) return <Spinner /> // 🌀 Show spinner before rendering site

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Router>
        {/* ScrollToTop ensures each route starts at top */}
        <ScrollToTop />

        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/capacity" element={<CapacityDevelopment />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer theme={theme} />
      </Router>

      {/* Custom Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
        style={{ transition: 'transform 0.1s ease-out' }}
      ></div>

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
      ></div>
    </div>
  )
}

export default App
