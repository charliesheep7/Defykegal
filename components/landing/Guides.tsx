import Link from '@/components/Link'
import { coreGuides } from '@/data/coreGuides'
import type { Dictionary } from '@/types/dictionary'
import en from '../../dictionaries/en.json'

type GuideSlug = keyof Dictionary['guides']['items']

export default function Guides({
  dict = en.guides,
  showEnglishNote = false,
}: {
  dict?: Dictionary['guides']
  showEnglishNote?: boolean
}) {
  return (
    <section className="border-t border-white/10 py-20 sm:py-28" aria-labelledby="guides-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">
          {dict.eyebrow}
        </p>
        <h2 id="guides-title" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          {dict.heading}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">{dict.body}</p>
        {showEnglishNote && <p className="mt-2 text-sm text-gray-500">{dict.englishNote}</p>}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {coreGuides.map((guide) => {
            const copy = dict.items[guide.slug as GuideSlug] ?? guide
            return (
              <li key={guide.slug}>
                <Link
                  href={`/blog/${guide.slug}`}
                  className="block h-full rounded-xl border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  <h3 className="font-semibold text-white">{copy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{copy.description}</p>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link
          href="/kegel-guide"
          className="mt-8 inline-block font-semibold text-white underline underline-offset-4"
        >
          {dict.explore}
        </Link>
      </div>
    </section>
  )
}
