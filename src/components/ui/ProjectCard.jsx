import { ArrowUpRight } from 'lucide-react'
import Button from './Button.jsx'

/**
 * Reusable portfolio/case-study card: image on top (fixed aspect ratio,
 * object-cover so every card crops consistently), content below.
 * `cta.type` is either 'link' (renders a real Button as <a>) or
 * 'label' (renders a non-interactive pill — e.g. "Private Project").
 */
export default function ProjectCard({ image, title, subtitle, description, cta }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-mint/30 hover:shadow-glow">
      <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.02]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/85 via-base/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-mint/10 via-transparent to-blue/10" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wider text-mint font-medium">{subtitle}</p>
        <h3 className="mt-2 font-display font-semibold text-[26px] leading-tight">{title}</h3>
        <p className="mt-3 text-base text-muted leading-relaxed flex-1">{description}</p>

        <div className="mt-6">
          {cta.type === 'link' ? (
            <Button href={cta.href} target="_blank" rel="noreferrer">
              {cta.text} <ArrowUpRight className="h-4 w-4" />
            </Button>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-muted cursor-default select-none">
              {cta.text}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
