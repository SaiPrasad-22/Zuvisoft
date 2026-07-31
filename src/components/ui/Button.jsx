import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const VARIANTS = {
  primary: 'bg-mint text-[#04120D] hover:shadow-glow',
  ghost: 'glass text-foreground hover:bg-white/[0.06]',
}

/**
 * Shared button used across sections and future pages (dashboard, CRM, auth).
 * Renders as <a> when `href` is passed, otherwise <button>.
 * Pass `magnetic` for a subtle cursor-following pull on hover (used on primary CTAs).
 */
export default function Button({ as, href, variant = 'primary', className = '', children, magnetic = false, ...rest }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.4 })
  const y = useSpring(my, { stiffness: 200, damping: 15, mass: 0.4 })

  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-shadow duration-300 ${VARIANTS[variant] || VARIANTS.primary} ${className}`
  const Comp = motion(as || (href ? 'a' : 'button'))

  if (!magnetic) {
    const Plain = as || (href ? 'a' : 'button')
    return (
      <Plain href={href} className={classes} {...rest}>
        {children}
      </Plain>
    )
  }

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    my.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }
  const onMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <Comp
      ref={ref}
      href={href}
      className={classes}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </Comp>
  )
}
