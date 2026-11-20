import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { slug as githubSlug } from 'github-slugger'
import siteMetadata from '@/data/siteMetadata'
import {
  INDEXED_LOCALIZED_ROUTES,
  languageAlternates,
  localizePath,
  prefixedLocales,
} from 'lib/i18n'

// Static: the content is known at build time.
export const dynamic = 'force-static'

/**
 * Bump this when the copy on a static page changes. It used to be the build
 * date, which re-dated every static page on every deploy — and Google only
 * trusts <lastmod> when it matches a change it can see on the page.
 */
const STATIC_PAGES_UPDATED = '2026-09-06'
const LOCALIZED_PAGES_UPDATED = '2026-11-20'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl
  const published = allBlogs.filter((post) => !post.draft && (post.lang === 'en' || !post.lang))

  const blogRoutes = published.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastmod || post.date,
  }))

  // Newest post date stands in for "when did the blog last change".
  const newestPost = published.reduce<string | undefined>((latest, post) => {
    const d = post.lastmod || post.date
    return !latest || d > latest ? d : latest
  }, undefined)

  const staticRoutes = ['', 'blog', 'about', 'privacy', 'terms', 'support']
  const updatedRoutes = new Set(['', 'kegel-guide', 'about', 'contact', 'editorial-policy'])
  staticRoutes.push('kegel-guide', 'contact', 'editorial-policy')
  const routes = staticRoutes.map((route) => ({
    url: route ? `${siteUrl}/${route}` : siteUrl,
    lastModified:
      route === 'blog' && newestPost
        ? newestPost
        : updatedRoutes.has(route)
          ? '2026-10-03'
          : STATIC_PAGES_UPDATED,
  }))

  // Tag archives change whenever a post is published.
  const tagSet = new Set<string>()
  published.forEach((post) => post.tags?.forEach((tag) => tagSet.add(githubSlug(tag))))
  const tagRoutes = [...tagSet].map((tag) => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: newestPost ?? STATIC_PAGES_UPDATED,
  }))

  // Localized routes (home only for now) with reciprocal hreflang alternates.
  const absolute = (path: string) => (path === '/' ? siteUrl : `${siteUrl}${path}`)
  const alternatesFor = (route: string) => ({
    languages: Object.fromEntries(
      Object.entries(languageAlternates(route)).map(([code, path]) => [code, absolute(path)])
    ),
  })
  for (const route of routes) {
    const path = route.url === siteUrl ? '/' : route.url.slice(siteUrl.length)
    if ((INDEXED_LOCALIZED_ROUTES as readonly string[]).includes(path)) {
      Object.assign(route, { alternates: alternatesFor(path) })
    }
  }
  const localizedRoutes = INDEXED_LOCALIZED_ROUTES.flatMap((route) =>
    prefixedLocales.map((lang) => ({
      url: absolute(localizePath(route, lang)),
      lastModified: LOCALIZED_PAGES_UPDATED,
      alternates: alternatesFor(route),
    }))
  )

  return [...routes, ...localizedRoutes, ...blogRoutes, ...tagRoutes]
}
