import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Trophy, Sparkles } from 'lucide-react'
import OrbitBackground from './OrbitBackground'
import BlurText from './BlurText'

export default function Home() {
  const baseAnim = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  }

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col">
      <OrbitBackground variant="hero" />

      {/* Content layer */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 px-4 pb-12">
        {/* Badge */}
        <motion.div
          {...baseAnim}
          transition={{ ...baseAnim.transition, delay: 0.4 }}
          className="liquid-glass rounded-full flex items-center gap-2 p-1 pr-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            CEO
          </span>
          <span className="text-sm text-white/90 font-body">
            AIタレント事業 · 株式会社オビト代表
          </span>
        </motion.div>

        {/* Headline (BlurText word-by-word) */}
        <BlurText
          as="h1"
          text="Hoto Tajima"
          delayStart={0.6}
          className="font-heading italic text-white leading-[0.85] max-w-4xl text-7xl md:text-8xl lg:text-[7rem]"
        />

        {/* Japanese name */}
        <motion.p
          {...baseAnim}
          transition={{ ...baseAnim.transition, delay: 1.0 }}
          className="mt-4 text-2xl md:text-3xl text-white/80 font-heading italic tracking-wide"
        >
          田島 宝人
        </motion.p>

        {/* Subheading */}
        <motion.p
          {...baseAnim}
          transition={{ ...baseAnim.transition, delay: 1.2 }}
          className="mt-6 max-w-2xl text-center text-sm md:text-base text-white/80 font-body font-light leading-relaxed px-4"
        >
          JOPジュニア男子総合1位 · NCAA Div.2 · Temple University。
          <br />
          テニスで培った挑戦と、法律・AI分野での実務を経て、現在は株式会社オビト代表としてAIタレント事業を率いる。
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...baseAnim}
          transition={{ ...baseAnim.transition, delay: 1.4 }}
          className="flex items-center gap-6 mt-8"
        >
          <a
            href="#projects"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white flex items-center gap-2 hover:scale-105 transition-transform"
          >
            View Projects
            <ArrowUpRight size={18} strokeWidth={2} />
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 text-sm font-body text-white/90 hover:text-white transition-colors"
          >
            About Me
            <Play size={14} fill="currentColor" />
          </a>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          {...baseAnim}
          transition={{ ...baseAnim.transition, delay: 1.6 }}
          className="flex items-stretch gap-4 mt-12 flex-wrap justify-center"
        >
          <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px]">
            <Trophy size={28} className="text-white mb-4" strokeWidth={1.5} />
            <div className="text-4xl font-heading italic text-white leading-none tracking-tight">
              No.1
            </div>
            <div className="text-xs text-white/80 font-body font-light mt-2">
              JOP ジュニア男子総合ランキング
            </div>
          </div>
          <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px]">
            <Sparkles size={28} className="text-white mb-4" strokeWidth={1.5} />
            <div className="text-4xl font-heading italic text-white leading-none tracking-tight">
              9+
            </div>
            <div className="text-xs text-white/80 font-body font-light mt-2">
              AI Products Shipped
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partners row at bottom */}
      <motion.div
        {...baseAnim}
        transition={{ ...baseAnim.transition, delay: 1.8 }}
        className="relative z-10 flex flex-col items-center gap-4 pb-10 px-4"
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
          Products under Orbito-ai & hikari-houto
        </div>
        <div className="flex items-center flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-2 font-heading italic text-white text-xl md:text-2xl tracking-tight">
          <span>Orbito</span>
          <span className="text-white/40">·</span>
          <span>Avatar</span>
          <span className="text-white/40">·</span>
          <span>Giziroku</span>
          <span className="text-white/40">·</span>
          <span>Research</span>
          <span className="text-white/40">·</span>
          <span>Madoka</span>
        </div>
      </motion.div>
    </section>
  )
}
