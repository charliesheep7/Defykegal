import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import CTA from '@/components/landing/CTA'
import FAQ from '@/components/landing/FAQ'
import Guides from '@/components/landing/Guides'
import siteMetadata from '@/data/siteMetadata'
import { getDictionary } from 'lib/dictionaries'
import { languageAlternates, prefixedLocales, type PrefixedLocale } from 'lib/i18n'
import { localizedMetadata } from './metadata'

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }))
}

type Props = { params: Promise<{ lang: PrefixedLocale }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  const dict = getDictionary(lang)
  return localizedMetadata({
    lang,
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    path: `/${lang}`,
    languages: languageAlternates('/'),
  })
}

export default async function LocaleHome({ params }: Props) {
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${siteMetadata.siteUrl}/${lang}#webpage`,
            url: `${siteMetadata.siteUrl}/${lang}`,
            name: dict.meta.homeTitle,
            description: dict.meta.homeDescription,
            inLanguage: lang,
            isPartOf: { '@id': `${siteMetadata.siteUrl}/#website` },
            about: { '@id': `${siteMetadata.siteUrl}/#app` },
          }),
        }}
      />
      <Hero dict={dict.hero} />
      <Features dict={dict.features} />
      <Guides dict={dict.guides} showEnglishNote />
      <CTA dict={dict.cta} />
      <FAQ dict={dict.faq} />
    </div>
  )
}
