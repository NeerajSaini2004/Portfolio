import { useState } from 'react'
import { ArrowUpRight, Mail, Linkedin, Github, Send, CheckCircle2, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/site'
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError('Please complete all three fields.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Enter a valid email address.'); return }
    // No backend is configured yet. Opening a prefilled email keeps this form honest and usable.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\nReply to: ${form.email.trim()}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setError('')
    setSubmitted(true)
  }
  return <section className="section contact-section" id="contact"><div className="shell"><SectionHeading eyebrow="GET IN TOUCH" title="Let’s build something together." copy="I’m currently open to software development opportunities and interesting projects." />
    <div className="contact-grid"><div className="contact-intro"><span className="contact-label">HAVE A ROLE OR IDEA?</span><h3>Good things start<br />with a conversation.</h3><p>If you’re hiring for a full-stack role or would like to collaborate, I’d be glad to hear from you.</p><a className="email-link" href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email} <ArrowUpRight size={15} /></a><a className="email-link phone-link" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={16} /> {profile.phone}</a><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a></div></div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate><div className="form-heading"><span>DROP ME A NOTE</span><Send size={17} /></div><label>Your name<input name="name" autoComplete="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I address you?" /></label><label>Email address<input type="email" name="email" autoComplete="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label><label>Message<textarea name="message" rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about it..." /></label>{error && <p className="form-feedback error" role="alert">{error}</p>}{submitted && <p className="form-feedback" role="status"><CheckCircle2 size={15} /> Your email app should open with the message ready to send.</p>}<button className="button button-primary form-button" type="submit">Send message <ArrowUpRight size={15} /></button><p className="form-note">This opens your email app; no message is stored on this site.</p></form>
    </div></div></section>
}
