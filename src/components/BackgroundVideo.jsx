import { useEffect, useRef, useState } from 'react'

const SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4'

// The video stays invisible until it is actually playing. If a phone blocks
// autoplay (e.g. iOS Low Power Mode), the soft gradient below shows instead,
// so no play button ever appears.
export default function BackgroundVideo() {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [reduceMotion] = useState(() => {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    const p = v.play()
    if (p && typeof p.catch === 'function') p.catch(() => setPlaying(false))
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf3fb] via-white to-[#eef5ee]" />
      {!reduceMotion && (
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          className={`bg-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={SRC} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
