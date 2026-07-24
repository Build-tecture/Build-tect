import SEO from '../components/ui/SEO'

export default function Terms() {
  const updated = 'July 2026'
  return (
    <div className="pt-20">
      <SEO
        path="/terms"
        title="Terms of Service"
        description="The terms and conditions that govern your use of the Buildtecture website and services."
      />
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">Terms of Service</h1>
          <p className="text-muted mb-10">Last updated: {updated}</p>

          <div className="space-y-8 text-brand-800 leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Buildtecture
              website and services. By using our website, you agree to these Terms. If you do not
              agree, please do not use the site.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Use of Our Website</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to use the site in
                any way that could damage, disable or impair it, or interfere with any other
                party's use of it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, images, designs, logos and
                graphics — is the property of Buildtecture or its licensors and is protected by
                applicable intellectual property laws. You may not reproduce or reuse it without
                our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Quotes and Services</h2>
              <p>
                Any quotes, estimates or project timelines provided through this website are
                indicative and subject to a formal agreement. The scope, pricing and terms of any
                project will be confirmed in a separate written contract.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Limitation of Liability</h2>
              <p>
                Our website and its content are provided on an "as is" basis. To the fullest extent
                permitted by law, Buildtecture is not liable for any indirect or consequential loss
                arising from your use of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Changes take effect once posted on this
                page, and your continued use of the website constitutes acceptance of the updated
                Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-brand-900 mb-3">Contact Us</h2>
              <p>
                Questions about these Terms can be sent to{' '}
                <a href="mailto:info@buildtecture.in" className="text-accent hover:underline">
                  info@buildtecture.in
                </a>{' '}
                or{' '}
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
