export default function AdminMockup({ className = '' }) {
  const rows = [
    { name: 'Acme Clinic', status: 'Confirmed', color: 'bg-mint' },
    { name: 'Rao Interiors', status: 'Pending', color: 'bg-[#FEBC2E]' },
    { name: 'Nova Fitness', status: 'Confirmed', color: 'bg-mint' },
  ]
  return (
    <div className={`rounded-2xl glass overflow-hidden shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] text-muted font-mono">app.zuvisoft.in/bookings</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] text-muted uppercase tracking-wider">Today's bookings</div>
          <div className="text-[10px] text-mint font-semibold">+3 new</div>
        </div>
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="h-6 w-6 rounded-full bg-white/[0.08]" />
                <span className="text-[11px]">{r.name}</span>
              </div>
              <span className={`h-1.5 w-1.5 rounded-full ${r.color}`} />
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {['Clients', 'Revenue', 'Stock'].map((label, i) => (
            <div key={label} className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2.5">
              <div className="text-[9px] text-muted uppercase tracking-wider">{label}</div>
              <div className="mt-1 text-sm font-semibold">{[128, '₹86K', 942][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
