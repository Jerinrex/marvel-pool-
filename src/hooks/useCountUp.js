import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `target` once the referenced element
 * scrolls into view. Returns [ref, displayValue].
 */
export function useCountUp(target, { duration = 900 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()

            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              setValue(Math.round(progress * target))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, value]
}
