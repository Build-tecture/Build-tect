import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/ui/SEO'

const packages = [
  {
    id: 'basic',
    title: 'Basic Package',
    description: 'Essential materials and services for standard construction projects with quality and affordability.',
    image: '/images/architectural-layout.jpg'
  },
  {
    id: 'classic',
    title: 'Classic Package',
    description: 'Enhanced materials and premium finishes for elevated quality construction with better aesthetics.',
    image: '/images/3d-elevation.jpg'
  },
  {
    id: 'premium',
    title: 'Premium Package',
    description: 'Luxury materials with premium finishes for high-end construction and sophisticated design.',
    image: '/images/interior-design.jpg'
  }
]

export default function Packages() {
  return (
    <div className="pt-20 bg-[#F7F5F1]">
      <SEO
        path="/packages"
        title="Construction Packages"
        description="Choose from Buildtecture's Basic, Classic and Premium construction packages — transparent inclusions, designs, drawings and materials for every budget."
      />
      {/* Hero Section */}
      <section className="py-16 bg-[#F1EDE8]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] mb-6">
              Our Packages
            </h1>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Choose from our carefully curated packages designed to meet your construction needs and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <Link to={`/packages/${pkg.id}`} className="block">
                  {/* Image */}
                  <div className="relative overflow-hidden h-72">
                    <motion.img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-[#666666] mb-6 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Button */}
                    <div className="inline-flex items-center space-x-2 bg-[#B7875A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9C6D46] transition-colors">
                      <span>View Details</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F1EDE8]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-6">
              Need Help Choosing the Right Package?
            </h2>
            <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">
              Our experts are here to guide you through the selection process and customize a package that fits your needs.
            </p>
            <Link
              to="/contact"
              className="bg-[#B7875A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#9C6D46] transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Expert Advice</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
