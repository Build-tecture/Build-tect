import { Outlet, useLocation } from 'react-router-dom'
import { QuoteProvider } from './contexts/QuoteContext'
import { LoadingProvider, useLoading } from './contexts/LoadingContext'
import LoadingAnimation from './components/ui/LoadingAnimation'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function LayoutContent() {
  const { isLoading, loadingMessage, stopLoading } = useLoading()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <LoadingAnimation
        isLoading={isLoading}
        message={loadingMessage}
        onComplete={stopLoading}
      />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      {!isHomePage && <Footer />}
    </div>
  )
}

export default function Layout() {
  return (
    <LoadingProvider>
      <QuoteProvider>
        <LayoutContent />
      </QuoteProvider>
    </LoadingProvider>
  )
}
