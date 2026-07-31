export default function DashboardMockup({ className = '' }) {
  const bars = [38, 62, 45, 80, 55, 92, 68]
  return (
    <div className={`rounded-2xl glass overflow-hidden shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] text-muted font-mono">app.zuvisoft.in/analytics</span>
      </div>
      <div className="p-4 grid grid-cols-3 gap-3">
        <div className="col-span-2 rounded-xl bg-white/[0.03] border border-white/[0.06] p-3">
          <div className="text-[10px] text-muted uppercase tracking-wider">Revenue</div>
          <div className="mt-1 font-display text-lg font-semibold">₹12.4L</div>
          <div className="mt-3 flex items-end gap-1.5 h-16">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-mint/70 to-blue/70" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 flex flex-col justify-between">
          <div className="text-[10px] text-muted uppercase tracking-wider">Uptime</div>
          <div className="relative mx-auto h-14 w-14">
            <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#00E5A8" strokeWidth="3" strokeDasharray="97 100" strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold">99%</span>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-2">
          {['Users', 'Orders', 'Tickets'].map((label, i) => (
            <div key={label} className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5">
              <div className="text-[9px] text-muted uppercase tracking-wider">{label}</div>
              <div className="mt-1 text-sm font-semibold">{[2140, 356, 8][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
