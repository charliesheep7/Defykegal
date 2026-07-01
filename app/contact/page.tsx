import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'Contact',
  description:
    'Contact the Defy team with questions about the app, editorial corrections, or partnership inquiries.',
})

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 xl:px-0">
      <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-100">Contact Us</h1>
      <p className="mb-10 text-gray-400">We respond to all messages within 2–3 business days.</p>

      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-200">Get in Touch</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm font-medium tracking-wide text-gray-500 uppercase">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:support@defykegel.com"
                  className="text-accent-400 hover:text-accent-300"
                >
                  support@defykegel.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                Editorial Corrections
              </dt>
              <dd className="mt-1 text-gray-300">
                Found a factual error in one of our articles? Email us at{' '}
                <a
                  href="mailto:editorial@defykegel.com"
                  className="text-accent-400 hover:text-accent-300"
                >
                  editorial@defykegel.com
                </a>{' '}
                with the article URL and the specific claim you believe is incorrect. We review all
                correction requests within 5 business days.
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-200">About Defy</h2>
          <p className="leading-relaxed text-gray-400">
            Defy is a men&apos;s pelvic floor health app built to make kegel training simple,
            evidence-based, and consistent. Our blog content is medically reviewed by
            board-certified urologists. See our{' '}
            <Link href="/editorial-policy" className="text-accent-400 hover:text-accent-300">
              editorial policy
            </Link>{' '}
            for details on how we produce and review our health content.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-200">App Support</h2>
          <p className="leading-relaxed text-gray-400">
            For help with the Defy app (login issues, subscription questions, technical problems),
            visit our{' '}
            <Link href="/support" className="text-accent-400 hover:text-accent-300">
              support page
            </Link>{' '}
            or email{' '}
            <a
              href="mailto:support@defykegel.com"
              className="text-accent-400 hover:text-accent-300"
            >
              support@defykegel.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
