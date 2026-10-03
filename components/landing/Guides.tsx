import Link from '@/components/Link'
import { coreGuides } from '@/data/coreGuides'

export default function Guides() {
  return (
    <section className="border-t border-white/10 py-20 sm:py-28" aria-labelledby="guides-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold tracking-widest text-white/50 uppercase">Learn first</p>
        <h2 id="guides-title" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          A clearer start to pelvic floor training.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
          Learn the basics, check the evidence, and understand the role of relaxation before
          choosing a routine.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {coreGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/blog/${guide.slug}`}
                className="block h-full rounded-xl border border-white/10 p-6 transition-colors hover:border-white/30 hover:bg-white/5"
              >
                <h3 className="font-semibold text-white">{guide.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/kegel-guide"
          className="mt-8 inline-block font-semibold text-white underline underline-offset-4"
        >
          Explore the Kegel guide
        </Link>
      </div>
    </section>
  )
}
