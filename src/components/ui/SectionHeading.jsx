import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, center = false, className = '' }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <div className={`eyebrow ${center ? 'flex justify-center' : ''}`}>{eyebrow}</div>}
      <h2 className="mt-3 text-3xl sm:text-5xl font-display font-semibold">{title}</h2>
      {subtitle && <p className="mt-4 text-muted text-base sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
