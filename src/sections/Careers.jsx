import Reveal from '../components/ui/Reveal.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'

const PERKS = [
  'Work from home — India only',
  'Full-time, paid training (4 weeks)',
  'Day, evening or night shift',
  'No experience required',
]

export default function Careers() {
  return (
    <section id="careers" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Card className="relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-mint/[0.12] blur-3xl" />
            <div className="absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-violet/[0.14] blur-3xl" />
            <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div>
                <div className="eyebrow">Careers</div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-display font-semibold">
                  We're hiring Remote Project Executives.
                </h2>
                <p className="mt-4 text-muted">
                  Full-time. Work from home anywhere in India. Freshers welcome — we train you fully.
                  Up to ₹30,000/month with project &amp; performance bonuses.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="mailto:hello@zuvisoft.in?subject=Job Application — Remote Project Executive">
                    Apply now →
                  </Button>
                  <Button href="https://wa.me/916301707059" target="_blank" rel="noreferrer" variant="ghost">
                    WhatsApp HR
                  </Button>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 text-mint">✓</span>
                    <span className="text-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
