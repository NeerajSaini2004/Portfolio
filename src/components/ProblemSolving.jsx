import { Braces, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
const topics = ['Arrays', 'Strings', 'Linked Lists', 'Stack', 'Queue', 'Trees', 'Hashing', 'Searching', 'Sorting']
export default function ProblemSolving() {
  return <section className="section dsa-section"><div className="shell"><SectionHeading eyebrow="ALWAYS LEARNING" title="Problem solving, one step at a time." copy="Building the fundamentals behind reliable software, one problem at a time." />
    <div className="dsa-card"><div className="dsa-number"><Braces size={19} /><strong>180<span>+</span></strong><small>PROBLEMS SOLVED</small><div className="dsa-line" /></div><div className="dsa-content"><div className="dsa-title"><span>THE FUNDAMENTALS</span><h3>Stronger logic.<br />Better solutions.</h3></div><div className="topic-wrap">{topics.map(topic => <span key={topic}>{topic}</span>)}</div><p>I’m continuously improving my problem-solving skills and learning to think through edge cases, complexity and clean solutions.</p><a href="#contact" className="text-link">Let’s talk about engineering <ArrowUpRight size={15} /></a></div></div>
  </div></section>
}
