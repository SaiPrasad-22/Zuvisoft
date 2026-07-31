import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ProjectCard from '../components/ui/ProjectCard.jsx'
import { PORTFOLIO } from '../lib/data/portfolio.js'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden">
      {/* subtle background: grid texture + radial glow + blurred gradient, kept very low opacity */}
      <div
        className="absolute inset-0 grid-bg opacity-[0.15]"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 15%, transparent 65%)',
          maskImage: 'radial-gradient(ellipse at center, black 15%, transparent 65%)',
        }}
      />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-mint/[0.06] blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="A sample of what we've shipped."
          subtitle="Representative work across the categories we build in — real projects, real interfaces."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {PORTFOLIO.map((p) => (
            <motion.div key={p.title} variants={item}>
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
