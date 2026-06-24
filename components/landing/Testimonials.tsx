'use client'

import clsx from 'clsx'
import { ShieldCheck, TrendingUp, ChevronDown, Award } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    category: 'Bedroom Confidence',
    icon: ShieldCheck,
    iconColor: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
    name: 'Marcus T.',
    title: 'Age 38',
    quote:
      "After 8 weeks with Defy, the difference in the bedroom is real. I had no idea kegels could do this much. My confidence is back.",
    fullStory:
      "I was skeptical — kegels always felt like something for women after childbirth. Then I read some research on pubmed about pelvic floor training and erectile function and decided to try Defy. The guided sessions are short and the app keeps me honest with the streak tracker. Eight weeks in, the improvement in firmness and control was undeniable. I wish someone had told me about this years ago.",
  },
  {
    category: 'Consistent Progress',
    icon: TrendingUp,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    name: 'James R.',
    title: 'Age 52',
    quote:
      'Doctor suggested pelvic floor training after my prostatectomy. Defy made it actually doable. 30-day streak and the improvement is undeniable.',
    fullStory:
      "After my surgery, my urologist recommended pelvic floor exercises but gave me almost no guidance on how to actually do them. I tried a few YouTube videos and gave up. Defy gave me a proper progressive program with audio cues telling me exactly when to squeeze and release. The progress charts showing my weekly reps helped me see I was actually improving even when it didn't feel like it yet.",
  },
  {
    category: 'Long-Term Results',
    icon: Award,
    iconColor: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
    name: 'David K.',
    title: 'Age 44',
    quote:
      "Finally an app that explains WHY, not just how. 4-month streak and I'm a different person. The education inside Defy is what made me commit.",
    fullStory:
      "I've tried a dozen health apps and quit them all within two weeks. What kept me with Defy was the education layer — understanding that I was literally rebuilding a muscle I'd neglected my entire life made the daily sessions feel purposeful instead of random. Four months later I've noticed improvements in stamina, control, and overall confidence. The streak counter became addictive in the best way.",
  },
]

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="bg-gradient-to-b from-white to-[--color-bg] py-20 sm:py-28 dark:from-gray-950 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[--color-text] sm:text-4xl lg:text-5xl dark:text-white">
            Real results from real men
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
            See how Defy is helping men reclaim their performance and confidence every day
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon
            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                className={clsx(
                  'group relative rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl',
                  testimonial.borderColor,
                  testimonial.bgColor,
                  isExpanded && ['ring-2', 'shadow-2xl', 'ring-[--color-accent-500]']
                )}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`rounded-lg p-2 ${testimonial.bgColor} border ${testimonial.borderColor}`}
                  >
                    <Icon className={`h-5 w-5 ${testimonial.iconColor}`} />
                  </div>
                  <span
                    className={`text-sm font-semibold ${testimonial.iconColor} tracking-wide uppercase`}
                  >
                    {testimonial.category}
                  </span>
                </div>

                <blockquote className="mb-4">
                  <p className="leading-relaxed text-gray-700 italic dark:text-gray-200">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {isExpanded && (
                  <div className="animate-fade-in mb-4 rounded-lg border border-gray-200 bg-white/50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {testimonial.fullStory}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div>
                    <p className="font-semibold text-[--color-text] dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[--color-accent-600] transition-all duration-200 hover:border-[--color-accent-300] hover:bg-[--color-surface] dark:border-gray-700 dark:bg-gray-800 dark:text-[--color-accent-400] dark:hover:border-[--color-accent-700] dark:hover:bg-gray-700"
                >
                  {isExpanded ? 'Show less' : 'Read full story'}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
