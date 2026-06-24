import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayout'

const POSTS_PER_PAGE = 5

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export const metadata = genPageMetadata({
  title: 'Blog',
  description: 'Tips, guides, and updates from the Defy team on kegel exercises for men.',
})

export default async function LocaleBlogPage({ params }: { params: Promise<{ lang: 'en' }> }) {
  const { lang } = await params
  const filteredBlogs = allBlogs.filter((post) => post.lang === lang)
  const posts = allCoreContent(sortPosts(filteredBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
