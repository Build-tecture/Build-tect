import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Clock, Users, Award } from 'lucide-react'

const serviceData = {
  'architectural-design': {
    title: 'Architectural Design',
    subtitle: 'Innovative designs that blend functionality with aesthetic appeal',
    hero: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'Our architectural design services combine creativity with technical expertise to create spaces that are both beautiful and functional. We work closely with clients to understand their vision and translate it into innovative designs that exceed expectations.',
    process: [
      { step: 'Consultation', description: 'Initial meeting to understand your vision, needs, and budget' },
      { step: 'Site Analysis', description: 'Comprehensive evaluation of the project site and constraints' },
      { step: 'Concept Development', description: 'Creating initial design concepts and 3D visualizations' },
      { step: 'Design Development', description: 'Refining the design with detailed drawings and specifications' },
      { step: 'Documentation', description: 'Preparing construction documents and permit applications' },
      { step: 'Construction Support', description: 'Ongoing support during the construction phase' }
    ],
    deliverables: [
      'Conceptual sketches and renderings',
      '3D models and visualizations',
      'Detailed architectural drawings',
      'Material and finish specifications',
      'Construction documentation',
      'Permit application support'
    ],
    faqs: [
      {
        question: 'How long does the design process take?',
        answer: 'The timeline varies based on project complexity, but typically ranges from 6-16 weeks for residential projects and 12-24 weeks for commercial projects.'
      },
      {
        question: 'Do you handle permit applications?',
        answer: 'Yes, we prepare all necessary documentation and can assist with permit applications and approvals with local authorities.'
      },
      {
        question: 'Can you work with my existing contractor?',
        answer: 'Absolutely! We collaborate with contractors throughout the construction process to ensure the design is implemented correctly.'
      }
    ]
  },
  'construction': {
    title: 'Construction Services',
    subtitle: 'Expert construction with attention to detail and quality materials',
    hero: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'Our construction services deliver exceptional quality through meticulous planning, skilled craftsmanship, and rigorous project management. We handle projects of all sizes, from residential homes to large commercial developments.',
    process: [
      { step: 'Pre-Construction Planning', description: 'Detailed project planning, scheduling, and resource allocation' },
      { step: 'Site Preparation', description: 'Site clearing, excavation, and foundation preparation' },
      { step: 'Structural Construction', description: 'Building the structural framework and core systems' },
      { step: 'Systems Installation', description: 'Electrical, plumbing, HVAC, and other building systems' },
      { step: 'Finishing Work', description: 'Interior and exterior finishes, fixtures, and final details' },
      { step: 'Final Inspection', description: 'Quality control, testing, and project handover' }
    ],
    deliverables: [
      'Detailed construction schedule',
      'Quality control documentation',
      'Progress reports and updates',
      'Safety compliance records',
      'Warranty documentation',
      'As-built drawings'
    ],
    faqs: [
      {
        question: 'How do you ensure quality during construction?',
        answer: 'We implement rigorous quality control measures at every stage, with regular inspections, testing, and documentation to ensure all work meets our high standards.'
      },
      {
        question: 'What happens if there are delays?',
        answer: 'We maintain detailed schedules and contingency plans. If delays occur, we communicate immediately and work to minimize impact on the overall timeline.'
      },
      {
        question: 'Do you provide warranties on your work?',
        answer: 'Yes, we provide comprehensive warranties on all construction work, with specific terms depending on the type of work performed.'
      }
    ]
  },
  'renovation': {
    title: 'Renovation & Restoration',
    subtitle: 'Transform existing spaces while preserving architectural integrity',
    hero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'Our renovation services breathe new life into existing structures, combining modern functionality with respect for original architectural character. We specialize in both historic preservation and contemporary updates.',
    process: [
      { step: 'Assessment & Planning', description: 'Thorough evaluation of existing conditions and renovation potential' },
      { step: 'Design Development', description: 'Creating renovation plans that respect original architecture' },
      { step: 'Permit & Approvals', description: 'Securing necessary permits, especially for historic properties' },
      { step: 'Selective Demolition', description: 'Careful removal of elements while preserving key features' },
      { step: 'Reconstruction', description: 'Building new elements and updating systems' },
      { step: 'Restoration', description: 'Restoring original features and applying final finishes' }
    ],
    deliverables: [
      'Condition assessment report',
      'Renovation design plans',
      'Historic preservation documentation',
      'Updated building systems',
      'Restored architectural features',
      'Maintenance guidelines'
    ],
    faqs: [
      {
        question: 'Can you work on historic buildings?',
        answer: 'Yes, we have extensive experience with historic preservation and work closely with preservation authorities to ensure compliance with all regulations.'
      },
      {
        question: 'How do you handle unexpected discoveries during renovation?',
        answer: 'We conduct thorough pre-construction assessments, but when surprises arise, we quickly assess the situation and provide options with cost and schedule implications.'
      },
      {
        question: 'Can you update building systems while preserving character?',
        answer: 'Absolutely. We specialize in integrating modern systems like HVAC, electrical, and plumbing while maintaining the building\'s historic character.'
      }
    ]
  },
  'materials-supply': {
    title: 'Materials Supply',
    subtitle: 'Premium building materials sourced from trusted suppliers worldwide',
    hero: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    overview: 'Our materials supply division provides access to premium building materials from trusted suppliers worldwide. We ensure quality, sustainability, and competitive pricing for all your construction needs.',
    process: [
      { step: 'Needs Assessment', description: 'Understanding your project requirements and specifications' },
      { step: 'Material Selection', description: 'Curating options that meet your quality and budget criteria' },
      { step: 'Sourcing & Procurement', description: 'Leveraging our supplier network for best pricing and availability' },
      { step: 'Quality Inspection', description: 'Thorough inspection of all materials before delivery' },
      { step: 'Logistics & Delivery', description: 'Coordinated delivery to meet your project timeline' },
      { step: 'Installation Support', description: 'Technical support and guidance during installation' }
    ],
    deliverables: [
      'Material specifications and samples',
      'Competitive pricing proposals',
      'Quality certification documents',
      'Delivery schedules and tracking',
      'Installation guidelines',
      'Warranty documentation'
    ],
    faqs: [
      {
        question: 'Do you provide material samples?',
        answer: 'Yes, we provide samples for most materials so you can see and feel the quality before making your final selection.'
      },
      {
        question: 'Can you source custom or specialty materials?',
        answer: 'Absolutely. Our extensive supplier network allows us to source custom and specialty materials for unique project requirements.'
      },
      {
        question: 'What about delivery and logistics?',
        answer: 'We handle all logistics, including delivery scheduling, site coordination, and proper storage to ensure materials arrive in perfect condition when needed.'
      }
    ]
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceData[slug]

  if (!service) {
    return (
      <div className="pt-20 section-padding text-center">
        <h1 className="text-2xl font-bold text-brand-900 mb-4">Service Not Found</h1>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={service.hero}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Services</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {service.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Overview</h2>
              <p className="text-lg text-muted leading-relaxed">
                {service.overview}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Our Process</h2>
              <p className="text-lg text-muted">
                We follow a structured approach to ensure your project is delivered on time and exceeds expectations.
              </p>
            </motion.div>

            <div className="space-y-8">
              {service.process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-900 mb-2">
                      {item.step}
                    </h3>
                    <p className="text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-900 mb-8">What You'll Receive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-muted">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-900 mb-6">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-brand-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}