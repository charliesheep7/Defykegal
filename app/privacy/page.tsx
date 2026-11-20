import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import PrivacyContent from '@/components/legal/PrivacyContent'

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
  description:
    'Understand what personal data Defy collects, how it is used, and the safeguards that protect it.',
})

export default function PrivacyPage() {
  return (
    <SectionContainer>
      <div className="prose dark:prose-invert max-w-none py-8">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated: [Jan 29, 2026]</strong>
        </p>
        <PrivacyContent />
      </div>
    </SectionContainer>
  )
}
