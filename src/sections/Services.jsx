import Reveal from '../components/ui/Reveal.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { SERVICES } from '../lib/data/services.js'

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="absolute inset-0 grid-bg opacity-50" style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)' }} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to ship."
          subtitle="From discovery to deployment, we handle the entire product lifecycle so you can focus on growing your business."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Card className="group relative overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-mint/25 to-blue/20 text-mint">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold font-display">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
