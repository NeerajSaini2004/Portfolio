import { ArrowUpRight, Code2, Layers3, GraduationCap, BriefcaseBusiness } from 'lucide-react'
import SectionHeading from './SectionHeading'
const stats = [{ value: '2026', label: 'Graduation · 7.2 CGPA', icon: GraduationCap }, { value: '180+', label: 'DSA problems', icon: Code2 }, { value: 'MERN', label: 'Primary stack', icon: Layers3 }, { value: '5', label: 'Featured projects', icon: BriefcaseBusiness }]
export default function About() {
  return <section className="section about-section" id="about"><div className="shell"><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Engineer by education.\nBuilder by instinct." copy="A quick introduction to the person behind the projects." />
    <div className="about-grid"><div className="about-copy"><span className="about-index">01 / ABOUT</span><p>I’m a 2026 Electronics and Computer Engineering graduate from MBM University, Jodhpur. I enjoy turning ideas into useful, well-crafted web applications.</p><p>My primary stack is MERN, and I’ve worked on projects that bring together real product needs, thoughtful interfaces and practical backend systems. I care about writing clean, maintainable code and making experiences feel simple for the people using them.</p><p>Right now, I’m sharpening my DSA, backend and systems understanding while looking for a place to grow as a software developer.</p><a className="text-link" href="#contact">A little more about my journey <ArrowUpRight size={15} /></a></div>
      <div className="stats-grid">{stats.map(({ value, label, icon: Icon }) => <div className="stat-card" key={label}><Icon size={18} /><strong>{value}</strong><span>{label}</span></div>)}</div></div>
  </div></section>
}
