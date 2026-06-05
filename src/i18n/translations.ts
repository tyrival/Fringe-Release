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

export type Lang = 'en' | 'zh'
export type Translations = typeof en
export const translations: Record<Lang, Translations> = { en, zh }
