import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import { Search, ClipboardList, PenTool, Code2, Bug, Rocket, LifeBuoy } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading.jsx'

const STEPS = [
  { icon: Search, title: 'Discovery', desc: 'Understand the problem, users, and constraints.' },
  { icon: ClipboardList, title: 'Planning', desc: 'Scope, timeline, and technical approach agreed upfront.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes and UI that map to real user flows.' },
  { icon: Code2, title: 'Development', desc: 'Clean, component-based builds with regular check-ins.' },
  { icon: Bug, title: 'Testing', desc: 'Cross-device QA before anything ships.' },
  { icon: Rocket, title: 'Deployment', desc: 'Shipped, monitored, and handed over cleanly.' },
  { icon: LifeBuoy, title: 'Support', desc: 'Ongoing fixes, updates, and scaling help.' },
]

function StepIcon({ index, total, progress, Icon }) {
  const threshold = index / (total - 1)
  const glow = useTransform(progress, [Math.max(threshold - 0.1, 0), threshold], [0, 1])
  const ringColor = useTransform(glow, [0, 1], ['rgba(139,150,165,0.25)', 'rgba(0,229,168,0.6)'])
  const iconColor = useTransform(glow, [0, 1], ['#8B96A5', '#00E5A8'])
  const shadowBlur = useTransform(glow, [0, 1], [0, 22])
  const boxShadow = useMotionTemplate`0 0 ${shadowBlur}px rgba(0,229,168,${glow})`

  return (
    <motion.div
      style={{ boxShadow, borderColor: ringColor }}
      className="relative z-10 h-12 w-12 shrink-0 rounded-full glass flex items-center justify-center border"
    >
      <motion.span style={{ color: iconColor }}>
        <Icon className="h-5 w-5" />
      </motion.span>
    </motion.div>
  )
}

export default function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.4'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.6 })
  const lineScale = useTransform(progress, [0, 1], [0, 1])

  return (
    <section id="process" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our Process" title="A clear path, every time." />

        <div ref={containerRef} className="mt-16 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden lg:block absolute top-6 left-0 right-0 h-px origin-left bg-gradient-to-r from-mint via-blue to-violet"
          />
          <div className="grid lg:grid-cols-7 gap-8 lg:gap-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0"
              >
                <StepIcon index={i} total={STEPS.length} progress={progress} Icon={s.icon} />
                <div className="lg:mt-4">
                  <div className="text-[11px] text-muted font-mono">0{i + 1}</div>
                  <h3 className="font-display font-semibold text-[15px]">{s.title}</h3>
                  <p className="mt-1 text-[13px] text-muted leading-relaxed max-w-[16ch]">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
