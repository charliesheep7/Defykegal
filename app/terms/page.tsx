import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import TermsContent from '@/components/legal/TermsContent'

export const metadata = genPageMetadata({
  title: 'Terms of Service',
  description:
    'Read the rules, acceptable use guidelines, and legal terms that govern your use of the Defy app.',
})

export default function TermsPage() {
  return (
    <SectionContainer>
      <div className="prose dark:prose-invert max-w-none py-8">
        <h1>Terms of Service</h1>
        <p>
          <strong>Last updated: [Jan 29, 2026]</strong>
        </p>
        <TermsContent />
      </div>
    </SectionContainer>
  )
}
