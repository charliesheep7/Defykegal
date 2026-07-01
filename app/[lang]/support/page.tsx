import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'

export const metadata = genPageMetadata({
  title: 'Support',
  description: 'Need help with Defy? Reach out to our support team at support@defykegel.com.',
})

export default function SupportPage() {
  return (
    <SectionContainer>
      <div className="prose dark:prose-invert max-w-none py-8">
        <h1>Support</h1>
        <p>
          If you need help with your account, billing, or any issue in the app, reach out to us by
          email and we&apos;ll get back to you as soon as possible.
        </p>

        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:support@defykegel.com">support@defykegel.com</a>
        </p>

        <h2>What to Include</h2>
        <ul>
          <li>The email address linked to your account</li>
          <li>A brief description of the issue</li>
          <li>Screenshots if applicable</li>
          <li>Your device type and app version (if available)</li>
        </ul>
      </div>
    </SectionContainer>
  )
}
