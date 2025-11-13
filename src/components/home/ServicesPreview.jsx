import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Compass, Hammer, Wrench, Package } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Compass,
    title: 'Architectural Design',
    description: 'Innovative designs that blend functionality with aesthetic appeal, tailored to your vision and needs.',
    href: '/services/architectural-design'
  },
  {
    icon: Hammer,
    title: 'Construction',
    description: 'Expert construction services with attention to detail, quality materials, and timely delivery.',
    href: '/services/construction'
  },
  {
    icon: Wrench,
    title: 'Renovation',
    description: 'Transform existing spaces with modern upgrades while preserving architectural integrity.',
    href: '/services/renovation'
  },
  {
    icon: Package,
    title: 'Materials Supply',
    description: 'Premium building materials sourced from trusted suppliers for lasting quality and durability.',
    href: '/services/materials-supply'
  }
]

function ServiceCard({ service, index, inView }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]))

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(10px)" }}
      />
      
      {/* Floating Icon Container */}
      <motion.div
        className="w-16 h-16 bg-brand-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-700 transition-colors relative"
        style={{ transform: "translateZ(20px)" }}
        animate={isHovered ? { 
          rotateY: [0, 360],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
      >
        <service.icon className="w-8 h-8 text-white" />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-brand-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ transform: "translateZ(-5px)" }}
        />
      </motion.div>
      
      <motion.h3 
        className="text-xl font-semibold text-brand-900 mb-4"
        style={{ transform: "translateZ(15px)" }}
      >
        {service.title}
      </motion.h3>
      
      <motion.p 
        className="text-muted mb-6 leading-relaxed"
        style={{ transform: "translateZ(10px)" }}
      >
        {service.description}
      </motion.p>
      
      <motion.div
        style={{ transform: "translateZ(15px)" }}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          to={service.href}
          className="text-brand-600 font-medium hover:text-brand-700 transition-colors inline-flex items-center space-x-2 group/link"
        >
          <span>Learn More</span>
          <motion.span 
            className="group-hover/link:translate-x-1 transition-transform"
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>

      {/* Corner Accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(5px)" }}
      />
    </motion.div>
  )
}

export default function ServicesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            From initial concept to final construction, we provide comprehensive services 
            to bring your architectural vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}