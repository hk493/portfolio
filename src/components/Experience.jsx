import { motion } from 'framer-motion'
import BlurText from './BlurText'
import TiltCard from './TiltCard'
import { useLang } from '../i18n'

export default function Experience() {
  const { t } = useLang()
  const timeline = [0, 1, 2].map((i) => ({
    period: t(`exp.${i}.period`),
    company: t(`exp.${i}.company`),
    position: t(`exp.${i}.position`),
    description: t(`exp.${i}.desc`),
    current: i === 0,
  }))

  return (
    <section className="relative w-full bg-background/70 py-24 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">{t('exp.label')}</span>
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
                    {t('exp.current')}
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
