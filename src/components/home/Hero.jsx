import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import NavigationLink from '../ui/NavigationLink'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-20">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern architectural building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
          
          {/* Floating Geometric Elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg"
            animate={{
              rotate: [0, 360],
              x: mousePosition.x * 20,
              y: mousePosition.y * 20,
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              x: { duration: 0.5 },
              y: { duration: 0.5 }
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              x: mousePosition.x * -15,
              y: mousePosition.y * -15,
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity },
              x: { duration: 0.5 },
              y: { duration: 0.5 }
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-brand-600/30 rotate-45"
            animate={{
              rotate: [45, 405],
              x: mousePosition.x * 10,
              y: mousePosition.y * 10,
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              x: { duration: 0.5 },
              y: { duration: 0.5 }
            }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-custom text-center text-white"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading - Responsive */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            style={{
              textShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(19,99,223,0.3)',
              transform: 'perspective(1000px)'
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block sm:inline"
            >
              Buildtecture —{' '}
            </motion.span>
            <motion.span 
              className="text-accent block sm:inline"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(217,176,140,0.6))'
              }}
            >
              where design meets durability
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto px-4"
            style={{ transform: 'perspective(1000px)' }}
          >
            Architectural design, construction and premium materials — delivered on time, built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(19,99,223,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavigationLink
                to="/contact"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden"
                style={{ transform: 'perspective(1000px)' }}
                loadingMessage="Preparing consultation form..."
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10">Request a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </NavigationLink>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavigationLink
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 relative overflow-hidden backdrop-blur-sm"
                style={{ transform: 'perspective(1000px)' }}
                loadingMessage="Loading project portfolio..."
              >
                <span>Explore Projects</span>
              </NavigationLink>
            </motion.div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            {[
              { number: "500+", label: "Projects Completed", delay: 0 },
              { number: "15+", label: "Years Experience", delay: 0.1 },
              { number: "98%", label: "Client Satisfaction", delay: 0.2 },
              { number: "50+", label: "Team Members", delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30, rotateY: -45 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.4 + stat.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                style={{ transform: 'perspective(1000px)' }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.6 + stat.delay,
                    type: "spring",
                    stiffness: 200
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(217,176,140,0.5))'
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>



      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </section>
  )
}