import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg text-cream py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="font-body text-sm text-muted hover:text-cream transition-colors duration-200 mb-10 inline-block"
        >
          ← Back
        </Link>

        <h1 className="font-display text-4xl text-cream mb-2">Privacy Policy</h1>
        <p className="font-body text-xs text-muted mb-10">Last updated: April 17, 2026</p>

        <div className="font-body text-sm text-cream-muted leading-relaxed space-y-8">
          <p>
            Kyue ("we", "us") is committed to protecting your privacy. This policy explains what we
            collect and how we use it.
          </p>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">What we collect</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Email address: collected when you join the waitlist or sign up for beta updates.</li>
              <li>
                Wearable &amp; health data: processed entirely on your device. We do not transmit or
                store your health data on our servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">How we use your data</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To send your TestFlight invite and beta-related communications.</li>
              <li>We do not sell, rent, or share your data with third parties.</li>
              <li>We do not use your data for advertising.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Data retention</h2>
            <p>
              We retain your email until you request deletion. To delete your data, email{' '}
              <a
                href="mailto:hello@kyueapp.com"
                className="text-coral hover:underline"
              >
                hello@kyueapp.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Your rights</h2>
            <p>
              If you are in the EU (GDPR) or California (CCPA), you have the right to access,
              correct, or delete your personal data. Contact us at{' '}
              <a
                href="mailto:hello@kyueapp.com"
                className="text-coral hover:underline"
              >
                hello@kyueapp.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Children</h2>
            <p>Kyue is not intended for users under 18.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Changes</h2>
            <p>
              We may update this policy. Material changes will be communicated via email to waitlist
              members.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Contact</h2>
            <a
              href="mailto:hello@kyueapp.com"
              className="text-coral hover:underline"
            >
              hello@kyueapp.com
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
