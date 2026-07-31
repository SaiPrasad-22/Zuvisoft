# ZuviSoft v2 — Product Engineering Studio site

React + Tailwind + Framer Motion frontend, built with Vite. Node/Express backend
handles contact form submissions and serves the built site.

## Local development

```bash
npm install
npm run dev        # frontend on :5173, proxies /api to :8787
node server/index.js   # in a second terminal, for the API
```

## Build for production

```bash
npm run build       # outputs static site to /dist
npm start           # runs server/index.js, serves /dist + /api/contact on :8787
```

## Runtime smoke test

No real browser/Lighthouse is available in the environment this was built in, so
`npm run smoke-test` does the next best thing: it loads the production bundle into
a jsdom-emulated DOM (with IntersectionObserver/matchMedia/rAF stubbed) and checks
that React mounts, every hook runs, and nothing throws. It confirms the app *runs*
without errors — it does not check visual layout, animation timing, or paint
performance, since jsdom doesn't do real layout or rendering. Treat it as a
regression guard, not a substitute for opening the site in an actual browser.

## Deploying on Hostinger (Node.js hosting)

1. Upload the whole project folder (or `git clone` it) to your Hostinger Node.js app directory.
2. In Hostinger's hPanel → Node.js app settings, set:
   - **Application startup file:** `server/index.js`
   - **Node version:** 18 or newer
3. Copy `.env.example` to `.env` on the server and fill in real SMTP credentials
   (your Hostinger email account works as an SMTP sender — host is usually
   `smtp.hostinger.com`, port `465`, secure `true`). Never commit `.env`.
4. Run once on the server:
   ```bash
   npm install
   npm run build
   ```
5. Start (or restart) the Node app from hPanel — it runs `node server/index.js`,
   which serves the built frontend from `/dist` and handles `/api/contact`.
6. Point your domain at the Node app in hPanel.

If you'd rather not run a persistent Node process for a marketing site, you can
instead deploy `/dist` as static files and point the contact form at any
serverless function or form service (e.g. a Hostinger cron/PHP mailer, or a
separate small function) — the frontend only needs a working `POST /api/contact`
endpoint that returns `{ ok: true }` or `{ error: "..." }`.

## What's inside

```
src/
  components/
    ui/        Button, Card, SectionHeading, Reveal, AnimatedCounter — reusable primitives
    layout/    Header, Footer, WhatsAppButton
    mockups/   Coded dashboard/phone/code-editor mockups (no stock imagery)
  sections/    One component per marketing section (Hero, About, Services, ...)
  pages/       Route-level components (HomePage, NotFoundPage) — add more here as
               the roadmap grows (BlogPage, DashboardPage, LoginPage, etc.)
  hooks/       useScrollSpy, useCountUp, useContactForm
  lib/         api.js (fetch wrapper for future endpoints), seo.jsx, data/
  styles/      index.css
server/
  index.js     Express: static hosting + /api/contact (Nodemailer, rate-limited, validated)
```

React Router is wired up (`/` → HomePage, `*` → NotFoundPage) even though there's one
real route today — this is so blog/dashboard/auth pages from your roadmap can be added
as new files in `pages/` plus a new `<Route>`, without restructuring anything.

### SEO note — read before assuming this is search-ready

This is a client-rendered (CSR) React SPA. `src/lib/seo.jsx` sets per-route
`<title>`, description, and OG tags via react-helmet-async, and `public/robots.txt`
+ `public/sitemap.xml` give crawlers a baseline. But a CSR app still ships an empty
`<div id="root">` on first load — crawlers that don't execute JavaScript see nothing
until the bundle runs. Google's crawler generally does execute JS, but ranking and
social-preview reliability are still weaker than the old static HTML site's out of
the box. If organic search traffic matters, the next step is prerendering (e.g. a
build-time static render step) or migrating to an SSR-capable framework later —
the current folder structure doesn't block that migration, it just doesn't include it yet.


