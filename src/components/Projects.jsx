import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, ShoppingBag, BookOpen, BriefcaseBusiness, Activity, Languages } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/site'
const icons = { market: ShoppingBag, learning: BookOpen, portal: BriefcaseBusiness, bandwidth: Activity, english: Languages }
function ProjectVisual({ type, title }) {
  const Icon = icons[type]
  return <div className={`project-visual visual-${type}`} aria-label={`${title} illustrative interface concept`}>
    <div className="mock-browser"><div className="mock-chrome"><span /><span /><span /><div>Concept preview</div><i>↗</i></div><div className="mock-content">
      {type === 'market' && <><aside><strong>sb.</strong><i /><i /><i /><i /></aside><div className="mock-main"><span className="mock-kicker">YOUR CAMPUS MARKETPLACE</span><strong>Knowledge<br />finds a new home.</strong><div className="mock-search">⌕ &nbsp; Search books, notes...</div><div className="book-row"><div className="book-cover cover-one">DSA</div><div className="book-cover cover-two">DBMS</div><div className="book-cover cover-three">OS</div></div></div></>}
      {type === 'learning' && <><aside><strong>learn.</strong><i /><i /><i /><i /></aside><div className="mock-main"><span className="mock-kicker">YOUR LEARNING SPACE</span><strong>Keep your<br />momentum.</strong><div className="course-progress"><span>Web development <b>72%</b></span><i><em /></i></div><div className="course-progress"><span>Data structures <b>48%</b></span><i><em /></i></div></div></>}
      {type === 'portal' && <><aside><strong>path.</strong><i /><i /><i /><i /></aside><div className="mock-main"><span className="mock-kicker">CAMPUS PLACEMENTS</span><strong>Find your<br />next opportunity.</strong><div className="mock-search">⌕ &nbsp; Search roles and companies</div><div className="portal-job"><b>Frontend Developer</b><span>Applications open · 24 applicants</span></div></div></>}
      {type === 'bandwidth' && <><aside><strong>net.</strong><i /><i /><i /><i /></aside><div className="mock-main bandwidth-main"><span className="mock-kicker">NETWORK OVERVIEW · SAMPLE DATA</span><strong>Bandwidth monitor</strong><div className="bandwidth-stats"><span><b>78.4</b> Mbps in</span><span><b>24.1</b> Mbps out</span></div><div className="bandwidth-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><span className="bandwidth-alert">● &nbsp; Threshold alerts active</span></div></>}
      {type === 'english' && <><aside><strong>word.</strong><i /><i /><i /><i /></aside><div className="mock-main english-main"><span className="mock-kicker">WORD OF THE DAY</span><strong>serendipity</strong><span className="phonetic">/ˌser.ənˈdɪp.ə.ti/ &nbsp; noun</span><p>The art of finding something good without looking for it.</p><div className="word-pill">Daily vocabulary <span>↗</span></div></div></>}
      <div className="mock-float"><Icon size={15} /><span>{type === 'market' ? 'Verified student' : type === 'learning' ? 'Your next lesson' : type === 'portal' ? 'Recruiter dashboard' : type === 'bandwidth' ? 'Network status active' : 'Learn a new word'}</span></div>
    </div></div>
  </div>
}
export default function Projects() {
  const reduce = useReducedMotion()
  return <section className="section projects-section" id="projects"><div className="shell"><SectionHeading eyebrow="SELECTED WORK" title="A few things I’ve built." copy="Product-minded projects that bring full-stack fundamentals to life." />
    <div className="projects-list">{projects.map((project, index) => <motion.article className={`project-card ${index % 2 ? 'reverse' : ''}`} key={project.number} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.08 }}>
      <ProjectVisual type={project.visual} title={project.title} />
      <div className="project-info"><span className="project-number">PROJECT &nbsp; / &nbsp; {project.number}</span><p className="project-subtitle">{project.subtitle}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{(project.live || project.github) && <div className="project-links">{project.live && <a className="project-link primary-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>Live demo <ExternalLink size={14} /></a>}{project.github && <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}><Github size={15} /> GitHub</a>}</div>}</div>
    </motion.article>)}</div>
  </div></section>
}
