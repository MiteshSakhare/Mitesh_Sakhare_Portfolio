// App.jsx

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LiveChat from './components/LiveChat'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const getInitialMode = () => {
    try {
      const saved = localStorage.getItem('theme') // 'dark' | 'light'
      if (saved === 'dark') return true
      if (saved === 'light') return false
    } catch {
      // continue without localStorage (e.g., private mode)
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }

  const [darkMode, setDarkMode] = useState(getInitialMode)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
      try {
        localStorage.setItem('theme', 'dark')
      } catch {
        // intentionally ignore persist errors
      }
    } else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
      try {
        localStorage.setItem('theme', 'light')
      } catch {
        // intentionally ignore persist errors
      }
    }
  }, [darkMode])

  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      <LiveChat />
    </div>
  )
}

export default App
