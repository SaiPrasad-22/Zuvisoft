import { Mail, MessageCircle, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { useContactForm } from '../hooks/useContactForm.js'

const CONTACT_CARDS = [
  { icon: Mail, label: 'Email', value: 'hello@zuvisoft.in', href: 'mailto:hello@zuvisoft.in' },
  { icon: MessageCircle, label: 'WhatsApp Sales', value: '+91 63017 07059', href: 'https://wa.me/916301707059' },
  { icon: MessageCircle, label: 'WhatsApp Projects', value: '+91 91008 45115', href: 'https://wa.me/919100845115' },
  { icon: MapPin, label: 'Location', value: 'India · Serving Clients Worldwide', href: null },
]

const inputClass = 'mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-2.5 text-sm outline-none focus:border-mint/50 transition-colors'

export default function Contact() {
  const { form, status, errorMessage, onChange, onSubmit } = useContactForm()

  return (
    <section id="contact" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your project."
          subtitle="We reply within one business day. No bots — a real person reads every message."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6 items-stretch">
          <Reveal className="flex flex-col h-full">
            <div className="grid grid-rows-4 gap-3 flex-1">
              {CONTACT_CARDS.map((c) => {
                const content = (
                  <>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint/15 text-mint">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted">{c.label}</div>
                      <div className="mt-0.5 truncate font-medium">{c.value}</div>
                    </div>
                  </>
                )
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-2xl glass p-5 hover:bg-white/5 hover:border-mint/30 border border-transparent transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-4 rounded-2xl glass p-5">
                    {content}
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <Card as="form" onSubmit={onSubmit} className="h-full flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted" htmlFor="name">Name</label>
                  <input id="name" name="name" required value={form.name} onChange={onChange} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted" htmlFor="company">Company</label>
                  <input id="company" name="company" value={form.company} onChange={onChange} className={inputClass} placeholder="Company name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className={inputClass} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted" htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" value={form.phone} onChange={onChange} className={inputClass} placeholder="+91 …" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted" htmlFor="budget">Project Budget</label>
                  <input id="budget" name="budget" value={form.budget} onChange={onChange} className={inputClass} placeholder="e.g. ₹1,00,000 – ₹3,00,000" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted" htmlFor="timeline">Timeline</label>
                  <input id="timeline" name="timeline" value={form.timeline} onChange={onChange} className={inputClass} placeholder="e.g. 6–8 weeks" />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <label className="text-xs uppercase tracking-wider text-muted" htmlFor="message">Project Details</label>
                <textarea
                  id="message" name="message" required value={form.message} onChange={onChange}
                  className={`${inputClass} flex-1 min-h-[120px] resize-none`}
                  placeholder="What are you building?"
                />
              </div>

              <Button type="submit" disabled={status === 'sending'} className="justify-center disabled:opacity-60">
                {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </Button>

              {status === 'sent' && (
                <p className="flex items-center gap-2 text-sm text-mint"><CheckCircle2 className="h-4 w-4" /> Message sent — we'll reply within one business day.</p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-[#FF6B6B]"><AlertCircle className="h-4 w-4" /> {errorMessage || "Something went wrong — email us directly at hello@zuvisoft.in."}</p>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
