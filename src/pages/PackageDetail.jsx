import { useState, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import { packagesData } from '../data/packagesData'
import Lightbox from '../components/ui/Lightbox'
import SEO from '../components/ui/SEO'

export default function PackageDetail() {
  const { packageType } = useParams()
  const packageData = packagesData[packageType]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Collect ALL unique images from the package with metadata
  const allImages = useMemo(() => {
    if (!packageData) return []
    
    const imageMap = new Map()
    
    // Add design images with titles and descriptions
    packageData.designs.forEach(design => {
      if (design.image && !imageMap.has(design.image)) {
        imageMap.set(design.image, {
          src: design.image,
          title: design.title,
          description: design.description
        })
      }
    })
    
    // Add all material images from all categories
    Object.entries(packageData.materials).forEach(([categoryId, categoryMaterials]) => {
      const categoryName = packageData.categories.find(c => c.id === categoryId)?.name || categoryId
      
      if (Array.isArray(categoryMaterials)) {
        categoryMaterials.forEach(material => {
          if (material.image && !imageMap.has(material.image)) {
            imageMap.set(material.image, {
              src: material.image,
              title: material.name,
              description: `${material.spec} - ${categoryName}`
            })
          }
        })
      }
    })
    
    // Convert Map to Array
    return Array.from(imageMap.values())
  }, [packageData])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Extract just the image sources for the lightbox
  const lightboxImages = useMemo(() => {
    return allImages.map(img => img.src)
  }, [allImages])

  if (!packageData) {
    return <Navigate to="/packages" replace />
  }

  return (
    <div className="pt-20 bg-[#F7F5F1]">
      <SEO
        path={`/packages/${packageType}`}
        title={packageData.name || packageData.title}
        description={packageData.description}
      />
      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={lightboxIndex}
      />

      {/* Back Button */}
      <div className="container-custom py-6">
        <Link
          to="/packages"
          className="inline-flex items-center space-x-2 text-[#B7875A] hover:text-[#9C6D46] transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Packages</span>
        </Link>
      </div>

      {/* Banner Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={packageData.designs[0]?.image || '/images/hero-home.jpg'}
          alt={packageData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-4">
                {packageData.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {packageData.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[20px] p-8 shadow-lg"
              >
                <h2 className="text-3xl font-serif text-[#1a1a1a] mb-6">Package Overview</h2>
                <p className="text-[#666666] leading-relaxed text-lg">
                  {packageData.description}
                </p>
              </motion.div>

              {/* Designs & Drawings */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-[20px] p-8 shadow-lg"
              >
                <h2 className="text-3xl font-serif text-[#1a1a1a] mb-6">Included Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {packageData.designs.map((design, index) => (
                    <div key={index} className="space-y-3">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={design.image}
                          alt={design.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-[#1a1a1a]">{design.title}</h3>
                      <p className="text-sm text-[#666666]">{design.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Materials by Category */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-[20px] p-8 shadow-lg"
              >
                <h2 className="text-3xl font-serif text-[#1a1a1a] mb-6">Materials & Features</h2>
                <div className="space-y-8">
                  {packageData.categories.filter(cat => cat.id !== 'designs').map((category, index) => {
                    const materials = packageData.materials[category.id]
                    if (!materials || materials.length === 0) return null
                    
                    return (
                      <div key={index}>
                        <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4 capitalize flex items-center">
                          <span className="w-2 h-2 bg-[#B7875A] rounded-full mr-3"></span>
                          {category.name}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {materials.map((material, idx) => (
                            <div key={idx} className="flex items-start space-x-3 bg-[#F7F5F1] p-4 rounded-lg">
                              <Check className="w-5 h-5 text-[#B7875A] flex-shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <p className="text-[#1a1a1a] font-medium">{material.name}</p>
                                <p className="text-sm text-[#666666]">{material.spec}</p>
                                {material.price && (
                                  <p className="text-sm text-[#B7875A] font-medium mt-1">{material.price}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Complete Image Gallery - ALL IMAGES */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[20px] p-8 shadow-lg"
              >
                <h2 className="text-3xl font-serif text-[#1a1a1a] mb-2">Complete Gallery</h2>
                <p className="text-[#666666] mb-6">
                  {allImages.length} images • Click any image to view in fullscreen
                </p>
                
                {allImages.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {allImages.map((imageData, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        onClick={() => openLightbox(index)}
                      >
                        <div className="aspect-square overflow-hidden relative group">
                          <img
                            src={imageData.src}
                            alt={imageData.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                              View
                            </span>
                          </div>
                        </div>
                        <div className="p-3 text-center">
                          <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1 line-clamp-1">
                            {imageData.title}
                          </h3>
                          <p className="text-xs text-[#666666] line-clamp-2">
                            {imageData.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#666666] text-center py-8">No images available for this package.</p>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[20px] p-8 shadow-lg sticky top-24"
              >
                <h3 className="text-2xl font-serif text-[#1a1a1a] mb-6">Package Highlights</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#B7875A] flex-shrink-0 mt-1" />
                    <span className="text-[#666666]">Complete design and drawings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#B7875A] flex-shrink-0 mt-1" />
                    <span className="text-[#666666]">Premium quality materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#B7875A] flex-shrink-0 mt-1" />
                    <span className="text-[#666666]">Expert consultation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#B7875A] flex-shrink-0 mt-1" />
                    <span className="text-[#666666]">Timely project delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#B7875A] flex-shrink-0 mt-1" />
                    <span className="text-[#666666]">Post-construction support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#B7875A] flex-shrink-0 mt-1" />
                    <span className="text-[#666666]">{allImages.length} reference images included</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-[#B7875A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#9C6D46] transition-colors block text-center"
                >
                  Get Quote
                </Link>
                <Link
                  to="/packages"
                  className="w-full mt-4 border-2 border-[#B7875A] text-[#B7875A] px-8 py-4 rounded-lg font-semibold hover:bg-[#B7875A] hover:text-white transition-colors block text-center"
                >
                  Back to Packages
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
