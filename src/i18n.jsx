import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-lang'

const ja = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.work': 'Work',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'nav.cta': 'お問い合わせ',

  'home.badge': 'Hoto Tajima · Portfolio 2026',
  'home.headline.before': 'Building the Future of',
  'home.headline.em': 'Smarter',
  'home.headline.after': 'Products',
  'home.subheadline':
    'AIで業務を減らす仕組みを、ヒアリングから実装まで一気通貫で届ける。光通信グループで業務自動化とAI活用を担当。',
  'home.cta.projects': 'プロジェクトを見る',
  'home.cta.contact': 'お問い合わせ',

  'about.label': '// About',
  'about.body1.before': '中高時代はテニスに打ち込み、',
  'about.body1.bold': 'JOP（日本テニス協会）ランキング・ジュニア男子総合1位',
  'about.body1.after': 'を獲得。',
  'about.body2.before': '大学時代はアメリカに渡り、テニスを続けながら学ぶ。King University では全米大学リーグ',
  'about.body2.bold': '（NCAA Div.2）',
  'about.body2.after': 'の男子テニス部でダブルス1番手を務める。',
  'about.body3': 'アメリカ在住中にLLCを立ち上げ、学生と並行してテニスコーチとしても活動。',
  'about.body4.before':
    '日本帰国後はテンプル大学ジャパンキャンパスに在学しながら、モノリス法律事務所でパラリーガル、株式会社Hパートナー（光通信グループ）でAIエンジニアを経験。株式会社オビトの事業責任者（代表取締役）としてAIタレント事業を率いたのち、現在は',
  'about.body4.bold': 'コアコンサルティンググループ（光通信グループ）',
  'about.body4.after':
    'で、グループ各社の業務自動化とAI活用の提案を担当。',
  'about.h.0.title': 'JOP ジュニア男子総合1位',
  'about.h.0.desc': '日本テニス協会ランキング',
  'about.h.1.title': 'NCAA Div.2',
  'about.h.1.desc': '全米大学テニスリーグ・ダブルス1番手',
  'about.h.2.title': 'Temple University',
  'about.h.2.desc': 'テンプル大学 2027年卒業見込み',
  'about.h.3.title': 'LLC Founder (US)',
  'about.h.3.desc': 'アメリカ在住時に起業',
  'about.h.4.title': 'CEO',
  'about.h.4.desc': '株式会社オビト 代表取締役（2026）',

  'exp.label': '// Experience',
  'exp.current': '現職',
  'exp.0.period': '2026/11 — 現在',
  'exp.0.company': 'コアコンサルティンググループ株式会社（光通信グループ）',
  'exp.0.position': 'AI推進・業務改善',
  'exp.0.desc':
    'グループ各社の業務自動化とAI活用の提案を担当。法人番号の判定を自動化し1回あたり約96時間、データ振り分けマクロの改修で月約20時間の業務を削減。',
  'exp.1.period': '2026/2 — 2026/10',
  'exp.1.company': '株式会社オビト（光通信グループ）',
  'exp.1.position': '事業責任者（代表取締役）',
  'exp.1.desc':
    'AIタレント事業で40社超と商談し6社が受注。商談記録の分析から「業務のAI化支援」へ事業を転換し、グループ9社への提案で9社すべて受注。AI人材8名を採用・配置し、AIプロダクト6件を自ら開発。',
  'exp.2.period': '2025/10 — 2026/2',
  'exp.2.company': '株式会社Hパートナー（光通信グループ）',
  'exp.2.position': 'AIエンジニア',
  'exp.2.desc':
    '営業組織向けに商談前の企業分析ツールと議事録ツールを開発し、大規模な営業部門で運用。Power Automate・Copilotでの業務自動化も担当。',
  'exp.3.period': '2025/9 — 2025/10',
  'exp.3.company': '株式会社メタデータ',
  'exp.3.position': 'AIエンジニア',
  'exp.3.desc': 'ローカル環境へのLLM導入、MCPサーバーの構築、RAGの実装を担当。',
  'exp.4.period': '2025/5 — 2025/9',
  'exp.4.company': 'モノリス法律事務所',
  'exp.4.position': 'パラリーガル',
  'exp.4.desc': '生成AIで法令・判例を調べ、出典で裏付けを取ったうえで契約書の作成を補助。国際案件のリサーチを日英で担当。',

  'work.label': '// Work',
  'work.description': 'これまでに担当した支援・制作の実績です。取引先の社名は伏せています。',

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
  'skills.cat.ai.items': ['LLM API 統合', 'Prompt Engineering', 'AI Agents', 'RAG / 検索拡張生成', '業務自動化（Power Automate / Copilot）'],
  'skills.cat.frontend.title': 'Frontend',
  'skills.cat.frontend.items': ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
  'skills.cat.backend.title': 'Backend',
  'skills.cat.backend.items': ['Python', 'FastAPI', 'API 設計', 'データ処理'],
  'skills.cat.media.title': 'Media / Voice',
  'skills.cat.media.items': ['Whisper (音声認識)', 'TTS / STT', 'FFmpeg', '動画生成パイプライン'],
  'skills.cat.infra.title': 'Infra',
  'skills.cat.infra.items': ['Vercel', 'Render', 'GitHub / Git', 'クラウドデプロイ'],
  'skills.cat.leadership.title': 'Leadership',
  'skills.cat.leadership.items': ['経営 / CEO', 'チームマネジメント', 'NCAA Div.2 テニス部', 'バイリンガル (日/英)'],

  'contact.label': '// Contact',
  'contact.description':
    'AI導入や業務自動化のご相談、プロダクト開発のお話など、お気軽にご連絡ください。',

  'footer.copy': '© 2026 Hoto Tajima · 田島 宝人',

  'card.featured': 'Featured',
  'card.features': 'Features',

  'dashboard.welcome': 'ようこそ、宝人',
  'dashboard.date': '2026年6月19日',
}

