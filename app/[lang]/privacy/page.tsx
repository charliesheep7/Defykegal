import SectionContainer from '@/components/SectionContainer'
import PrivacyContent, { PRIVACY_LAST_UPDATED } from '@/components/legal/PrivacyContent'
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
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
    path: `/${lang}/privacy`,
    canonical: '/privacy',
  })
}

export default async function LocalizedPrivacyPage({ params }: Props) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const updated = new Intl.DateTimeFormat(lang, { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${PRIVACY_LAST_UPDATED}T00:00:00Z`)
  )

  return (
    <SectionContainer>
      <div className="prose dark:prose-invert max-w-none py-8">
        <h1>{dict.legal.privacyHeading}</h1>
        <p>
          <strong>
            {dict.legal.lastUpdated}: {updated}
          </strong>
        </p>
        <p>
          <em>{dict.legal.englishNote}</em>
        </p>
        <div lang="en">
          <PrivacyContent />
        </div>
      </div>
    </SectionContainer>
  )
}
