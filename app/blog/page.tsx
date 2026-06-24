import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayout'
import { getSeoBotPosts, mergePosts } from '@/utils/seobot'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({
  title: 'Blog',
  description:
    'Science-backed guides on kegel exercises for men, pelvic floor health, erectile dysfunction, and male sexual performance from the Defy team.',
})

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const filteredBlogs = allBlogs.filter((post) => post.lang === 'en' || !post.lang)
  const contentLayerPosts = allCoreContent(sortPosts(filteredBlogs))

  const seoBotPosts = await getSeoBotPosts()
  const posts = mergePosts(contentLayerPosts, seoBotPosts)

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
