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
            influence health decisions, we hold it to the same evidence standard used by
            peer-reviewed urology journals: claims are supported by primary research, clinical
            guidelines, and expert consensus — not anecdote.
          </p>
          <p>
            Every article on defykegel.com is written by a health-experienced writer and
            independently reviewed by a board-certified urologist before publication. We do not
            publish AI-generated content as-is; all content is written by humans, reviewed by a
            licensed medical professional, and fact-checked against authoritative sources.
          </p>
        </section>

        <section>
          <h2>Who Creates Our Content</h2>
          <p>
            <strong>Writers:</strong> Defy's editorial team produces all health articles. Writers
            have backgrounds in health journalism, biomedical science, or men's health
            communication. Every writer is required to cite primary sources (PubMed-indexed studies,
            NIH, CDC, FDA, major academic medical centers) and to flag any claim that requires
            specialist verification.
          </p>
          <p>
            <strong>Medical Reviewers:</strong> Every article is reviewed by a licensed physician
            with relevant specialty credentials before publication. Our current medical reviewer is{' '}
            <Link href="/about#dr-marcus-webb" className="text-accent-400 hover:text-accent-300">
              Dr. Lu, MD
            </Link>
            , an Associate Chief Physician and Director of Health Examination with nearly 20 years
            of clinical experience in chronic disease prevention and integrated medicine. Reviewers
            check clinical accuracy, verify research citations, and flag any content that
            contradicts established medical guidelines.
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
              <strong>Medical review:</strong> A board-certified physician reviews all clinical
              claims for accuracy, checks that the content aligns with current treatment guidelines,
              and approves or requests revisions.
            </li>
            <li>
              <strong>Publication:</strong> The article is published with the writer&apos;s byline,
              the reviewer&apos;s name and credentials, and all four date stamps (written, medically
              reviewed, fact-checked, updated).
            </li>
          </ol>
        </section>

        <section>
          <h2>Sources We Accept</h2>
          <p>
            <strong>Tier 1 (required for clinical claims):</strong> PubMed-indexed peer-reviewed
            studies, NIH, CDC, FDA, WHO, major academic medical centers (Mayo Clinic, Cleveland
            Clinic, Johns Hopkins Medicine), Cochrane Reviews.
          </p>
          <p>
            <strong>Tier 2 (supporting context):</strong> Major medical associations (American
            Urological Association, American Board of Urology, American College of Surgeons),
            government health agencies, and specialty society clinical practice guidelines.
          </p>
          <p>
            <strong>Not accepted as primary citations:</strong> Other health blogs, press releases,
            industry-funded studies without independent replication, or anecdotal sources.
          </p>
          <p>
            All citations are linked directly to their source (PubMed abstract, journal DOI, or
            official government health page). We do not cite secondary summaries when the primary
            source is available.
          </p>
        </section>

        <section>
          <h2>Date Transparency</h2>
          <p>Each article carries four dates:</p>
          <ul>
            <li>
              <strong>Written:</strong> When the article was originally authored.
            </li>
            <li>
              <strong>Medically Reviewed:</strong> When a physician last reviewed and approved the
              clinical content.
            </li>
            <li>
              <strong>Fact-Checked:</strong> When citations and statistics were last verified.
            </li>
            <li>
              <strong>Updated:</strong> When meaningful content changes were made (not cosmetic
              edits).
            </li>
          </ul>
          <p>
            We update articles when clinical guidelines change, new landmark studies are published,
            or a reader flags a factual discrepancy. We do not refresh dates without substantive
            content changes.
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
            We do not publish health content generated solely by AI tools. All health articles on
            defykegel.com are written by human writers, reviewed by licensed physicians, and
            fact-checked against primary sources before publication. AI tools may be used for
            research assistance, but never as a substitute for human clinical judgment.
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
