import SectionContainer from '@/components/SectionContainer'
import TermsContent, { TERMS_LAST_UPDATED } from '@/components/legal/TermsContent'
import { getDictionary } from 'lib/dictionaries'
import { prefixedLocales, type PrefixedLocale } from 'lib/i18n'
import { localizedMetadata } from '../metadata'

// Translated page chrome around the English legal text, which stays binding.

export function generateStaticParams() {
  return prefixedLocales.map((lang) => ({ lang }))
}

type Props = { params: Promise<{ lang: PrefixedLocale }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  const dict = getDictionary(lang)
  return localizedMetadata({
    lang,
    title: dict.meta.termsTitle,
    description: dict.meta.termsDescription,
    path: `/${lang}/terms`,
    canonical: '/terms',
  })
}

export default async function LocalizedTermsPage({ params }: Props) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const updated = new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${TERMS_LAST_UPDATED}T00:00:00Z`)
  )

  return (
    <SectionContainer>
      <div className="prose dark:prose-invert max-w-none py-8">
        <h1>{dict.legal.termsHeading}</h1>
        <p>
          <strong>
            {dict.legal.lastUpdated}: {updated}
          </strong>
        </p>
        <p>
          <em>{dict.legal.englishNote}</em>
        </p>
        <div lang="en">
          <TermsContent />
        </div>
      </div>
    </SectionContainer>
  )
}
