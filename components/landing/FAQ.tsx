'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What are kegel exercises for men?',
    answer:
      'Kegel exercises are contractions of the pelvic floor muscles — the muscles that control bladder function, erection quality, and ejaculation. Men have the same pelvic floor as women, and strengthening it through regular kegel training has been clinically shown to improve erectile function, boost orgasm intensity, and help with urinary control.',
  },
  {
    question: 'Can kegel exercises really help with erectile dysfunction (ED)?',
    answer:
      'Yes. A landmark study published in the British Journal of General Practice found that pelvic floor muscle exercises restored normal erectile function in 40% of men with ED and significantly improved function in another 35.5%. Kegels improve blood flow to the pelvic region and strengthen the muscles that trap blood in the penis during erection.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Most men notice improvements in bladder control within 4–6 weeks of consistent daily training. Improvements in erectile function and stamina typically appear between 6–12 weeks. The key is consistency — even one missed week can slow progress. Defy keeps you on track with streak reminders and session logging.',
  },
  {
    question: 'How many kegel reps should I do per day?',
    answer:
      "Research suggests 30–40 contractions per day, broken into 2–3 sessions, is optimal for most men. Defy automatically programs the right volume for your experience level and progresses you safely — you don't need to count anything yourself.",
  },
  {
    question: 'Are kegel exercises safe for all men?',
    answer:
      'For the vast majority of men, kegel exercises are completely safe and have no side effects. However, men with certain prostate conditions or chronic pelvic pain syndrome should consult a urologist before starting pelvic floor training. Always listen to your body and stop if you experience pain.',
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
