import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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

      </div>
    </section>
  )
}
