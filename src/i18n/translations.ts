const en = {
  nav: { download: 'Download' },
  hero: {
    badge: 'Minimal Markdown · Instant Capture',
    title1: 'Fringe',
    title2: '',
    subtitle: 'A markdown WYSIWYG memo tool that lives in your menu bar. Capture ideas instantly with rich formatting, color coding, and reliable local backup.',
    download: 'Free Download',
    note: 'Requires macOS 14+ · Free',
  },
  features: {
    editor: {
      title: 'Markdown WYSIWYG',
      subtitle: 'Rich text editing with instant visual feedback',
      desc: 'Write with bold, italic, strikethrough, and inline code — all rendered in real-time. Toggle formatting with keyboard shortcuts (⌘B, ⌘I, ⌘K, ⌘⇧X) or the floating toolbar. Bold and italic combine seamlessly into ***bold-italic***.',
    },
    color: {
      title: 'Color Tagging',
      subtitle: 'Organize cards with visual color labels',
      desc: 'Each card supports a left accent color bar and tinted background. Choose from 7 palette colors or follow system appearance. Perfect for visually distinguishing cards at a glance.',
    },
    backup: {
      title: 'Reliable Backup',
      subtitle: 'Multi-tier local backup with smart retention',
      desc: 'Automatically back up your data with hourly snapshots for the past 24 hours, daily backups for 7 days, and weekly archives for 6 months. Plain JSON format, stored locally. Browse and restore any version with one click.',
    },
    search: {
      title: 'Fuzzy Search',
      subtitle: 'Find any card instantly by content',
      desc: 'Type in the search bar to filter cards in real-time. Cards matching your query appear instantly, empty search shows all. Zero configuration — just type and find.',
    },
  },
  cta: { title: 'Start Capturing Ideas', desc: 'Free. No ads. Native macOS experience. Requires macOS 14+.', download: 'Download for macOS' },
  footer: { download: 'Download' },
  mockup: {
    search: 'Search',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    code: 'Code',
    card1: 'Meeting notes for Q3 planning...',
    card2: '**Important** reminder for the team sync',
    card3: '*Quick idea* — add dark mode toggle',
    card4: '`npm install` the new dependencies',
    defaultBg: 'Default',
  },
}

const zh: typeof en = {
  nav: { download: '下载' },
  hero: {
    badge: '极简 Markdown · 即时记录',
    title1: 'Fringe',
    title2: '',
    subtitle: '一款常驻菜单栏的 Markdown WYSIWYG 便签工具。支持富文本格式、颜色标签、可靠本地备份，随手记录，随时查找。',
    download: '免费下载',
    note: '要求 macOS 14+ · 完全免费',
  },
  features: {
    editor: {
      title: 'Markdown 所见即所得',
      subtitle: '富文本编辑，即时视觉反馈',
      desc: '支持粗体、斜体、删除线、行内代码，实时渲染。快捷键 ⌘B / ⌘I / ⌘K / ⌘⇧X 一键切换样式，悬浮工具栏点击亦可。粗体和斜体可叠加为 ***粗斜体***。',
    },
    color: {
      title: '颜色标签',
      subtitle: '用视觉颜色区分卡片',
      desc: '每张卡片支持左侧彩色边框和浅色背景。7 种预设颜色可选，或跟随系统外观。一眼区分不同类型的便签内容。',
    },
    backup: {
      title: '可靠备份',
      subtitle: '多级本地备份，智能保留策略',
      desc: '自动备份数据：过去 24 小时每小时快照，过去 7 天每天一份，过去 6 个月每周一份。明文 JSON 格式，本地存储。浏览历史版本，一键恢复。',
    },
    search: {
      title: '模糊搜索',
      subtitle: '按内容实时过滤卡片',
      desc: '在搜索栏输入关键词，卡片实时过滤。清空搜索框即刻恢复全部卡片。无需配置，即输即搜。',
    },
  },
  cta: { title: '开始随手记录', desc: '免费、无广告、macOS 原生体验。支持 macOS 14+。', download: '下载 macOS 版' },
  footer: { download: '下载' },
  mockup: {
    search: '搜索',
    bold: '粗体',
    italic: '斜体',
    strikethrough: '删除线',
    code: '代码',
    card1: 'Q3 会议纪要...',
    card2: '**重要**提醒：团队同步会议',
    card3: '*灵感* — 加个深色模式切换',
    card4: '`npm install` 新依赖',
    defaultBg: '默认',
  },
}

