import { useCountUp } from '../../hooks/useCountUp.js'

export default function AnimatedCounter({ value, suffix = '', duration = 1.4 }) {
  const ref = useCountUp(value, { suffix, duration })
  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  )
}
