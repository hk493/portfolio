import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import DashboardPreview from './DashboardPreview'
import TiltCard from './TiltCard'
import { useLang } from '../i18n'

export default function Home() {
  const { t } = useLang()
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <div className="relative z-10 flex-1 flex flex-col items-center w-full px-4 pt-28 md:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 backdrop-blur-md px-4 py-1.5 text-sm text-muted-foreground font-body mb-6"
        >
          {t('home.badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-display text-5xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-tight text-foreground max-w-3xl"
        >
          {t('home.headline.before')}{' '}
          <em className="font-display italic">{t('home.headline.em')}</em>{' '}
          {t('home.headline.after')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-center text-base md:text-lg text-muted-foreground max-w-[650px] leading-relaxed font-body"
        >
          {t('home.subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full px-6 py-3 text-sm font-medium font-body bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center gap-1.5"
          >
            {t('home.cta.projects')}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="rounded-full px-6 py-3 text-sm font-medium font-body bg-background/80 backdrop-blur-md border border-border text-foreground hover:bg-background transition-colors"
          >
            {t('home.cta.contact')}
          </a>
        </motion.div>

        <TiltCard
          as={motion.div}
          strength={3}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 w-full max-w-5xl"
        >
          <DashboardPreview />
        </TiltCard>
      </div>
    </section>
  )
}
