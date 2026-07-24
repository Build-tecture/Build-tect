import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.buildtecture.in'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.jpg`

/**
 * Per-page SEO tags. Renders a unique title, meta description, canonical URL
 * and Open Graph / Twitter tags for the current route.
 *
 * Props:
 *  - title:       page title (brand is appended automatically)
 *  - description: meta description (150-160 chars ideal)
 *  - path:        route path, e.g. '/about' (used for canonical + og:url)
 *  - image:       absolute or root-relative image URL (optional)
 *  - type:        og:type, defaults to 'website'
 *  - noindex:     set true to keep the page out of search results
 */
export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}) {
  const fullTitle = title ? `${title} | Buildtecture` : 'Buildtecture - Architecture & Construction in India'
  const canonical = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content="Buildtecture" />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
