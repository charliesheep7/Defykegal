import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'

export const metadata = genPageMetadata({
  title: 'Terms of Service',
  description:
    'Read the rules, acceptable-use guidelines, and legal terms that govern your use of the Defy app.',
})

export default function TermsPage() {
  return (
    <SectionContainer>
      <div className="prose dark:prose-invert max-w-none py-8">
        <h1>Terms of Service</h1>
        <p>
          <strong>Last updated: October 25, 2025</strong>
        </p>
        <p>
          Welcome to Defy. Please read these Terms of Service (&quot;Terms&quot;) carefully. By
          accessing or using the Defy mobile application or related services (&quot;Services&quot;),
          you agree to be bound by these Terms. If you do not agree, please stop using the Services.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must be at least 13 years old to use the Services. You are responsible for all
          activity that occurs under your account.
        </p>

        <h2>2. Your Account</h2>
        <p>
          You may sign in using email, Apple, or Google. You are responsible for keeping your login
          credentials confidential. Notify us immediately at support@defykegal.com if you believe
          your account has been compromised.
        </p>
        <p>We may suspend or terminate your account if you violate these Terms.</p>

        <h2>3. License to Use the Services</h2>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable, revocable license to
          use the Services for personal, non-commercial purposes. All rights not expressly granted
          are reserved by Defy.
        </p>
        <p>You may not copy, modify, distribute, sell, or lease any part of the Services.</p>

        <h2>4. Prohibited Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services for any unlawful purpose</li>
          <li>Interfere with or disrupt system integrity or security</li>
          <li>Attempt to reverse-engineer or extract source code</li>
          <li>Upload or transmit harmful, defamatory, or threatening content</li>
        </ul>
        <p>
          We may restrict or remove content or accounts to protect users and maintain these
          standards.
        </p>

        <h2>5. Health Disclaimer</h2>
        <p>
          Defy provides guided kegel exercise programs for informational and fitness purposes only.
          Nothing in the Services constitutes medical advice. Consult a qualified healthcare
          professional before starting any exercise program, especially if you have a medical
          condition.
        </p>
        <p>You use the Services at your own risk.</p>

        <h2>6. Subscriptions &amp; Payments</h2>
        <p>
          Some features require a paid subscription. Payments, billing, and refunds are handled by
          the Apple App Store or Google Play.
        </p>
        <p>Defy does not collect or store your full payment card information.</p>
        <p>You may manage your subscription through your platform account settings.</p>

        <h2>7. Intellectual Property</h2>
        <p>
          Defy, including its name, logo, design, software, and content, is owned by Defy or its
          licensors and protected under intellectual property laws.
        </p>
        <p>
          If you believe content infringes your rights, contact support@defykegal.com and we will
          review promptly.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          The Services are provided &quot;as is&quot; and &quot;as available&quot; without any
          warranties, express or implied, including merchantability, fitness for a particular
          purpose, or non-infringement.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law:</p>
        <ul>
          <li>
            Defy is not liable for indirect, incidental, special, consequential, or punitive damages
          </li>
          <li>Defy is not liable for loss of data, profits, or reputational harm</li>
          <li>
            Our total liability for any claim will not exceed the greater of $50 USD or the amount
            you paid to Defy in the 12 months before the event
          </li>
        </ul>

        <h2>10. Indemnification</h2>
        <p>
          You agree to defend and indemnify Defy and its team from any claims or damages arising
          from your use of the Services or violation of these Terms.
        </p>

        <h2>11. Termination</h2>
        <p>You may delete your account at any time from within the app.</p>
        <p>We may suspend or terminate access for violations or legal reasons.</p>
        <p>
          Sections such as Disclaimer, Limitations, and Intellectual Property survive termination.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Updates take effect upon posting. Continued
          use of the Services means you agree to the revised Terms.
        </p>

        <h2>13. Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between you and Defy regarding the Services.
          If any part is unenforceable, the remaining parts remain in effect.
        </p>

        <h2>14. Contact Us</h2>
        <p>If you have questions, concerns, or complaints, contact:</p>
        <p>support@defykegal.com</p>
      </div>
    </SectionContainer>
  )
}
