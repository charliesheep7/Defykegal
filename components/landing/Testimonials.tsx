'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const testimonials = [
  {
    id: 0,
    category: 'Bedroom Confidence',
    name: 'Marcus T.',
    age: '38',
    quote:
      'After 8 weeks with Defy, the difference in the bedroom is real. I had no idea kegels could do this much. My confidence is back.',
    fullStory:
      'I was skeptical — kegels always felt like something for women after childbirth. Then I read some research on pubmed about pelvic floor training and erectile function and decided to try Defy. The guided sessions are short and the app keeps me honest with the streak tracker. Eight weeks in, the improvement in firmness and control was undeniable. I wish someone had told me about this years ago.',
  },
  {
    id: 1,
    category: 'Consistent Progress',
    name: 'James R.',
    age: '52',
    quote:
      'Doctor suggested pelvic floor training after my prostatectomy. Defy made it actually doable. 30-day streak and the improvement is undeniable.',
    fullStory:
      "After my surgery, my urologist recommended pelvic floor exercises but gave me almost no guidance on how to actually do them. I tried a few YouTube videos and gave up. Defy gave me a proper progressive program with audio cues telling me exactly when to squeeze and release. The progress charts showing my weekly reps helped me see I was actually improving even when it didn't feel like it yet.",
  },
  {
    id: 2,
    category: 'Long-Term Results',
    name: 'David K.',
    age: '44',
    quote:
      "Finally an app that explains WHY, not just how. 4-month streak and I'm a different person. The education inside Defy is what made me commit.",
    fullStory:
      "I've tried a dozen health apps and quit them all within two weeks. What kept me with Defy was the education layer — understanding that I was literally rebuilding a muscle I'd neglected my entire life made the daily sessions feel purposeful instead of random. Four months later I've noticed improvements in stamina, control, and overall confidence.",
  },
]

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16">
          <span className="eyebrow">Testimonials</span>
          <h2 className="text-display mt-4 font-bold text-white">
            Real results
            <br />
            <span className="text-white/40">from real men.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-px bg-white/8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const isExpanded = expandedIndex === testimonial.id

            return (
              <div
                key={testimonial.id}
                className="flex flex-col bg-[#0a0a0a] p-10 transition-colors duration-300 hover:bg-[#111111]"
              >
                {/* Category label */}
                <div className="mb-6">
                  <span className="eyebrow">{testimonial.category}</span>
                </div>

                {/* Quote */}
                <blockquote className="mb-6 flex-1">
                  <p className="text-base leading-relaxed text-white/70 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Expanded story */}
                {isExpanded && (
                  <div className="animate-fade-in mb-6 border-t border-white/8 pt-6">
                    <p className="text-sm leading-relaxed text-white/50">{testimonial.fullStory}</p>
                  </div>
                )}

                {/* Author + expand */}
                <div className="mt-auto border-t border-white/8 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold tracking-tight text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/30">Age {testimonial.age}</p>
                    </div>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : testimonial.id)}
                      className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-white/30 uppercase transition-colors duration-200 hover:text-white/60"
                    >
                      {isExpanded ? 'Less' : 'Full story'}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
