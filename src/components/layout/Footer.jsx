import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Basic Package', href: '/packages/basic' },
    { name: 'Classic Package', href: '/packages/classic' },
    { name: 'Premium Package', href: '/packages/premium' },
  ],
  services: [
    { name: 'Architectural Design', href: '/services/architectural-design' },
    { name: 'Construction', href: '/services/construction' },
    { name: 'Renovation', href: '/services/renovation' },
    { name: 'Materials Supply', href: '/services/materials-supply' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const social = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
]

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    e.currentTarget.reset()
  }

  return (
    <footer style={{ backgroundColor: '#111111' }} className="text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">Buildtecture</span>
            </Link>
            <p className="mb-6 max-w-md" style={{ color: '#F5F0E8' }}>
              Engineering beautiful spaces through innovative architectural design, 
              quality construction, and premium materials. Built to last, delivered on time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span style={{ color: '#F5F0E8' }}>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+919606737378" className="transition-colors hover:text-white" style={{ color: '#F5F0E8' }}>
                  +91 96067 37378
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@buildtecture.in" className="transition-colors hover:text-white" style={{ color: '#F5F0E8' }}>
                  info@buildtecture.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:text-white"
                  style={{ color: '#F5F0E8' }}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#F5F0E8' }}>Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-white"
                    style={{ color: '#F5F0E8' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#F5F0E8' }}>Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-white"
                    style={{ color: '#F5F0E8' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#F5F0E8' }}>Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-white"
                    style={{ color: '#F5F0E8' }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3" style={{ color: '#F5F0E8' }}>Newsletter</h4>
              {subscribed ? (
                <p className="text-sm" role="status" style={{ color: '#D9B08C' }}>
                  Thanks — we&apos;ll keep you posted.
                </p>
              ) : (
                <form className="flex flex-col space-y-2" onSubmit={handleSubscribe}>
                  <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="footer-newsletter-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-accent hover:bg-[#9C6D46] text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm" style={{ color: '#F5F0E8' }}>
            © {new Date().getFullYear()} Buildtecture. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm transition-colors hover:text-white" style={{ color: '#F5F0E8' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm transition-colors hover:text-white" style={{ color: '#F5F0E8' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}