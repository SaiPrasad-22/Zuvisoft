import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Button from '../ui/Button.jsx'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'

const NAV = [
  { id: 'top', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
    { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { scrolled, active } = useScrollSpy(NAV.map((n) => n.id))

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 glass">
          <a href="#top" className="inline-flex flex-col leading-none">
            <div className="flex items-baseline font-display font-semibold tracking-tight text-[1.15rem] sm:text-[1.25rem]">
              <span>Zuvi</span>
              <span className="mx-[3px] inline-block h-[5px] w-[5px] rounded-full bg-mint shadow-[0_0_10px_#00E5A8] -translate-y-[1px]" />
              <span className="text-gradient">Soft</span>
            </div>
            <div className="mt-0.5 text-center font-display font-medium tracking-[0.12em] text-[0.55rem] sm:text-[0.62rem] uppercase text-muted/85">
              Private Limited
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 relative">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative px-3 py-1.5 text-sm transition-colors z-10 ${active === n.id ? 'text-foreground' : 'text-muted hover:text-foreground'}`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-mint/10 ring-1 ring-mint/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact">
              Start Your Project
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          <button className="md:hidden p-2 -mr-2" aria-label="menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl glass p-4 flex flex-col gap-1"
            >
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm transition ${active === n.id ? 'bg-mint/10 text-foreground' : 'text-muted hover:text-foreground hover:bg-white/5'}`}
                >
                  {n.label}
                </a>
              ))}
              <Button href="#contact" onClick={() => setOpen(false)} className="mt-2 justify-center">
                Start Your Project
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