const en = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.work': 'Work',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'nav.cta': 'Get in touch',

  'home.badge': 'Hoto Tajima · Portfolio 2026',
  'home.headline.before': 'Building the Future of',
  'home.headline.em': 'Smarter',
  'home.headline.after': 'Products',
  'home.subheadline':
    'I build AI systems that take work off people’s plates, from the first interview to the shipped tool. Currently automating workflows across the Hikari Tsushin Group.',
  'home.cta.projects': 'View projects',
  'home.cta.contact': 'Get in touch',

  'about.label': '// About',
  'about.body1.before': 'Through junior high and high school, I committed to tennis and earned the ',
  'about.body1.bold': "Japan Tennis Association (JOP) Junior Boys' #1 ranking",
  'about.body1.after': '.',
  'about.body2.before': 'In college, I moved to the US to keep competing. At King University I played first doubles for the ',
  'about.body2.bold': 'NCAA Div.2',
  'about.body2.after': ' men’s tennis team.',
  'about.body3':
    'While studying in the US, I founded an LLC and worked as a tennis coach alongside school.',
  'about.body4.before':
    'Back in Japan, while studying at Temple University Japan, I worked as a paralegal at Monolith Law Office and as an AI engineer at H Partner, Inc. (Hikari Tsushin Group). After leading the AI talent business as CEO of Orbito, I now work at ',
  'about.body4.bold': 'Core Consulting Group (Hikari Tsushin Group)',
  'about.body4.after':
    ', automating workflows and proposing AI use across group companies.',
  'about.h.0.title': 'JOP Junior #1',
  'about.h.0.desc': 'Japan Tennis Association ranking',
  'about.h.1.title': 'NCAA Div.2',
  'about.h.1.desc': 'US college tennis, first doubles',
  'about.h.2.title': 'Temple University',
  'about.h.2.desc': 'Class of 2027 (expected)',
  'about.h.3.title': 'LLC Founder (US)',
  'about.h.3.desc': 'Founded while in the US',
  'about.h.4.title': 'CEO',
  'about.h.4.desc': 'CEO of Orbito, Inc. (2026)',

  'exp.label': '// Experience',
  'exp.current': 'Current',
  'exp.0.period': 'Nov 2026 — Present',
  'exp.0.company': 'Core Consulting Group (Hikari Tsushin Group)',
  'exp.0.position': 'AI & workflow improvement',
  'exp.0.desc':
    'Automating workflows and proposing AI use across group companies. Automated corporate number checks (~96 hours saved per run) and reworked a data routing macro (~20 hours saved per month).',
  'exp.1.period': 'Feb 2026 — Oct 2026',
  'exp.1.company': 'Orbito, Inc. (Hikari Tsushin Group)',
  'exp.1.position': 'Head of business (CEO)',
  'exp.1.desc':
    'Met 40+ companies for the AI talent business and closed 6. Analyzed the meeting records, pivoted to AI workflow support, and won all 9 group companies pitched. Hired and placed 8 AI engineers and built 6 AI products.',
  'exp.2.period': 'Oct 2025 — Feb 2026',
  'exp.2.company': 'H Partner, Inc. (Hikari Tsushin Group)',
  'exp.2.position': 'AI Engineer',
  'exp.2.desc':
    'Built pre-meeting company research and meeting-notes tools used across a large sales organization, plus automation with Power Automate and Copilot.',
  'exp.3.period': 'Sep 2025 — Oct 2025',
  'exp.3.company': 'Metadata, Inc.',
  'exp.3.position': 'AI Engineer',
  'exp.3.desc': 'Set up local LLMs, built MCP servers, and implemented RAG.',
  'exp.4.period': 'May 2025 — Sep 2025',
  'exp.4.company': 'Monolith Law Office',
  'exp.4.position': 'Paralegal',
  'exp.4.desc': 'Researched laws and case law with generative AI, verified every source, and helped draft contracts. Supported international matters in Japanese and English.',

  'work.label': '// Work',
  'work.description': 'Work I have delivered for clients and my own businesses. Client names are withheld.',

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
  'skills.cat.ai.items': ['LLM API integration', 'Prompt engineering', 'AI agents', 'RAG / retrieval augmentation', 'Workflow automation (Power Automate / Copilot)'],
  'skills.cat.frontend.title': 'Frontend',
  'skills.cat.frontend.items': ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
  'skills.cat.backend.title': 'Backend',
  'skills.cat.backend.items': ['Python', 'FastAPI', 'API design', 'Data processing'],
  'skills.cat.media.title': 'Media / Voice',
  'skills.cat.media.items': ['Whisper (ASR)', 'TTS / STT', 'FFmpeg', 'Video pipelines'],
  'skills.cat.infra.title': 'Infra',
  'skills.cat.infra.items': ['Vercel', 'Render', 'GitHub / Git', 'Cloud deploy'],
  'skills.cat.leadership.title': 'Leadership',
  'skills.cat.leadership.items': ['CEO / management', 'Team management', 'NCAA Div.2 tennis', 'Bilingual (JP/EN)'],

  'contact.label': '// Contact',
  'contact.description':
    "Reach out about AI adoption, workflow automation, or product development — happy to chat.",

  'footer.copy': '© 2026 Hoto Tajima',

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
