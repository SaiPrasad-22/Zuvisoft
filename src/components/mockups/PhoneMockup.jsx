export default function PhoneMockup({ className = '' }) {
  const items = [
    { name: 'Wireless Earbuds', price: '₹2,499' },
    { name: 'Smart Watch', price: '₹5,999' },
  ]
  return (
    <div className={`relative rounded-[2.2rem] border-[6px] border-[#20262f] bg-surface shadow-2xl shadow-black/50 overflow-hidden ${className}`} style={{ width: 190, height: 380 }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-20 rounded-b-xl bg-[#20262f] z-10" />
      <div className="h-full w-full bg-gradient-to-b from-surface to-base p-3 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] text-muted uppercase tracking-wider">Shop</div>
            <div className="text-sm font-display font-semibold">New Arrivals</div>
          </div>
          <div className="h-7 w-7 rounded-full bg-white/[0.06] flex items-center justify-center text-[10px]">🛒</div>
        </div>
        <div className="mt-4 rounded-xl bg-gradient-to-br from-mint/25 to-blue/15 border border-white/[0.06] p-3">
          <div className="text-[9px] text-muted uppercase tracking-wider">Today's deal</div>
          <div className="mt-1 font-display text-lg font-semibold">Up to 40% off</div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-mint to-blue" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {items.map((it) => (
            <div key={it.name} className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2">
              <div className="h-12 w-full rounded-md bg-gradient-to-br from-white/[0.08] to-white/[0.02]" />
              <div className="mt-1.5 text-[9px] leading-tight">{it.name}</div>
              <div className="text-[9px] text-mint font-semibold">{it.price}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2.5">
          <span className="text-[10px] text-muted">Cart · 2 items</span>
          <span className="text-[10px] font-semibold text-mint">Checkout →</span>
        </div>
      </div>
    </div>
  )
}
