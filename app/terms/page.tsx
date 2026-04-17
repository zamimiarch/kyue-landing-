import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg text-cream py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="font-body text-sm text-muted hover:text-cream transition-colors duration-200 mb-10 inline-block"
        >
          ← Back
        </Link>

        <h1 className="font-display text-4xl text-cream mb-2">Terms of Service</h1>
        <p className="font-body text-xs text-muted mb-10">Last updated: April 17, 2026</p>

        <div className="font-body text-sm text-cream-muted leading-relaxed space-y-8">
          <p>By using Kyue or joining the beta waitlist, you agree to these terms.</p>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Beta software</h2>
            <p>
              Kyue is currently in beta. The app is provided "as is" without warranty of any kind.
              Features may change, break, or be removed during the beta period.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Not medical advice</h2>
            <p>
              Kyue provides wellness information based on cycle phase data and wearable metrics. It
              is not a medical device and does not provide medical advice, diagnosis, or treatment.
              Always consult a qualified healthcare provider for medical decisions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Eligibility</h2>
            <p>You must be 18 or older to use Kyue.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Acceptable use</h2>
            <p>
              You agree not to misuse the service, attempt to reverse-engineer the app, or use it
              for any unlawful purpose.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Intellectual property</h2>
            <p>
              All content, branding, and code in Kyue is owned by Kyue. You may not reproduce or
              distribute it without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Kyue is not liable for any indirect,
              incidental, or consequential damages arising from your use of the app.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-cream mb-3">Changes</h2>
            <p>
              We may update these terms. Continued use of the app constitutes acceptance of the
              updated terms.
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
