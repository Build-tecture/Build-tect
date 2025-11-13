import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Clock, Target, Quote } from 'lucide-react'

const team = [
  {
    name: 'David Thompson',
    role: 'Founder & Lead Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: '20+ years of experience in sustainable architecture and urban planning.',
    quote: 'Great architecture has the power to transform lives and communities.'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Construction Manager',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in project management with a focus on quality and timely delivery.',
    quote: 'Excellence is in the details, and every detail matters in construction.'
  },
  {
    name: 'James Rodriguez',
    role: 'Senior Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Innovative designer specializing in modern residential and commercial spaces.',
    quote: 'Design is not just what it looks like, but how it works and feels.'
  },
  {
    name: 'Emily Chen',
    role: 'Materials Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in sustainable materials and green building technologies.',
    quote: 'Sustainable materials today create the legacy buildings of tomorrow.'
  }
]



const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on quality, using only the finest materials and proven construction methods.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect your time and consistently deliver projects on schedule without sacrificing quality.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work closely with clients throughout the entire process, ensuring their vision becomes reality.'
  },
  {
    icon: Award,
    title: 'Sustainable Design',
    description: 'Environmental responsibility is at the core of our design philosophy and material selection.'
  }
]

export default function About() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding text-white" style={{ background: 'linear-gradient(to bottom right, #0F172A, #1363DF)' }} ref={heroRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future, One Project at a Time
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              For over 15 years, Buildtecture has been at the forefront of architectural innovation, 
              creating spaces that inspire, function beautifully, and stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                To create exceptional architectural experiences that enhance communities, 
                respect the environment, and exceed client expectations through innovative 
                design, quality construction, and sustainable practices.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                We believe that great architecture has the power to transform lives and 
                communities. Every project we undertake is an opportunity to create something 
                meaningful that will serve generations to come.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Buildtecture team at work"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50" ref={valuesRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
              Why Choose Buildtecture
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Inspired by adstudio9.com design */}
      <section className="section-padding bg-white" ref={teamRef}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 mb-8">
              Meet Our Team
            </h2>
            <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed">
              Our diverse team of architects, designers, and construction experts 
              brings decades of combined experience to every project. We believe in the power 
              of collaboration and shared vision.
            </p>
          </motion.div>

          <div className="space-y-24">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-8`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xl text-brand-600 font-medium mb-6">
                      {member.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-12 h-12 text-accent mb-6 opacity-50" />
                    <blockquote className="text-xl md:text-2xl text-brand-900 font-medium leading-relaxed mb-8 italic">
                      "{member.quote}"
                    </blockquote>
                  </div>

                  {/* Bio */}
                  <p className="text-lg text-muted leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Decorative line */}
                  <div className="w-16 h-1 bg-accent rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}