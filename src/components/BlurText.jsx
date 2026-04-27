import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Word-by-word blur-in animation. Triggers on intersection.
export default function BlurText({
  text,
  className = '',
  delayStart = 0,
  stepDuration = 0.35,
  as = 'h1',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const words = text.split(' ')
  const MotionTag = motion[as] || motion.h1

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            inView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: stepDuration * 2,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: delayStart + (i * 100) / 1000,
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  )
}
