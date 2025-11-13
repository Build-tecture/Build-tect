import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Mr. Shridhar',
    role: 'Homeowner',
    company: 'Residential Client',
    image: '/Mr.Shridhar/living room.jpg',
    content: 'Buildtecture transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, timely, and delivered exactly what we dreamed of.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mr. Rohan Velani',
    role: 'Homeowner',
    company: 'Residential Client',
    image: '/Mr. Rohan Velani/daughter room 2.jpg',
    content: 'Working with Buildtecture was exceptional. They understood our family needs and created personalized spaces that reflect each family member\'s personality while maintaining design harmony throughout the home.',
    rating: 5
  },
  {
    id: 3,
    name: 'Mr. Ram Murat',
    role: 'Homeowner',
    company: 'Residential Client',
    image: '/Mr. Ram Murat/updated view 2.jpg',
    content: 'The project was completed on time and within budget. Buildtecture\'s expertise in modern design and space optimization was impressive. Our home looks stunning and functions perfectly.',
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Buildtecture.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-accent mb-6" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-brand-900 text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-brand-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}