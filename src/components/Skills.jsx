import { Code2, Server, Database, Wrench, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { skills } from '../data/site'
const icons = { Languages: Code2, Frontend: Code2, Backend: Server, Database, 'Data & platform': Database, Tools: Wrench }
export default function Skills() {
  return <section className="section skills-section" id="skills"><div className="shell"><SectionHeading eyebrow="TOOLS OF THE TRADE" title="My everyday stack." copy="A focused toolkit for taking an idea from interface to production-ready application." />
    <div className="skill-grid">{Object.entries(skills).map(([group, items], idx) => { const Icon = icons[group]; return <article className="skill-card" key={group}><div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><span className="skill-count">0{idx + 1}</span></div><h3>{group}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div><ArrowUpRight className="skill-arrow" size={16} /></article> })}</div>
  </div></section>
}
