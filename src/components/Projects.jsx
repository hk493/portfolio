import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { repositories } from '../data/repositories'
import RepositoryCard from './RepositoryCard'
import OrbitBackground from './OrbitBackground'
import BlurText from './BlurText'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(repositories.map((r) => r.category))]
  const filtered = filter === 'All' ? repositories : repositories.filter((r) => r.category === filter)
  const sorted = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-24 px-4 md:px-16">
      <OrbitBackground variant="grid" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-white/80">// Projects</span>
        </div>

        <BlurText
          as="h2"
          text="Production"
          className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <BlurText
          as="h2"
          text="shipped."
          delayStart={0.3}
          className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-sm md:text-base text-white/80 font-body font-light leading-relaxed"
        >
          株式会社オビト（Orbito-ai）と光通信グループ（hikari-houto）で手がけた AI プロダクト・業務ツール群。
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-2 mt-10 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-[11px] font-body font-medium whitespace-nowrap transition-all ${
                filter === cat
                  ? 'bg-white text-black'
                  : 'liquid-glass text-white/90 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sorted.map((repo, index) => (
            <RepositoryCard
              key={`${repo.owner}/${repo.name}`}
              repo={repo}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="https://github.com/Orbito-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white flex items-center gap-2"
          >
            Orbito-ai
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
          <a
            href="https://github.com/hikari-houto"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full px-5 py-2.5 text-sm font-medium font-body text-white flex items-center gap-2"
          >
            hikari-houto
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
