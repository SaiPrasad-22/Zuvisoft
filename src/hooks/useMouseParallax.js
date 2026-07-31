import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Tracks pointer position within a container and returns spring-smoothed
 * x/y motion values, normalized to -1..1. Used to drive subtle parallax
 * on floating elements. No-ops gracefully on touch devices (no mousemove).
 */
export function useMouseParallax(strength = 16) {
  const ref = useRef(null)
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const x = useSpring(mvX, { stiffness: 120, damping: 20, mass: 0.5 })
  const y = useSpring(mvY, { stiffness: 120, damping: 20, mass: 0.5 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      mvX.set(nx * strength)
      mvY.set(ny * strength)
    }
    const onLeave = () => {
      mvX.set(0)
      mvY.set(0)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [mvX, mvY, strength])

  return { ref, x, y }
}

/** Derives an inverse/scaled offset for elements that should move opposite or faster than the base parallax. */
export function useParallaxLayer(x, y, factor = 1) {
  return {
    x: useTransform(x, (v) => v * factor),
    y: useTransform(y, (v) => v * factor),
  }
}
