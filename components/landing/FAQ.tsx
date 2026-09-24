'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata'

const faqs = [
  {
    question: 'What are Kegel exercises for men?',
    answer:
      'Kegel exercises involve tightening and relaxing the pelvic floor muscles. They can help with bladder and bowel control, and may support sexual function. Learning to use the right muscles matters; a healthcare professional or pelvic floor therapist can help if you are unsure.',
    source: 'https://www.niddk.nih.gov/health-information/urologic-diseases/kegel-exercises',
    sourceLabel: 'NIDDK guide to Kegel exercises',
  },
  {
    question: 'How does Defy help me practice?',
    answer:
      'Defy provides guided daily Kegel sessions, habit challenges, and men’s health resources to help you build a routine. The App Store listing has the current feature details.',
    source: siteMetadata.appStoreUrl,
    sourceLabel: 'Defy on the App Store',
  },
  {
    question: 'Can Defy treat erectile dysfunction?',
    answer:
      'Defy is a wellness app, not a diagnosis or medical treatment. Pelvic floor exercises may help some people, but results vary. If you have persistent erection problems, pelvic pain, or other symptoms, speak with a qualified healthcare professional.',
  },
  {
    question: 'How often should I do Kegel exercises?',
    answer:
      'The right plan depends on your needs. More repetitions are not always better; overdoing pelvic floor exercises can cause strain. Ask a healthcare professional for advice if you are treating symptoms or recovering from surgery.',
    source: 'https://www.niddk.nih.gov/health-information/urologic-diseases/kegel-exercises',
    sourceLabel: 'NIDDK exercise guidance',
  },
  {
    question: 'Is Defy free?',
    answer:
      'Defy is free to download. Access to all app features requires an active subscription. Check the App Store for current prices and terms before subscribing.',
    source: siteMetadata.appStoreUrl,
    sourceLabel: 'Current App Store terms',
  },
]

export default function FAQ() {
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
          <span className="eyebrow">FAQ</span>
          <h2 className="text-display mt-4 font-bold text-white">
            Common questions
            <br />
            <span className="text-white/40">answered.</span>
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
                    {'source' in faq && faq.source && (
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
          <p className="mb-2 text-sm font-semibold text-white/70">Still have questions?</p>
          <p className="mb-6 text-xs text-white/30">We typically respond within 24 hours.</p>
          <a
            href="mailto:support@defykegel.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
