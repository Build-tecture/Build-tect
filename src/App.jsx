import { Routes, Route } from 'react-router-dom'
import { QuoteProvider } from './contexts/QuoteContext'
import { LoadingProvider, useLoading } from './contexts/LoadingContext'
import LoadingAnimation from './components/ui/LoadingAnimation'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import MaterialsHome from './pages/MaterialsHome'
import MaterialCategory from './pages/MaterialCategory'
import MaterialDetail from './pages/MaterialDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

function AppContent() {
  const { isLoading, loadingMessage, stopLoading } = useLoading()

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
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/materials" element={<MaterialsHome />} />
          <Route path="/materials/:category" element={<MaterialCategory />} />
          <Route path="/materials/:category/:slug" element={<MaterialDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LoadingProvider>
      <QuoteProvider>
        <AppContent />
      </QuoteProvider>
    </LoadingProvider>
  )
}

export default App