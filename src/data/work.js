// Client and business work — bilingual (ja/en).
// Client names are anonymized on purpose (public site).
// `metric` is the headline result; leave it out when there is no number.
export const work = [
  {
    period: { ja: '2026/11 —', en: 'Nov 2026 —' },
    client: { ja: '光通信グループ各社', en: 'Hikari Tsushin Group companies' },
    title: { ja: 'グループ各社の業務自動化', en: 'Workflow automation across group companies' },
    description: {
      ja: '現場担当者へのヒアリングで時間のかかっている手作業を特定し、自動化。',
      en: 'Interviewed frontline staff to find the most time-consuming manual work, then automated it.',
    },
    metric: { value: '96h', label: { ja: '1回あたりの削減（法人番号の判定）', en: 'saved per run (corporate number checks)' } },
    results: {
      ja: ['法人番号の判定：手作業約120時間の80%を削減（先方確認済み）', 'データ振り分けマクロの改修：月約20時間を削減'],
      en: ['Corporate number checks: cut 80% of ~120 hours of manual work (confirmed by the client)', 'Data routing macro rework: ~20 hours saved per month'],
    },
    tags: ['Excel Macro', 'Generative AI', 'Requirements'],
  },
  {
    period: { ja: '2026/11 —', en: 'Nov 2026 —' },
    client: { ja: '通信系企業', en: 'Telecom company' },
    title: { ja: 'AIタレントを使ったSNS運用', en: 'Social media run with an AI talent' },
    description: {
      ja: 'X・Instagram・Threadsの運用を担当。月に動画2本または画像10枚を、AIタレントで企画・制作。',
      en: 'Running X, Instagram and Threads. Planning and producing two videos or ten images a month with an AI talent.',
    },
    tags: ['SNS', 'AI Talent', 'Content'],
  },
  {
    period: { ja: '2026', en: '2026' },
    client: { ja: '不動産会社', en: 'Real estate company' },
    title: { ja: 'AIタレントを起用したコーポレートサイト', en: 'Corporate site fronted by an AI talent' },
    description: {
      ja: '企業の顔としてAIタレントを起用したコーポレートサイトを制作。',
      en: 'Built a corporate website with an AI talent as the face of the company.',
    },
    tags: ['Web', 'AI Talent'],
  },
  {
    period: { ja: '2026', en: '2026' },
    client: { ja: '大手家電量販店（コンペ）', en: 'Major electronics retailer (pitch)' },
    title: { ja: 'ショート動画の企画提案', en: 'Short-form video concepts' },
    description: {
      ja: 'キャラクターを使ったショート動画のコンペで、5案の企画を提案。',
      en: 'Pitched five short-form video concepts built around the retailer’s mascot.',
    },
    tags: ['Video', 'Planning'],
  },
  {
    period: { ja: '2026', en: '2026' },
    client: { ja: '株式会社オビト', en: 'Orbito, Inc.' },
    title: { ja: 'AIタレントのSNSアカウント運用', en: 'AI talent social accounts' },
    description: {
      ja: 'AIタレントのInstagram・TikTokアカウントを立ち上げて運用。',
      en: 'Launched and ran Instagram and TikTok accounts for AI talents.',
    },
    metric: { value: '10,000', label: { ja: '再生回数', en: 'views' } },
    tags: ['Instagram', 'TikTok', 'AI Talent'],
  },
  {
    period: { ja: '2026', en: '2026' },
    client: { ja: '株式会社オビト', en: 'Orbito, Inc.' },
    title: { ja: '広告動画の自動生成と評価ツール', en: 'Ad video generation and scoring' },
    description: {
      ja: '広告動画を自動で生成するパイプラインと、広告の出来を評価するツールを開発。',
      en: 'Built a pipeline that generates ad videos and a tool that scores how well an ad works.',
    },
    tags: ['FFmpeg', 'LLM', 'Python'],
  },
  {
    period: { ja: '米国在住時', en: 'While in the US' },
    client: { ja: 'Sunvibes Suncare（米国）', en: 'Sunvibes Suncare (US)' },
    title: { ja: 'サンケアブランドのECサイト構築', en: 'E-commerce store for a suncare brand' },
    description: {
      ja: '元プロテニス選手が立ち上げたブランドのShopifyストアを、デザイン・決済・商品登録までゼロから構築。海外サプライヤーとの交渉も担当。',
      en: 'Built the Shopify store from scratch for a brand founded by a former pro tennis player — design, payments and catalog — and negotiated with overseas suppliers.',
    },
    tags: ['Shopify', 'E-commerce', 'Sourcing'],
  },
]