const ja: typeof en = {
  nav: { download: 'ダウンロード' },
  hero: {
    badge: 'ミニマル Markdown · 瞬間キャプチャ',
    title1: 'Fringe',
    title2: '',
    subtitle: 'メニューバーに常駐する Markdown WYSIWYG メモツール。リッチフォーマット、カラーコーディング、信頼性の高いローカルバックアップで、アイデアを瞬時に記録。',
    download: '無料ダウンロード',
    note: 'macOS 14+ 対応 · 完全無料',
  },
  features: {
    editor: {
      title: 'Markdown WYSIWYG',
      subtitle: 'リアルタイムプレビューのリッチテキスト編集',
      desc: '太字、斜体、打ち消し線、インラインコード — すべてリアルタイムでレンダリング。キーボードショートカット（⌘B、⌘I、⌘K、⌘⇧X）またはフローティングツールバーで書式を切り替え。太字と斜体はシームレスに組み合わせて ***太字斜体*** に。',
    },
    color: {
      title: 'カラータグ',
      subtitle: '視覚的なカラーラベルでカードを整理',
      desc: '各カードに左側のアクセントカラーバーと色付き背景を設定可能。7色のパレットから選択、またはシステムの外観モードに追従。一目でカードを視覚的に区別できます。',
    },
    backup: {
      title: '信頼のバックアップ',
      subtitle: 'スマートな保持期間を持つ多層ローカルバックアップ',
      desc: '過去24時間の毎時スナップショット、7日間の日次バックアップ、6ヶ月間の週次アーカイブでデータを自動バックアップ。プレーンJSON形式でローカルに保存。任意のバージョンを閲覧してワンクリックで復元。',
    },
    search: {
      title: 'あいまい検索',
      subtitle: 'コンテンツでカードを瞬時に検索',
      desc: '検索バーに入力するとカードがリアルタイムにフィルタリング。クエリに一致するカードが即座に表示され、検索欄が空のときはすべて表示。設定不要 — 入力するだけですぐに検索。',
    },
  },
  cta: { title: 'アイデアを記録し始めましょう', desc: '無料、広告なし、macOSネイティブ体験。macOS 14+対応。', download: 'macOS版をダウンロード' },
  footer: { download: 'ダウンロード' },
  mockup: {
    search: '検索',
    bold: '太字',
    italic: '斜体',
    strikethrough: '打ち消し線',
    code: 'コード',
    card1: 'Q3 企画会議のメモ...',
    card2: '**重要** チーム同期のリマインダー',
    card3: '*ちょっとしたアイデア* — ダークモード切替を追加',
    card4: '`npm install` 新しい依存関係',
    defaultBg: 'デフォルト',
  },
}

