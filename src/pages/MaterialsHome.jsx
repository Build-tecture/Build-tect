import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Package } from 'lucide-react'
import { materialsByCategory } from '../data/materialsData'

const categories = [
  { id: 'cement', title: 'Cement & Concrete', icon: '🏗️', description: 'High-quality cement and concrete products', bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)' },
  { id: 'bricks', title: 'Bricks & Blocks', icon: '🧱', description: 'Traditional and modern bricks and blocks', bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)' },
  { id: 'steel', title: 'Steel & Iron', icon: '⚙️', description: 'Premium quality steel and iron products', bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)' },
  { id: 'sand', title: 'Sand & Aggregates', icon: '⛰️', description: 'Essential aggregates for construction', bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)' },
  { id: 'tiles', title: 'Tiles & Flooring', icon: '🏠', description: 'Beautiful and durable flooring solutions', bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)' },
  { id: 'paint', title: 'Paint & Finishes', icon: '🎨', description: 'Premium paints and finishes', bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)' },
  { id: 'doors', title: 'Doors & Windows', icon: '🚪', description: 'Quality doors and windows', bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)' },
  { id: 'glass', title: 'Glass & Glazing', icon: '🪟', description: 'Safety and decorative glass solutions', bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)' },
  { id: 'plumbing', title: 'Plumbing & Sanitary', icon: '🚰', description: 'Complete plumbing solutions', bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)' },
  { id: 'electrical', title: 'Electrical & Lighting', icon: '💡', description: 'Electrical and lighting solutions', bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)' },
  { id: 'roofing', title: 'Roofing Materials', icon: '🏚️', description: 'Durable roofing solutions', bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)' }
]

export default function MaterialsHome() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden py-20 md:py-24" style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}>
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Premium Building Materials
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              Explore our comprehensive range of construction materials for residential and commercial projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-2 rounded-full mb-4">MATERIAL CATEGORIES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Explore Our Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select a category to view detailed specifications, pricing, and availability</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function CategoryCard({ category, index, inView }) {
  const itemCount = materialsByCategory[category.id]?.length || 0
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/materials/${category.id}`}>
        <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-100 h-full">
          <div className="relative p-8 pb-12" style={{ background: category.bgGradient }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full -translate-y-12 translate-x-12"></div>
            </div>
            
            <motion.div className="text-6xl mb-4 relative z-10" animate={isHovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : {}} transition={{ duration: 0.3 }}>
              {category.icon}
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{category.title}</h3>
            <p className="text-white/80 text-sm relative z-10">{category.description}</p>
          </div>

          <div className="p-6 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-600">
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">{itemCount} Products</span>
              </div>
              
              <motion.div className="flex items-center space-x-2 text-brand-600 font-semibold" animate={isHovered ? { x: [0, 5, 0] } : {}} transition={{ duration: 0.8, repeat: Infinity }}>
                <span className="text-sm">View All</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>

          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none" initial={{ x: "-100%" }} animate={isHovered ? { x: "200%" } : { x: "-100%" }} transition={{ duration: 0.6 }} />
        </div>
      </Link>
    </motion.div>
  )
}
