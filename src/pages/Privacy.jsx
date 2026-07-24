import SEO from '../components/ui/SEO'

export default function Privacy() {
  const updated = 'July 2026'
  return (
    <div className="pt-20">
      <SEO
        path="/privacy"
        title="Privacy Policy"
        description="How Buildtecture collects, uses and protects your personal information when you use our website and services."
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">Privacy Policy</h1>
          <p className="text-muted mb-10">Last updated: {updated}</p>

          <div className="space-y-8 text-brand-800 leading-relaxed">
            <p>
              Buildtecture ("we", "us" or "our") respects your privacy and is committed to
              protecting the personal information you share with us. This Privacy Policy explains
              what information we collect, how we use it, and the choices you have.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Information We Collect</h2>
              <p>
                We collect information you provide directly to us — such as your name, email
                address, phone number and project details — when you submit an enquiry, request a
                quote, subscribe to our newsletter or contact us. We may also collect basic usage
                and device information automatically through cookies and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">How We Use Your Information</h2>
              <p>
                We use your information to respond to your enquiries, provide and improve our
                services, send you updates you have requested, and comply with legal obligations.
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Sharing of Information</h2>
              <p>
                We may share information with trusted service providers who help us operate our
                website and deliver our services, and where required by law. These parties are
                obligated to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Data Security</h2>
              <p>
                We take reasonable technical and organisational measures to protect your personal
                information against unauthorised access, loss or misuse. However, no method of
                transmission over the internet is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information
                at any time by contacting us. You can also unsubscribe from marketing emails using
                the link provided in those emails.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:info@buildtecture.in" className="text-accent hover:underline">
                  info@buildtecture.in
                </a>{' '}
                or call{' '}
                <a href="tel:+919606737378" className="text-accent hover:underline">
                  +91 96067 37378
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
