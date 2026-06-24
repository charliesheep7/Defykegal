'use client'

const mediaLogos = [
  { name: 'Mayo Clinic', src: '/static/images/harvard.svg' },
  { name: 'Harvard Health', src: '/static/images/oxford.png' },
  { name: 'WebMD', src: '/static/images/bbc.svg' },
  { name: 'Healthline', src: '/static/images/forbes.svg' },
  { name: 'NHS', src: '/static/images/nytimes.svg' },
]

export default function MediaTicker() {
  const allLogos = [...mediaLogos, ...mediaLogos]

  return (
    <section className="overflow-hidden border-y border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
          Backed by Science from Leading Health Authorities
        </p>
      </div>

      <div className="relative">
        <div className="animate-scroll-infinite flex">
          {allLogos.map((logo, index) => (
            <div key={index} className="mx-8 flex flex-shrink-0 items-center justify-center">
              <div className="flex h-16 min-w-32 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[--color-accent-300] hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-[--color-accent-700]">
                <span className="text-sm font-bold tracking-wide text-gray-500 dark:text-gray-400">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-950" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-950" />
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
