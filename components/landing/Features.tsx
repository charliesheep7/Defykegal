'use client'

import { useState } from 'react'
import { Activity, TrendingUp, BookOpen, X, ArrowRight } from 'lucide-react'

const features = [
  {
    id: 'guided-workouts',
    icon: Activity,
    title: 'Guided Kegel Workouts',
    description:
      'Step-by-step pelvic floor sessions with rep timers, rest periods, and progressive intensity — designed specifically for the male anatomy.',
    fullDescription:
      "Defy takes the guesswork out of kegel training. Each session is precisely timed — you'll contract, hold, and release to an audio cue so you always hit the right muscles. Workouts scale in difficulty week by week, building real pelvic floor strength over time. Whether you have 3 minutes or 15, there's a session that fits your schedule.",
  },
  {
    id: 'progress-tracking',
    icon: TrendingUp,
    title: 'Progress You Can See',
    description:
      'Track sessions, streaks, and milestones as your pelvic floor strengthens. Visible progress keeps you consistent when motivation dips.',
    fullDescription:
      "Most men quit kegel training because they can't see results. Defy fixes this by tracking every session, charting your total reps, and celebrating streak milestones. Week-over-week progress graphs show you that the work is paying off — even before you feel it in the bedroom.",
  },
  {
    id: 'expert-education',
    icon: BookOpen,
    title: 'Science-Backed Education',
    description:
      'Learn exactly how kegel exercises target ED, premature ejaculation, and urinary control — explained in plain English, backed by urological research.',
    fullDescription:
      "Understanding why kegels work makes you stick with them. Defy's built-in library explains the pelvic floor anatomy, how it affects erection quality and stamina, what research says about timelines, and which exercises target which outcomes.",
  },
]

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const openModal = (featureId: string) => {
    setSelectedFeature(featureId)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedFeature(null)
    document.body.style.overflow = 'unset'
  }

  const activeFeature = features.find((f) => f.id === selectedFeature)

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  return (
    <>
      <section id="features" className="bg-[#0a0a0a] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Section header */}
          <div className="mb-16">
            <span className="eyebrow">Features</span>
            <h2 className="text-display mt-4 font-bold text-white">
              Everything you need
              <br />
              <span className="text-white/40">to train smarter.</span>
            </h2>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 gap-px bg-white/8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.id}
                  className="group flex flex-col bg-[#0a0a0a] p-10 transition-colors duration-300 hover:bg-[#111111]"
                >
                  <div className="mb-8">
                    <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                      <Icon className="h-6 w-6 text-white/70" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-3 text-lg font-bold tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mb-8 flex-1 text-sm leading-relaxed text-white/50">
                      {feature.description}
                    </p>

                    <button
                      onClick={() => openModal(feature.id)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 transition-colors duration-200 hover:text-white"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedFeature && activeFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#111111] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 rounded-lg p-2 text-white/30 transition-colors hover:bg-white/5 hover:text-white/60"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                <activeFeature.icon className="h-6 w-6 text-white/70" strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="mb-4 text-xl font-bold tracking-tight text-white">
              {activeFeature.title}
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-white/50">
              {activeFeature.fullDescription}
            </p>

            <button
              onClick={closeModal}
              className="rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-opacity duration-200 hover:opacity-90"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  )
}
