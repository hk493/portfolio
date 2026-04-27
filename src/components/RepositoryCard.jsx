import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

export default function RepositoryCard({ repo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.4) }}
      className="liquid-glass rounded-[1.5rem] p-6 md:p-8 flex flex-col min-h-[420px] relative"
    >
      {/* Category & featured */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex flex-wrap gap-1.5">
          <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
            {repo.category}
          </span>
          {repo.featured && (
            <span className="bg-white text-black rounded-full px-3 py-1 text-[11px] font-semibold font-body whitespace-nowrap">
              Featured
            </span>
          )}
        </div>
        <a
          href={`https://github.com/${repo.owner}/${repo.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 hover:scale-105 transition-transform"
          aria-label="View on GitHub"
        >
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>

      {/* Title */}
      <h3 className="font-heading italic text-white text-4xl md:text-5xl leading-[0.95] tracking-[-1px] mb-2">
        {repo.displayName}
      </h3>
      <p className="text-sm text-white/70 font-body font-light mb-5">
        {repo.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-white/85 font-body font-light leading-relaxed mb-6">
        {repo.description}
      </p>

      {/* Features */}
      <div className="mb-6 flex-1">
        <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-body mb-3">
          Features
        </div>
        <ul className="space-y-2">
          {repo.features.map((f, i) => (
            <li key={i} className="flex gap-2 text-sm text-white/90 font-body font-light leading-relaxed">
              <span className="text-white/50 mt-0.5 flex-shrink-0">—</span>
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
            className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
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
        className="flex items-center gap-2 text-[11px] text-white/50 font-body hover:text-white/80 transition-colors mt-auto pt-4 border-t border-white/10"
      >
        <Github size={12} />
        <span className="font-mono">{repo.owner}/{repo.name}</span>
      </a>
    </motion.div>
  )
}
