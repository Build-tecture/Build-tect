import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/ui/SEO'
import {
  ArrowRight, 
  Star,
  Building2,
  Sofa,
  Hammer,
  ClipboardCheck,
  Users,
  Wrench,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'

// Projects data for Featured Projects carousel
const featuredProjects = [
  {
    id: 1,
    title: 'Mr. Shridhar Residence',
    category: 'Residential',
    image: '/Mr.Shridhar/living room.jpg',
    slug: 'mr-shridhar-residence'
  },
  {
    id: 2,
    title: "William John's Pizza",
    category: 'Commercial',
    image: "/William john's pizza/elevation render 2.jpg",
    slug: 'william-johns-pizza'
  },
  {
    id: 3,
    title: 'Mr. Rohan Velani Residence',
    category: 'Residential',
    image: '/Mr. Rohan Velani/daughter room 2.jpg',
    slug: 'mr-rohan-velani-residence'
  },
  {
    id: 4,
    title: 'Mr. Ram Murat Project',
    category: 'Residential',
    image: '/Mr. Ram Murat/updated view 2.jpg',
    slug: 'mr-ram-murat-residence'
  },
  {
    id: 5,
    title: 'Mr. Shiva Residence',
    category: 'Residential',
    image: '/Mr.Shiva/L1 01.jpg',
    slug: 'mr-shiva-residence'
  }
]

// Portfolio images for infinite scroll
const portfolioImages = [
  { 
    image: '/Mr.Shridhar/living room.jpg', 
    slug: 'mr-shridhar-residence',
    title: 'Modern Luxury Villa',
    description: 'A contemporary luxury residence designed for comfort and elegance.'
  },
  { 
    image: "/William john's pizza/elevation render 2.jpg", 
    slug: 'william-johns-pizza',
    title: 'Commercial Building',
    description: 'Modern commercial architecture focused on innovation and efficiency.'
  },
  { 
    image: '/Mr. Rohan Velani/daughter room 2.jpg', 
    slug: 'mr-rohan-velani-residence',
    title: 'Minimal Bedroom Design',
    description: 'A peaceful bedroom featuring clean lines and premium finishes.'
  },
  { 
    image: '/Mr. Ram Murat/updated view 2.jpg', 
    slug: 'mr-ram-murat-residence',
    title: 'Modern Luxury Villa',
    description: 'A contemporary luxury residence designed for comfort and elegance.'
  },
  { 
    image: '/Mr.Shridhar/MASTER BEDROOM OP 2.jpg', 
    slug: 'mr-shridhar-residence',
    title: 'Premium Interior Design',
    description: 'Elegant interior spaces crafted with modern aesthetics and functionality.'
  },
  { 
    image: '/Mr.Shridhar/kitchen-5.jpg', 
    slug: 'mr-shridhar-residence',
    title: 'Premium Interior Design',
    description: 'Elegant interior spaces crafted with modern aesthetics and functionality.'
  },
  { 
    image: '/Mr.Shridhar/1ST BEDROOM VIEW.jpg', 
    slug: 'mr-shridhar-residence',
    title: 'Minimal Bedroom Design',
    description: 'A peaceful bedroom featuring clean lines and premium finishes.'
  },
  { 
    image: '/Mr.Shiva/L1 01.jpg', 
    slug: 'mr-shiva-residence',
    title: 'Modern Luxury Villa',
    description: 'A contemporary luxury residence designed for comfort and elegance.'
  }
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)

  // Testimonial data
  const testimonials = [
    {
      rating: 5,
      review: "Working with this team was an absolute pleasure. The professionalism and attention to detail were evident from start to finish. I would highly recommend their services.",
      name: "Rohan Mehta",
      company: "Homeowner"
    },
    {
      rating: 5,
      review: "The quality of work exceeded our expectations. Every aspect of the project was handled with care, and the results speak for themselves. Truly outstanding.",
      name: "Ananya Sharma", 
      company: "Entrepreneur"
    },
    {
      rating: 5,
      review: "From initial consultation to final delivery, the process was smooth and professional. The team was always available to address our concerns. Highly satisfied.",
      name: "Vikram Patel",
      company: "Project Owner"
    }
  ]

  // Auto testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "From concept to blueprint, we craft functional and aesthetically engaging designs tailored to your vision."
    },
    {
      icon: Sofa,
      title: "Interior Styling", 
      description: "Elegant interiors designed to reflect your taste—balancing style, comfort, and everyday functionality."
    },
    {
      icon: Hammer,
      title: "Sustainable Consulting",
      description: "Guidance on green materials and eco-conscious practices without compromising quality or budget."
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We start by understanding your vision, requirements, budget, and timeline.",
      icon: ClipboardCheck
    },
    {
      number: "02",
      title: "Planning & Design",
      description: "Detailed plans and design specifications crafted to match your vision.",
      icon: Users
    },
    {
      number: "03",
      title: "Execution",
      description: "Professional construction with quality checks and regular updates.",
      icon: Wrench
    },
    {
      number: "04",
      title: "Project Delivery",
      description: "Final walkthrough, documentation, and post-project support.",
      icon: CheckCircle
    }
  ]

  return (
    <div className="bg-main">
      <SEO
        path="/"
        title="Architecture & Construction in India"
        description="Buildtecture designs and builds beautiful, durable spaces — architectural design, construction, renovation and premium materials delivered on time, built to last."
      />
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-home.jpg" 
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-tight text-white font-bold"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                }}
              >
                Buildtecture
              </h1>
              
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-white"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                }}
              >
                where design meets durability
              </h2>
              
              <p 
                className="text-xl lg:text-2xl leading-relaxed text-white"
                style={{
                  textShadow: '1px 1px 4px rgba(0,0,0,0.7), 0 0 10px rgba(0,0,0,0.5)'
                }}
              >
                Premium architecture, construction, interiors and premium building materials.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/projects" 
                  className="bg-accent hover:bg-[#9C6D46] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Explore Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 text-white">
            <span 
              className="text-sm tracking-wider font-medium"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
            >
              SCROLL DOWN
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
              style={{ boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}
            >
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-alternate">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="service-icon-ref mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel Section */}
      <section className="py-16 bg-main">
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-secondary">Our Latest Work</p>
          </motion.div>

          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              ref={carouselRef}
              className="flex gap-6"
              animate={{
                x: isPaused ? undefined : [0, -100 * featuredProjects.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {[...featuredProjects, ...featuredProjects].map((project, index) => (
                <Link
                  key={`${project.id}-${index}`}
                  to={`/projects/${project.slug}`}
                  className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.125rem)]"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {project.category}
                      </span>
                      <h3 className="font-semibold text-primary text-base group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Infinite Scroll Images Only */}
      <section className="py-16 bg-alternate overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Portfolio</h2>
            <p className="text-xl text-secondary">Our Recent Projects</p>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * portfolioImages.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {[...portfolioImages, ...portfolioImages, ...portfolioImages].map((item, index) => (
              <Link
                key={index}
                to={`/projects/${item.slug}`}
                className="flex-shrink-0 w-80"
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl overflow-hidden shadow-lg bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#666666]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-main">
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-8">Client Testimonials</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="testimonial-ref h-full"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-secondary mb-6 leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-secondary text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-spacing bg-alternate">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-8">Our Process</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="process-card-ref"
              >
                <div className="process-icon-ref mb-6">
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="text-5xl font-serif text-accent mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
                <p className="text-secondary leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="stat-number mb-2">500+</div>
              <div className="text-secondary">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-number mb-2">15+</div>
              <div className="text-secondary">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-number mb-2">98%</div>
              <div className="text-secondary">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-number mb-2">50+</div>
              <div className="text-secondary">Expert Team</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing cta-ref relative">
        <div className="cta-content container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-serif mb-8">
              Let's Build Your Dream Project
            </h2>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-ref">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">
              Newsletter Signup
            </h2>
            <p className="text-secondary mb-8">
              Sign up for our newsletter, updates and offers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 border-2 border-custom rounded-lg focus:outline-none focus:border-accent bg-white text-primary"
              />
              <button className="btn-primary px-8 py-3">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="section-spacing bg-main border-t border-custom">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Column */}
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">Buildtecture</h3>
              <p className="text-secondary mb-6 leading-relaxed">
                We create inspiring living spaces that stand the test of time, uniting functionality and aesthetics.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-white rounded hover:bg-accent hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white rounded hover:bg-accent hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white rounded hover:bg-accent hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white rounded hover:bg-accent hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/about" className="block text-secondary hover:text-accent transition-colors">About</Link>
                <Link to="/services" className="block text-secondary hover:text-accent transition-colors">Services</Link>
                <Link to="/projects" className="block text-secondary hover:text-accent transition-colors">Projects</Link>
                <Link to="/packages/basic" className="block text-secondary hover:text-accent transition-colors">Packages</Link>
                <Link to="/blog" className="block text-secondary hover:text-accent transition-colors">Blog</Link>
                <Link to="/contact" className="block text-secondary hover:text-accent transition-colors">Contact</Link>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Our Services</h3>
              <div className="space-y-3">
                <div className="text-secondary">Architectural Design</div>
                <div className="text-secondary">Interior Design</div>
                <div className="text-secondary">Construction</div>
                <div className="text-secondary">Contractor</div>
                <div className="text-secondary">Renovation</div>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-6">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-secondary">+91 98765 43210</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-secondary">info@buildtecture.in</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-secondary leading-relaxed">
                    123, Green Avenue<br />
                    Bangalore, India
                  </span>
                </div>
                <div className="text-secondary text-sm">Mon - Sat: 9:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-custom pt-8 text-center">
            <p className="text-secondary">
              © Buildtecture. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
