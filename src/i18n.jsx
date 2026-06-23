import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-lang'

const ja = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'nav.cta': 'お問い合わせ',

  'home.badge': 'Hoto Tajima · Portfolio 2026',
  'home.headline.before': 'Building the Future of',
  'home.headline.em': 'Smarter',
  'home.headline.after': 'Products',
  'home.subheadline':
    '株式会社オビト代表。AIタレント事業と業務ツールを設計から実装まで一気通貫で届ける。',
  'home.cta.projects': 'プロジェクトを見る',
  'home.cta.contact': 'お問い合わせ',

  'about.label': '// About',
  'about.body1.before': '中高時代はテニスに打ち込み、',
  'about.body1.bold': 'JOP（日本テニス協会）ランキング・ジュニア男子総合1位',
  'about.body1.after': 'を獲得。',
  'about.body2.before': '大学時代はアメリカに渡り、Temple University に在学。全米大学リーグ',
  'about.body2.bold': '（NCAA Div.2）',
  'about.body2.after': 'にてチームリーダーを務める。',
  'about.body3': 'アメリカ在住中にLLCを立ち上げ、学生と並行してテニスコーチとしても活動。',
  'about.body4.before':
    '日本帰国後はモノリス法律事務所でパラリーガル、株式会社Hパートナー（光通信グループ）でAIエンジニアとしてインターンを経験。現在は',
  'about.body4.bold': 'AIタレントを扱う株式会社オビトの代表取締役',
  'about.body4.after':
    'として、AIアナウンサー・AIアバター・リサーチAIを軸とした事業を率いる。',
  'about.h.0.title': 'JOP ジュニア男子総合1位',
  'about.h.0.desc': '日本テニス協会ランキング',
  'about.h.1.title': 'NCAA Div.2',
  'about.h.1.desc': '全米大学テニスリーグ・チームリーダー',
  'about.h.2.title': 'Temple University',
  'about.h.2.desc': 'テンプル大学 卒業',
  'about.h.3.title': 'LLC Founder (US)',
  'about.h.3.desc': 'アメリカ在住時に起業',
  'about.h.4.title': 'CEO',
  'about.h.4.desc': '株式会社オビト 代表取締役',

  'exp.label': '// Experience',
  'exp.current': '現職',
  'exp.0.period': '2026/3 — 現在',
  'exp.0.company': '株式会社オビト',
  'exp.0.position': '代表取締役',
  'exp.0.desc':
    'AIタレントを扱う株式会社オビトの代表。AIアナウンサー（AI-Director）・AIアバター（avatar-v2）・リサーチAIなど、Orbito-ai 配下のプロダクト群を統括。',
  'exp.1.period': '2025/10 — 2026/2',
  'exp.1.company': '株式会社Hパートナー（光通信グループ）',
  'exp.1.position': 'AIエンジニア インターン',
  'exp.1.desc':
    'AIを活用した社内プロダクトの開発に従事。企業分析ツールなどに携わる。',
  'exp.2.period': '2025/5 — 2025/9',
  'exp.2.company': 'モノリス法律事務所',
  'exp.2.position': 'パラリーガル インターン',
  'exp.2.desc': '法律業務のサポート・リサーチ業務を担当。',

  'projects.label': '// Projects',
  'projects.description':
    'AIアナウンサー・AIアバター・リサーチエージェントを中心とした、Orbito-ai と hikari-houto のプロダクト群。',
  'projects.filter.All': 'すべて',
  'projects.filter.AI Product': 'AIプロダクト',
  'projects.filter.Core Product': 'コアプロダクト',
  'projects.filter.Business Tool': '業務ツール',
  'projects.moreOnGithub.line1': 'GitHub で',
  'projects.moreOnGithub.line2': 'もっと見る',

  'skills.label': '// Skills',
  'skills.cat.ai.title': 'AI / LLM',
  'skills.cat.ai.items': ['LLM API 統合', 'Prompt Engineering', 'AI Agents', 'RAG / 検索拡張生成'],
  'skills.cat.frontend.title': 'Frontend',
  'skills.cat.frontend.items': ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
  'skills.cat.backend.title': 'Backend',
  'skills.cat.backend.items': ['Python', 'FastAPI', 'API 設計', 'データ処理'],
  'skills.cat.media.title': 'Media / Voice',
  'skills.cat.media.items': ['Whisper (音声認識)', 'TTS / STT', 'FFmpeg', '動画生成パイプライン'],
  'skills.cat.infra.title': 'Infra',
  'skills.cat.infra.items': ['Vercel', 'Render', 'GitHub / Git', 'クラウドデプロイ'],
  'skills.cat.leadership.title': 'Leadership',
  'skills.cat.leadership.items': ['経営 / CEO', 'チームマネジメント', 'NCAA Div.2 キャプテン経験', 'バイリンガル (日/英)'],

  'contact.label': '// Contact',
  'contact.description':
    '新しいプロジェクトの相談、AIタレント・プロダクト開発のお話など、お気軽にご連絡ください。',

  'footer.copy': '© 2026 Hoto Tajima · 田島 宝人 · 株式会社オビト',

  'card.featured': 'Featured',
  'card.features': 'Features',

  'dashboard.welcome': 'ようこそ、宝人',
  'dashboard.date': '2026年6月19日',
}

