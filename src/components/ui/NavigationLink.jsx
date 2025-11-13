import { useLocation } from 'react-router-dom'
import { useNavigateWithLoading } from '../../hooks/useNavigateWithLoading'

export default function NavigationLink({ 
  to, 
  children, 
  className = '', 
  loadingMessage,
  onClick,
  ...props 
}) {
  const location = useLocation()
  const navigateWithLoading = useNavigateWithLoading()
  
  const isActive = location.pathname === to
  
  // Check if this is a button (has btn-primary or btn-secondary class)
  const isButton = className.includes('btn-primary') || className.includes('btn-secondary')
  
  const handleClick = (e) => {
    e.preventDefault()
    
    // Don't navigate if already on the same page
    if (isActive) return
    
    // Call custom onClick if provided
    if (onClick) onClick(e)
    
    // Navigate with loading animation
    const messages = {
      '/': 'Loading home...',
      '/about': 'Loading about us...',
      '/services': 'Loading services...',
      '/projects': 'Loading projects...',
      '/materials': 'Loading materials...',
      '/blog': 'Loading insights...',
      '/contact': 'Loading contact...'
    }
    
    const message = loadingMessage || messages[to] || 'Loading page...'
    navigateWithLoading(to, { message, delay: 1200 })
  }
  
  // Don't apply active styles to buttons
  const activeClass = !isButton && isActive ? 'text-brand-600' : ''
  const defaultClass = !isButton && !isActive ? 'text-gray-700' : ''
  const hoverClass = !isButton ? 'hover:text-brand-600' : ''
  
  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${activeClass} ${defaultClass} ${hoverClass} transition-colors duration-200`}
      {...props}
    >
      {children}
    </a>
  )
}