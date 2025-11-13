import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, Plus, Check, X } from 'lucide-react'
import { useQuote } from '../contexts/QuoteContext'
import { materialsByCategory } from '../data/materialsData'

const categoryInfo = {
  cement: {
    title: 'Cement & Concrete',
    icon: '🏗️',
    description: 'High-quality cement and concrete products for strong, durable construction. From OPC to specialized cement types.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)'
  },
  bricks: {
    title: 'Bricks & Blocks',
    icon: '🧱',
    description: 'Traditional and modern bricks and blocks for all construction needs. Eco-friendly and durable options available.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)'
  },
  steel: {
    title: 'Steel & Iron',
    icon: '⚙️',
    description: 'Premium quality steel and iron products for structural strength. TMT bars, beams, and more.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)'
  },
  sand: {
    title: 'Sand & Aggregates',
    icon: '⛰️',
    description: 'Essential aggregates for concrete mixing and construction. River sand, M-sand, and stone chips.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)'
  },
  tiles: {
    title: 'Tiles & Flooring',
    icon: '🏠',
    description: 'Beautiful and durable flooring solutions. From vitrified tiles to premium marble and granite.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)'
  },
  paint: {
    title: 'Paint & Finishes',
    icon: '🎨',
    description: 'Premium paints and finishes for interior and exterior applications. Weather-proof and long-lasting.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)'
  },
  doors: {
    title: 'Doors & Windows',
    icon: '🚪',
    description: 'Quality doors and windows in wood, UPVC, and aluminum. Modern designs with excellent functionality.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)'
  },
  glass: {
    title: 'Glass & Glazing',
    icon: '🪟',
    description: 'Safety and decorative glass solutions. Tempered, laminated, and specialty glass products.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)'
  },
  plumbing: {
    title: 'Plumbing & Sanitary',
    icon: '🚰',
    description: 'Complete plumbing solutions including pipes, fittings, and sanitary ware. Quality assured products.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)'
  },
  electrical: {
    title: 'Electrical & Lighting',
    icon: '💡',
    description: 'Electrical wiring, switches, and lighting solutions. Energy-efficient and safe products.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #334155)'
  },
  roofing: {
    title: 'Roofing Materials',
    icon: '🏚️',
    description: 'Durable roofing solutions for all weather conditions. Tiles, sheets, and waterproofing materials.',
    bgGradient: 'linear-gradient(to bottom right, #1363DF, #0F172A)'
  }
}

export default function MaterialCategory() {
  const { category } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const { preferences, addPreference, removePreference } = useQuote()

  const categoryData = categoryInfo[category]
  const materials = materialsByCategory[category] || []

  const isInPreferences = (materialId) => {
    return preferences.some(pref => pref.id === materialId)
  }

  const handleTogglePreference = (material) => {
    if (isInPreferences(material.id)) {
      removePreference(material.id)
    } else {
      addPreference(material)
    }
  }

  const filteredMaterials = materials.filter(material =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!categoryData) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/materials" className="btn-primary">
            Back to Materials
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden py-16 md:py-20" style={{ background: 'linear-gradient(to right, #1e3a8a, #1e40af)' }}>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/materials" 
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-all hover:translate-x-[-4px] group"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to All Materials</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="text-7xl md:text-8xl mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categoryData.icon}
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {categoryData.title}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {categoryData.description}
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
                <span className="text-white font-semibold text-lg">
                  {materials.length} Products Available
                </span>
              </div>
              {preferences.length > 0 && (
                <motion.div 
                  className="bg-green-500/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-green-400/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <span className="text-white font-semibold text-lg">
                    {preferences.length} Selected
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-gradient-to-r from-white to-gray-50 border-b border-gray-200 sticky top-20 z-40 shadow-md">
        <div className="container-custom">
          <motion.div 
            className="relative max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-600"
            >
              <Search className="w-6 h-6" />
            </motion.div>
            <motion.input
              type="text"
              placeholder={`Search in ${categoryData.title}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-lg transition-all shadow-sm hover:shadow-md"
              whileFocus={{ scale: 1.02 }}
            />
            {searchTerm && (
              <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {filteredMaterials.length > 0 ? (
              <motion.div
                key="materials-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredMaterials.map((material, index) => (
                  <MaterialCard
                    key={material.id}
                    material={material}
                    index={index}
                    isInPreferences={isInPreferences(material.id)}
                    onToggle={() => handleTogglePreference(material)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No materials found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="btn-primary"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Preferences Summary */}
      <AnimatePresence>
        {preferences.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl p-6 max-w-md z-50 border-2 border-brand-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-brand-900 text-lg">Your Preferences</h4>
              <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {preferences.length}
              </span>
            </div>
            <div className="max-h-48 overflow-y-auto space-y-2 mb-4">
              {preferences.map((pref) => (
                <div key={pref.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="text-sm text-gray-700 font-medium">{pref.name}</span>
                  <button
                    onClick={() => removePreference(pref.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="block w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white text-center py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Get Quote with Preferences
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MaterialCard({ material, index, isInPreferences, onToggle }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden relative"
    >
      <div className="aspect-square overflow-hidden relative">
        <motion.img
          src={material.image}
          alt={material.name}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {isInPreferences && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg"
          >
            <Check className="w-4 h-4" />
          </motion.div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            {material.category}
          </span>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
            material.priceRange === 'Premium' ? 'bg-yellow-100 text-yellow-800' :
            material.priceRange === 'Mid-Range' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {material.priceRange}
          </span>
        </div>

        <h4 className="font-semibold text-brand-900 mb-3 text-base">
          {material.name}
        </h4>

        <div className="text-sm text-muted space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
            <span>Finish: {material.finish}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>Color: {material.color}</span>
          </div>
        </div>

        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
            isInPreferences
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-brand-600 hover:bg-brand-700 text-white'
          }`}
        >
          {isInPreferences ? (
            <>
              <Check className="w-5 h-5" />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              <span>Add to Preferences</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}
