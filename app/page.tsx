import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import CTA from '@/components/landing/CTA'
import MediaTicker from '@/components/landing/MediaTicker'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Defy — Kegel Exercises for Men',
  description:
    'Guided kegel workouts clinically proven to strengthen erections, beat ED, and improve sexual performance. Download Defy free on iOS.',
})

export default async function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <CTA />
      <MediaTicker />
      <Testimonials />
      <FAQ />
    </div>
  )
}
