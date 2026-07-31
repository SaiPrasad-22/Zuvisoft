import { useEffect, useState } from 'react'

/**
 * Tracks whether the page has scrolled past a threshold, and which section
 * id is currently most visible — drives header shrink + active nav pill.
 */
export function useScrollSpy(sectionIds, { threshold = 20 } = {}) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [sectionIds])

  return { scrolled, active }
}
