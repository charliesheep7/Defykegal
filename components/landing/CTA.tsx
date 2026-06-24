'use client'
import { Smartphone } from 'lucide-react'

const IOS_APP_URL = 'https://apps.apple.com/app/defy-kegel-for-men/id0000000000'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-24 sm:py-32">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <Smartphone className="h-4 w-4 text-white/40" />
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">
            Available Now on iOS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-display mb-6 font-bold text-white">
          Start your kegel
          <br />
          <span className="text-white/40">journey today.</span>
        </h2>

        {/* Body */}
        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
          Join thousands of men strengthening their pelvic floor and reclaiming their confidence —
          one rep at a time.
        </p>

        {/* CTA */}
        <a
          href={IOS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-base font-bold text-black transition-opacity duration-200 hover:opacity-90"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on iOS — Free
        </a>

        <p className="mt-6 text-xs tracking-wide text-white/30">
          Private, discreet, and science-backed. No credit card required.
        </p>
      </div>
    </section>
  )
}
