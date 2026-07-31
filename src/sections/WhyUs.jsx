import { Zap, Layers3, Search, Smartphone, ShieldCheck, HeartHandshake, Paintbrush, Cpu } from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

const REASONS = [
  { icon: Zap, label: 'Fast Delivery' },
  { icon: Layers3, label: 'Scalable Architecture' },
  { icon: Search, label: 'SEO Ready' },
  { icon: Smartphone, label: 'Mobile First' },
  { icon: ShieldCheck, label: 'Secure Development' },
  { icon: HeartHandshake, label: 'Dedicated Support' },
  { icon: Paintbrush, label: 'Clean UI' },
  { icon: Cpu, label: 'Modern Tech Stack' },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why ZuviSoft" title="The right partner makes all the difference." />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 0.05}
              className="group relative flex flex-col items-center text-center gap-3 rounded-xl glass p-5 overflow-hidden border border-transparent hover:border-mint/30 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-mint/[0.08] via-transparent to-blue/[0.08] transition-opacity duration-300" />
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-mint/10 text-mint transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <r.icon className="h-5 w-5" />
              </span>
              <span className="relative text-sm font-medium">{r.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
