import { MapPin, GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
export default function Education() {
  return <section className="section education-section" id="education"><div className="shell"><SectionHeading eyebrow="THE FOUNDATION" title="Built on a curious mind." />
    <article className="education-card"><span className="education-icon"><GraduationCap size={22} /></span><div className="education-main"><span className="education-label">BACHELOR’S DEGREE · 2026 · 7.2 CGPA</span><h3>MBM University</h3><p>B.E. in Electronics and Computer Engineering</p><span className="education-location"><MapPin size={14} /> Jodhpur, Rajasthan</span></div><span className="education-year">2026</span></article>
  </div></section>
}
