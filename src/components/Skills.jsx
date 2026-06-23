import { motion } from 'framer-motion'
import BlurText from './BlurText'
import TiltCard from './TiltCard'
import { useLang } from '../i18n'

const CAT_KEYS = ['ai', 'frontend', 'backend', 'media', 'infra', 'leadership']

export default function Skills() {
  const { t } = useLang()
  const categories = CAT_KEYS.map((key) => ({
    title: t(`skills.cat.${key}.title`),
    items: t(`skills.cat.${key}.items`),
  }))

  return (
    <section className="relative w-full bg-background/70 py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">{t('skills.label')}</span>
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
            <TiltCard
              as={motion.div}
              key={cat.title}
              strength={6}
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
                {(Array.isArray(cat.items) ? cat.items : []).map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-foreground/85 font-body"
                  >
                    <span className="text-muted-foreground">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
