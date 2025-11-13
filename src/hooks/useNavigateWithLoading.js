import { useNavigate } from 'react-router-dom'
import { useLoading } from '../contexts/LoadingContext'
import { useCallback } from 'react'

export function useNavigateWithLoading() {
  const navigate = useNavigate()
  const { startLoading, stopLoading } = useLoading()

  const navigateWithLoading = useCallback((to, options = {}) => {
    const { message = 'Loading page...', delay = 1500 } = options
    
    startLoading(message)
    
    // Simulate loading time for better UX
    setTimeout(() => {
      navigate(to)
      setTimeout(() => {
        stopLoading()
      }, 300) // Small delay to ensure smooth transition
    }, delay)
  }, [navigate, startLoading, stopLoading])

  return navigateWithLoading
}