const ko: typeof en = {
  nav: { download: '다운로드' },
  hero: {
    badge: '미니멀 Markdown · 즉시 기록',
    title1: 'Fringe',
    title2: '',
    subtitle: '메뉴 막대에 상주하는 Markdown WYSIWYG 메모 도구. 풍부한 서식, 색상 코딩, 안정적인 로컬 백업으로 아이디어를 즉시 캡처하세요.',
    download: '무료 다운로드',
    note: 'macOS 14+ 필요 · 완전 무료',
  },
  features: {
    editor: {
      title: 'Markdown WYSIWYG',
      subtitle: '실시간 미리보기를 갖춘 리치 텍스트 편집',
      desc: '굵게, 기울임, 취소선, 인라인 코드 — 모두 실시간으로 렌더링됩니다. 키보드 단축키(⌘B, ⌘I, ⌘K, ⌘⇧X) 또는 플로팅 툴바로 서식을 전환하세요. 굵게와 기울임을 조합하여 ***굵은 기울임***을 만들 수 있습니다.',
    },
    color: {
      title: '색상 태그',
      subtitle: '시각적 색상 라벨로 카드 정리',
      desc: '각 카드에 왼쪽 액센트 색상 바와 색조 배경을 지원합니다. 7가지 팔레트 색상 중에서 선택하거나 시스템 외관 모드를 따르세요. 한눈에 카드를 시각적으로 구분하기에 완벽합니다.',
    },
    backup: {
      title: '안정적인 백업',
      subtitle: '스마트 보존 정책의 다중 계층 로컬 백업',
      desc: '지난 24시간의 매시간 스냅샷, 7일간의 일일 백업, 6개월간의 주간 아카이브로 데이터를 자동 백업합니다. 일반 JSON 형식으로 로컬에 저장됩니다. 모든 버전을 탐색하고 클릭 한 번으로 복원하세요.',
    },
    search: {
      title: '퍼지 검색',
      subtitle: '콘텐츠로 카드 즉시 찾기',
      desc: '검색창에 입력하면 카드가 실시간으로 필터링됩니다. 쿼리와 일치하는 카드가 즉시 표시되고, 검색어를 지우면 모든 카드가 표시됩니다. 설정이 필요 없습니다 — 입력만 하면 바로 찾을 수 있습니다.',
    },
  },
  cta: { title: '지금 아이디어 기록하기', desc: '무료, 광고 없음, macOS 네이티브 경험. macOS 14+ 필요.', download: 'macOS용 다운로드' },
  footer: { download: '다운로드' },
  mockup: {
    search: '검색',
    bold: '굵게',
    italic: '기울임',
    strikethrough: '취소선',
    code: '코드',
    card1: 'Q3 기획 회의록...',
    card2: '**중요** 팀 동기화 알림',
    card3: '*아이디어* — 다크 모드 전환 추가',
    card4: '`npm install` 새 의존성',
    defaultBg: '기본값',
  },
}

const de: typeof en = {
  nav: { download: 'Download' },
  hero: {
    badge: 'Minimales Markdown · Sofortige Erfassung',
    title1: 'Fringe',
    title2: '',
    subtitle: 'Ein Markdown-WYSIWYG-Notiztool, das in Ihrer Menüleiste lebt. Halten Sie Ideen sofort fest — mit Rich-Text-Formatierung, Farbcodierung und zuverlässiger lokaler Sicherung.',
    download: 'Kostenloser Download',
    note: 'Erfordert macOS 14+ · Kostenlos',
  },
  features: {
    editor: {
      title: 'Markdown WYSIWYG',
      subtitle: 'Rich-Text-Bearbeitung mit sofortigem visuellen Feedback',
      desc: 'Schreiben Sie mit Fett, Kursiv, Durchgestrichen und Inline-Code — alles in Echtzeit gerendert. Schalten Sie die Formatierung mit Tastenkombinationen (⌘B, ⌘I, ⌘K, ⌘⇧X) oder der schwebenden Symbolleiste um. Fett und Kursiv kombinieren sich nahtlos zu ***fett-kursiv***.',
    },
    color: {
      title: 'Farbmarkierungen',
      subtitle: 'Organisieren Sie Karten mit visuellen Farblabels',
      desc: 'Jede Karte unterstützt einen linken Akzentfarbbalken und einen getönten Hintergrund. Wählen Sie aus 7 Palettenfarben oder folgen Sie der Systemdarstellung. Perfekt, um Karten auf einen Blick visuell zu unterscheiden.',
    },
    backup: {
      title: 'Zuverlässige Sicherung',
      subtitle: 'Mehrstufige lokale Sicherung mit intelligenter Aufbewahrung',
      desc: 'Sichern Sie Ihre Daten automatisch mit stündlichen Snapshots der letzten 24 Stunden, täglichen Sicherungen für 7 Tage und wöchentlichen Archiven für 6 Monate. Reines JSON-Format, lokal gespeichert. Durchsuchen und stellen Sie jede Version mit einem Klick wieder her.',
    },
    search: {
      title: 'Fuzzy-Suche',
      subtitle: 'Finden Sie jede Karte sofort nach Inhalt',
      desc: 'Tippen Sie in die Suchleiste, um Karten in Echtzeit zu filtern. Passende Karten erscheinen sofort, bei leerer Suche werden alle angezeigt. Keine Konfiguration nötig — einfach tippen und finden.',
    },
  },
  cta: { title: 'Beginnen Sie mit dem Festhalten von Ideen', desc: 'Kostenlos. Keine Werbung. Native macOS-Erfahrung. Erfordert macOS 14+.', download: 'Für macOS herunterladen' },
  footer: { download: 'Download' },
  mockup: {
    search: 'Suchen',
    bold: 'Fett',
    italic: 'Kursiv',
    strikethrough: 'Durchgestrichen',
    code: 'Code',
    card1: 'Besprechungsnotizen für Q3-Planung...',
    card2: '**Wichtige** Erinnerung an den Team-Sync',
    card3: '*Schnelle Idee* — Dark-Mode-Umschalter hinzufügen',
    card4: '`npm install` die neuen Abhängigkeiten',
    defaultBg: 'Standard',
  },
}

