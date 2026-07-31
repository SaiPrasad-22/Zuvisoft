import SectionHeading from '../components/ui/SectionHeading.jsx'

const TECH = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
  'Firebase', 'Supabase', 'React Native', 'Flutter', 'TailwindCSS',
  'Docker', 'GitHub', 'AWS', 'Hostinger Cloud',
]

function Badge({ name }) {
  return (
    <div className="shrink-0 inline-flex items-center gap-2.5 rounded-full glass px-5 py-2.5 mx-2 transition-all duration-300 hover:scale-105 hover:shadow-glow hover:border-mint/40">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-mint to-blue" />
      <span className="font-display text-sm font-medium text-foreground/90 whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function Technologies() {
  const loop = [...TECH, ...TECH]
  return (
    <section id="technologies" className="relative py-20 sm:py-28 scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Technologies" title="A modern stack, chosen deliberately." center />
      </div>

      <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((t, i) => <Badge key={`${t}-${i}`} name={t} />)}
        </div>
      </div>
    </section>
  )
}
