import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/site'
export default function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><a className="brand" href="#home"><span className="brand-mark">N<span>.</span></span><span>Neeraj Saini</span></a><p>© 2026 Neeraj Saini. Built with React.</p><div className="footer-links"><a href={profile.github} aria-label="GitHub"><Github size={17} /></a><a href={profile.linkedin} aria-label="LinkedIn"><Linkedin size={17} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a><a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a></div></div></footer>
}
