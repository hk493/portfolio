import { useRef } from 'react'

export default function TiltCard({ children, className = '', strength = 6, as: Tag = 'div', ...rest }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotY = ((x - cx) / cx) * strength
    const rotX = -((y - cy) / cy) * strength
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`
    el.style.setProperty('--mx', `${(x / rect.width) * 100}%`)
    el.style.setProperty('--my', `${(y / rect.height) * 100}%`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
