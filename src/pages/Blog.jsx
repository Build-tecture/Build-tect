import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Sustainable Architecture: Building for the Future',
    excerpt: 'Explore the latest trends in sustainable architecture and how green building practices are shaping the future of construction.',
    author: 'David Thompson',
    date: '2024-01-15',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'sustainable-architecture-building-for-future',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Art of Material Selection in Modern Design',
    excerpt: 'Learn how choosing the right materials can transform your architectural project and create lasting impact.',
    author: 'Emily Chen',
    date: '2024-01-10',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'art-of-material-selection-modern-design',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Smart Home Integration in Architectural Planning',
    excerpt: 'Discover how to seamlessly integrate smart home technology into your architectural designs from the ground up.',
    author: 'James Rodriguez',
    date: '2024-01-05',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'smart-home-integration-architectural-planning',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Renovation vs. New Construction: Making the Right Choice',
    excerpt: 'A comprehensive guide to help you decide between renovating your existing space or starting fresh with new construction.',
    author: 'Sarah Mitchell',
    date: '2023-12-28',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'renovation-vs-new-construction-right-choice',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Maximizing Natural Light in Urban Spaces',
    excerpt: 'Creative strategies for bringing natural light into dense urban environments and small spaces.',
    author: 'David Thompson',
    date: '2023-12-20',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'maximizing-natural-light-urban-spaces',
    readTime: '4 min read'
  },
  {
    id: 6,
    title: 'The Future of Construction: Emerging Technologies',
    excerpt: 'Explore cutting-edge technologies that are revolutionizing the construction industry and changing how we build.',
    author: 'Emily Chen',
    date: '2023-12-15',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'future-of-construction-emerging-technologies',
    readTime: '9 min read'
  }
]

const categories = ['All', 'Design', 'Sustainability', 'Technology', 'Planning']

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #0F172A, #1363DF)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & Ideas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in architecture, 
              construction, and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-brand-900 mb-8">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-brand-100 text-brand-600 px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-sm text-muted">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-lg text-muted mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-brand-900 mb-8">Latest Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-brand-600 hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-muted mb-3">
                      <span>{post.readTime}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span className="text-brand-600 font-medium text-sm group-hover:text-brand-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="btn-primary">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #1363DF, #0F172A)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-brand-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}