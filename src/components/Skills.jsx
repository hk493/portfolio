import { motion } from 'framer-motion'
import BlurText from './BlurText'

export default function Skills() {
  const categories = [
    { title: 'AI / LLM', items: ['LLM API 統合', 'Prompt Engineering', 'AI Agents', 'RAG / 検索拡張生成'] },
    { title: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'] },
    { title: 'Backend', items: ['Python', 'FastAPI', 'API 設計', 'データ処理'] },
    { title: 'Media / Voice', items: ['Whisper (音声認識)', 'TTS / STT', 'FFmpeg', '動画生成パイプライン'] },
    { title: 'Infra', items: ['Vercel', 'Render', 'GitHub / Git', 'クラウド デプロイ'] },
    { title: 'Leadership', items: ['経営 / CEO', 'チームマネジメント', 'NCAA Div.2 キャプテン経験', 'バイリンガル (日/英)'] },
  ]

  return (
    <section className="relative w-full bg-background py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">// Skills</span>
        </div>

        <BlurText
          as="h2"
          text="What I"
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <BlurText
          as="h2"
          text="work with."
          delayStart={0.3}
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-white p-6 md:p-7 min-h-[220px] flex flex-col"
            >
              <h3 className="font-display italic text-foreground text-3xl md:text-4xl leading-none mb-5 tracking-[-1px]">
                {cat.title}
              </h3>
              <ul className="space-y-2 mt-auto">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-foreground/85 font-body"
                  >
                    <span className="text-muted-foreground">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
