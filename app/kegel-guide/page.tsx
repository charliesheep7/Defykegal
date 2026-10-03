import Link from '@/components/Link'
import { coreGuides } from '@/data/coreGuides'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Kegel Guide for Men: Technique, Evidence and Relaxation',
  description:
    'Find your starting point for male pelvic floor training: beginner technique, anatomy, research, relaxation, and the Defy app.',
  alternates: { canonical: `${siteMetadata.siteUrl}/kegel-guide` },
})

export default function KegelGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Kegel guide for men',
            url: `${siteMetadata.siteUrl}/kegel-guide`,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: coreGuides.map((guide, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: guide.title,
                url: `${siteMetadata.siteUrl}/blog/${guide.slug}`,
              })),
            },
          }),
        }}
      />
      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Defy guides</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Understand your pelvic floor. Choose your next step.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
        Start with the beginner guide, use the anatomy page to understand the muscles, then explore
        technique, research, or relaxation according to your question.
      </p>
      <ol className="mt-12 grid gap-5 sm:grid-cols-2">
        {coreGuides.map((guide, index) => (
          <li key={guide.slug} className="rounded-xl border border-white/10 p-6">
            <span className="text-sm text-gray-500">0{index + 1}</span>
            <h2 className="mt-3 text-xl font-semibold text-white">
              <Link
                href={`/blog/${guide.slug}`}
                className="underline decoration-white/20 underline-offset-4 hover:decoration-white"
              >
                {guide.title}
              </Link>
            </h2>
            <p className="mt-3 leading-relaxed text-gray-400">{guide.description}</p>
          </li>
        ))}
      </ol>
      <section className="mt-12 rounded-xl border border-white/10 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">Make room for a consistent routine.</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
          Defy provides guided daily Kegel sessions, habit challenges, and wellness resources. Use
          the app to support a routine appropriate for you; it does not diagnose pelvic floor
          conditions or replace an individual exercise plan from a clinician.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={siteMetadata.appStoreUrl}
            className="rounded-full bg-white px-6 py-3 font-semibold text-black"
          >
            Download on iOS
          </Link>
          <Link
            href={siteMetadata.googlePlayUrl}
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white"
          >
            Get it on Google Play
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Free to download. Full access requires a subscription.
        </p>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-white">When an assessment comes first</h2>
        <p className="mt-3 leading-relaxed text-gray-400">
          Pelvic pain and urinary symptoms do not tell you on their own whether your muscles need
          strengthening. Ask a health professional about suitability and technique, particularly if
          exercise is painful or you are recovering from surgery. See the{' '}
          <a
            href="https://www.niddk.nih.gov/health-information/urologic-diseases/kegel-exercises"
            className="text-white underline underline-offset-4"
          >
            NIDDK exercise guidance
          </a>
          .
        </p>
        <p className="mt-4 text-sm text-gray-500">
          These are editorial resources. Medical review is indicated only where an article names its
          reviewer and review date. Read our{' '}
          <Link href="/editorial-policy" className="underline underline-offset-4">
            editorial policy
          </Link>
          .
        </p>
      </section>
    </div>
  )
}
