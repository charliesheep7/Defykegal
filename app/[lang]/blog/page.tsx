import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import ListLayout from '@/layouts/ListLayout'
import { getDictionary } from 'lib/dictionaries'
import { prefixedLocales, type PrefixedLocale } from 'lib/i18n'
import { localizedMetadata } from '../metadata'

// Blog posts are English-only. This page lists them with translated chrome so
// /{lang}/blog never 404s; each post links to its English URL (/blog/slug).

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }))
}

type Props = { params: Promise<{ lang: PrefixedLocale }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  const dict = getDictionary(lang)
  return localizedMetadata({
    lang,
    title: dict.meta.blogTitle,
    description: dict.meta.blogDescription,
    path: `/${lang}/blog`,
    canonical: '/blog',
  })
}

export default async function LocaleBlogPage({ params }: Props) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const posts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.lang === 'en' || !post.lang))
  )

  return (
    <>
      <ListLayout
        posts={posts}
        initialDisplayPosts={posts}
        title={dict.blog.title}
        dateLocale={lang}
        labels={{ searchPlaceholder: dict.blog.searchPlaceholder, noPosts: dict.blog.noPosts }}
      />
      <p className="mx-auto max-w-3xl px-4 pb-8 text-sm text-gray-500 sm:px-6 xl:max-w-5xl xl:px-0">
        {dict.blog.englishNote}
      </p>
    </>
  )
}
