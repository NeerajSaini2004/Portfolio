import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'

export default function AnimatedStat({ value }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.65 })
  const target = Number(String(value).replace(/[^\d]/g, ''))
  const suffix = String(value).replace(/^[\d,]+/, '')
  const count = useMotionValue(reduce ? target : 0)
  const rounded = useTransform(count, latest => `${Math.round(latest)}${suffix}`)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      count.set(target)
      return
    }
    const controls = animate(count, target, { duration: 0.8, ease: 'easeOut' })
    return controls.stop
  }, [count, inView, reduce, target])

  return <motion.strong ref={ref}>{rounded}</motion.strong>
}
