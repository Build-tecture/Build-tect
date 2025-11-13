import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Users, Download } from 'lucide-react'

const projectData = {
  'mr-shridhar-residence': {
    title: 'Mr. Shridhar Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    client: 'Mr. Shridhar',
    size: '3 BHK, 2,500 sq ft',
    duration: '8 months',
    images: [
      '/Mr.Shridhar/living room.jpg',
      '/Mr.Shridhar/MASTER BEDROOM  1 OP 2.jpg',
      '/Mr.Shridhar/MASTER BEDROOM OP 2.jpg',
      '/Mr.Shridhar/1ST BEDROOM VIEW.jpg',
      '/Mr.Shridhar/guest bedroom-2.jpg',
      '/Mr.Shridhar/parents room.jpg',
      '/Mr.Shridhar/kitchen-5.jpg',
      '/Mr.Shridhar/L2-2.jpg',
      '/Mr.Shridhar/E2.jpg'
    ],
    overview: 'A beautifully designed 3 BHK residence that combines modern aesthetics with functional living spaces. The project features elegant interiors with carefully selected materials and finishes that create a warm and inviting atmosphere throughout the home.',
    challenge: 'Creating a cohesive design that accommodates multiple generations while maintaining individual privacy and comfort. The challenge was to maximize space utilization while ensuring each room has its unique character.',
    solution: 'We designed distinct zones for different family members with thoughtful space planning. The master bedroom features luxurious finishes, while guest rooms and parents room offer comfort and privacy. The kitchen and living areas are designed for family gatherings with modern amenities.',
    results: [
      'Complete interior design and execution',
      'Custom furniture and fittings',
      'Optimized space utilization',
      'Client satisfaction achieved'
    ]
  },
  'mr-ram-murat-residence': {
    title: 'Mr. Ram Murat Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    client: 'Mr. Ram Murat',
    size: '2 BHK, 1,800 sq ft',
    duration: '6 months',
    images: [
      '/Mr. Ram Murat/updated view 2.jpg',
      '/Mr. Ram Murat/updated view 3.jpg'
    ],
    overview: 'A contemporary residential design featuring modern aesthetics and functional spaces. The project showcases clean lines, thoughtful material selection, and attention to detail in every aspect of the design.',
    challenge: 'Creating a modern living space that balances aesthetics with functionality while working within the existing structural constraints.',
    solution: 'We implemented a contemporary design approach with optimized layouts, modern finishes, and smart storage solutions that maximize the available space while maintaining an open and airy feel.',
    results: [
      'Modern interior design completed',
      'Efficient space planning',
      'Quality finishes and materials',
      'Timely project completion'
    ]
  },
  'mr-rohan-velani-residence': {
    title: 'Mr. Rohan Velani Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    client: 'Mr. Rohan Velani',
    size: '3 BHK, 2,200 sq ft',
    duration: '7 months',
    images: [
      '/Mr. Rohan Velani/daughter room 2.jpg',
      '/Mr. Rohan Velani/DOC-20251103-WA0038.jpg'
    ],
    overview: 'A family-oriented residential project with special focus on creating personalized spaces for each family member. The design emphasizes comfort, functionality, and aesthetic appeal throughout the home.',
    challenge: 'Designing spaces that cater to different age groups and preferences while maintaining a cohesive design language throughout the residence.',
    solution: 'We created customized rooms with unique design elements for each family member, particularly focusing on creating a vibrant and functional space for the daughter\'s room while ensuring the overall design harmony.',
    results: [
      'Personalized room designs',
      'Family-friendly layouts',
      'Custom furniture solutions',
      'High client satisfaction'
    ]
  },
  'mr-shiva-residence': {
    title: 'Mr. Shiva Residence',
    category: 'Residential',
    location: 'Bangalore',
    year: '2024',
    client: 'Mr. Shiva',
    size: '2 BHK, 1,500 sq ft',
    duration: '5 months',
    images: [
      '/Mr.Shiva/L1 01.jpg'
    ],
    overview: 'A compact yet elegant residential design that maximizes space efficiency without compromising on style. The project demonstrates how thoughtful design can transform a modest space into a comfortable and beautiful home.',
    challenge: 'Optimizing a compact space to provide all necessary amenities while maintaining an open and spacious feel.',
    solution: 'We employed smart space planning techniques, multi-functional furniture, and strategic use of colors and lighting to create an illusion of spaciousness while ensuring all functional requirements are met.',
    results: [
      'Optimized space utilization',
      'Modern design execution',
      'Budget-friendly solutions',
      'Successful project delivery'
    ]
  },
  'william-johns-pizza': {
    title: "William John's Pizza",
    category: 'Commercial',
    location: 'Bangalore',
    year: '2024',
    client: "William John's Pizza",
    size: '2,000 sq ft',
    duration: '4 months',
    images: [
      "/William john's pizza/elevation render 2.jpg"
    ],
    overview: 'A modern commercial space designed for a pizza restaurant. The project features an eye-catching elevation design that attracts customers while maintaining functionality for restaurant operations.',
    challenge: 'Creating an inviting and distinctive commercial facade that stands out in a competitive market while ensuring the design supports efficient restaurant operations.',
    solution: 'We designed a contemporary elevation with bold architectural elements, strategic lighting, and branding integration that creates strong street presence while optimizing the interior layout for kitchen and dining operations.',
    results: [
      'Distinctive commercial design',
      'Enhanced brand visibility',
      'Functional restaurant layout',
      'Successful business launch'
    ]
  }
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectData[slug]

  if (!project) {
    return (
      <div className="pt-20 section-padding text-center">
        <h1 className="text-2xl font-bold text-brand-900 mb-4">Project Not Found</h1>
        <Link to="/projects" className="btn-primary">Back to Projects</Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom text-white pb-8">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-brand-600" />
              <div>
                <div className="text-sm text-muted">Location</div>
                <div className="font-medium">{project.location}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-brand-600" />
              <div>
                <div className="text-sm text-muted">Completed</div>
                <div className="font-medium">{project.year}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-brand-600" />
              <div>
                <div className="text-sm text-muted">Client</div>
                <div className="font-medium">{project.client}</div>
              </div>
            </div>
            <div>
              <button className="flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-brand-900 mb-6">Project Overview</h2>
                <p className="text-lg text-muted leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-brand-900 mb-6">The Challenge</h2>
                <p className="text-lg text-muted leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-brand-900 mb-6">Our Solution</h2>
                <p className="text-lg text-muted leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>

              {/* Additional Images */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {project.images.slice(1).map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-lg h-80 flex items-center justify-center bg-gray-100"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted">Size</div>
                    <div className="font-medium">{project.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted">Duration</div>
                    <div className="font-medium">{project.duration}</div>
                  </div>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-900 mb-4">Results & Recognition</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Inspired by This Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same level of excellence.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  )
}