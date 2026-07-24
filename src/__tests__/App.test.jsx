import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { describe, it, expect } from 'vitest'
import { routes } from '../App'

// Mock framer-motion to avoid issues in tests
vi.mock('framer-motion', () => {
  const passthrough = (Tag) => ({ children, ...props }) => <Tag {...props}>{children}</Tag>
  return {
    motion: {
      div: passthrough('div'),
      section: passthrough('section'),
      h1: passthrough('h1'),
      p: passthrough('p'),
      button: passthrough('button'),
      a: passthrough('a'),
      nav: passthrough('nav'),
      span: passthrough('span'),
      img: passthrough('img'),
    },
    AnimatePresence: ({ children }) => children,
    useInView: () => [null, true],
  }
})

const renderApp = () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] })
  return render(
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

describe('App', () => {
  it('renders without crashing', () => {
    renderApp()
    // Brand appears in the header logo
    expect(screen.getAllByText('Buildtecture').length).toBeGreaterThan(0)
  })

  it('displays the main navigation', () => {
    renderApp()
    // Nav labels can appear in both the desktop and mobile menus
    for (const label of ['Home', 'About', 'Projects', 'Packages', 'Blog', 'Contact']) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
  })

  it('displays the hero section', () => {
    renderApp()
    expect(screen.getByText(/design meets durability/i)).toBeInTheDocument()
  })
})
