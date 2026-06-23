import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, toggleLang, t } = useLang()

  const links = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-5 font-body"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-1.5"
        >
          <span className="text-accent">✦</span> Hoto
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="rounded-full px-3 h-9 border border-border bg-background/80 backdrop-blur-md text-foreground text-xs font-semibold hover:bg-background transition-colors"
            aria-label="toggle language"
          >
            {lang === 'ja' ? 'EN' : 'JA'}
          </button>
          <a
            href="#contact"
            className="inline-flex rounded-full px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors items-center gap-1.5"
          >
            {t('nav.cta')}
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>

        {/* Mobile right cluster */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="rounded-full px-3 h-9 border border-border bg-background text-foreground text-xs font-semibold"
            aria-label="toggle language"
          >
            {lang === 'ja' ? 'EN' : 'JA'}
          </button>
          <button
            className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 rounded-2xl bg-background border border-border p-3 shadow-dashboard"
          >
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="px-3 py-2 text-foreground text-sm hover:bg-secondary rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground flex items-center justify-center gap-1.5"
              >
                {t('nav.cta')}
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
