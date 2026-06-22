import { motion } from 'framer-motion'
import { Trophy, Award, GraduationCap, Globe, Briefcase } from 'lucide-react'
import BlurText from './BlurText'
import TiltCard from './TiltCard'

export default function About() {
  const highlights = [
    { icon: Trophy, title: 'JOP 繧ｸ繝･繝九い逕ｷ蟄千ｷ丞粋1菴・, description: '譌･譛ｬ繝・ル繧ｹ蜊比ｼ壹Λ繝ｳ繧ｭ繝ｳ繧ｰ' },
    { icon: Award, title: 'NCAA Div.2', description: '蜈ｨ邀ｳ螟ｧ蟄ｦ繝・ル繧ｹ繝ｪ繝ｼ繧ｰ繝ｻ繝√・繝繝ｪ繝ｼ繝繝ｼ' },
    { icon: GraduationCap, title: 'Temple University', description: '繝・Φ繝励Ν螟ｧ蟄ｦ 蜊呈･ｭ' },
    { icon: Globe, title: 'LLC Founder (US)', description: '繧｢繝｡繝ｪ繧ｫ蝨ｨ菴乗凾縺ｫ襍ｷ讌ｭ' },
    { icon: Briefcase, title: 'CEO', description: '譬ｪ蠑丈ｼ夂､ｾ繧ｪ繝薙ヨ 莉｣陦ｨ蜿也ｷ蠖ｹ' },
  ]

  return (
    <section className="relative w-full bg-background/70 py-24 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">// About</span>
        </div>

        <BlurText
          as="h2"
          text="Athlete. Founder."
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <BlurText
          as="h2"
          text="Engineer."
          delayStart={0.3}
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />

        <TiltCard
          as={motion.div}
          strength={4}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl border border-border bg-white p-8 md:p-10 mt-12 shadow-dashboard"
        >
          <div className="space-y-5 text-foreground/90 font-body leading-relaxed text-base md:text-lg">
            <p>
              荳ｭ鬮俶凾莉｣縺ｯ繝・ル繧ｹ縺ｫ謇薙■霎ｼ縺ｿ縲・              <span className="text-foreground font-medium">JOP・域律譛ｬ繝・ル繧ｹ蜊比ｼ夲ｼ峨Λ繝ｳ繧ｭ繝ｳ繧ｰ繝ｻ繧ｸ繝･繝九い逕ｷ蟄千ｷ丞粋1菴・/span>
              繧堤佐蠕励・            </p>
            <p>
              螟ｧ蟄ｦ譎ゆｻ｣縺ｯ繧｢繝｡繝ｪ繧ｫ縺ｫ貂｡繧翫ゝemple University 縺ｫ蝨ｨ蟄ｦ縲ょ・邀ｳ螟ｧ蟄ｦ繝ｪ繝ｼ繧ｰ
              <span className="text-foreground font-medium">・・CAA Div.2・・/span>
              縺ｫ縺ｦ繝√・繝繝ｪ繝ｼ繝繝ｼ繧貞漁繧√ｋ縲・            </p>
            <p>繧｢繝｡繝ｪ繧ｫ蝨ｨ菴丈ｸｭ縺ｫLLC繧堤ｫ九■荳翫￡縲∝ｭｦ逕溘→荳ｦ陦後＠縺ｦ繝・ル繧ｹ繧ｳ繝ｼ繝√→縺励※繧よｴｻ蜍輔・/p>
            <p>
              譌･譛ｬ蟶ｰ蝗ｽ蠕後・繝｢繝弱Μ繧ｹ豕募ｾ倶ｺ句漁謇縺ｧ繝代Λ繝ｪ繝ｼ繧ｬ繝ｫ縲∵ｪ蠑丈ｼ夂､ｾH繝代・繝医リ繝ｼ・亥・騾壻ｿ｡繧ｰ繝ｫ繝ｼ繝暦ｼ峨〒AI繧ｨ繝ｳ繧ｸ繝九い縺ｨ縺励※繧､繝ｳ繧ｿ繝ｼ繝ｳ繧堤ｵ碁ｨ薙・              迴ｾ蝨ｨ縺ｯ<span className="text-foreground font-medium">AI繧ｿ繝ｬ繝ｳ繝医ｒ謇ｱ縺・ｪ蠑丈ｼ夂､ｾ繧ｪ繝薙ヨ縺ｮ莉｣陦ｨ蜿也ｷ蠖ｹ</span>縺ｨ縺励※縲、I繧｢繝翫え繝ｳ繧ｵ繝ｼ繝ｻAI繧｢繝舌ち繝ｼ繝ｻ繝ｪ繧ｵ繝ｼ繝、I繧定ｻｸ縺ｨ縺励◆莠区･ｭ繧堤紫縺・ｋ縲・            </p>
          </div>
        </TiltCard>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {highlights.map((item, index) => (
            <TiltCard
              as={motion.div}
              key={item.title}
              strength={8}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-white p-5"
            >
              <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <item.icon size={18} className="text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-display italic text-foreground leading-tight mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground font-body leading-snug">
                {item.description}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}