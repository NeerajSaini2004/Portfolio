import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/site'
import HeroEnergyFlow from './HeroEnergyFlow'

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = reduce ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
  function handlePointerMove(event) {
    if (reduce || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    event.currentTarget.style.setProperty('--pointer-x', `${x * 100}%`)
    event.currentTarget.style.setProperty('--pointer-y', `${y * 100}%`)
    event.currentTarget.style.setProperty('--parallax-x', `${(x - 0.5) * 7}px`)
    event.currentTarget.style.setProperty('--parallax-y', `${(y - 0.5) * 7}px`)
  }
  function resetPointer(event) {
    event.currentTarget.style.setProperty('--parallax-x', '0px')
    event.currentTarget.style.setProperty('--parallax-y', '0px')
  }
  return <section className="hero" id="home" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}><div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
    {!reduce && <HeroEnergyFlow />}
    <div className="shell hero-inner">
      <motion.div className="hero-copy" {...enter} transition={{ duration: 0.7, staggerChildren: 0.1 }}>
        <div className="availability"><span className="pulse-dot" /> Open to Software Developer Opportunities</div>
        <p className="hero-intro">Hi, I’m <span>Neeraj Saini</span> <span aria-hidden="true">👋</span></p>
        <h1>Full-Stack<br /><span>Developer.</span></h1>
        <p className="hero-description">Full-Stack Developer focused on creating modern, scalable and user-focused web applications with React, Node.js, Express and MongoDB.</p>
        <div className="hero-meta"><span><MapPin size={15} /> Rajasthan, India</span><i /> <span>Electronics & Computer Engineering ’26</span></div>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16} /></a><a className="button button-quiet" href={profile.resume} download>Download resume <ArrowUpRight size={16} /></a></div>
        <div className="social-row"><span>FIND ME ON</span><a href={profile.github} aria-label="GitHub"><Github /></a><a href={profile.linkedin} aria-label="LinkedIn"><Linkedin /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a></div>
      </motion.div>
      <div className="hero-parallax"><motion.div className="hero-art" initial={reduce ? false : { opacity: 0, scale: 0.96, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.42 }} aria-label="Decorative code editor illustration">
        <div className="art-top"><div className="window-dots"><i /><i /><i /></div><span>neeraj.js</span><Sparkles size={14} /></div>
        <div className="code-lines"><p><b>01</b><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p><p><b>02</b><span className="indent" /><span className="code-green">name</span>: <span className="code-yellow">'Neeraj Saini'</span>,</p><p><b>03</b><span className="indent" /><span className="code-green">stack</span>: [<span className="code-yellow">'React'</span>,</p><p><b>04</b><span className="indent double" /><span className="code-yellow">'Node.js'</span>, <span className="code-yellow">'MongoDB'</span>],</p><p><b>05</b><span className="indent" /><span className="code-green">focus</span>: <span className="code-yellow">'meaningful products'</span>,</p><p><b>06</b><span className="indent" /><span className="code-green">available</span>: <span className="code-purple">true</span>,</p><p><b>07</b>{'}'}<span className="cursor" /></p></div>
        <div className="art-bottom"><span className="art-chip"><span className="chip-orbit">✳</span> Curious by default</span><span className="art-chip code-chip">&lt; built with care /&gt;</span></div>
      </motion.div></div>
    </div><a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
  </section>
}
