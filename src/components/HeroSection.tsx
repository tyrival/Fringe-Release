import { Download } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="pt-32 pb-12 relative">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
          text-[#5A7FEF] dark:text-[#7A9FFF] bg-[#5A7FEF]/8 dark:bg-[#7A9FFF]/8
          border border-[#5A7FEF]/20 dark:border-[#7A9FFF]/20 mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5A7FEF] dark:bg-[#7A9FFF] shadow-[0_0_6px_rgba(90,127,239,0.6)]" />
          {t.hero.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5">
          <span className="bg-gradient-to-r from-[#5A7FEF] via-[#6A8FF0] to-[#7A9FFF] bg-clip-text text-transparent">{t.hero.title1}</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6e6e73] dark:text-[#8e8e9a] max-w-lg mx-auto mt-5 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4 mt-9 flex-wrap">
          <a href="https://github.com/tyrival/Fringe-Release/releases/download/v1.0.0/Fringe.dmg"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-white
              bg-gradient-to-r from-[#5A7FEF] to-[#6A8FF0] hover:from-[#4A6FDF] hover:to-[#5A7FEF]
              rounded-xl shadow-[0_4px_24px_rgba(90,127,239,0.3)] dark:shadow-[0_4px_32px_rgba(90,127,239,0.4)]
              transition-all hover:-translate-y-0.5 no-underline"
          >
            <Download size={18} />
            {t.hero.download}
          </a>
        </div>
        <p className="text-xs text-[#aeaeb2] dark:text-[#5a5a6e] mt-4">{t.hero.note}</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-12 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] border border-[#e5e5ea] dark:border-[#2a2d3a] bg-[#f8f9fb] dark:bg-[#12141c]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e5e5ea] dark:border-[#1e2230]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-xs text-[#aeaeb2] dark:text-[#5a5a6e] font-medium">Fringe</div>
          </div>
          <div className="p-6 flex gap-3 overflow-x-auto">
            {/* Card 1 */}
            <div className="flex-shrink-0 w-56 rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white/70 dark:bg-[#1a1d28]/70 p-4 relative overflow-hidden">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#5A7FEF] rounded-full" />
              <p className="text-xs text-[#1d1d1f] dark:text-[#e8e8ed] leading-relaxed">
                <b>Meeting notes</b> for Q3 planning session
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex-shrink-0 w-56 rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white/70 dark:bg-[#1a1d28]/70 p-4 relative overflow-hidden">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#EF5A5A] rounded-full" />
              <p className="text-xs text-[#1d1d1f] dark:text-[#e8e8ed] leading-relaxed">
                <i>Quick idea</i> — add dark mode toggle to settings
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex-shrink-0 w-56 rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] bg-white/70 dark:bg-[#1a1d28]/70 p-4 relative overflow-hidden">
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#5AEF7F] rounded-full" />
              <p className="text-xs text-[#1d1d1f] dark:text-[#e8e8ed] leading-relaxed">
                <span className="bg-black/5 dark:bg-white/10 rounded px-1 py-0.5 font-mono text-[11px]">npm install</span> the new deps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
