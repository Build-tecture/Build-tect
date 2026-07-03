import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: 1,
    title: 'Mr. Shridhar Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    image: '/Mr.Shridhar/living room.jpg',
    images: [
      '/Mr.Shridhar/living room.jpg',
      '/Mr.Shridhar/MASTER BEDROOM  1 OP 2.jpg',
      '/Mr.Shridhar/MASTER BEDROOM OP 2.jpg',
      '/Mr.Shridhar/1ST BEDROOM VIEW.jpg',
      '/Mr.Shridhar/guest bedroom-2.jpg',
      '/Mr.Shridhar/parents room.jpg',
      '/Mr.Shridhar/kitchen-5.jpg',
      '/Mr.Shridhar/L2-2.jpg',
      '/Mr.Shridhar/E2.jpg'
    ],
    slug: 'mr-shridhar-residence'
  },
  {
    id: 2,
    title: 'Mr. Ram Murat Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    image: '/Mr. Ram Murat/updated view 2.jpg',
    images: [
      '/Mr. Ram Murat/updated view 2.jpg',
      '/Mr. Ram Murat/updated view 3.jpg'
    ],
    slug: 'mr-ram-murat-residence'
  },
  {
    id: 3,
    title: 'Mr. Rohan Velani Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    image: '/Mr. Rohan Velani/daughter room 2.jpg',
    images: [
      '/Mr. Rohan Velani/daughter room 2.jpg',
      '/Mr. Rohan Velani/DOC-20251103-WA0038.jpg'
    ],
    slug: 'mr-rohan-velani-residence'
  },
  {
    id: 4,
    title: 'Mr. Shiva Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    image: '/Mr.Shiva/L1 01.jpg',
    images: [
      '/Mr.Shiva/L1 01.jpg'
    ],
    slug: 'mr-shiva-residence'
  },
  {
    id: 5,
    title: "William John's Pizza",
    category: 'Commercial',
    location: 'Bangalore',
    year: '2024',
    image: "/William john's pizza/elevation render 2.jpg",
    images: [
      "/William john's pizza/elevation render 2.jpg"
    ],
    slug: 'william-johns-pizza'
  }
]

const categories = ['All', 'Residential', 'Commercial', 'Renovation']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #111827, #4B5563)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our commitment 
              to excellence in design and construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200" ref={ref}>
        <div className="container-custom">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <Link to={`/projects/${project.slug}`}>
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div 
                        className="absolute top-4 left-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {project.category}
                        </span>
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="text-muted text-sm space-y-1">
                        <div>{project.location}</div>
                        <div>Completed: {project.year}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}