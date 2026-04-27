// Portfolio project data — fact-based description of products & capabilities
export const repositories = [
  {
    owner: 'Orbito-ai',
    name: 'orbito',
    displayName: 'Orbito',
    category: 'Core Product',
    tagline: 'AIタレント管理プラットフォーム',
    description:
      '株式会社オビトの中核プロダクト。AIタレント（AIキャラクター）を運用するための統合プラットフォーム。',
    features: [
      'AIタレントのペルソナ・プロフィール管理',
      '複数のAIサービス（アバター、議事録、動画生成など）との連携基盤',
      '運用者向けのダッシュボード',
      'タレントごとの対話ログ管理',
    ],
    techStack: ['TypeScript', 'Next.js', 'React', 'Vercel'],
    featured: true,
  },
  {
    owner: 'Orbito-ai',
    name: 'avatar-v2',
    displayName: 'AI Avatar v2',
    category: 'AI Product',
    tagline: 'リアルタイムAIアバター',
    description:
      'AIアバターがリアルタイムで応答・発話するシステムの第2世代。v1を踏まえて改良。',
    features: [
      'テキスト入力に応じたアバターの発話・応答',
      '音声合成（TTS）と口の動きの同期',
      'ペルソナごとの口調・キャラクター設定',
      'リアルタイム配信・対話用途への対応',
    ],
    techStack: ['Python', 'TypeScript', 'TTS/STT', 'WebRTC'],
    featured: true,
  },
  {
    owner: 'Orbito-ai',
    name: 'giziroku-ai',
    displayName: '議事録AI',
    category: 'AI Product',
    tagline: '会議の自動議事録生成',
    description:
      '会議の音声から自動で議事録を生成するツール。音声認識とLLMを組み合わせた構成。',
    features: [
      '音声ファイルからのテキスト文字起こし',
      '発言者の分離（話者ダイアライゼーション）',
      'LLMによる要点抽出・要約',
      '議事録形式でのエクスポート',
    ],
    techStack: ['Python', 'Whisper', 'LLM API', 'FastAPI'],
    featured: true,
  },
  {
    owner: 'Orbito-ai',
    name: 'orbito-research-ai',
    displayName: 'Orbito Research AI',
    category: 'AI Product',
    tagline: 'AIリサーチエージェント',
    description:
      '企業調査・市場調査を自動で行うAIエージェント。Web情報を横断してレポートを生成する。',
    features: [
      '与えられたテーマに沿ったWeb情報の自動収集',
      '複数ソースからの情報を統合した要約',
      'レポート形式での出力',
      '営業資料AIへの入力として活用可能',
    ],
    techStack: ['Python', 'LLM API', 'Web Scraping', 'Agent Framework'],
    featured: true,
  },
  {
    owner: 'Orbito-ai',
    name: 'eigyousiryou',
    displayName: '営業資料 AI',
    category: 'AI Product',
    tagline: '提案資料の自動生成',
    description:
      '顧客情報を入力すると、その顧客に合わせた営業用提案資料を自動生成するツール。',
    features: [
      '顧客情報からのスライド構成の自動生成',
      'PowerPoint / PDF 形式での出力',
      'テンプレートに基づいたレイアウト適用',
      'Research AI と組み合わせて情報収集〜資料化を一気通貫で実現',
    ],
    techStack: ['Python', 'LLM API', 'python-pptx'],
    featured: false,
  },
  {
    owner: 'Orbito-ai',
    name: 'movie-auto-houto-',
    displayName: 'Movie Auto',
    category: 'AI Product',
    tagline: '動画の自動生成パイプライン',
    description:
      'テキストやスクリプトから短尺動画を自動生成するパイプライン。AIアバターを組み込んだ動画制作に活用。',
    features: [
      'スクリプトからの映像・音声の自動合成',
      'AIアバターを登場させた動画生成',
      'BGM・字幕の挿入',
      '動画ファイル（mp4）としての書き出し',
    ],
    techStack: ['Python', 'FFmpeg', 'TTS', 'Avatar 連携'],
    featured: false,
  },
  {
    owner: 'Orbito-ai',
    name: 'kintai',
    displayName: '勤怠管理システム',
    category: 'Business Tool',
    tagline: '社内向け勤怠管理ツール',
    description:
      '株式会社オビト社内で利用するための勤怠管理システム。CEO自ら開発。',
    features: [
      '出退勤の打刻機能',
      '正社員・インターン・業務委託など勤務形態別の管理',
      '勤怠履歴の閲覧',
      'モバイル / PC 両対応のUI',
    ],
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    featured: false,
  },
  {
    owner: 'hikari-houto',
    name: 'madoka',
    displayName: 'Madoka',
    category: 'Business Tool',
    tagline: '光通信グループ向け業務ツール',
    description:
      '株式会社Hパートナー（光通信グループ）でのAIエンジニアインターン時に携わった業務支援ツール。',
    features: [
      '現場オペレーションを支援する内製機能群',
      '既存業務システムとの連携',
      '大企業環境での運用を想定した設計',
    ],
    techStack: ['Python', 'Webフレームワーク'],
    featured: false,
  },
  {
    owner: 'hikari-houto',
    name: 'kigyoubunseki',
    displayName: '企業分析 AI',
    category: 'AI Product',
    tagline: '営業向け企業分析ツール',
    description:
      '光通信グループ在籍中に関わった企業分析プロジェクト。営業活動に向けて企業データを分析する。',
    features: [
      '企業情報（Web上の公開情報など）の収集',
      'データに基づいたリード情報の整理',
      '営業用ダッシュボードでの可視化',
    ],
    techStack: ['Python', 'データ処理', 'LLM / ML'],
    featured: false,
  },
]
