import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Compass, Hammer, Wrench, Package, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Architectural Design',
    slug: 'architectural-design',
    description: 'Innovative designs that blend functionality with aesthetic appeal, tailored to your vision and needs.',
    features: ['3D Modeling & Visualization', 'Sustainable Design Principles', 'Code Compliance', 'Interior Design'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Hammer,
    title: 'Construction',
    slug: 'construction',
    description: 'Expert construction services with attention to detail, quality materials, and timely delivery.',
    features: ['Project Management', 'Quality Control', 'Safety Compliance', 'Timeline Adherence'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Wrench,
    title: 'Renovation',
    slug: 'renovation',
    description: 'Transform existing spaces with modern upgrades while preserving architectural integrity.',
    features: ['Historic Preservation', 'Modern Upgrades', 'Space Optimization', 'Energy Efficiency'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Package,
    title: 'Materials Supply',
    slug: 'materials-supply',
    description: 'Premium building materials sourced from trusted suppliers for lasting quality and durability.',
    features: ['Quality Sourcing', 'Competitive Pricing', 'Delivery Services', 'Technical Support'],
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #0F172A, #1363DF)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              From initial concept to final construction, we provide comprehensive services 
              to bring your architectural vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50" ref={ref}>
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-brand-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-muted mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #1363DF, #0F172A)' }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}