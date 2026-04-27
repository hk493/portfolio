import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

export default function RepositoryCard({ repo, index }) {
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotY = ((x - cx) / cx) * 6
    const rotX = -((y - cy) / cy) * 6
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`)
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.4) }}
      className="tilt-card rounded-2xl border border-border bg-white p-6 md:p-7 flex flex-col min-h-[420px] relative shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
    >
      <div className="tilt-shine" aria-hidden="true" />
      <div className="tilt-card-inner relative flex flex-col flex-1">
        {/* Category & featured */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-secondary text-foreground rounded-full px-3 py-1 text-[11px] font-body whitespace-nowrap">
              {repo.category}
            </span>
            {repo.featured && (
              <span className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-[11px] font-semibold font-body whitespace-nowrap">
                Featured
              </span>
            )}
          </div>
          <a
            href={`https://github.com/${repo.owner}/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-foreground hover:text-background w-10 h-10 rounded-full flex items-center justify-center text-foreground flex-shrink-0 transition-colors"
            aria-label="View on GitHub"
          >
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>

        {/* Title */}
        <h3 className="font-display italic text-foreground text-3xl md:text-4xl leading-[0.95] tracking-[-1px] mb-2">
          {repo.displayName}
        </h3>
        <p className="text-sm text-muted-foreground font-body mb-5">{repo.tagline}</p>

        {/* Description */}
        <p className="text-sm text-foreground/85 font-body leading-relaxed mb-6">
          {repo.description}
        </p>

        {/* Features */}
        <div className="mb-6 flex-1">
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body mb-3">
            Features
          </div>
          <ul className="space-y-2">
            {repo.features.map((f, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-foreground/90 font-body leading-relaxed"
              >
                <span className="text-muted-foreground mt-0.5 flex-shrink-0">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-foreground rounded-full px-3 py-1 text-[11px] font-body whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Repo path */}
        <a
          href={`https://github.com/${repo.owner}/${repo.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] text-muted-foreground font-body hover:text-foreground transition-colors mt-auto pt-4 border-t border-border"
        >
          <Github size={12} />
          <span className="font-mono">
            {repo.owner}/{repo.name}
          </span>
        </a>
      </div>
    </motion.div>
  )
}
