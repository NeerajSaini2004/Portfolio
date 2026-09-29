import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/site'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Coding', '#coding-profiles'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) setActive(`#${visible.target.id}`)
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <header className={`nav-wrap${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}><nav className="navbar shell" aria-label="Main navigation">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">N<span>.</span></span><span>Neeraj Saini</span></a>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(([label, href]) => <a key={label} href={href} className={active === href ? 'is-active' : ''} aria-current={active === href ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-resume" href={profile.resume} download>Resume <ArrowUpRight size={14} /></a>
    </div>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </nav></header>
}
