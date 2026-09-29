import { BriefcaseBusiness, RadioTower, Lightbulb } from 'lucide-react'
import SectionHeading from './SectionHeading'
const items = [
  { icon: BriefcaseBusiness, role: 'Associate ServiceNow Administrator', org: 'Cyntexa Labs Pvt. Ltd. · Mar–Apr 2026', type: 'Professional experience', detail: 'Managed users, groups, roles and permissions; configured catalog items and record producers; automated approvals and notifications with Flow Designer; and created ACLs, reports and dashboards.' },
  { icon: RadioTower, role: 'Software Development Intern', org: 'North Western Railway · Jun–Jul 2025', type: 'Internship experience', detail: 'Built a bandwidth monitoring dashboard using Python, HTML, CSS and JavaScript. Used PRTG for network data and trend analysis, and added threshold alerts and downtime tracking. Resume-reported outcome: 15% improvement in network uptime reliability.' },
  { icon: Lightbulb, role: 'Research Intern', org: 'Genus Power Infrastructures Ltd. · Jun–Jul 2024', type: 'Research experience', detail: 'Researched smart metering technologies and communication protocols including RF, GSM, GPRS and DLMS/COSEM, and supported smart meter testing, calibration and reliability assessment.' },
]
export default function Experience() {
  return <section className="section experience-section" id="experience"><div className="shell"><SectionHeading eyebrow="WHERE I’VE LEARNED" title="Experience that shaped me." copy="Practical experience across enterprise platforms, railway network operations and smart energy research." />
    <div className="timeline">{items.map(({ icon: Icon, role, org, type, detail }, i) => <article className="timeline-item" key={role}><div className="timeline-marker"><Icon size={17} /></div><div className="timeline-card"><div className="timeline-top"><div><span className="timeline-type">{type} &nbsp; · &nbsp; 0{i + 1}</span><h3>{role}</h3><p className="timeline-org">{org}</p></div><span className="timeline-badge">Experience</span></div><p>{detail}</p></div></article>)}</div>
  </div></section>
}