const fr: typeof en = {
  nav: { download: 'Télécharger' },
  hero: {
    badge: 'Markdown minimal · Capture instantanée',
    title1: 'Fringe',
    title2: '',
    subtitle: 'Un outil de prise de notes Markdown WYSIWYG qui vit dans votre barre de menus. Capturez vos idées instantanément avec un formatage riche, un codage couleur et une sauvegarde locale fiable.',
    download: 'Téléchargement gratuit',
    note: 'Nécessite macOS 14+ · Gratuit',
  },
  features: {
    editor: {
      title: 'Markdown WYSIWYG',
      subtitle: 'Édition de texte enrichi avec retour visuel instantané',
      desc: 'Écrivez en gras, italique, barré et code en ligne — le tout rendu en temps réel. Basculez le formatage avec les raccourcis clavier (⌘B, ⌘I, ⌘K, ⌘⇧X) ou la barre d\'outils flottante. Le gras et l\'italique se combinent harmonieusement en ***gras-italique***.',
    },
    color: {
      title: 'Étiquettes de couleur',
      subtitle: 'Organisez les fiches avec des étiquettes de couleur visuelles',
      desc: 'Chaque fiche prend en charge une barre de couleur d\'accent à gauche et un fond teinté. Choisissez parmi 7 couleurs de palette ou suivez l\'apparence du système. Parfait pour distinguer visuellement les fiches en un coup d\'œil.',
    },
    backup: {
      title: 'Sauvegarde fiable',
      subtitle: 'Sauvegarde locale à plusieurs niveaux avec rétention intelligente',
      desc: 'Sauvegardez automatiquement vos données avec des instantanés horaires des dernières 24 heures, des sauvegardes quotidiennes sur 7 jours et des archives hebdomadaires sur 6 mois. Format JSON brut, stocké localement. Parcourez et restaurez n\'importe quelle version en un clic.',
    },
    search: {
      title: 'Recherche floue',
      subtitle: 'Trouvez instantanément n\'importe quelle fiche par son contenu',
      desc: 'Tapez dans la barre de recherche pour filtrer les fiches en temps réel. Les fiches correspondant à votre requête apparaissent instantanément, une recherche vide affiche tout. Aucune configuration — tapez et trouvez.',
    },
  },
  cta: { title: 'Commencez à capturer des idées', desc: 'Gratuit. Sans publicité. Expérience macOS native. Nécessite macOS 14+.', download: 'Télécharger pour macOS' },
  footer: { download: 'Télécharger' },
  mockup: {
    search: 'Rechercher',
    bold: 'Gras',
    italic: 'Italique',
    strikethrough: 'Barré',
    code: 'Code',
    card1: 'Notes de réunion pour la planification Q3...',
    card2: 'Rappel **important** pour la synchronisation d\'équipe',
    card3: '*Idée rapide* — ajouter le mode sombre',
    card4: '`npm install` les nouvelles dépendances',
    defaultBg: 'Par défaut',
  },
}

