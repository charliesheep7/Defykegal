'use client'

import { useState } from 'react'
import { Activity, Sparkles, BookOpen, X, ArrowRight } from 'lucide-react'
import type { Dictionary } from '@/types/dictionary'
import en from '../../dictionaries/en.json'

const featureIcons = [
  { id: 'guided-workouts', key: 'guidedWorkouts', icon: Activity },
  { id: 'daily-habits', key: 'dailyHabits', icon: Sparkles },
  { id: 'expert-education', key: 'expertEducation', icon: BookOpen },
] as const

export default function Features({ dict = en.features }: { dict?: Dictionary['features'] }) {
  const features = featureIcons.map((f) => ({ ...f, ...dict.items[f.key] }))
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
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="text-display mt-4 font-bold text-white">
              {dict.headingLine1}
              <br />
              <span className="text-white/40">{dict.headingLine2}</span>
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
                      {dict.learnMore}
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
              aria-label={dict.closeModal}
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
              {dict.gotIt}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
