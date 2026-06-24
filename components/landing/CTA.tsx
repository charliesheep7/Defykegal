'use client'
import { Smartphone } from 'lucide-react'

const IOS_APP_URL = 'https://apps.apple.com/app/defy-kegel-for-men/id0000000000'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[--color-bg] via-white to-[--color-surface] py-20 sm:py-28 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 opacity-25">
        <div className="animate-blob absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[--color-accent-500] mix-blend-multiply blur-3xl filter" />
        <div className="animate-blob animation-delay-2000 absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-[--color-accent-400] mix-blend-multiply blur-3xl filter" />
        <div className="animate-blob animation-delay-4000 absolute bottom-1/4 left-1/2 h-96 w-96 rounded-full bg-[--color-accent-600] mix-blend-multiply blur-3xl filter" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[--color-accent-200] bg-[--color-accent-100] px-4 py-2 dark:border-[--color-accent-800] dark:bg-[--color-accent-900]">
          <Smartphone className="h-4 w-4 text-[--color-accent-600] dark:text-[--color-accent-400]" />
          <span className="text-sm font-semibold text-[--color-accent-700] dark:text-[--color-accent-300]">
            Available Now on iOS
          </span>
        </div>

        <h2 className="mb-6 text-4xl leading-tight font-bold text-[--color-text] sm:text-5xl lg:text-6xl dark:text-white">
          Start your kegel journey today
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          Join thousands of men strengthening their pelvic floor and reclaiming their confidence —
          one rep at a time.
        </p>

        <a
          href={IOS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-[var(--color-accent-500)] px-10 py-5 text-xl font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--color-accent-600)]"
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on iOS — Free
        </a>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Private, discreet, and science-backed. No credit card required.
        </p>
      </div>
    </section>
  )
}
