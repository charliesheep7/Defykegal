import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { slug as githubSlug } from 'github-slugger'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft && (post.lang === 'en' || !post.lang))
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const today = new Date().toISOString().split('T')[0]
  const staticRoutes = ['', 'blog', 'about', 'privacy', 'terms', 'support']
  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: today,
  }))

  const tagSet = new Set<string>()
  allBlogs
    .filter((post) => !post.draft && (post.lang === 'en' || !post.lang))
    .forEach((post) => post.tags?.forEach((tag) => tagSet.add(githubSlug(tag))))

  const tagRoutes = [...tagSet].map((tag) => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: today,
  }))

  return [...routes, ...blogRoutes, ...tagRoutes]
}
