import { motion } from 'framer-motion'
import BlurText from './BlurText'
import { work } from '../data/work'
import { useLang } from '../i18n'

const L = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.ja : v)

export default function Work() {
  const { lang, t } = useLang()

  return (
    <section className="relative w-full bg-background/70 py-24 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-body text-muted-foreground">{t('work.label')}</span>
        </div>

        <BlurText
          as="h2"
          text="Work for"
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <BlurText
          as="h2"
          text="clients."
          delayStart={0.3}
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
        />
        <p className="mt-6 max-w-xl text-sm text-muted-foreground font-body leading-relaxed">
          {t('work.description')}
        </p>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl border border-border bg-white divide-y divide-border shadow-dashboard"
        >
          {work.map((item) => {
            const results = L(item.results, lang) || []
            return (
              <li
                key={L(item.title, 'en')}
                className="grid grid-cols-1 md:grid-cols-[11rem_1fr_auto] gap-x-8 gap-y-3 p-6 md:p-8"
              >
                <div className="font-body">
                  <div className="text-sm text-muted-foreground">{L(item.period, lang)}</div>
                  <div className="text-sm text-foreground/80 mt-1">{L(item.client, lang)}</div>
                </div>

                <div className="min-w-0">
                  <h3 className="font-display italic text-foreground text-2xl md:text-3xl leading-tight tracking-tight">
                    {L(item.title, lang)}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed max-w-prose">
                    {L(item.description, lang)}
                  </p>
                  {results.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {results.map((r) => (
                        <li key={r} className="flex gap-2 text-sm text-foreground/85 font-body">
                          <span className="text-muted-foreground" aria-hidden="true">—</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-foreground/75 font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {item.metric ? (
                  <div className="md:text-right md:w-40">
                    <div className="font-display italic text-accent text-5xl md:text-6xl leading-none tracking-[-1px]">
                      {item.metric.value}
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground font-body leading-snug">
                      {L(item.metric.label, lang)}
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block md:w-40" aria-hidden="true" />
                )}
              </li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
