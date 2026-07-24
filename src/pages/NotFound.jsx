import { Link } from 'react-router-dom'
import SEO from '../components/ui/SEO'

export default function NotFound() {
  return (
    <div className="pt-20 section-padding text-center min-h-[60vh] flex flex-col items-center justify-center">
      <SEO
        path="/404"
        title="Page Not Found"
        description="The page you are looking for could not be found."
        noindex
      />
      <p className="text-accent font-semibold mb-2">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
        Page not found
      </h1>
      <p className="text-muted mb-8 max-w-md">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
