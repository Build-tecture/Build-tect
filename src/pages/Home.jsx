import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
  Youtube,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  Target
} from 'lucide-react'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

  const portfolio = [
    {
      title: "Modern Residence",
      category: "Residential",
      image: "/Mr.Shridhar/living room.jpg"
    },
    {
      title: "Luxury Interior",
      category: "Interior Design",
      image: "/Mr.Shridhar/kitchen-5.jpg"
    },
    {
      title: "Heritage Bedroom",
      category: "Interior Design", 
      image: "/Mr. Rohan Velani/daughter room 2.jpg"
    },
    {
      title: "Commercial Building",
      category: "Commercial",
      image: "/images/hero-home.jpg"
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-main">
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
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight text-white"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
                }}
              >
                Buildtecture — where design meets durability
              </h1>
              
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
                  className="bg-accent hover:bg-[#9C6D46] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Explore Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
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

      {/* Portfolio Section */}
      <section className="section-spacing bg-main">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Portfolio</h2>
            <p className="text-xl text-secondary">Our Recent Projects</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="portfolio-card-ref group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="portfolio-image-ref w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-white rounded-b-xl">
                  <h3 className="font-semibold text-primary text-lg mb-1">{project.title}</h3>
                  <p className="text-secondary text-sm">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="section-spacing bg-alternate">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-8">Client Testimonials</h2>
          </motion.div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="testimonial-ref"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-secondary mb-6 leading-relaxed text-sm">
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
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-spacing bg-main">
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
            <h2 className="text-4xl lg:text-5xl font-serif mb-8" style={{ color: '#D1CBC3' }}>
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
