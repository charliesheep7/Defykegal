import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'Meet the team behind Defy — the app helping men strengthen their pelvic floor, improve erections, and beat ED with guided kegel training.',
})

const featuredAuthorSlugs = ['defy-team']

export default function Page() {
  const featuredAuthors = featuredAuthorSlugs
    .map((slug) => allAuthors.find((author) => author.slug === slug))
    .filter((author): author is Authors => Boolean(author))
  const authorsToRender = featuredAuthors.length > 0 ? featuredAuthors : (allAuthors as Authors[])

  return (
    <>
      {authorsToRender.map((author) => {
        const mainContent = coreContent(author)
        return (
          <AuthorLayout content={mainContent} key={author.slug}>
            <MDXLayoutRenderer code={author.body.code} />
          </AuthorLayout>
        )
      })}
    </>
  )
}
