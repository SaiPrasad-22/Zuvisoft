const lines = [
  { n: 1, t: [['const', '#22C1FF'], [' app = ', '#F4F6F8'], ['createApp', '#00E5A8'], ['(', '#F4F6F8'], ['config', '#8B7BFF'], [')', '#F4F6F8']] },
  { n: 2, t: [['app.', '#F4F6F8'], ['use', '#00E5A8'], ['(auth, api, ai)', '#8B96A5']] },
  { n: 3, t: [['', '#F4F6F8']] },
  { n: 4, t: [['export default', '#22C1FF'], [' app.', '#F4F6F8'], ['deploy', '#00E5A8'], ['()', '#F4F6F8']] },
]

export default function CodeMockup({ className = '' }) {
  return (
    <div className={`rounded-2xl glass overflow-hidden shadow-2xl shadow-black/40 font-mono ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] text-muted">product.jsx</span>
      </div>
      <div className="p-4 text-[11px] leading-6">
        {lines.map((line) => (
          <div key={line.n} className="flex gap-3">
            <span className="text-muted/50 select-none w-3 text-right">{line.n}</span>
            <span>
              {line.t.map(([text, color], i) => (
                <span key={i} style={{ color }}>{text}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
