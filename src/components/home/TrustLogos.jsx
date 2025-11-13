import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const partners = [
  {
    name: 'LEED Certified',
    logo: 'https://via.placeholder.com/120x60/1363DF/FFFFFF?text=LEED',
  },
  {
    name: 'AIA Member',
    logo: 'https://via.placeholder.com/120x60/1363DF/FFFFFF?text=AIA',
  },
  {
    name: 'NCARB',
    logo: 'https://via.placeholder.com/120x60/1363DF/FFFFFF?text=NCARB',
  },
  {
    name: 'Better Business Bureau',
    logo: 'https://via.placeholder.com/120x60/1363DF/FFFFFF?text=BBB',
  },
  {
    name: 'Green Building Council',
    logo: 'https://via.placeholder.com/120x60/1363DF/FFFFFF?text=GBC',
  },
  {
    name: 'ISO 9001',
    logo: 'https://via.placeholder.com/120x60/1363DF/FFFFFF?text=ISO',
  }
]

export default function TrustLogos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-medium text-muted mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-sm text-gray-500">
            Certified and recognized by leading industry organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-brand-600 mb-2">
                Excellence Award 2023
              </div>
              <p className="text-sm text-muted">
                National Architecture Institute
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-600 mb-2">
                Sustainability Leader
              </div>
              <p className="text-sm text-muted">
                Green Building Council
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-600 mb-2">
                Top Contractor 2023
              </div>
              <p className="text-sm text-muted">
                Construction Industry Magazine
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}