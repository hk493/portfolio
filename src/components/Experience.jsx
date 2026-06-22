import { motion } from 'framer-motion'
import BlurText from './BlurText'
import TiltCard from './TiltCard'

export default function Experience() {
  const timeline = [
    {
      period: '2026/3 窶・迴ｾ蝨ｨ',
      company: '譬ｪ蠑丈ｼ夂､ｾ繧ｪ繝薙ヨ',
      position: '莉｣陦ｨ蜿也ｷ蠖ｹ',
      description:
        'AI繧ｿ繝ｬ繝ｳ繝医ｒ謇ｱ縺・ｪ蠑丈ｼ夂､ｾ繧ｪ繝薙ヨ縺ｮ莉｣陦ｨ縲・I繧｢繝翫え繝ｳ繧ｵ繝ｼ・・I-Director・峨・AI繧｢繝舌ち繝ｼ・・vatar-v2・峨・繝ｪ繧ｵ繝ｼ繝、I縺ｪ縺ｩ縲＾rbito-ai 驟堺ｸ九・繝励Ο繝繧ｯ繝育ｾ､繧堤ｵｱ諡ｬ縲・,
      current: true,
    },
    {
      period: '2025/10 窶・2026/2',
      company: '譬ｪ蠑丈ｼ夂､ｾH繝代・繝医リ繝ｼ・亥・騾壻ｿ｡繧ｰ繝ｫ繝ｼ繝暦ｼ・,
      position: 'AI繧ｨ繝ｳ繧ｸ繝九い 繧､繝ｳ繧ｿ繝ｼ繝ｳ',
      description: 'AI繧呈ｴｻ逕ｨ縺励◆遉ｾ蜀・・繝ｭ繝繧ｯ繝医・髢狗匱縺ｫ蠕謎ｺ九ゆｼ∵･ｭ蛻・梵繝・・繝ｫ縺ｪ縺ｩ縺ｫ謳ｺ繧上ｋ縲・,
    },
    {
      period: '2025/5 窶・2025/9',
      company: '繝｢繝弱Μ繧ｹ豕募ｾ倶ｺ句漁謇',
      position: '繝代Λ繝ｪ繝ｼ繧ｬ繝ｫ 繧､繝ｳ繧ｿ繝ｼ繝ｳ',
      description: '豕募ｾ区･ｭ蜍吶・繧ｵ繝昴・繝医・繝ｪ繧ｵ繝ｼ繝∵･ｭ蜍吶ｒ諡・ｽ薙・,
    },
  ]

  return (
    <section className="relative w-full bg-background/70 py-24 px-4 md:px-16">
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
            <TiltCard
              as={motion.div}
              key={item.period}
              strength={4}
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
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}