import { Linkedin, Twitter, Instagram, Github } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Quick Links',
    links: [['About', '#about'], ['Process', '#process'], ['Careers', '#careers'], ['Contact', '#contact']],
  },
  {
    title: 'Services',
    links: [['Web Development', '#services'], ['Mobile Apps', '#services'], ['Ecommerce', '#services'], ['AI & Automation', '#services']],
  },
  {
    title: 'Technologies',
    links: [['React', '#technologies'], ['Node.js', '#technologies'], ['Flutter', '#technologies'], ['AWS', '#technologies']],
  },
]

const SOCIALS = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#top" className="inline-flex flex-col leading-none">
              <div className="flex items-baseline font-display font-semibold tracking-tight text-[1.15rem]">
                <span>Zuvi</span>
                <span className="mx-[3px] inline-block h-[5px] w-[5px] rounded-full bg-mint -translate-y-[1px]" />
                <span className="text-gradient">Soft</span>
              </div>
              <div className="mt-1 font-display font-medium tracking-[0.18em] text-[0.7rem] uppercase text-muted/85">Private Limited</div>
            </a>
            <p className="mt-4 text-sm text-muted max-w-xs">
              A product engineering studio building software that businesses actually need.
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs text-muted">
              <a href="mailto:hello@zuvisoft.in" className="hover:text-foreground transition">hello@zuvisoft.in</a>
              <span>·</span>
              <span>India · Worldwide</span>
            </div>

            <div className="mt-5">
              <div className="text-xs uppercase tracking-wider text-muted mb-3">Socials</div>
              <div className="flex items-center gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg glass text-muted hover:text-mint hover:border-mint/30 transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-wider text-muted">{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-muted hover:text-foreground transition link-underline">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} ZuviSoft Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
