import { useEffect } from 'react'
import AmbientBackground from './components/AmbientBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ProblemSolving from './components/ProblemSolving'
import CodingProfiles from './components/CodingProfiles'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const targets = document.querySelectorAll('.section .shell > :not(.section-heading)')
    targets.forEach(target => target.classList.add('reveal-pending'))
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })
    targets.forEach(target => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return <><AmbientBackground /><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><ProblemSolving /><CodingProfiles /><Education /><Contact /></main><Footer /></>
}
