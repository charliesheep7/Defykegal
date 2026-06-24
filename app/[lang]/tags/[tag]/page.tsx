import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import ListLayout from '@/layouts/ListLayout'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 5

export async function generateMetadata(props: {
  params: Promise<{ tag: string; lang: 'en' }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `Read articles about ${tag} on the Defy blog — kegel exercise tips, guides, and men's pelvic floor health.`,
  })
}

export const generateStaticParams = async () => {
  const tagCounts = {} as Record<string, number>

  const englishBlogs = allBlogs.filter((post) => post.lang === 'en' || !post.lang)
  englishBlogs.forEach((post) => {
    if (post.tags && post.draft !== true) {
      post.tags.forEach((tag) => {
        const formattedTag = slug(tag)
        tagCounts[formattedTag] = (tagCounts[formattedTag] || 0) + 1
      })
    }
  })

  return Object.keys(tagCounts).map((tag) => ({ tag, lang: 'en' as const }))
}

export default async function LocaleTagPage(props: {
  params: Promise<{ tag: string; lang: 'en' }>
}) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const { lang } = params

  const filteredBlogs = allBlogs.filter((post) => post.lang === lang || (!post.lang && lang === 'en'))
  const taggedPosts = filteredBlogs.filter(
    (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)
  )

  if (taggedPosts.length === 0) {
    return notFound()
  }

  const posts = allCoreContent(sortPosts(taggedPosts))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={tag}
    />
  )
}
