import { Target, Globe2, Layers } from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

const CARDS = [
  {
    icon: Target,
    title: 'Built with Purpose',
    desc: 'Every product starts from the business problem, not the tech stack — we scope for outcomes, not feature checklists.',
  },
  {
    icon: Globe2,
    title: 'Global Collaboration',
    desc: 'Distributed teams across India and the US, working in your timezone with daily async updates and clear ownership.',
  },
  {
    icon: Layers,
    title: 'Scalable Engineering',
    desc: 'Architecture that holds up past the demo — built to handle real traffic, real data, and real growth from day one.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="A product engineering studio built for growth."
          subtitle="We're not a website shop. We build the software layer businesses run on — web platforms, mobile apps, dashboards, and AI-driven tools engineered to scale."
        />

        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Card className="group hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-mint/25 to-blue/20 text-mint">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold font-display">{c.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{c.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
