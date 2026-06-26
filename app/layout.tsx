import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Geist_Mono, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import Link from '@/components/Link'
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
            <footer className="mt-16 border-t border-white/8">
              <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Defy</p>
                    <p className="mt-1 max-w-xs text-xs text-gray-500">
                      Evidence-based kegel training for men. Health content medically reviewed by
                      board-certified urologists.
                    </p>
                  </div>
                  <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
                    <Link href="/about" className="transition-colors hover:text-gray-300">
                      About
                    </Link>
                    <Link href="/blog" className="transition-colors hover:text-gray-300">
                      Blog
                    </Link>
                    <Link
                      href="/editorial-policy"
                      className="transition-colors hover:text-gray-300"
                    >
                      Editorial Policy
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-gray-300">
                      Contact
                    </Link>
                    <Link href="/privacy" className="transition-colors hover:text-gray-300">
                      Privacy
                    </Link>
                    <Link href="/terms" className="transition-colors hover:text-gray-300">
                      Terms
                    </Link>
                  </nav>
                </div>
                <p className="mt-8 text-xs text-gray-600">
                  © {new Date().getFullYear()} Defy. All content is for informational purposes only
                  and does not constitute medical advice.
                </p>
              </div>
            </footer>
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
