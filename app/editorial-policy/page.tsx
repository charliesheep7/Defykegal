import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'Editorial Policy',
  description:
    "Defy's editorial policy explains how our health content is written, medically reviewed, fact-checked, and kept up to date — so you can read with confidence.",
})

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 xl:px-0">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-100">Editorial Policy</h1>
      <p className="mb-10 text-sm text-gray-500">Last updated: June 26, 2026</p>

      <div className="prose dark:prose-invert max-w-none space-y-10">
        <section>
          <h2>Our Commitment to Accuracy</h2>
          <p>
            Defy publishes health content about male pelvic floor function, kegel exercises,
            erectile dysfunction, urinary health, and sexual wellness. Because this content can
            influence health decisions, we aim to support clinical claims with research, clinical
            guidance, and links that readers can check.
          </p>
          <p>
            Articles show an editorial byline and publication date. When an article has been
            medically reviewed, it displays the reviewer and review date. An article without that
            label should not be read as having completed medical review.
          </p>
        </section>

        <section>
          <h2>Who Creates Our Content</h2>
          <p>
            <strong>Writers:</strong> Defy's editorial team produces all health articles. Writers
            link to research, clinical guidance, and other relevant sources where readers may verify
            important health claims.
          </p>
          <p>
            <strong>Medical Reviewers:</strong> Articles marked &ldquo;Medically Reviewed&rdquo;
            name the reviewing physician. The reviewer listed on those articles is{' '}
            <Link href="/about#dr-marcus-webb" className="text-accent-400 hover:text-accent-300">
              Dr. Lu, MD
            </Link>
            , an Associate Chief Physician and Director of Health Examination with nearly 20 years
            of clinical experience in chronic disease prevention and integrated medicine.
          </p>
        </section>

        <section>
          <h2>Our Review Process</h2>
          <ol>
            <li>
              <strong>Draft:</strong> Writer researches and drafts the article, citing peer-reviewed
              studies and clinical guidelines throughout.
            </li>
            <li>
              <strong>Editorial review:</strong> Senior editor checks for clarity, structure,
              sourcing completeness, and adherence to our style guide.
            </li>
            <li>
              <strong>Medical review:</strong> When a physician reviews an article, we show the
              reviewer and review date on that article.
            </li>
            <li>
              <strong>Publication:</strong> The article is published with an editorial byline and
              publication date. A medical review date is shown when applicable.
            </li>
          </ol>
        </section>

        <section>
          <h2>Sources We Accept</h2>
          <p>
            We prefer original research, clinical guidelines, public health agencies, and major
            medical centers for health claims. Some articles also link to explanatory summaries;
            those should not be mistaken for the underlying study or clinical guideline.
          </p>
          <p>
            A linked study supports the specific result reported in the article, not a guaranteed
            outcome for every reader. Please flag a citation that leads to the wrong source.
          </p>
        </section>

        <section>
          <h2>Date Transparency</h2>
          <p>Articles display the dates that are relevant to their visible attribution:</p>
          <ul>
            <li>
              <strong>Published:</strong> The article&apos;s publication date.
            </li>
            <li>
              <strong>Medically Reviewed:</strong> Shown only with a named medical reviewer and
              review date.
            </li>
          </ul>
          <p>
            We record meaningful content updates separately from the publication date and do not
            change the medical review date unless a new review is completed.
          </p>
        </section>

        <section>
          <h2>Conflict of Interest Policy</h2>
          <p>
            Defy is an app company. Our editorial content is produced independently of our
            commercial operations. Medical reviewers are compensated for their time; this
            compensation is fixed and not contingent on content outcomes or commercial performance.
            No advertiser or commercial partner influences our editorial decisions.
          </p>
          <p>
            Where Defy&apos;s app is referenced in an article (e.g., as a tool for kegel training),
            this is disclosed in the article. We do not present the Defy app as a medical treatment
            or substitute for clinical care.
          </p>
        </section>

        <section>
          <h2>AI Content Policy</h2>
          <p>
            AI tools are not medical reviewers. A &ldquo;Medically Reviewed&rdquo; label refers to
            the named human reviewer and the date shown on the article. Readers should inspect cited
            sources and seek individual medical advice for health decisions.
          </p>
        </section>

        <section>
          <h2>Corrections Policy</h2>
          <p>
            We take factual accuracy seriously. If you believe an article contains an error, please{' '}
            <Link href="/contact" className="text-accent-400 hover:text-accent-300">
              contact us
            </Link>
            . We review all correction requests within 5 business days. If a factual error is
            confirmed, we correct it promptly and note the correction at the bottom of the article.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about our editorial standards?{' '}
            <Link href="/contact" className="text-accent-400 hover:text-accent-300">
              Contact our editorial team
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
