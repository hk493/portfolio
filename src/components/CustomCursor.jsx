import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Premium custom cursor: small white dot + outer ring that lags behind.
// Hovering elements with data-cursor="hover" enlarges the ring.
// Hovering [data-cursor="text"] turns it into a thin vertical bar.
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Quick setters for performance
    const setDotX = gsap.quickSetter(dot, 'x', 'px')
    const setDotY = gsap.quickSetter(dot, 'y', 'px')
    const setRingX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' })
    const setRingY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' })

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setDotX(mouseX)
      setDotY(mouseY)
      setRingX(mouseX)
      setRingY(mouseY)
    }

    const onEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
    }
    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
    }

    // Hover state for interactive elements
    const updateHoverState = () => {
      const els = document.querySelectorAll(
        'a, button, [data-cursor="hover"], [role="button"]'
      )
      els.forEach((el) => {
        if (el._cursorBound) return
        el._cursorBound = true
        el.addEventListener('mouseenter', () => {
          gsap.to(ring, {
            scale: 2.4,
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: 'rgba(255,255,255,0.6)',
            duration: 0.3,
            ease: 'power3.out',
          })
          gsap.to(dot, { scale: 0, duration: 0.2 })
        })
        el.addEventListener('mouseleave', () => {
          gsap.to(ring, {
            scale: 1,
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: 'rgba(255,255,255,0.5)',
            duration: 0.3,
            ease: 'power3.out',
          })
          gsap.to(dot, { scale: 1, duration: 0.2 })
        })
      })
    }

    updateHoverState()
    // Re-bind when DOM changes (filter clicks etc.)
    const observer = new MutationObserver(updateHoverState)
    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden="true"
      />
    </>
  )
}
