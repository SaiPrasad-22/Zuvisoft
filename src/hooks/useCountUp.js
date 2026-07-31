import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

/**
 * Drives a spring-animated numeric count-up once the target ref enters view.
 * Returns a ref to attach to the display element; the element's text content
 * is updated imperatively to avoid a re-render per animation frame.
 */
export function useCountUp(value, { suffix = '', duration = 1.4 } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
  }, [spring, suffix])

  return ref
}
