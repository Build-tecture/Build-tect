import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { packagesData } from '../data/packagesData'

export default function Package() {
  const { packageType } = useParams()
  const packageData = packagesData[packageType]
  
  const [activeCategory, setActiveCategory] = useState('designs')

  if (!packageData) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Blue Gradient */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #111827, #4B5563)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {packageData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {packageData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12 md:py-16">

        {/* Category Tabs */}
        <motion.div 
          className="mb-12 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-2 md:gap-4 min-w-max md:min-w-0 md:flex-wrap md:justify-center pb-4">
            {packageData.categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-brand-600 text-white shadow-lg transform'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-brand-600 hover:text-brand-600 hover:shadow-md'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeCategory === 'designs' ? (
            /* Designs & Drawings Grid */
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-8 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Designs & Drawings
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packageData.designs.map((design, index) => (
                  <motion.div
                    key={design.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative group">
                      <motion.img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <motion.div 
                          className="flex-shrink-0 w-6 h-6 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-semibold"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                        >
                          {index + 1}
                        </motion.div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900 mb-1 text-sm transition-colors hover:text-brand-600">
                            {design.title}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {design.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* Materials List */
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-8 text-center capitalize"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {packageData.categories.find(c => c.id === activeCategory)?.name} Materials
              </motion.h2>
              {packageData.materials[activeCategory] ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {packageData.materials[activeCategory].map((material, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.08,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative group">
                        <motion.img
                          src={material.image}
                          alt={material.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <motion.div 
                            className="flex-shrink-0 w-6 h-6 bg-brand-600 text-white rounded-full flex items-center justify-center text-xs font-semibold"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
                          >
                            {index + 1}
                          </motion.div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-gray-900 mb-1 text-sm transition-colors hover:text-brand-600">
                              {material.name}
                            </h3>
                            <p className="text-xs text-gray-600 mb-1">
                              {material.spec}
                            </p>
                            {material.price && (
                              <p className="text-xs font-medium text-brand-600">
                                {material.price}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.p 
                  className="text-gray-500 text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  No materials available for this category
                </motion.p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
