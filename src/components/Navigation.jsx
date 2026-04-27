import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 lg:px-16"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center"
        >
          <span className="font-heading italic text-white text-2xl lowercase leading-none">
            h
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex liquid-glass rounded-full p-1.5 items-center gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors rounded-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1 whitespace-nowrap hover:bg-white/90 transition-colors"
          >
            Get In Touch
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden liquid-glass w-12 h-12 rounded-full flex items-center justify-center text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Spacer for desktop symmetry */}
        <div className="hidden md:block w-12 h-12" aria-hidden="true" />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 liquid-glass rounded-[1.5rem] p-4"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-white/90 font-body text-sm hover:bg-white/5 rounded-full transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
