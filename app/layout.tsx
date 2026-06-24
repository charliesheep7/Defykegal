import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Geist_Mono, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const geist_mono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-geist-mono',
})

const noto_sans_arabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-arabic',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geist_mono.variable} ${noto_sans_arabic.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`${basePath}/static/favicons/android-chrome-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={`${basePath}/static/favicons/android-chrome-512x512.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#ffffff"
      />
      <meta name="msapplication-TileColor" content="#0a0a0a" />
      <meta name="theme-color" content="#0a0a0a" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Defy',
            url: 'https://defykegal.com',
            logo: 'https://defykegal.com/static/favicons/android-chrome-512x512.png',
            slogan: 'Kegel Exercises for Men — Stronger. Longer. Better.',
            description:
              'Defy is the #1 kegel exercise app for men. Guided daily workouts to strengthen your pelvic floor, improve erections, and beat ED.',
          }),
        }}
      />
      <body className="bg-[#0a0a0a] font-sans text-[#f5f5f5] antialiased ltr:pl-[calc(100vw-100%)]">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
            <Header />
            <main className="mb-auto">{children}</main>
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
