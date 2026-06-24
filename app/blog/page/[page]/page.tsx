import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const filteredBlogs = allBlogs.filter((post) => post.lang === 'en' || !post.lang)
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
}

export async function generateMetadata(props: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const params = await props.params
  const rawPage = Number(params.page)
  const pageNumber = Number.isFinite(rawPage) && rawPage > 1 ? rawPage : 1
  const description =
    pageNumber <= 1
      ? 'Science-backed kegel exercise guides for men — covering pelvic floor health, ED, and performance.'
      : `More kegel exercise and pelvic floor health guides from the Defy team — page ${pageNumber}.`

  return genPageMetadata({
    title: pageNumber <= 1 ? 'Blog' : `Blog - Page ${pageNumber}`,
    description,
  })
}

export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params
  const filteredBlogs = allBlogs.filter((post) => post.lang === 'en' || !post.lang)
  const posts = allCoreContent(sortPosts(filteredBlogs))
  const pageNumber = parseInt(params.page as string)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound()
  }

  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
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
