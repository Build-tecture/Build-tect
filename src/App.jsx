import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Packages from './pages/Packages'
import PackageDetail from './pages/PackageDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import { packagesData } from './data/packagesData'

// Slugs for prerendering dynamic routes (keep in sync with sitemap.xml)
const serviceSlugs = ['architectural-design', 'construction', 'renovation', 'materials-supply']
const projectSlugs = [
  'mr-shridhar-residence',
  'mr-ram-murat-residence',
  'mr-rohan-velani-residence',
  'mr-shiva-residence',
  'william-johns-pizza',
]
const packageTypes = Object.keys(packagesData)
const blogSlugs = [
  'sustainable-architecture-building-for-future',
  'art-of-material-selection-modern-design',
  'smart-home-integration-architectural-planning',
  'renovation-vs-new-construction-right-choice',
  'maximizing-natural-light-urban-spaces',
  'future-of-construction-emerging-technologies',
]

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      {
        path: 'services/:slug',
        element: <ServiceDetail />,
        getStaticPaths: () => serviceSlugs.map((s) => `services/${s}`),
      },
      { path: 'projects', element: <Projects /> },
      {
        path: 'projects/:slug',
        element: <ProjectDetail />,
        getStaticPaths: () => projectSlugs.map((s) => `projects/${s}`),
      },
      { path: 'packages', element: <Packages /> },
      {
        path: 'packages/:packageType',
        element: <PackageDetail />,
        getStaticPaths: () => packageTypes.map((s) => `packages/${s}`),
      },
      { path: 'blog', element: <Blog /> },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
        getStaticPaths: () => blogSlugs.map((s) => `blog/${s}`),
      },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
