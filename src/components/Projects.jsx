import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { repositories } from '../data/repositories'
import RepositoryCard from './RepositoryCard'
import BlurText from './BlurText'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(repositories.map((r) => r.category))]
  const filtered = filter === 'All' ? repositories : repositories.filter((r) => r.category === filter)
  const sorted = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <section className="relative w-full bg-background/70 py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">// Projects</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <BlurText
              as="h2"
              text="Production"
              className="font-display italic text-foreground text-5xl md:text-6xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
            />
            <BlurText
              as="h2"
              text="shipped."
              delayStart={0.3}
              className="font-display italic text-foreground text-5xl md:text-6xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md text-sm text-muted-foreground font-body leading-relaxed"
          >
            Orbito-ai と hikari-houto で手がけた AI プロダクト・業務ツール群。
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-body font-medium whitespace-nowrap transition-colors border ${
                filter === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-white text-foreground border-border hover:bg-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((repo, index) => (
            <RepositoryCard
              key={`${repo.owner}/${repo.name}`}
              repo={repo}
              index={index}
            />
          ))}
          {/* End block */}
          <a
            href="https://github.com/Orbito-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-foreground text-background p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[420px] hover:bg-foreground/90 transition-colors shadow-dashboard"
          >
            <div className="font-display italic text-4xl leading-tight">
              More on
              <br />
              GitHub
            </div>
            <ArrowUpRight size={28} strokeWidth={1.5} />
          </a>
        </div>

        {/* Github links */}
        <div className="flex flex-col md:flex-row gap-3 mt-12 justify-center">
          <a
            href="https://github.com/Orbito-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-sm font-medium font-body bg-primary text-primary-foreground flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            github.com/Orbito-ai
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
          <a
            href="https://github.com/hikari-houto"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-sm font-medium font-body bg-white text-foreground border border-border flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
          >
            github.com/hikari-houto
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
