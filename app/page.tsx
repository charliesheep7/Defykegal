import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import CTA from '@/components/landing/CTA'
import MediaTicker from '@/components/landing/MediaTicker'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Defy — Kegel Exercises for Men',
  description:
    'Build a pelvic floor routine with Defy, the guided Kegel exercise app for men. Explore short daily workouts and download the app on iOS.',
})

export default async function Page() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': `${siteMetadata.siteUrl}/#website`,
                url: siteMetadata.siteUrl,
                name: 'Defy',
                alternateName: 'Defy Kegel',
                publisher: { '@id': `${siteMetadata.siteUrl}/#organization` },
                about: { '@id': `${siteMetadata.siteUrl}/#app` },
              },
              {
                '@type': 'MobileApplication',
                '@id': `${siteMetadata.siteUrl}/#app`,
                name: 'Defy: Kegel for Men',
                url: siteMetadata.appStoreUrl,
                installUrl: siteMetadata.appStoreUrl,
                applicationCategory: 'HealthApplication',
                operatingSystem: 'iOS',
                description: siteMetadata.description,
                publisher: { '@id': `${siteMetadata.siteUrl}/#organization` },
              },
            ],
          }),
        }}
      />
      <Hero />
      <Features />
      <CTA />
      <MediaTicker />
      <Testimonials />
      <FAQ />
    </div>
  )
}
