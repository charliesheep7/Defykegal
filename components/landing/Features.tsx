'use client'

import { useState } from 'react'
import { Activity, TrendingUp, BookOpen, X } from 'lucide-react'

const features = [
  {
    id: 'guided-workouts',
    icon: Activity,
    title: 'Guided Kegel Workouts',
    description:
      'Step-by-step pelvic floor sessions with rep timers, rest periods, and progressive intensity — designed specifically for the male anatomy.',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    fullDescription:
      "Defy takes the guesswork out of kegel training. Each session is precisely timed — you'll contract, hold, and release to an audio cue so you always hit the right muscles. Workouts scale in difficulty week by week, building real pelvic floor strength over time. Whether you have 3 minutes or 15, there's a session that fits your schedule.",
  },
  {
    id: 'progress-tracking',
    icon: TrendingUp,
    title: 'Progress You Can See',
    description:
      'Track sessions, streaks, and milestones as your pelvic floor strengthens. Visible progress keeps you consistent when motivation dips.',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    fullDescription:
      "Most men quit kegel training because they can't see results. Defy fixes this by tracking every session, charting your total reps, and celebrating streak milestones. Week-over-week progress graphs show you that the work is paying off — even before you feel it in the bedroom. Consistency builds results, and results build consistency.",
  },
  {
    id: 'expert-education',
    icon: BookOpen,
    title: 'Science-Backed Education',
    description:
      "Learn exactly how kegel exercises target ED, premature ejaculation, and urinary control — explained in plain English, backed by urological research.",
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    fullDescription:
      "Understanding why kegels work makes you stick with them. Defy's built-in library explains the pelvic floor anatomy, how it affects erection quality and stamina, what research says about timelines, and which exercises target which outcomes. You're not just following instructions blindly — you're training with a reason.",
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
      <section id="features" className="bg-white py-20 sm:py-28 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Everything you need to train smarter
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
              Guided workouts, real progress tracking, and the science behind every rep
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.id}
                  className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50"
                >
                  <div className="mb-6 flex items-start">
                    <div
                      className={`rounded-xl p-3 ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mb-6 flex-1 leading-relaxed text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    <button
                      onClick={() => openModal(feature.id)}
                      className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent-500)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-600)] hover:shadow-lg"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {selectedFeature && activeFeature && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl dark:border-gray-800 dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-6 flex items-center gap-4">
              <div className={`rounded-xl p-3 ${activeFeature.iconBg}`}>
                <activeFeature.icon className={`h-8 w-8 ${activeFeature.iconColor}`} />
              </div>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {activeFeature.title}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
              {activeFeature.fullDescription}
            </p>

            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 rounded-lg bg-[var(--color-accent-500)] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--color-accent-600)] hover:shadow-lg"
              >
                Got it
              </button>
              <button
                onClick={closeModal}
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
