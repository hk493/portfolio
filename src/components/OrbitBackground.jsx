import { useEffect, useRef } from 'react'

// Cinematic orbit/space background rendered on canvas.
// Variants: 'hero' (centered star with orbits), 'nebula' (soft purple/blue glow),
// 'grid' (subtle wireframe orbit) and 'deep' (darker, more stars).
export default function OrbitBackground({ variant = 'hero' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = canvas.offsetWidth
    let height = canvas.offsetHeight
    let rafId

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stars
    const stars = Array.from({ length: variant === 'deep' ? 260 : 180 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.3 + 0.2,
      tw: Math.random() * Math.PI * 2,
      twSpeed: Math.random() * 0.02 + 0.005,
      drift: Math.random() * 0.00008 + 0.00002,
    }))

    // Generate orbits
    const orbits =
      variant === 'hero'
        ? [
            { radius: 0.18, speed: 0.0012, size: 3, color: '#ffffff' },
            { radius: 0.28, speed: 0.0008, size: 2.5, color: '#b8d4ff' },
            { radius: 0.4, speed: 0.0005, size: 4, color: '#ffffff' },
            { radius: 0.55, speed: 0.0003, size: 2, color: '#dfe9ff' },
          ]
        : variant === 'grid'
        ? [
            { radius: 0.25, speed: 0.0006, size: 2, color: '#ffffff' },
            { radius: 0.42, speed: 0.0004, size: 3, color: '#b8d4ff' },
          ]
        : []

    // Shooting stars
    const shooting = []
    let shootingTimer = 0

    let t = 0
    const draw = () => {
      t += 1
      ctx.clearRect(0, 0, width, height)

      // Background gradient (radial)
      const cx = variant === 'hero' ? width * 0.5 : width * 0.7
      const cy = variant === 'hero' ? height * 0.55 : height * 0.3
      const maxR = Math.hypot(width, height)
      const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.8)
      if (variant === 'hero') {
        bgGrad.addColorStop(0, 'rgba(40, 60, 120, 0.45)')
        bgGrad.addColorStop(0.25, 'rgba(20, 30, 70, 0.35)')
        bgGrad.addColorStop(0.6, 'rgba(5, 8, 25, 0.8)')
        bgGrad.addColorStop(1, 'rgba(0, 0, 0, 1)')
      } else if (variant === 'nebula') {
        bgGrad.addColorStop(0, 'rgba(80, 40, 140, 0.35)')
        bgGrad.addColorStop(0.3, 'rgba(30, 20, 80, 0.3)')
        bgGrad.addColorStop(0.7, 'rgba(5, 8, 25, 0.8)')
        bgGrad.addColorStop(1, 'rgba(0, 0, 0, 1)')
      } else if (variant === 'grid') {
        bgGrad.addColorStop(0, 'rgba(20, 40, 90, 0.3)')
        bgGrad.addColorStop(0.5, 'rgba(5, 10, 25, 0.7)')
        bgGrad.addColorStop(1, 'rgba(0, 0, 0, 1)')
      } else {
        // deep
        bgGrad.addColorStop(0, 'rgba(10, 15, 40, 0.4)')
        bgGrad.addColorStop(0.5, 'rgba(2, 4, 15, 0.8)')
        bgGrad.addColorStop(1, 'rgba(0, 0, 0, 1)')
      }
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // Stars
      stars.forEach((s) => {
        s.tw += s.twSpeed
        s.y += s.drift
        if (s.y > 1) s.y = 0
        const alpha = 0.4 + Math.sin(s.tw) * 0.5
        ctx.beginPath()
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, alpha)})`
        ctx.fill()
      })

      // Central star + orbits (hero / grid)
      if (variant === 'hero' || variant === 'grid') {
        const ocx = width * 0.5
        const ocy = height * 0.55

        // Glow
        const glow = ctx.createRadialGradient(ocx, ocy, 0, ocx, ocy, width * 0.35)
        glow.addColorStop(0, 'rgba(180, 210, 255, 0.35)')
        glow.addColorStop(0.3, 'rgba(100, 130, 220, 0.15)')
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(0, 0, width, height)

        // Central bright core
        if (variant === 'hero') {
          const coreGrad = ctx.createRadialGradient(ocx, ocy, 0, ocx, ocy, 80)
          coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)')
          coreGrad.addColorStop(0.2, 'rgba(220, 230, 255, 0.85)')
          coreGrad.addColorStop(0.6, 'rgba(120, 150, 230, 0.3)')
          coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = coreGrad
          ctx.beginPath()
          ctx.arc(ocx, ocy, 80, 0, Math.PI * 2)
          ctx.fill()
        }

        // Orbit rings
        orbits.forEach((o, idx) => {
          ctx.beginPath()
          ctx.ellipse(ocx, ocy, Math.min(width, height) * o.radius, Math.min(width, height) * o.radius * 0.35, 0, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 + idx * 0.02})`
          ctx.lineWidth = 1
          ctx.stroke()

          // Orbiting planet
          const angle = t * o.speed * 60
          const px = ocx + Math.cos(angle) * Math.min(width, height) * o.radius
          const py = ocy + Math.sin(angle) * Math.min(width, height) * o.radius * 0.35

          // Planet glow
          const pg = ctx.createRadialGradient(px, py, 0, px, py, o.size * 6)
          pg.addColorStop(0, o.color)
          pg.addColorStop(0.3, `${o.color}55`)
          pg.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = pg
          ctx.beginPath()
          ctx.arc(px, py, o.size * 6, 0, Math.PI * 2)
          ctx.fill()

          // Planet core
          ctx.fillStyle = o.color
          ctx.beginPath()
          ctx.arc(px, py, o.size, 0, Math.PI * 2)
          ctx.fill()
        })
      }

      // Nebula clouds
      if (variant === 'nebula') {
        for (let i = 0; i < 3; i++) {
          const ncx = width * (0.2 + i * 0.3) + Math.sin(t * 0.001 + i) * 40
          const ncy = height * (0.3 + (i % 2) * 0.4)
          const ng = ctx.createRadialGradient(ncx, ncy, 0, ncx, ncy, 280)
          const colors = [
            'rgba(130, 80, 220, 0.12)',
            'rgba(80, 130, 230, 0.1)',
            'rgba(200, 120, 230, 0.08)',
          ]
          ng.addColorStop(0, colors[i])
          ng.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = ng
          ctx.beginPath()
          ctx.arc(ncx, ncy, 280, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Shooting stars
      shootingTimer += 1
      if (shootingTimer > 180 && Math.random() > 0.98) {
        shooting.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          vx: 4 + Math.random() * 3,
          vy: 1 + Math.random() * 1.5,
          life: 0,
          maxLife: 60,
        })
        shootingTimer = 0
      }
      shooting.forEach((s, i) => {
        s.x += s.vx
        s.y += s.vy
        s.life += 1
        const alpha = 1 - s.life / s.maxLife
        const tailLen = 60
        const grad = ctx.createLinearGradient(s.x - s.vx * tailLen / 4, s.y - s.vy * tailLen / 4, s.x, s.y)
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)')
        grad.addColorStop(1, `rgba(255, 255, 255, ${alpha})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(s.x - s.vx * 15, s.y - s.vy * 15)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()
        if (s.life >= s.maxLife) shooting.splice(i, 1)
      })

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
