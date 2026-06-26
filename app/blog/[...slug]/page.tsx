import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

type ExtendedBlog = Blog & {
  reviewedBy?: string
  lastReviewed?: string
  lastmod?: string
}

type MedicalAuthor = CoreContent<Authors> & {
  honorificSuffix?: string
  medicalSpecialty?: string
  hospitalAffiliation?: string
  boardCertification?: string
  doximity?: string
  healthgrades?: string
  pubmed?: string
}

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}
const DEFAULT_AUTHOR_SLUG = siteMetadata.authorSlug || 'defy-team'

const resolveAuthorDetails = (authorSlugs?: string[]) => {
  const slugs = authorSlugs && authorSlugs.length > 0 ? authorSlugs : [DEFAULT_AUTHOR_SLUG]

  const resolvedAuthors = slugs
    .map((author) => allAuthors.find((p) => p.slug === author))
    .filter((author): author is Authors => Boolean(author))
    .map((author) => coreContent(author))

  if (resolvedAuthors.length > 0) {
    return resolvedAuthors
  }

  const fallbackAuthor = allAuthors.find((p) => p.slug === DEFAULT_AUTHOR_SLUG)
  return fallbackAuthor ? [coreContent(fallbackAuthor as Authors)] : []
}

const buildJsonLdAuthors = (authorDetails: ReturnType<typeof resolveAuthorDetails>) => {
  return authorDetails.map((author) => {
    const sameAs = [
      author.linkedin,
      author.twitter,
      author.github,
      author.bluesky,
      ...(author.seoProfiles || []),
    ].filter(Boolean)

    return {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.occupation || undefined,
      worksFor: author.company
        ? {
            '@type': 'Organization',
            name: author.company,
          }
        : undefined,
      image: author.avatar ? `${siteMetadata.siteUrl}${author.avatar}` : undefined,
      sameAs: sameAs.length > 0 ? Array.from(new Set(sameAs)) : undefined,
    }
  })
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))

  const post = allBlogs.find((p) => p.slug === slug && (p.lang === 'en' || !p.lang))
  if (!post) return

  const authorDetails = resolveAuthorDetails(post.authors)
  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => ({
    url: img && img.includes('http') ? img : siteMetadata.siteUrl + img,
  }))

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const englishBlogs = allBlogs.filter((p) => p.lang === 'en' || !p.lang)
  return englishBlogs.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
}

const buildReviewerJsonLd = (reviewer: MedicalAuthor) => {
  const sameAs = [
    reviewer.linkedin,
    reviewer.doximity,
    reviewer.healthgrades,
    reviewer.pubmed,
    ...(reviewer.seoProfiles || []),
  ].filter(Boolean)

  return {
    '@type': ['Person', 'Physician'],
    '@id': `${siteMetadata.siteUrl}/about#${reviewer.slug}`,
    name: reviewer.name,
    honorificSuffix: reviewer.honorificSuffix || undefined,
    jobTitle: reviewer.occupation || undefined,
    medicalSpecialty: reviewer.medicalSpecialty || undefined,
    image: reviewer.avatar ? `${siteMetadata.siteUrl}${reviewer.avatar}` : undefined,
    worksFor: reviewer.hospitalAffiliation
      ? { '@type': 'MedicalOrganization', name: reviewer.hospitalAffiliation }
      : undefined,
    hasCredential: reviewer.boardCertification
      ? {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Board Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: reviewer.boardCertification,
          },
        }
      : undefined,
    url: `${siteMetadata.siteUrl}/about#${reviewer.slug}`,
    sameAs: sameAs.length > 0 ? Array.from(new Set(sameAs)) : undefined,
  }
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params
  const slug = decodeURI(params.slug.join('/'))

  const post = allBlogs.find((p) => p.slug === slug && (p.lang === 'en' || !p.lang)) as
    | Blog
    | undefined

  if (!post) return notFound()

  const filteredBlogs = allBlogs.filter((p) => p.lang === 'en' || !p.lang)
  const sortedPosts = allCoreContent(sortPosts(filteredBlogs))
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug)
  const prev = postIndex !== -1 ? sortedPosts[postIndex + 1] : null
  const next = postIndex !== -1 ? sortedPosts[postIndex - 1] : null

  const authorDetails = resolveAuthorDetails(post.authors)

  // Resolve medical reviewer
  const extendedPost = post as ExtendedBlog
  const reviewerSlug = extendedPost.reviewedBy
  const reviewerAuthor = reviewerSlug
    ? allAuthors.find((a) => a.slug === reviewerSlug) || null
    : null
  const reviewerDetails = reviewerAuthor ? (coreContent(reviewerAuthor) as MedicalAuthor) : null

  const mainContent = coreContent(post)

  const postUrl = `${siteMetadata.siteUrl}/blog/${post.slug}`
  const lastReviewed = extendedPost.lastReviewed

  // Base Article JSON-LD
  const jsonLd = post.structuredData || {}
  jsonLd['author'] = buildJsonLdAuthors(authorDetails)
  jsonLd['publisher'] = {
    '@type': 'Organization',
    name: 'Defy',
    logo: {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}/static/favicons/android-chrome-512x512.png`,
    },
  }
  jsonLd['mainEntityOfPage'] = { '@type': 'WebPage', '@id': postUrl }

  // MedicalWebPage JSON-LD (added when post has a medical reviewer)
  const medicalWebPageLd = reviewerDetails
    ? {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        '@id': `${postUrl}#medicalwebpage`,
        url: postUrl,
        name: post.title,
        description: post.summary,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date((post as any).lastmod || post.date).toISOString(),
        lastReviewed: lastReviewed ? new Date(lastReviewed).toISOString() : undefined,
        author: buildJsonLdAuthors(authorDetails),
        reviewedBy: buildReviewerJsonLd(reviewerDetails),
        audience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient',
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.article-summary'],
        },
      }
    : null

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteMetadata.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteMetadata.siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  }

  const Layout = layouts[post.layout || defaultLayout]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {medicalWebPageLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        reviewerDetails={reviewerDetails}
        next={next}
        prev={prev}
      >
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
