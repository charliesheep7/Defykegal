'use client'

const mediaItems = [
  { name: 'Mayo Clinic' },
  { name: 'Harvard Health' },
  { name: 'WebMD' },
  { name: 'Healthline' },
  { name: 'NHS' },
  { name: 'British Journal of GP' },
  { name: 'Urology Times' },
]

export default function MediaTicker() {
  const doubled = [...mediaItems, ...mediaItems, ...mediaItems]

  return (
    <section className="overflow-hidden border-y border-white/8 bg-[#0a0a0a] py-12">
      <div className="mb-8 text-center">
        <p className="eyebrow">Backed by science from leading health authorities</p>
      </div>

      <div className="marquee-pause relative">
        <div className="animate-marquee flex gap-6">
          {doubled.map((item, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] px-6 py-3 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.06]"
            >
              <span className="text-sm font-semibold tracking-wide whitespace-nowrap text-white/30">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      </div>
    </section>
  )
}
