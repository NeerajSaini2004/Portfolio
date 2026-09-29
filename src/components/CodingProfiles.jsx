import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'
import AnimatedStat from './AnimatedStat'
import { codingProfiles } from '../data/site'

export default function CodingProfiles() {
  const reduce = useReducedMotion()

  return <section className="section coding-section" id="coding-profiles">
    <div className="shell">
      <SectionHeading eyebrow="ON THE CHALLENGE PLATFORMS" title="Coding profiles." copy="A snapshot of my activity on each platform. The counts are shown separately and are not combined." />
      <div className="coding-grid">
        {codingProfiles.map((profile, index) => <motion.article className={`coding-card coding-card-${profile.mark.toLowerCase()}`} key={profile.name}
          initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.08 }}>
          <div className="coding-card-top"><span className="coding-mark">{profile.mark}</span><span className="coding-index">0{index + 1} / PROFILE</span></div>
          <h3>{profile.name}</h3><p className="coding-subtitle">{profile.subtitle}</p>
          <div className="coding-stats">{profile.stats.map(([value, label]) => <div className="coding-stat" key={label}><AnimatedStat value={value} /><span>{label}</span></div>)}</div>
          <a className="coding-link" href={profile.url} target="_blank" rel="noreferrer">{profile.button}<ExternalLink size={14} /><ArrowUpRight className="coding-arrow" size={15} /></a>
        </motion.article>)}
      </div>
    </div>
  </section>
}
