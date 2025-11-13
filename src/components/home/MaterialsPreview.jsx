import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useRef } from 'react'

const materials = [
  {
    id: 1,
    name: 'Natural Stone',
    category: 'Stone',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'natural-limestone'
  },
  {
    id: 2,
    name: 'Reclaimed Brick',
    category: 'Brick',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'reclaimed-red-brick'
  },
  {
    id: 3,
    name: 'Hardwood Flooring',
    category: 'Wood',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'oak-hardwood-flooring'
  },
  {
    id: 4,
    name: 'Steel Beams',
    category: 'Metal',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'structural-steel-beams'
  },
  {
    id: 5,
    name: 'Glass Panels',
    category: 'Glass',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'tempered-glass-panels'
  },
  {
    id: 6,
    name: 'Concrete Blocks',
    category: 'Concrete',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    slug: 'precast-concrete-blocks'
  }
]

function MaterialCard({ material, index, inView }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
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
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
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
      whileHover={{ scale: 1.02 }}
      className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ${
        index === 0 ? 'md:col-span-2 md:row-span-2' : ''
      } ${index === 2 ? 'lg:row-span-2' : ''}`}
    >
      <Link to={`/materials/${material.slug}`}>
        <motion.div 
          className="relative overflow-hidden bg-gray-200 aspect-square"
          style={{ transform: "translateZ(10px)" }}
        >
          <motion.img
            src={material.image}
            alt={material.name}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Animated Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating Content */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
            style={{ transform: "translateZ(20px)" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div 
              className="text-xs font-medium text-accent mb-1"
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
            >
              {material.category}
            </motion.div>
            <h3 className="font-semibold text-sm md:text-base">
              {material.name}
            </h3>
          </motion.div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Corner Glow */}
          <motion.div
            className="absolute top-2 right-2 w-4 h-4 bg-accent rounded-full"
            animate={isHovered ? { 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function MaterialsPreview() {
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
            Premium Materials
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Discover our curated selection of high-quality building materials 
            sourced from trusted suppliers worldwide.
          </p>
        </motion.div>

        {/* Enhanced Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {materials.map((material, index) => (
            <MaterialCard 
              key={material.id} 
              material={material} 
              index={index} 
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/materials"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Browse All Materials</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}