import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Github } from 'lucide-react'
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
    <section className="relative w-full bg-secondary/40 py-24 px-4 md:px-16 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-6 text-center">
          <span className="text-sm font-body text-muted-foreground">// Contact</span>
        </div>

        <BlurText
          as="h2"
          text="Let's talk."
          align="center"
          className="font-display italic text-foreground text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-3px] text-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl mx-auto text-center text-sm md:text-base text-muted-foreground font-body leading-relaxed"
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
              className="group rounded-2xl border border-border bg-white p-5 md:p-6 flex items-center gap-4 hover:shadow-dashboard transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <link.icon size={20} className="text-foreground" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-body text-muted-foreground mb-1">{link.label}</div>
                <div className="text-foreground font-body font-medium truncate">{link.value}</div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0"
                strokeWidth={2}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
