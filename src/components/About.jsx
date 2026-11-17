import { motion } from 'framer-motion'
import { Trophy, Award, GraduationCap, Globe, Briefcase } from 'lucide-react'
import BlurText from './BlurText'
import TiltCard from './TiltCard'
import { useLang } from '../i18n'

const ICONS = [Trophy, Award, GraduationCap, Globe, Briefcase]

export default function About() {
  const { t } = useLang()
  const highlights = ICONS.map((Icon, i) => ({
    Icon,
    title: t(`about.h.${i}.title`),
    description: t(`about.h.${i}.desc`),
  }))

  return (
    <section className="relative w-full bg-background/70 pt-32 md:pt-36 pb-24 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">{t('about.label')}</span>
        </div>

        <BlurText
          as="h2"
          text="Founder. Engineer."
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <BlurText
          as="h2"
          text="Athlete."
          delayStart={0.3}
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 font-body text-lg md:text-xl text-muted-foreground tracking-tight"
        >
          {t('about.name')}
        </motion.p>

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
            {(Array.isArray(t('about.paras')) ? t('about.paras') : []).map((para) => (
              <p key={para}>
                {para.split('**').map((part, i) =>
                  i % 2 === 1 ? (
                    <span key={i} className="text-foreground font-medium">{part}</span>
                  ) : (
                    part
                  )
                )}
              </p>
            ))}
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
                <item.Icon size={18} className="text-foreground" strokeWidth={1.5} />
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
