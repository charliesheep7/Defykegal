import Link from '@/components/Link'
import Image from '@/components/Image'

interface MedicalReviewer {
  name: string
  honorificSuffix?: string
  occupation?: string
  medicalSpecialty?: string
  avatar?: string
  linkedin?: string
  slug: string
}

interface MedicalReviewBannerProps {
  reviewer: MedicalReviewer
  lastReviewed: string
}

const reviewDateTemplate: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function MedicalReviewBanner({ reviewer, lastReviewed }: MedicalReviewBannerProps) {
  const displayName = reviewer.honorificSuffix
    ? `${reviewer.name}, ${reviewer.honorificSuffix}`
    : reviewer.name

  const reviewedDate = new Date(lastReviewed).toLocaleDateString('en-US', reviewDateTemplate)

  return (
    <div className="mb-6 flex items-start gap-3 rounded-lg border border-green-800/40 bg-green-950/30 px-4 py-3">
      <svg
        className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-wide text-green-400 uppercase">
          Medically Reviewed
        </p>
        <p className="mt-0.5 text-sm text-gray-300">
          Reviewed by{' '}
          <Link
            href={`/about#${reviewer.slug}`}
            className="font-semibold text-white hover:text-green-400"
          >
            {displayName}
          </Link>
          {reviewer.medicalSpecialty && (
            <span className="text-gray-400"> · {reviewer.medicalSpecialty}</span>
          )}
          {' · '}
          <time dateTime={lastReviewed} className="text-gray-400">
            {reviewedDate}
          </time>
        </p>
      </div>
    </div>
  )
}
