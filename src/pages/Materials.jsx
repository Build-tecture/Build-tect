import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Plus, Check, X } from 'lucide-react'
import { useQuote } from '../contexts/QuoteContext'
import { materialsByCategory } from '../data/materialsData'

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('cement')
  const { preferences, addPreference, removePreference } = useQuote()

  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const tabs = [
    { id: 'cement', label: 'Cement & Concrete', icon: '🏗️', materials: materialsByCategory.cement },
    { id: 'bricks', label: 'Bricks & Blocks', icon: '🧱', materials: materialsByCategory.bricks },
    { id: 'steel', label: 'Steel & Iron', icon: '⚙️', materials: materialsByCategory.steel },
    { id: 'sand', label: 'Sand & Aggregates', icon: '⛰️', materials: materialsByCategory.sand },
    { id: 'tiles', label: 'Tiles & Flooring', icon: '🏠', materials: materialsByCategory.tiles },
    { id: 'paint', label: 'Paint & Finishes', icon: '🎨', materials: materialsByCategory.paint },
    { id: 'doors', label: 'Doors & Windows', icon: '🚪', materials: materialsByCategory.doors },
    { id: 'glass', label: 'Glass & Glazing', icon: '🪟', materials: materialsByCategory.glass },
    { id: 'plumbing', label: 'Plumbing & Sanitary', icon: '🚰', materials: materialsByCategory.plumbing },
    { id: 'electrical', label: 'Electrical & Lighting', icon: '💡', materials: materialsByCategory.electrical },
    { id: 'roofing', label: 'Roofing Materials', icon: '🏚️', materials: materialsByCategory.roofing },
  ]

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

  const filterMaterials = (materials) => {
    if (!searchTerm) return materials
    return materials.filter(material =>
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const activeTabData = tabs.find(tab => tab.id === activeTab)
  const filteredMaterials = filterMaterials(activeTabData.materials)

  const MaterialCard = ({ material, index }) => {
    const [isHovered, setIsHovered] = useState(false)
    const inPreferences = isInPreferences(material.id)

    return (
      <motion.div
        key={material.id}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.05,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden group relative"
      >
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ pointerEvents: "none" }}
        />

        {/* Image Container */}
        <div className="aspect-square overflow-hidden relative">
          <motion.img
            src={material.image}
            alt={material.name}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating Badge */}
          {inPreferences && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg"
            >
              <Check className="w-4 h-4" />
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 relative">
          {/* Category and Price Tags */}
          <div className="flex items-center justify-between mb-3">
            <motion.span 
              className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {material.category}
            </motion.span>
            <motion.span 
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                material.priceRange === 'Premium' ? 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800' :
                material.priceRange === 'Mid-Range' ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800' :
                'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {material.priceRange}
            </motion.span>
          </div>

          {/* Title */}
          <motion.h4 
            className="font-semibold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors text-base"
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {material.name}
          </motion.h4>

          {/* Details */}
          <div className="text-sm text-muted space-y-2 mb-4">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
              <span>Finish: {material.finish}</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span>Color: {material.color}</span>
            </motion.div>
          </div>

          {/* Action Button */}
          <motion.button
            onClick={() => handleTogglePreference(material)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden ${
              inPreferences
                ? 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white shadow-md'
            }`}
          >
            <motion.div
              animate={inPreferences ? { rotate: 360 } : {}}
              transition={{ duration: 0.5 }}
            >
              {inPreferences ? (
                <Check className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </motion.div>
            <span>{inPreferences ? 'Added' : 'Add to Preferences'}</span>

            {/* Button Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.button>
        </div>

        {/* Corner Decoration */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-100/50 to-transparent rounded-bl-3xl"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: isHovered ? 1 : 0, rotate: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    )
  }

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-brand-900 to-brand-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Building Materials
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive range of construction materials for residential and commercial projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-gray-200 sticky top-20 z-40" ref={ref}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-grow max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-brand-50 px-4 py-2 rounded-lg">
                <span className="text-brand-900 font-medium">
                  {preferences.length} {preferences.length === 1 ? 'Preference' : 'Preferences'} Selected
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent rounded-full translate-x-24 translate-y-24"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex overflow-x-auto scrollbar-hide py-2">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center space-x-2 px-4 py-4 font-medium transition-all duration-300 whitespace-nowrap text-sm group ${
                    isActive
                      ? 'text-brand-600'
                      : 'text-gray-600 hover:text-brand-600'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-br from-brand-50 to-brand-100 rounded-lg shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {!isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}

                  <motion.span 
                    className="text-2xl relative z-10"
                    animate={isActive ? { 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {tab.icon}
                  </motion.span>

                  <span className="relative z-10">{tab.label}</span>

                  <motion.span 
                    className={`relative z-10 text-xs px-2 py-1 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-600 text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-700 group-hover:bg-brand-100 group-hover:text-brand-700'
                    }`}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {tab.materials.length}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-t-full"
                      layoutId="tabIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {isActive && (
                    <>
                      <motion.div
                        className="absolute top-1 right-1 w-1 h-1 bg-accent rounded-full"
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5
                        }}
                      />
                      <motion.div
                        className="absolute bottom-2 left-2 w-1 h-1 bg-brand-400 rounded-full"
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.8
                        }}
                      />
                    </>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        <motion.div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredMaterials.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredMaterials.map((material, index) => (
                    <MaterialCard key={material.id} material={material} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted text-lg">No materials found matching your search.</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 btn-primary"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {preferences.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 bg-white rounded-lg shadow-2xl p-6 max-w-md z-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-brand-900">Your Preferences</h4>
              <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm">
                {preferences.length}
              </span>
            </div>
            <div className="max-h-48 overflow-y-auto space-y-2 mb-4">
              {preferences.map((pref) => (
                <div key={pref.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-sm text-gray-700">{pref.name}</span>
                  <button
                    onClick={() => removePreference(pref.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="block w-full bg-brand-600 hover:bg-brand-700 text-white text-center py-3 rounded-lg font-medium transition-colors"
            >
              Get Quote with Preferences
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
