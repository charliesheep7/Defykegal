'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata'
import type { Dictionary } from '@/types/dictionary'
import en from '../../dictionaries/en.json'

// Source links are shared by every locale; the copy comes from the dictionary.
const faqSources: (string | undefined)[] = [
  'https://www.niddk.nih.gov/health-information/urologic-diseases/kegel-exercises',
  siteMetadata.appStoreUrl,
  undefined,
  'https://www.niddk.nih.gov/health-information/urologic-diseases/kegel-exercises',
  siteMetadata.appStoreUrl,
]

export default function FAQ({ dict = en.faq }: { dict?: Dictionary['faq'] }) {
  const faqs = dict.items.map((item, i) => ({ ...item, source: faqSources[i] }))
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="bg-[#111111] py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="text-display mt-4 font-bold text-white">
            {dict.headingLine1}
            <br />
            <span className="text-white/40">{dict.headingLine2}</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-px">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                className={`border-b transition-colors duration-200 ${
                  isExpanded ? 'border-white/15' : 'border-white/8 hover:border-white/12'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex w-full items-start justify-between gap-4 py-6 text-left"
                >
                  <span
                    className={`text-base font-semibold tracking-tight transition-colors duration-200 ${
                      isExpanded ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 flex-shrink-0 text-white/30 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-white/60' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="animate-fade-in pb-6">
                    <p className="text-sm leading-relaxed text-white/50">{faq.answer}</p>
                    {faq.source && faq.sourceLabel && (
                      <a
                        href={faq.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-xs text-white/60 underline underline-offset-4 hover:text-white"
                      >
                        {faq.sourceLabel}
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact */}
        <div className="mt-16 rounded-2xl border border-white/10 p-8 text-center">
          <p className="mb-2 text-sm font-semibold text-white/70">{dict.stillQuestions}</p>
          <p className="mb-6 text-xs text-white/30">{dict.responseTime}</p>
          <a
            href="mailto:support@defykegel.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            {dict.contactSupport}
          </a>
        </div>
      </div>
    </section>
  )
}
