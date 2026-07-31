import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock } from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import AnimatedCounter from '../components/ui/AnimatedCounter.jsx'
import Particles from '../components/ui/Particles.jsx'
import DashboardMockup from '../components/mockups/DashboardMockup.jsx'
import PhoneMockup from '../components/mockups/PhoneMockup.jsx'
import CodeMockup from '../components/mockups/CodeMockup.jsx'
import { useMouseParallax, useParallaxLayer } from '../hooks/useMouseParallax.js'

const STATS = [
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Responsive Builds' },
  { value: 10, suffix: '+', label: 'Business Domains' },
  { value: 24, suffix: '/7', label: 'Support' },
]

function MockupCluster() {
  const { ref, x, y } = useMouseParallax(18)
  const dash = useParallaxLayer(x, y, 0.6)
  const phone = useParallaxLayer(x, y, 1)
  const code = useParallaxLayer(x, y, 0.8)

  return (
    <div ref={ref} className="relative hidden lg:block h-[480px]">
      {/* soft glow behind the cluster */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-16 h-56 w-56 rounded-full bg-mint/[0.16] blur-3xl" />
        <div className="absolute right-4 bottom-10 h-52 w-52 rounded-full bg-blue/[0.14] blur-3xl" />
      </div>

      <motion.div
        style={{ x: dash.x, y: dash.y }}
        initial={{ opacity: 0, y: 30, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-6 w-[300px] animate-float"
      >
        <DashboardMockup className="shadow-2xl shadow-black/50" />
      </motion.div>

      <motion.div
        style={{ x: phone.x, y: phone.y }}
        initial={{ opacity: 0, y: 30, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-2 top-0 animate-float-slow"
      >
        <PhoneMockup />
      </motion.div>

      <motion.div
        style={{ x: code.x, y: code.y, animationDelay: '1.2s' }}
        initial={{ opacity: 0, y: 30, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: -1.5 }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-12 bottom-2 w-[260px] animate-float"
      >
        <CodeMockup className="shadow-2xl shadow-black/50" />
      </motion.div>

      {/* connective dotted line evoking a connected product ecosystem */}
      <svg className="absolute inset-0 h-full w-full -z-10" viewBox="0 0 400 480" fill="none">
        <path d="M150 100 C 220 140, 240 180, 300 60" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
        <path d="M120 200 C 160 280, 140 340, 180 380" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#00E5A8" />
            <stop offset="1" stopColor="#22C1FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 sm:pt-48 pb-24 sm:pb-32 overflow-hidden">
      {/* animated grid */}
      <div className="absolute inset-0 grid-bg animate-grid-pan" style={{ WebkitMaskImage: 'radial-gradient(ellipse at top, black 30%, transparent 75%)', maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 75%)' }} />

      {/* drifting gradient blobs */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 h-[440px] w-[860px] max-w-[95vw] rounded-full bg-mint/[0.12] blur-3xl animate-drift" />
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-violet/[0.14] blur-3xl animate-drift" style={{ animationDelay: '3s', animationDirection: 'reverse' }} />
      <div className="absolute top-72 left-10 h-56 w-56 rounded-full bg-blue/[0.1] blur-3xl animate-drift" style={{ animationDelay: '6s' }} />

      <Particles className="opacity-70" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="text-center lg:text-left">
            <Reveal className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-dot" />
              Product Engineering Studio
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-6xl lg:text-[3.4rem] xl:text-7xl font-display font-semibold leading-[1.05]">
                Building modern software
                <br />
                <span className="text-gradient">that businesses actually need.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                We design and develop high-performance websites, web applications, mobile apps,
                dashboards, and AI-powered software that help businesses launch, grow, and scale.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button href="#contact" magnetic>
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="ghost">
                <CalendarClock className="h-4 w-4" /> Book Free Consultation
              </Button>
            </Reveal>

            <Reveal delay={0.32} className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto lg:mx-0">
              {STATS.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <MockupCluster />
        </div>
      </div>
    </section>
  )
}
