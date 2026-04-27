import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Github } from 'lucide-react'
import OrbitBackground from './OrbitBackground'
import BlurText from './BlurText'

export default function Contact() {
  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hoto_tajima@po.hikari.co.jp',
      href: 'mailto:hoto_tajima@po.hikari.co.jp',
    },
    {
      icon: Github,
      label: 'GitHub · Orbito-ai',
      value: 'github.com/Orbito-ai',
      href: 'https://github.com/Orbito-ai',
    },
    {
      icon: Github,
      label: 'GitHub · hikari-houto',
      value: 'github.com/hikari-houto',
      href: 'https://github.com/hikari-houto',
    },
  ]

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden py-24 px-4 md:px-16 flex items-center">
      <OrbitBackground variant="hero" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="mb-6 text-center">
          <span className="text-sm font-body text-white/80">// Contact</span>
        </div>

        <BlurText
          as="h2"
          text="Let's talk."
          className="font-heading italic text-white text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-3px] text-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl mx-auto text-center text-sm md:text-base text-white/80 font-body font-light leading-relaxed"
        >
          新しいプロジェクトの相談、AIタレント・プロダクト開発のお話など、お気軽にご連絡ください。
        </motion.p>

        <div className="space-y-3 mt-12">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group liquid-glass rounded-[1.25rem] p-5 md:p-6 flex items-center gap-4 hover:scale-[1.01] transition-transform"
            >
              <div className="liquid-glass w-12 h-12 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                <link.icon size={20} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-body text-white/60 mb-1">{link.label}</div>
                <div className="text-white font-body font-medium truncate">{link.value}</div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-white/50 group-hover:text-white transition-colors flex-shrink-0"
                strokeWidth={2}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
