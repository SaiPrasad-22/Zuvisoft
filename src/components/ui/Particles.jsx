const PARTICLES = [
  { top: '12%', left: '18%', size: 3, delay: '0s' },
  { top: '22%', left: '68%', size: 2, delay: '0.6s' },
  { top: '38%', left: '42%', size: 2, delay: '1.2s' },
  { top: '55%', left: '78%', size: 3, delay: '0.3s' },
  { top: '64%', left: '12%', size: 2, delay: '1.6s' },
  { top: '78%', left: '55%', size: 2, delay: '0.9s' },
  { top: '30%', left: '88%', size: 2, delay: '2s' },
  { top: '85%', left: '30%', size: 3, delay: '1.4s' },
]

export default function Particles({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-mint animate-twinkle"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}
    </div>
  )
}
