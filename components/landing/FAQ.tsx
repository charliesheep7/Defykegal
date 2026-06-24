'use client'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

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
    <section className="bg-white py-20 sm:py-28 dark:bg-gray-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[--color-accent-200] bg-[--color-accent-100] px-4 py-2 dark:border-[--color-accent-800] dark:bg-[--color-accent-900]">
            <HelpCircle className="h-4 w-4 text-[--color-accent-600] dark:text-[--color-accent-400]" />
            <span className="text-sm font-semibold text-[--color-accent-700] dark:text-[--color-accent-300]">
              FAQ
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-[--color-text] sm:text-4xl lg:text-5xl dark:text-white">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about kegel exercises for men
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                className={`rounded-xl border-2 transition-all duration-300 ${
                  isExpanded
                    ? 'border-[--color-accent-300] bg-[--color-surface] shadow-lg dark:border-[--color-accent-700] dark:bg-gray-800'
                    : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="pr-4 text-lg font-semibold text-[--color-text] dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 flex-shrink-0 text-[--color-accent-600] transition-transform duration-300 dark:text-[--color-accent-400] ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="animate-fade-in px-6 pb-5">
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-gradient-to-br from-[--color-surface] to-[--color-bg] p-8 text-center dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
          <p className="mb-4 text-lg text-black dark:text-white">Still have questions?</p>
          <a
            href="mailto:support@defykegal.com"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent-500)] px-10 py-4 text-xl font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[var(--color-accent-600)]"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
