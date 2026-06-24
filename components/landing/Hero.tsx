'use client'
import Image from 'next/image'

const IOS_APP_URL = 'https://apps.apple.com/app/defy-kegel-for-men/id0000000000'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-bg] via-[#eef2ff] to-[--color-surface] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(37,99,235,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
        <div className="animate-fade-in grid items-center gap-10 lg:grid-cols-2">
          {/* Text content */}
          <div className="space-y-6 text-left lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-[--color-accent-200] bg-[--color-accent-100] px-4 py-1.5 dark:border-[--color-accent-800] dark:bg-[--color-accent-900]">
              <span className="h-2 w-2 rounded-full bg-[--color-accent-500]" />
              <span className="text-sm font-semibold text-[--color-accent-700] dark:text-[--color-accent-300]">
                Science-Backed · Built for Men
              </span>
            </div>

            <h1 className="text-[clamp(1.9rem,3.4vw,3.25rem)] leading-tight font-bold tracking-tight text-[--color-text] dark:text-white">
              Kegel Exercises for Men That Actually Work
            </h1>

            <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Defy delivers guided kegel training clinically proven to improve erections, prevent
              erectile dysfunction, and boost pelvic floor strength — in minutes a day.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--color-accent-500)] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-600)]"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on iOS
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-[--color-accent-200] bg-[--color-accent-100] px-4 py-2 text-sm font-semibold text-[--color-accent-700] dark:border-[--color-accent-800] dark:bg-[--color-accent-900] dark:text-[--color-accent-300]">
                  Free to Start
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by 10,000+ men · Private & Discreet
              </span>
            </div>
          </div>

          {/* App screenshot */}
          <div className="relative lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xl">
              <Image
                src="/static/images/app_hero.webp"
                alt="Defy app — guided kegel exercises for men to improve erections and beat ED"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 90vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />
    </section>
  )
}
