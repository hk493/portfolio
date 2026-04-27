import { motion } from 'framer-motion'
import { Trophy, Award, GraduationCap, Globe, Briefcase } from 'lucide-react'
import OrbitBackground from './OrbitBackground'
import BlurText from './BlurText'

export default function About() {
  const highlights = [
    {
      icon: Trophy,
      title: 'JOP ジュニア男子総合1位',
      description: '日本テニス協会ランキング',
    },
    {
      icon: Award,
      title: 'NCAA Div.2',
      description: '全米大学テニスリーグ・チームリーダー',
    },
    {
      icon: GraduationCap,
      title: 'Temple University',
      description: 'テンプル大学 卒業',
    },
    {
      icon: Globe,
      title: 'LLC Founder (US)',
      description: 'アメリカ在住時に起業',
    },
    {
      icon: Briefcase,
      title: 'CEO',
      description: '株式会社オビト 代表取締役',
    },
  ]

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-24 px-4 md:px-16">
      <OrbitBackground variant="nebula" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-white/80">// About</span>
        </div>

        <BlurText
          as="h2"
          text="Athlete. Founder."
          className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <BlurText
          as="h2"
          text="Engineer."
          delayStart={0.3}
          className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="liquid-glass rounded-[1.5rem] p-8 md:p-10 mt-12"
        >
          <div className="space-y-5 text-white/90 font-body font-light leading-relaxed text-base md:text-lg">
            <p>
              中高時代はテニスに打ち込み、
              <span className="text-white font-medium">JOP（日本テニス協会）ランキング・ジュニア男子総合1位</span>
              を獲得。
            </p>
            <p>
              大学時代はアメリカに渡り、Temple University に在学。全米大学リーグ
              <span className="text-white font-medium">（NCAA Div.2）</span>
              にてチームリーダーを務める。
            </p>
            <p>
              アメリカ在住中にLLCを立ち上げ、学生と並行してテニスコーチとしても活動。
            </p>
            <p>
              日本帰国後はモノリス法律事務所でパラリーガル、株式会社Hパートナー（光通信グループ）でAIエンジニアとしてインターンを経験。
              現在は<span className="text-white font-medium">AIタレントを扱う株式会社オビトの代表取締役</span>として事業を率いる。
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="liquid-glass rounded-[1.25rem] p-5"
            >
              <item.icon size={24} className="text-white mb-3" strokeWidth={1.5} />
              <h3 className="text-base font-heading italic text-white leading-tight mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-white/70 font-body font-light leading-snug">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