const es: typeof en = {
  nav: { download: 'Descargar' },
  hero: {
    badge: 'Markdown minimal · Captura instantánea',
    title1: 'Fringe',
    title2: '',
    subtitle: 'Una herramienta de notas Markdown WYSIWYG que vive en tu barra de menús. Captura ideas al instante con formato enriquecido, etiquetas de color y respaldo local confiable.',
    download: 'Descarga gratuita',
    note: 'Requiere macOS 14+ · Gratis',
  },
  features: {
    editor: {
      title: 'Markdown WYSIWYG',
      subtitle: 'Edición de texto enriquecido con retroalimentación visual instantánea',
      desc: 'Escribe con negrita, cursiva, tachado y código en línea — todo renderizado en tiempo real. Alterna el formato con atajos de teclado (⌘B, ⌘I, ⌘K, ⌘⇧X) o la barra de herramientas flotante. La negrita y la cursiva se combinan perfectamente en ***negrita-cursiva***.',
    },
    color: {
      title: 'Etiquetas de color',
      subtitle: 'Organiza tarjetas con etiquetas visuales de color',
      desc: 'Cada tarjeta admite una barra de color de acento a la izquierda y un fondo tintado. Elige entre 7 colores de paleta o sigue la apariencia del sistema. Perfecto para distinguir visualmente las tarjetas de un vistazo.',
    },
    backup: {
      title: 'Respaldo confiable',
      subtitle: 'Respaldo local multinivel con retención inteligente',
      desc: 'Respaldos automáticos con instantáneas cada hora de las últimas 24 horas, copias diarias de 7 días y archivos semanales de 6 meses. Formato JSON simple, almacenado localmente. Explora y restaura cualquier versión con un solo clic.',
    },
    search: {
      title: 'Búsqueda difusa',
      subtitle: 'Encuentra cualquier tarjeta al instante por contenido',
      desc: 'Escribe en la barra de búsqueda para filtrar tarjetas en tiempo real. Las tarjetas que coinciden con tu consulta aparecen al instante. Sin búsqueda se muestran todas. Cero configuración — solo escribe y encuentra.',
    },
  },
  cta: { title: 'Comienza a capturar ideas', desc: 'Gratis. Sin anuncios. Experiencia macOS nativa. Requiere macOS 14+.', download: 'Descargar para macOS' },
  footer: { download: 'Descargar' },
  mockup: {
    search: 'Buscar',
    bold: 'Negrita',
    italic: 'Cursiva',
    strikethrough: 'Tachado',
    code: 'Código',
    card1: 'Notas de reunión para planificación Q3...',
    card2: 'Recordatorio **importante** para la sincronización del equipo',
    card3: '*Idea rápida* — añadir cambio a modo oscuro',
    card4: '`npm install` las nuevas dependencias',
    defaultBg: 'Predeterminado',
  },
}

export type Lang = 'en' | 'zh' | 'ja' | 'ko' | 'de' | 'fr' | 'es'
export type Translations = typeof en
export const translations: Record<Lang, Translations> = { en, zh, ja, ko, de, fr, es }

export const LANG_LABEL: Record<Lang, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
}

export const LANG_HTML: Record<Lang, string> = {
  en: 'en',
  zh: 'zh-Hans',
  ja: 'ja',
  ko: 'ko',
  de: 'de',
  fr: 'fr',
  es: 'es',
}
