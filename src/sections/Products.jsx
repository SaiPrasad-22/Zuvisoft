import Reveal from '../components/ui/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { PRODUCTS } from '../lib/data/products.js'

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Products We Build"
          title="Whatever runs your business, we can build it."
          subtitle="A sample of the software categories we've engineered — from customer-facing platforms to internal operations tools."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 4) * 0.06}
              className="group flex flex-col h-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-mint/30 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-[15px]">{p.title}</h3>
              <p className="mt-1.5 text-[13px] text-muted leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
