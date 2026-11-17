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
  'about.body0':
    'はじめまして、田島宝人です。起業家として事業をつくり、エンジニアとしてAIツールを開発し、アスリートとしてテニスに打ち込んできました。',
  'about.body1.before': '中学・高校時代はテニスに打ち込み、',
  'about.body1.bold': 'JOP（日本テニス協会）ジュニア男子ランキング1位',
  'about.body1.after': 'を獲得しました。',
  'about.body2.before': '大学からはアメリカに渡り、競技を続けながら学びました。King University では全米大学リーグ',
  'about.body2.bold': '（NCAA Div.2）',
  'about.body2.after': 'の男子テニス部で、ダブルス1番手を務めました。',
  'about.body3': 'アメリカ在住中にはLLCを立ち上げ、学業と並行してテニスコーチとしても活動しました。',
  'about.body4.before':
    '日本に帰国後はテンプル大学ジャパンキャンパスに在学し、モノリス法律事務所でパラリーガル、株式会社メタデータと株式会社Hパートナー（光通信グループ）でAIエンジニアを経験しました。2026年からは株式会社オビトの事業責任者（代表取締役）としてAIタレント事業を率い、現在は',
  'about.body4.bold': 'コアコンサルティンググループ（光通信グループ）',
  'about.body4.after':
    'で、グループ各社の業務自動化とAI活用の提案を担当しています。',
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
  'exp.dutiesLabel': '業務内容',
  'exp.resultsLabel': '実績',
  'exp.current': '現職',
  'exp.0.period': '2026/11 — 現在',
  'exp.0.company': 'コアコンサルティンググループ株式会社（光通信グループ）',
  'exp.0.position': 'AI推進・業務改善',
  'exp.0.desc':
    '光通信グループ各社の業務改善・リスキリング研修・AI活用推進を行う会社で、AI推進と業務改善を担当。',
  'exp.0.duties': [
    'グループ各社の現場担当者へのヒアリングと、時間のかかっている手作業の特定',
    'グループ各社の業務自動化（Excelマクロの改修、外部サービスからのデータ自動取得、法人番号の判定など）',
    '自社サービスの企画：営業メールの下書きを毎朝一覧にまとめ、承認したものだけを送信する仕組み（要件定義まで完了）',
    '費用削減と常駐での伴走支援を軸にした、AI活用の提案資料の作成',
    'AIタレントを使った制作案件の進行（コーポレートサイト制作、ショート動画の企画提案、SNS運用）',
    '料理教室向けリアルタイム翻訳・字幕アプリの改修方針の策定、海外企業との共同営業資料の日本語化',
  ],
  'exp.0.results': [
    '法人番号の判定の自動化：1回あたり約96時間の削減（手作業約120時間の80%、先方確認済み）',
    'データ振り分けマクロの改修：月約20時間の削減',
    '外部サービスからのデータ自動取得：月0.5〜1時間の削減',
  ],
  'exp.1.period': '2026/2 — 2026/10',
  'exp.1.company': '株式会社オビト（光通信グループ）',
  'exp.1.position': '事業責任者（代表取締役）',
  'exp.1.desc':
    '光通信グループが社内ベンチャーとして新設した会社の事業責任者。顧客も実績もない状態から、販路・収益モデル・プロダクトを設計。',
  'exp.1.duties': [
    'AIタレント事業の営業：上場企業やテレビ局を含む25件以上の提案を自ら実施',
    '商談議事録の分析による事業転換：断られた理由を分析し、「自社にタレントのIPがなく、提案が業務改善の域を出ない」ことを特定',
    '「業務のAI化支援」への転換：FAQボット・業務ツール開発、Power Automate／Copilotでの自動化、AI人材の常駐をまとめて提案',
    'AI人材の採用と配置：競技プログラミングやデータサイエンスのコンテスト入賞者を中心に採用',
    'AIプロダクトの要件定義・設計・実装（テレビ局向け4言語AIアナウンサー動画生成、6部門向けRAGアシスタント、AIアバター動画生成基盤、広告動画の自動生成、リアルタイム議事録AI、勤怠管理システム）',
  ],
  'exp.1.results': [
    'AIタレント事業：40社超と商談し、6社が受注（受注率約15%）',
    '事業転換後：グループ9社への提案で9社すべて受注',
    'AI人材8名を採用し、グループ9社に配置',
    'AIプロダクト6件をリリース',
  ],
  'exp.2.period': '2025/10 — 2026/2',
  'exp.2.company': '株式会社Hパートナー（光通信グループ）',
  'exp.2.position': 'AIエンジニア',
  'exp.2.desc':
    '光通信グループの会社で、営業組織向けのAIツール開発と業務自動化を担当。',
  'exp.2.duties': [
    '商談前の企業分析ツールと議事録ツールの開発（Python・TypeScript・LLM API）',
    'Power AutomateとCopilotでの業務自動化',
    'OCRで契約書の内容をExcelに取り込む仕組みの構築',
    '運用の手間が少ない構成としてSupabaseとRenderを提案・採用',
    'Notionなど社内ツールの管理と、後輩メンバーへの技術指導',
  ],
  'exp.2.results': [
    '開発したツールが大規模な営業部門で運用',
    '成果が評価され、グループ新設会社の事業責任者（代表取締役）に登用',
  ],
  'exp.3.period': '2025/9 — 2025/10',
  'exp.3.company': '株式会社メタデータ',
  'exp.3.position': 'AIエンジニア',
  'exp.3.desc':
    '生成AIの実行基盤とAI連携の開発を担当。',
  'exp.3.duties': [
    'ローカル環境へのLLM導入と、外部APIに依存しない実行基盤の構築',
    'MCPサーバーの構築と、外部の公開MCPサーバーを自社ソフトウェアから呼び出す連携の実装',
    'RAG（社内文書を参照して回答するAI）の実装',
    'プロンプト設計で、汎用の生成AIを用途別の専門AIとして動かす仕組みの設計',
  ],
  'exp.3.results': [],
  'exp.4.period': '2025/5 — 2025/9',
  'exp.4.company': 'モノリス法律事務所',
  'exp.4.position': 'パラリーガル',
  'exp.4.desc':
    '弁護士の業務支援として、リサーチと書類作成の補助を担当。',
  'exp.4.duties': [
    '生成AIを使った法令・判例のリサーチと、出典で裏付けを取ったうえでの契約書作成の補助',
    '法務局への書類提出など、案件の実務対応',
    '国際案件のリサーチとサポート（日本語・英語）',
  ],
  'exp.4.results': [],

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
  'about.body0':
    'Hi, I’m Hoto Tajima. I build businesses as a founder, build AI tools as an engineer, and grew up competing as a tennis player.',
  'about.body1.before': 'Through junior high and high school, I committed to tennis and earned the ',
  'about.body1.bold': "Japan Tennis Association (JOP) Junior Boys' #1 ranking",
  'about.body1.after': '.',
  'about.body2.before': 'For college, I moved to the US to keep competing while I studied. At King University I played first doubles for the ',
  'about.body2.bold': 'NCAA Div.2',
  'about.body2.after': ' men’s tennis team.',
  'about.body3':
    'While studying in the US, I founded an LLC and worked as a tennis coach alongside school.',
  'about.body4.before':
    'Back in Japan, I enrolled at Temple University Japan and worked as a paralegal at Monolith Law Office and as an AI engineer at Metadata, Inc. and H Partner, Inc. (Hikari Tsushin Group). In 2026 I led the AI talent business as CEO of Orbito, and I now work at ',
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
  'exp.dutiesLabel': 'What I did',
  'exp.resultsLabel': 'Results',
  'exp.current': 'Current',
  'exp.0.period': 'Nov 2026 — Present',
  'exp.0.company': 'Core Consulting Group (Hikari Tsushin Group)',
  'exp.0.position': 'AI & workflow improvement',
  'exp.0.desc':
    'Leading AI adoption and workflow improvement at the group company that runs process improvement, reskilling and AI programs for Hikari Tsushin Group companies.',
  'exp.0.duties': [
    'Interviewing frontline staff across group companies to find the most time-consuming manual work',
    'Automating workflows: reworking Excel macros, pulling data from external services automatically, checking corporate numbers',
    'Designing an in-house service that collects sales email drafts each morning and sends only the approved ones (requirements complete)',
    'Writing the AI proposal deck built around cost reduction and on-site support',
    'Running AI talent production work: a corporate website, short-form video concepts, social media',
    'Planning fixes for a real-time translation and caption app for a cooking school, and localizing a joint sales deck with an overseas partner',
  ],
  'exp.0.results': [
    'Corporate number checks: ~96 hours saved per run (80% of ~120 hours of manual work, confirmed by the client)',
    'Data routing macro rework: ~20 hours saved per month',
    'Automatic data pulls from an external service: 0.5–1 hour saved per month',
  ],
  'exp.1.period': 'Feb 2026 — Oct 2026',
  'exp.1.company': 'Orbito, Inc. (Hikari Tsushin Group)',
  'exp.1.position': 'Head of business (CEO)',
  'exp.1.desc':
    'Head of a new venture inside Hikari Tsushin Group. Designed the sales channels, revenue model and products from zero customers.',
  'exp.1.duties': [
    'Selling the AI talent business: delivered 25+ pitches myself, including to listed companies and TV broadcasters',
    'Pivoting from meeting records: analyzed why prospects said no and found the proposal never got past “process improvement” because we owned no talent IP',
    'Repositioning as AI workflow support: FAQ bots, internal tools, Power Automate/Copilot automation and on-site AI engineers in one package',
    'Hiring and placing AI engineers, mainly award winners from competitive programming and data science contests',
    'Specifying, designing and building AI products: a 4-language AI news anchor for TV, a RAG assistant for 6 departments, an AI avatar video platform, ad video generation, real-time meeting notes, an attendance system',
  ],
  'exp.1.results': [
    'AI talent business: met 40+ companies, closed 6 (~15%)',
    'After the pivot: won all 9 group companies pitched',
    'Hired 8 AI engineers and placed them at 9 group companies',
    'Shipped 6 AI products',
  ],
  'exp.2.period': 'Oct 2025 — Feb 2026',
  'exp.2.company': 'H Partner, Inc. (Hikari Tsushin Group)',
  'exp.2.position': 'AI Engineer',
  'exp.2.desc':
    'Built AI tools and automation for the sales organization at a Hikari Tsushin Group company.',
  'exp.2.duties': [
    'Built pre-meeting company research and meeting-notes tools (Python, TypeScript, LLM APIs)',
    'Automated workflows with Power Automate and Copilot',
    'Built an OCR flow that pulls contract details into Excel',
    'Proposed and adopted Supabase and Render to keep operations light',
    'Managed internal tools such as Notion and coached other team members',
  ],
  'exp.2.results': [
    'Tools in daily use across a large sales department',
    'Promoted to head (CEO) of a new group company on the strength of this work',
  ],
  'exp.3.period': 'Sep 2025 — Oct 2025',
  'exp.3.company': 'Metadata, Inc.',
  'exp.3.position': 'AI Engineer',
  'exp.3.desc':
    'Built generative AI infrastructure and AI integrations.',
  'exp.3.duties': [
    'Set up local LLMs and an execution environment independent of external APIs',
    'Built MCP servers and connected public MCP servers to in-house software',
    'Implemented RAG',
    'Designed prompts that turn general-purpose models into task-specific assistants',
  ],
  'exp.3.results': [],
  'exp.4.period': 'May 2025 — Sep 2025',
  'exp.4.company': 'Monolith Law Office',
  'exp.4.position': 'Paralegal',
  'exp.4.desc':
    'Supported lawyers with research and document preparation.',
  'exp.4.duties': [
    'Researched laws and case law with generative AI, verified every source, and helped draft contracts',
    'Handled filings with the Legal Affairs Bureau and other case work',
    'Researched and supported international matters in Japanese and English',
  ],
  'exp.4.results': [],

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
