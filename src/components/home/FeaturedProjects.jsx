import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Mr. Shridhar Residence',
    category: 'Residential',
    location: 'Bangalore',
    image: '/Mr.Shridhar/living room.jpg',
    description: 'A beautifully designed 3 BHK residence featuring elegant interiors with carefully selected materials and finishes that create a warm and inviting atmosphere.',
    slug: 'mr-shridhar-residence'
  },
  {
    id: 2,
    title: "William John's Pizza",
    category: 'Commercial',
    location: 'Bangalore',
    image: "/William john's pizza/elevation render 2.jpg",
    description: 'A modern commercial space with an eye-catching elevation design that attracts customers while maintaining functionality for restaurant operations.',
    slug: 'william-johns-pizza'
  },
  {
    id: 3,
    title: 'Mr. Rohan Velani Residence',
    category: 'Residential',
    location: 'Bangalore',
    image: '/Mr. Rohan Velani/daughter room 2.jpg',
    description: 'A family-oriented residential project with personalized spaces for each family member, emphasizing comfort, functionality, and aesthetic appeal.',
    slug: 'mr-rohan-velani-residence'
  }
]

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const x = useMotionValue(0)
  const rotateY = useTransform(x, [-200, 200], [-25, 25])

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextProject()
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8
    })
  }

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our commitment 
            to excellence in design and construction.
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced 3D Project Carousel */}
          <div className="relative overflow-hidden rounded-2xl perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                  scale: { duration: 0.4 }
                }}
                className="relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] shadow-2xl">
                  {/* Enhanced Image Section */}
                  <motion.div 
                    className="relative overflow-hidden"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    
                    {/* Animated Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-lg"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    />
                  </motion.div>

                  {/* Enhanced Content Section */}
                  <motion.div 
                    className="bg-brand-900 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full -translate-y-32 translate-x-32"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-600 rounded-full translate-y-24 -translate-x-24"></div>
                    </div>

                    <motion.div 
                      className="relative z-10"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <div className="mb-6">
                        <motion.span 
                          className="inline-block bg-accent text-brand-900 px-4 py-2 rounded-full text-sm font-medium mb-3"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {projects[currentIndex].category}
                        </motion.span>
                        <div className="text-gray-300 text-sm flex items-center space-x-2">
                          <span>📍</span>
                          <span>{projects[currentIndex].location}</span>
                        </div>
                      </div>

                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        {projects[currentIndex].title}
                      </motion.h3>

                      <motion.p 
                        className="text-gray-300 text-lg mb-8 leading-relaxed"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        {projects[currentIndex].description}
                      </motion.p>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <Link
                          to={`/projects/${projects[currentIndex].slug}`}
                          className="inline-flex items-center space-x-2 text-accent hover:text-white transition-all duration-300 font-medium group"
                        >
                          <span>Read Case Study</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation Arrows */}
            <motion.button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brand-900 p-4 rounded-full shadow-xl transition-all duration-300 z-20 group"
              aria-label="Previous project"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                rotateY: -10
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-brand-900 p-4 rounded-full shadow-xl transition-all duration-300 z-20 group"
              aria-label="Next project"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                rotateY: 10
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`relative transition-all duration-300 ${
                  index === currentIndex ? 'w-8 h-3' : 'w-3 h-3'
                } rounded-full`}
                aria-label={`Go to project ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-600 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`} />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-brand-600 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}