import { useEffect, useRef } from 'react'

// Apple-style soft mesh gradient background.
// Multiple large radial blobs drift slowly in lissajous patterns over a near-black base.
// Variants: 'hero' | 'nebula' | 'grid' | 'deep' — share the same renderer with different palettes.
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

    // Palette per variant — Apple-ish jewel tones, brighter
    const palettes = {
      hero: [
        { color: 'rgba(120, 118, 245, 0.85)' },  // indigo
        { color: 'rgba(94, 175, 255, 0.75)' },   // blue
        { color: 'rgba(208, 120, 255, 0.65)' },  // violet
        { color: 'rgba(80, 230, 240, 0.55)' },   // teal
      ],
      nebula: [
        { color: 'rgba(255, 90, 130, 0.65)' },   // pink
        { color: 'rgba(208, 120, 255, 0.70)' },  // violet
        { color: 'rgba(255, 180, 60, 0.50)' },   // amber
        { color: 'rgba(120, 118, 245, 0.65)' },  // indigo
      ],
      grid: [
        { color: 'rgba(94, 175, 255, 0.70)' },
        { color: 'rgba(120, 118, 245, 0.65)' },
        { color: 'rgba(80, 230, 240, 0.45)' },
      ],
      deep: [
        { color: 'rgba(40, 160, 255, 0.65)' },
        { color: 'rgba(120, 118, 245, 0.55)' },
      ],
    }
    const palette = palettes[variant] || palettes.hero

    // Random lissajous motion params per blob
    const blobs = palette.map((p, i) => ({
      color: p.color,
      // Base position
      bx: 0.2 + (i * 0.6) / Math.max(palette.length - 1, 1),
      by: 0.3 + ((i * 0.4) % 0.5),
      // Movement amplitudes
      ax: 0.18 + Math.random() * 0.1,
      ay: 0.18 + Math.random() * 0.1,
      // Frequencies (very slow)
      fx: 0.00018 + Math.random() * 0.00012,
      fy: 0.00015 + Math.random() * 0.00012,
      // Phase
      px: Math.random() * Math.PI * 2,
      py: Math.random() * Math.PI * 2,
      // Radius factor
      rf: 0.55 + Math.random() * 0.2,
    }))

    let t = 0

    const draw = () => {
      t += 1

      // Solid near-black base
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      const maxDim = Math.max(width, height)

      // Soft animated radial blobs (additive lighter blend for glow)
      ctx.globalCompositeOperation = 'lighter'
      blobs.forEach((b) => {
        const x = (b.bx + Math.sin(t * b.fx + b.px) * b.ax) * width
        const y = (b.by + Math.cos(t * b.fy + b.py) * b.ay) * height
        const r = maxDim * b.rf

        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, b.color)
        g.addColorStop(0.4, b.color.replace(/[\d.]+\)$/, '0.08)'))
        g.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, width, height)
      })
      ctx.globalCompositeOperation = 'source-over'

      // Soft vignette — light, just to focus eye on center
      const vg = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        Math.min(width, height) * 0.4,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      )
      vg.addColorStop(0, 'rgba(0, 0, 0, 0)')
      vg.addColorStop(1, 'rgba(0, 0, 0, 0.25)')
      ctx.fillStyle = vg
      ctx.fillRect(0, 0, width, height)

      // Optional faint grid for 'grid' variant
      if (variant === 'grid') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
        ctx.lineWidth = 1
        const step = 80
        for (let x = 0; x < width; x += step) {
          ctx.beginPath()
          ctx.moveTo(x + 0.5, 0)
          ctx.lineTo(x + 0.5, height)
          ctx.stroke()
        }
        for (let y = 0; y < height; y += step) {
          ctx.beginPath()
          ctx.moveTo(0, y + 0.5)
          ctx.lineTo(width, y + 0.5)
          ctx.stroke()
        }
      }

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