const en = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'nav.cta': 'Get in touch',

  'home.badge': 'Hoto Tajima · Portfolio 2026',
  'home.headline.before': 'Building the Future of',
  'home.headline.em': 'Smarter',
  'home.headline.after': 'Products',
  'home.subheadline':
    'CEO of Orbito, Inc. Delivering AI talent products and business tools end-to-end — from design to implementation.',
  'home.cta.projects': 'View projects',
  'home.cta.contact': 'Get in touch',

  'about.label': '// About',
  'about.body1.before': 'Through junior high and high school, I committed to tennis and earned the ',
  'about.body1.bold': "Japan Tennis Association (JOP) Junior Boys' #1 ranking",
  'about.body1.after': '.',
  'about.body2.before': 'In college, I attended Temple University in the US and served as team leader of its ',
  'about.body2.bold': 'NCAA Div.2',
  'about.body2.after': ' tennis program.',
  'about.body3':
    'While studying in the US, I founded an LLC and worked as a tennis coach alongside school.',
  'about.body4.before':
    'After returning to Japan, I worked as a paralegal at Monolith Law Office and as an AI engineer intern at H Partner, Inc. (Hikari Tsushin Group). Now I serve as ',
  'about.body4.bold': 'CEO of Orbito, an AI talent agency',
  'about.body4.after':
    ', leading a portfolio centered on AI announcers, AI avatars, and research agents.',
  'about.h.0.title': 'JOP Junior #1',
  'about.h.0.desc': 'Japan Tennis Association ranking',
  'about.h.1.title': 'NCAA Div.2',
  'about.h.1.desc': 'US college tennis team leader',
  'about.h.2.title': 'Temple University',
  'about.h.2.desc': 'Graduate',
  'about.h.3.title': 'LLC Founder (US)',
  'about.h.3.desc': 'Founded while in the US',
  'about.h.4.title': 'CEO',
  'about.h.4.desc': 'CEO of Orbito, Inc.',

  'exp.label': '// Experience',
  'exp.current': 'Current',
  'exp.0.period': 'Mar 2026 — Present',
  'exp.0.company': 'Orbito, Inc.',
  'exp.0.position': 'CEO',
  'exp.0.desc':
    'CEO of Orbito, an AI talent agency. Leading the product portfolio under Orbito-ai, including the AI Announcer (AI-Director), AI Avatar (avatar-v2), and Research AI.',
  'exp.1.period': 'Oct 2025 — Feb 2026',
  'exp.1.company': 'H Partner, Inc. (Hikari Tsushin Group)',
  'exp.1.position': 'AI Engineer Intern',
  'exp.1.desc':
    'Worked on AI-driven internal products, including company analysis tools.',
  'exp.2.period': 'May 2025 — Sep 2025',
  'exp.2.company': 'Monolith Law Office',
  'exp.2.position': 'Paralegal Intern',
  'exp.2.desc': 'Supported legal work and research tasks.',

  'projects.label': '// Projects',
  'projects.description':
    'A portfolio of Orbito-ai and hikari-houto products centered on AI announcers, AI avatars, and research agents.',
  'projects.filter.All': 'All',
  'projects.filter.AI Product': 'AI Product',
  'projects.filter.Core Product': 'Core Product',
  'projects.filter.Business Tool': 'Business Tool',
  'projects.moreOnGithub.line1': 'More on',
  'projects.moreOnGithub.line2': 'GitHub',

  'skills.label': '// Skills',
  'skills.cat.ai.title': 'AI / LLM',
  'skills.cat.ai.items': ['LLM API integration', 'Prompt engineering', 'AI agents', 'RAG / retrieval augmentation'],
  'skills.cat.frontend.title': 'Frontend',
  'skills.cat.frontend.items': ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
  'skills.cat.backend.title': 'Backend',
  'skills.cat.backend.items': ['Python', 'FastAPI', 'API design', 'Data processing'],
  'skills.cat.media.title': 'Media / Voice',
  'skills.cat.media.items': ['Whisper (ASR)', 'TTS / STT', 'FFmpeg', 'Video pipelines'],
  'skills.cat.infra.title': 'Infra',
  'skills.cat.infra.items': ['Vercel', 'Render', 'GitHub / Git', 'Cloud deploy'],
  'skills.cat.leadership.title': 'Leadership',
  'skills.cat.leadership.items': ['CEO / management', 'Team management', 'NCAA Div.2 captain', 'Bilingual (JP/EN)'],

  'contact.label': '// Contact',
  'contact.description':
    "Reach out about new projects, AI talent collaborations, or product development — happy to chat.",

  'footer.copy': '© 2026 Hoto Tajima · Orbito, Inc.',

  'card.featured': 'Featured',
  'card.features': 'Features',

  'dashboard.welcome': 'Welcome, Hoto',
  'dashboard.date': 'Jun 19, 2026',
}

export const translations = { ja, en }

const LangContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'ja' || saved === 'en') return saved
      return (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'ja'
    } catch {
      return 'ja'
    }
  })

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang) } catch {}
    document.documentElement.lang = lang
  }, [lang])

  const t = (key) => {
    const v = translations[lang][key]
    return v ?? key
  }
  const toggleLang = () => setLang((l) => (l === 'ja' ? 'en' : 'ja'))

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) {
    return { lang: 'ja', setLang: () => {}, toggleLang: () => {}, t: (k) => translations.ja[k] ?? k }
  }
  return ctx
}
