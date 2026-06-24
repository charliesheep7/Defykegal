import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
  description:
    'Learn what personal data Defy collects, how it is used, and the safeguards that protect it.',
})

export default function PrivacyPage() {
  return (
    <SectionContainer>
      <div className="prose dark:prose-invert max-w-none py-8">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated: October 25, 2025</strong>
        </p>
        <p>
          Defy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and protect your information
          when you use our mobile application or related services (&quot;Services&quot;).
        </p>
        <p>
          <strong>If you do not agree to this Privacy Policy, please do not use Defy.</strong>
        </p>

        <h2>Information We Collect</h2>

        <h3>1. Information You Provide</h3>
        <ul>
          <li>Email address for account creation and authentication</li>
          <li>Display name</li>
        </ul>
        <p>We do not collect profile pictures or user-uploaded images.</p>

        <h3>2. Workout &amp; Usage Data</h3>
        <ul>
          <li>Kegel exercise session records (sets, reps, duration)</li>
          <li>App usage patterns to improve the experience</li>
        </ul>
        <p>Your workout history is stored privately and is not shared with third parties.</p>

        <h3>3. Device Information</h3>
        <ul>
          <li>
            Device model, OS version, and related technical information (for security and core
            functionality)
          </li>
        </ul>
        <p>
          We do not collect precise location data, advertising identifiers, or behavioral analytics.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>Provide, improve, and personalize the Services</li>
          <li>Authenticate users and secure accounts</li>
          <li>Maintain app functionality and prevent abuse</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell your data. We do not use your content to train machine-learning models.</p>

        <h2>Data Retention</h2>
        <ul>
          <li>Account data is retained until you delete your account</li>
          <li>Workout history is retained until you delete it manually or close your account</li>
          <li>Technical security data may be retained briefly to maintain service integrity</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>We may share data only with:</p>
        <ul>
          <li>
            Service providers that support app functionality (e.g., Supabase for database hosting)
          </li>
          <li>Authorities if required for legal compliance or safety</li>
        </ul>
        <p>We never share your personal data for advertising purposes.</p>

        <h2>Security</h2>
        <p>We use industry-standard safeguards, including:</p>
        <ul>
          <li>Encryption in transit (HTTPS)</li>
          <li>Encryption at rest via our service providers</li>
        </ul>
        <p>No system can be completely secure, though we work hard to protect your data.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>Defy is intended for users 13 years and older.</p>
        <p>
          We do not knowingly collect personal data from children under 13. If we discover such
          data, we will delete it promptly.
        </p>

        <h2>Your Rights</h2>
        <ul>
          <li>Delete your account (and all associated data) via the in-app delete feature</li>
          <li>Request assistance by contacting us if needed</li>
        </ul>
        <p>
          <strong>Email:</strong> support@defykegal.com
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy as needed. Continued use of Defy means you agree to the
          updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions, please contact:</p>
        <p>support@defykegal.com</p>
      </div>
    </SectionContainer>
  )
}
