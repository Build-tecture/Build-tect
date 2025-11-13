import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail } from 'lucide-react'
import NavigationLink from '../ui/NavigationLink'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Materials', href: '/materials' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[110px] py-3">
          {/* Logo - Positioned to the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="/buildtecture logo (2).png" 
                alt="Buildtecture Logo" 
                className="h-16 w-auto sm:h-20 sm:w-auto md:h-24 md:w-auto lg:h-28 lg:w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10 flex-grow justify-center">
            {navigation.map((item) => (
              <NavigationLink
                key={item.name}
                to={item.href}
                className="text-sm font-medium px-2 py-1"
              >
                {item.name}
              </NavigationLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
            {/* Email Only */}
            <a href="mailto:info@buildtecture.in" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-brand-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@buildtecture.in</span>
            </a>

            <NavigationLink 
              to="/contact" 
              className="btn-primary ml-2"
              loadingMessage="Preparing quote form..."
            >
              Get Quote
            </NavigationLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-brand-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-6 space-y-6">
                {navigation.map((item) => (
                  <NavigationLink
                    key={item.name}
                    to={item.href}
                    className="block text-base font-medium py-2"
                  >
                    {item.name}
                  </NavigationLink>
                ))}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <a href="mailto:info@buildtecture.in" className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>info@buildtecture.in</span>
                  </a>
                  <NavigationLink 
                    to="/contact" 
                    className="btn-primary inline-block mt-4"
                    loadingMessage="Preparing quote form..."
                  >
                    Get Quote
                  </NavigationLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}