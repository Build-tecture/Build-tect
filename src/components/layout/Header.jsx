import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail, ChevronDown } from 'lucide-react'
import NavigationLink from '../ui/NavigationLink'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { 
    name: 'Packages', 
    href: '#',
    dropdown: [
      { name: 'Basic Package', href: '/packages/basic' },
      { name: 'Classic Package', href: '/packages/classic' },
      { name: 'Premium Package', href: '/packages/premium' }
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [location])

  return (
    <header className="fixed w-full z-50 navbar-ref">
      <nav className="container-custom h-full" aria-label="Main navigation">
        <div className="flex items-center justify-between h-full gap-8">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <div className="text-2xl font-bold" style={{ color: '#F5F0E8' }}>
                Buildtecture
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center (Auto flex to push items to edges) */}
          <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
            {navigation.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-sm font-medium transition-colors" style={{ color: '#F5F0E8' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D9B08C'}
                    onMouseLeave={e => e.currentTarget.style.color = '#F5F0E8'}
                  >
                    {item.name}
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-secondary hover:text-accent transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavigationLink
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-accent"
                  style={{ color: '#F5F0E8' }}
                >
                  {item.name}
                </NavigationLink>
              )
            ))}
          </div>

          {/* CTA Button - Far Right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link 
              to="/contact" 
              className="bg-accent text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#9C6D46] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:text-accent transition-colors"
              style={{ color: '#F5F0E8' }}
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
              className="lg:hidden border-t border-white/10"
              style={{ backgroundColor: '#111111' }}
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <NavigationLink
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 hover:text-accent transition-colors"
                    style={{ color: '#F5F0E8' }}
                  >
                    {item.name}
                  </NavigationLink>
                ))}
                <Link 
                  to="/contact" 
                  className="block mx-4 mt-4 bg-accent text-white px-6 py-2 rounded-md text-center"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}