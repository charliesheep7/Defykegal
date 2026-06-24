'use client'
import Image from 'next/image'

const IOS_APP_URL = 'https://apps.apple.com/app/defy-kegel-for-men/id0000000000'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle radial glow — top left */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="space-y-8 text-left lg:order-1">
            {/* Eyebrow */}
            <div className="animate-fade-in inline-flex items-center gap-2">
              <span className="h-px w-8 bg-white/20" />
              <span className="eyebrow">Science-Backed · Built for Men</span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in animation-delay-200 text-hero font-bold text-white"
              style={{ opacity: 0 }}
            >
              Kegel Exercises
              <br />
              <span className="text-white/40">That Actually</span>
              <br />
              Work.
            </h1>

            {/* Body */}
            <p
              className="animate-fade-in animation-delay-400 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg"
              style={{ opacity: 0 }}
            >
              Defy delivers guided kegel training clinically proven to improve erections, prevent
              erectile dysfunction, and boost pelvic floor strength — in minutes a day.
            </p>

            {/* CTA */}
            <div
              className="animate-fade-in animation-delay-400 flex flex-col gap-4 pt-2"
              style={{ opacity: 0 }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={IOS_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-opacity duration-200 hover:opacity-90"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download on iOS
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
                >
                  See how it works
                </a>
              </div>
              <span className="text-xs tracking-wide text-white/30">
                Free to start · Trusted by 10,000+ men · Private & Discreet
              </span>
            </div>
          </div>

          {/* App screenshot */}
          <div className="relative lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xl">
              <Image
                src="/static/images/app_hero_dark.png"
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

      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
