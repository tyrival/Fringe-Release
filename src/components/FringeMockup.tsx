import { useI18n } from '../i18n/I18nContext'

type Variant = 'editor' | 'color' | 'search' | 'backup'

export default function FringeMockup({ variant }: { variant: Variant }) {
  const { t } = useI18n()

  const colors = ['#EF5A5A', '#EF945A', '#EFC85A', '#5AEF7F', '#5A7FEF', '#945AEF', '#EF5AAD']

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] border border-[#e5e5ea] dark:border-[#2a2d3a] bg-[#f8f9fb] dark:bg-[#12141c]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#e5e5ea] dark:border-[#1e2230]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-xs text-[#aeaeb2] dark:text-[#5a5a6e] font-medium">Fringe</div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#e5e5ea] dark:border-[#1e2230]">
        {variant === 'search' ? (
          <div className="flex-1 flex items-center gap-2 bg-black/5 dark:bg-white/5 rounded-full px-3 py-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#aeaeb2] dark:text-[#5a5a6e]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <span className="text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">{t.mockup.search}</span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-1 bg-white dark:bg-[#1a1d28] border border-[#e5e5ea] dark:border-[#1e2230] rounded-full px-2 py-1">
              {variant === 'color' && (
                <div className="flex gap-0.5 mr-1">
                  {colors.slice(0, 4).map((c, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                  ))}
                </div>
              )}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#5A7FEF]"><line x1="6" y1="4" x2="18" y2="8"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="6" y1="20" x2="18" y2="16"/></svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#5A7FEF]"><line x1="6" y1="4" x2="12" y2="16"/><line x1="18" y1="4" x2="12" y2="16"/></svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#5A7FEF]"><line x1="6" y1="4" x2="18" y2="20"/><line x1="6" y1="20" x2="18" y2="4"/></svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#5A7FEF]"><polyline points="8 6 16 12 8 18"/></svg>
            </div>
            <div className="flex-1" />
            <div className="w-3 h-3 rounded-full bg-[#EF5A5A]/20 flex items-center justify-center">
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#EF5A5A" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </div>
          </>
        )}
      </div>

      {/* Cards area */}
      <div className="p-3 flex gap-2.5 overflow-x-auto">
        {(variant === 'color' ? colorCards(t) : defaultCards(t)).map((card, i) => (
          <div key={i}
            className="flex-shrink-0 w-44 rounded-xl border border-[#e5e5ea] dark:border-[#2a2d3a] p-3 relative overflow-hidden"
            style={{
              backgroundColor: card.bg ?? undefined,
            }}
          >
            {card.color && (
              <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full" style={{ backgroundColor: card.color }} />
            )}
            <p className="text-[11px] text-[#1d1d1f] dark:text-[#e8e8ed] leading-relaxed">
              {variant === 'editor' ? (
                <>
                  <b>Meeting notes</b> for Q3 planning<br />
                  <i>Quick idea</i> — add dark mode<br />
                  <span style={{ textDecoration: 'line-through' }}>Old task</span> completed<br />
                  <span className="bg-black/5 dark:bg-white/10 rounded px-1 py-0.5 font-mono text-[10px]">npm run build</span>
                </>
              ) : variant === 'search' ? (
                <>
                  <span className="bg-[#5A7FEF]/20 rounded px-1 py-0.5 text-[#5A7FEF]">matching</span> card content<br />
                  Found: Q3 planning notes<br />
                  Also: team sync reminder
                </>
              ) : variant === 'backup' ? (
                <>
                  <span className="text-[#aeaeb2] dark:text-[#5a5a6e] text-[10px]">Backups</span><br />
                  <span className="text-[10px]">06-05 14:00 · 1.2 KB</span><br />
                  <span className="text-[10px]">06-05 13:00 · 1.1 KB</span><br />
                  <span className="text-[10px]">06-04 09:00 · 1.0 KB</span><br />
                  <span className="text-[5A7FEF] text-[10px]">Restore →</span>
                </>
              ) : (
                card.content
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function defaultCards(t: any) {
  return [
    { content: <><b>Meeting notes</b><br />Q3 planning session</>, color: '#5A7FEF', bg: undefined as string | undefined },
    { content: <><i>Quick idea</i><br />Add dark mode toggle</>, color: '#EF5A5A', bg: undefined },
    { content: <><span className="bg-black/5 dark:bg-white/10 rounded px-1 py-0.5 font-mono text-[10px]">npm install</span><br />new dependencies</>, color: '#5AEF7F', bg: undefined },
  ]
}

function colorCards(t: any) {
  const colors = ['#5A7FEF', '#EF5A5A', '#5AEF7F', '#EFC85A']
  const tints = ['rgba(90,127,239,0.08)', 'rgba(239,90,90,0.08)', 'rgba(90,239,127,0.08)', 'rgba(239,200,90,0.08)']
  return [
    { content: <>Color tagged<br />Blue accent</>, color: colors[0], bg: tints[0] },
    { content: <>Color tagged<br />Red accent</>, color: colors[1], bg: tints[1] },
    { content: <>Color tagged<br />Green accent</>, color: colors[2], bg: tints[2] },
    { content: <>{t.mockup.defaultBg}<br />System default</>, color: undefined as string | undefined, bg: undefined as string | undefined },
  ]
}
