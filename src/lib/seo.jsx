import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'ZuviSoft Private Limited'
const DEFAULT_DESCRIPTION =
  'ZuviSoft builds modern software products — web apps, mobile apps, dashboards, and AI-powered tools that help businesses launch, grow, and scale.'

/**
 * Drop into any page/route to set title + description + OG tags.
 * Client-rendered meta tags help social previews and are picked up by
 * crawlers that execute JS, but do not substitute for prerendering/SSR —
 * add that later if organic search ranking matters more than it does today.
 */
export default function Seo({ title, description = DEFAULT_DESCRIPTION, path = '/' }) {
  const fullTitle = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — Product Engineering Studio`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://zuvisoft.in${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
