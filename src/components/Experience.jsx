import { motion } from 'framer-motion'
import BlurText from './BlurText'

export default function Experience() {
  const timeline = [
    {
      period: '2026/3 — 現在',
      company: '株式会社オビト',
      position: '代表取締役',
      description: 'AIタレントを扱う株式会社オビトの代表。Orbito-ai 配下のプロダクト群を統括。',
      current: true,
    },
    {
      period: '2025/10 — 2026/2',
      company: '株式会社Hパートナー（光通信グループ）',
      position: 'AIエンジニア インターン',
      description: 'AIを活用した社内プロダクトの開発に従事。企業分析ツールなどに携わる。',
    },
    {
      period: '2025/5 — 2025/9',
      company: 'モノリス法律事務所',
      position: 'パラリーガル インターン',
      description: '法律業務のサポート・リサーチ業務を担当。',
    },
  ]

  return (
    <section className="relative w-full bg-secondary/40 py-24 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">// Experience</span>
        </div>

        <BlurText
          as="h2"
          text="Timeline"
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />

        <div className="mt-16 space-y-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl border border-border bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10"
            >
              <div className="md:w-56 flex-shrink-0">
                <div className="text-sm font-body text-muted-foreground mb-2">
                  {item.period}
                </div>
                {item.current && (
                  <span className="inline-block bg-accent text-accent-foreground px-2.5 py-0.5 text-xs font-semibold rounded-full font-body">
                    Current
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display italic text-foreground text-3xl md:text-4xl leading-tight mb-1 tracking-tight">
                  {item.company}
                </h3>
                <div className="text-sm font-body text-foreground/80 mb-3">
                  {item.position}
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
