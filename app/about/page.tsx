import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'Meet the team behind Defy — the app helping men strengthen their pelvic floor, improve erections, and beat ED with guided kegel training. Our health content is medically reviewed by board-certified urologists.',
})

type MedicalAuthorContent = ReturnType<typeof coreContent<Authors>> & {
  honorificSuffix?: string
  medicalSpecialty?: string
  boardCertification?: string
  doximity?: string
  healthgrades?: string
  pubmed?: string
}

function MedicalReviewerCard({ author }: { author: Authors }) {
  const content = coreContent(author) as MedicalAuthorContent

  const sameAs = [
    content.linkedin,
    content.doximity,
    content.healthgrades,
    content.pubmed,
    ...(content.seoProfiles || []),
  ].filter(Boolean)

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'Physician'],
    '@id': `${siteMetadata.siteUrl}/about#${content.slug}`,
    name: content.name,
    honorificSuffix: content.honorificSuffix || undefined,
    jobTitle: content.occupation,
    medicalSpecialty: content.medicalSpecialty || undefined,
    image: content.avatar ? `${siteMetadata.siteUrl}${content.avatar}` : undefined,
    url: `${siteMetadata.siteUrl}/about#${content.slug}`,
    hasCredential: content.boardCertification
      ? {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Board Certification',
          recognizedBy: {
            '@type': 'Organization',
            name: content.boardCertification,
          },
        }
      : undefined,
    sameAs: sameAs.length > 0 ? Array.from(new Set(sameAs)) : undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div
        id={content.slug}
        className="flex flex-col gap-6 rounded-xl border border-gray-700 bg-gray-900/60 p-6 sm:flex-row"
      >
        {content.avatar && (
          <div className="shrink-0">
            <Image
              src={content.avatar}
              alt={content.name}
              width={100}
              height={100}
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-gray-100">
            {content.name}
            {content.honorificSuffix && (
              <span className="ml-1 text-base font-normal text-gray-400">
                , {content.honorificSuffix}
              </span>
            )}
          </h3>
          {content.medicalSpecialty && (
            <p className="mt-0.5 text-sm font-medium text-green-400">{content.medicalSpecialty}</p>
          )}
          {content.boardCertification && (
            <p className="mt-0.5 text-sm text-gray-400">
              Board Certified · {content.boardCertification}
            </p>
          )}
          {content.occupation && (
            <p className="mt-0.5 text-sm text-gray-400">{content.occupation}</p>
          )}
          <div className="prose dark:prose-invert mt-4 max-w-none text-sm">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
          {(content.linkedin || content.doximity || content.healthgrades) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {content.linkedin && (
                <Link
                  href={content.linkedin}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-600 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-gray-400 hover:text-gray-100"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Link>
              )}
              {content.doximity && (
                <Link
                  href={content.doximity}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-600 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-gray-400 hover:text-gray-100"
                >
                  Doximity
                </Link>
              )}
              {content.healthgrades && (
                <Link
                  href={content.healthgrades}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-600 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-gray-400 hover:text-gray-100"
                >
                  Healthgrades
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default function Page() {
  const defyTeam = allAuthors.find((a) => a.slug === 'defy-team')
  const drWebb = allAuthors.find((a) => a.slug === 'dr-marcus-webb')

  return (
    <SectionContainer>
      <div className="divide-y divide-gray-800">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-100 sm:text-4xl md:text-5xl">
            About Defy
          </h1>
          <p className="text-lg leading-7 text-gray-400">
            Evidence-based kegel training for men — medically reviewed by board-certified
            urologists.
          </p>
        </div>

        <div className="space-y-12 py-10">
          {/* Mission */}
          <section>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              Defy is a men's pelvic floor health app built around one idea: that the right daily
              exercises — done consistently — can meaningfully improve erection quality, bladder
              control, and sexual performance. We make that training simple, guided, and grounded in
              the research.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">
              Our blog exists to give men the information they need to understand what their pelvic
              floor does, why it matters, and how to train it correctly. Every article is written by
              health-experienced writers and independently reviewed for clinical accuracy by a
              board-certified urologist before it goes live.
            </p>
          </section>

          {/* Editorial Team */}
          {defyTeam && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-100">Editorial Team</h2>
              <div className="prose dark:prose-invert max-w-none text-gray-400">
                <MDXLayoutRenderer code={defyTeam.body.code} />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                All editorial content is produced following our{' '}
                <Link href="/editorial-policy" className="text-accent-400 hover:text-accent-300">
                  editorial policy
                </Link>
                , which covers sourcing standards, the medical review process, and our corrections
                policy.
              </p>
            </section>
          )}

          {/* Medical Review */}
          {drWebb && (
            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-100">Medical Review</h2>
              <p className="mb-5 text-sm text-gray-500">
                All health content on defykegel.com is reviewed by a licensed physician before
                publication.
              </p>
              <MedicalReviewerCard author={drWebb} />
            </section>
          )}

          {/* Editorial Standards */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-100">Our Standards</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: 'Physician reviewed',
                  desc: 'Every article is reviewed by a board-certified urologist for clinical accuracy before publication.',
                },
                {
                  title: 'Primary sources only',
                  desc: 'We cite PubMed-indexed research, NIH, CDC, and major academic medical centers — not other health blogs.',
                },
                {
                  title: 'Human-written',
                  desc: 'All content is written by people with health backgrounds and never generated by AI without clinical oversight.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-gray-700 p-4">
                  <h3 className="font-semibold text-gray-100">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-500">
              For the full details, read our{' '}
              <Link href="/editorial-policy" className="text-accent-400 hover:text-accent-300">
                editorial policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </SectionContainer>
  )
}
