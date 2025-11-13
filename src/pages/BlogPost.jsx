import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

const blogData = {
  'sustainable-architecture-building-for-future': {
    title: 'Sustainable Architecture: Building for the Future',
    author: 'David Thompson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Sustainable architecture has evolved from a niche concept to a fundamental approach in modern construction. As we face increasing environmental challenges, architects and builders are reimagining how we design and construct buildings to minimize their environmental impact while maximizing efficiency and livability.</p>

      <h2>The Principles of Sustainable Design</h2>
      <p>At its core, sustainable architecture focuses on reducing the environmental footprint of buildings through thoughtful design, material selection, and construction practices. This approach considers the entire lifecycle of a building, from initial construction to eventual demolition or repurposing.</p>

      <p>Key principles include:</p>
      <ul>
        <li>Energy efficiency through passive design strategies</li>
        <li>Use of renewable and locally-sourced materials</li>
        <li>Water conservation and management systems</li>
        <li>Integration with natural landscapes and ecosystems</li>
        <li>Designing for longevity and adaptability</li>
      </ul>

      <h2>Innovative Technologies and Materials</h2>
      <p>The sustainable architecture movement has driven innovation in building technologies and materials. From solar panels integrated seamlessly into building facades to advanced insulation materials made from recycled content, these innovations are making sustainable buildings more efficient and cost-effective.</p>

      <p>Some exciting developments include:</p>
      <ul>
        <li>Smart glass that adjusts transparency based on sunlight</li>
        <li>Living walls and green roofs that improve air quality</li>
        <li>Geothermal heating and cooling systems</li>
        <li>Recycled and bio-based building materials</li>
      </ul>

      <h2>The Business Case for Sustainability</h2>
      <p>Beyond environmental benefits, sustainable architecture offers compelling economic advantages. Energy-efficient buildings reduce operational costs, while green certifications can increase property values and attract environmentally conscious tenants and buyers.</p>

      <p>Studies show that sustainable buildings typically see:</p>
      <ul>
        <li>20-30% reduction in energy consumption</li>
        <li>15-25% increase in property value</li>
        <li>Improved occupant health and productivity</li>
        <li>Lower maintenance and operational costs</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As we move forward, sustainable architecture will continue to evolve, incorporating new technologies and responding to changing environmental conditions. The future of construction lies in creating buildings that not only minimize harm but actively contribute to environmental restoration and community well-being.</p>

      <p>At Buildtecture, we're committed to leading this transformation, working with clients to create buildings that are not just beautiful and functional, but also responsible stewards of our planet's resources.</p>
    `
  },
  'art-of-material-selection-modern-design': {
    title: 'The Art of Material Selection in Modern Design',
    author: 'Emily Chen',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Material selection is one of the most critical decisions in architectural design, influencing not only the aesthetic appeal but also the functionality, sustainability, and longevity of a building. The right materials can transform a good design into an extraordinary one.</p>

      <h2>Understanding Material Properties</h2>
      <p>Every material has unique characteristics that affect its performance in different applications. Understanding these properties is essential for making informed decisions that will serve the project's goals.</p>

      <p>Key considerations include:</p>
      <ul>
        <li>Structural properties: strength, flexibility, load-bearing capacity</li>
        <li>Environmental resistance: weather, UV, moisture, temperature</li>
        <li>Aesthetic qualities: texture, color, pattern, aging characteristics</li>
        <li>Maintenance requirements: cleaning, repairs, replacement cycles</li>
        <li>Sustainability factors: embodied energy, recyclability, local sourcing</li>
      </ul>

      <h2>The Psychology of Materials</h2>
      <p>Materials communicate with occupants on a subconscious level, influencing mood, comfort, and behavior. Natural materials like wood and stone often create feelings of warmth and connection to nature, while metals and glass can convey modernity and precision.</p>

      <h2>Balancing Cost and Quality</h2>
      <p>Effective material selection requires balancing initial costs with long-term value. While premium materials may have higher upfront costs, they often provide better durability, lower maintenance, and enhanced property value over time.</p>

      <h2>Emerging Material Technologies</h2>
      <p>The construction industry continues to innovate with new materials that offer improved performance and sustainability. From self-healing concrete to transparent aluminum, these advances are opening new possibilities for architectural expression.</p>

      <p>At Buildtecture, we stay at the forefront of material innovation, helping clients make informed choices that align with their vision, budget, and values.</p>
    `
  },
  'smart-home-integration-architectural-planning': {
    title: 'Smart Home Integration in Architectural Planning',
    author: 'James Rodriguez',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The integration of smart home technology into architectural design is no longer a luxury—it's becoming an expectation. Modern homes must be designed from the ground up to accommodate current and future technological needs.</p>

      <h2>Planning for Connectivity</h2>
      <p>Successful smart home integration begins with robust infrastructure planning. This includes strategic placement of network equipment, adequate power distribution, and flexible conduit systems that can accommodate future upgrades.</p>

      <h2>Invisible Integration</h2>
      <p>The best smart home systems are those that enhance functionality without compromising design aesthetics. This requires careful coordination between architects, interior designers, and technology specialists during the planning phase.</p>

      <h2>Future-Proofing Strategies</h2>
      <p>Technology evolves rapidly, so smart home designs must be adaptable. This includes oversized conduits, accessible junction points, and modular systems that can be upgraded without major renovations.</p>

      <h2>Energy Management</h2>
      <p>Smart homes offer unprecedented opportunities for energy efficiency through automated lighting, climate control, and appliance management. These systems can significantly reduce energy consumption while improving comfort.</p>

      <p>Our team at Buildtecture works closely with technology partners to ensure seamless integration of smart systems that enhance both functionality and lifestyle.</p>
    `
  },
  'renovation-vs-new-construction-right-choice': {
    title: 'Renovation vs. New Construction: Making the Right Choice',
    author: 'Sarah Mitchell',
    date: '2023-12-28',
    readTime: '8 min read',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Deciding between renovation and new construction is one of the most significant choices property owners face. Each approach has distinct advantages and challenges that must be carefully evaluated based on specific circumstances and goals.</p>

      <h2>Assessing Your Current Structure</h2>
      <p>The condition and potential of your existing building is the primary factor in this decision. A thorough structural assessment can reveal whether renovation is feasible and cost-effective.</p>

      <h2>Cost Considerations</h2>
      <p>While renovation often appears less expensive initially, hidden issues can quickly escalate costs. New construction provides more predictable budgeting but requires higher upfront investment.</p>

      <h2>Timeline Factors</h2>
      <p>Renovation projects can be unpredictable due to unforeseen conditions, while new construction follows more predictable schedules. Consider your timeline flexibility when making this decision.</p>

      <h2>Sustainability Implications</h2>
      <p>Renovation preserves embodied energy in existing materials and reduces waste, while new construction allows for the latest energy-efficient technologies and systems.</p>

      <h2>Regulatory Considerations</h2>
      <p>Existing buildings may have grandfathered allowances that new construction wouldn't receive, but they may also need updates to meet current codes.</p>

      <p>Our experienced team can help you evaluate all factors to make the best decision for your specific situation and goals.</p>
    `
  },
  'maximizing-natural-light-urban-spaces': {
    title: 'Maximizing Natural Light in Urban Spaces',
    author: 'David Thompson',
    date: '2023-12-20',
    readTime: '4 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Natural light is one of the most valuable resources in urban architecture, yet it's often the most challenging to capture. Dense urban environments present unique obstacles that require creative design solutions.</p>

      <h2>Strategic Window Placement</h2>
      <p>In urban settings, every window placement decision is critical. Analyzing sun paths, neighboring buildings, and seasonal variations helps optimize natural light capture throughout the day and year.</p>

      <h2>Light Wells and Courtyards</h2>
      <p>Internal courtyards and light wells can bring natural illumination deep into building interiors, creating bright, airy spaces even in dense urban contexts.</p>

      <h2>Reflective Surfaces</h2>
      <p>Strategic use of reflective materials and light-colored surfaces can amplify available natural light, bouncing it deeper into interior spaces and reducing the need for artificial lighting.</p>

      <h2>Skylights and Clerestories</h2>
      <p>Overhead lighting solutions can be particularly effective in urban environments where side lighting is limited by adjacent buildings.</p>

      <p>Our design team specializes in creative solutions that maximize natural light while maintaining privacy and energy efficiency in challenging urban environments.</p>
    `
  },
  'future-of-construction-emerging-technologies': {
    title: 'The Future of Construction: Emerging Technologies',
    author: 'Emily Chen',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>The construction industry is experiencing a technological revolution that promises to transform how we design, build, and maintain structures. These emerging technologies are making construction faster, safer, and more sustainable.</p>

      <h2>3D Printing and Additive Manufacturing</h2>
      <p>Large-scale 3D printing is moving from prototype to reality, enabling the construction of entire building components and even complete structures with unprecedented precision and reduced waste.</p>

      <h2>Robotics and Automation</h2>
      <p>Robotic systems are increasingly handling repetitive and dangerous tasks, from bricklaying to welding, improving both safety and consistency while addressing labor shortages.</p>

      <h2>Building Information Modeling (BIM)</h2>
      <p>Advanced BIM systems are creating digital twins of buildings that enable better coordination, reduce errors, and provide valuable data throughout the building's lifecycle.</p>

      <h2>Artificial Intelligence and Machine Learning</h2>
      <p>AI is optimizing everything from project scheduling to predictive maintenance, helping identify potential issues before they become problems.</p>

      <h2>Sustainable Material Innovation</h2>
      <p>New materials like self-healing concrete, bio-based composites, and carbon-negative materials are revolutionizing sustainable construction practices.</p>

      <p>At Buildtecture, we continuously evaluate and integrate these emerging technologies to deliver better outcomes for our clients while staying at the forefront of industry innovation.</p>
    `
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogData[slug]

  if (!post) {
    return (
      <div className="pt-20 section-padding text-center">
        <h1 className="text-2xl font-bold text-brand-900 mb-4">Article Not Found</h1>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom text-white pb-8">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-sm text-gray-300">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Meta */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center space-x-6 text-muted">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted">Share:</span>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-400 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-brand-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
              style={{
                '--tw-prose-body': '#6B7280',
                '--tw-prose-headings': '#0F172A',
                '--tw-prose-links': '#1363DF',
                '--tw-prose-bold': '#0F172A',
                '--tw-prose-counters': '#6B7280',
                '--tw-prose-bullets': '#D1D5DB',
                '--tw-prose-hr': '#E5E7EB',
                '--tw-prose-quotes': '#6B7280',
                '--tw-prose-quote-borders': '#E5E7EB',
                '--tw-prose-captions': '#6B7280',
                '--tw-prose-code': '#0F172A',
                '--tw-prose-pre-code': '#E5E7EB',
                '--tw-prose-pre-bg': '#1F2937',
                '--tw-prose-th-borders': '#D1D5DB',
                '--tw-prose-td-borders': '#E5E7EB'
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <div className="flex items-start space-x-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt={post.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">
                    {post.author}
                  </h3>
                  <p className="text-muted mb-4">
                    Lead Architect & Founder at Buildtecture. With over 20 years of experience in sustainable architecture and urban planning, David leads our design team in creating innovative, environmentally responsible buildings.
                  </p>
                  <div className="flex space-x-4">
                    <button className="text-brand-600 hover:text-brand-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="text-brand-600 hover:text-brand-700 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-brand-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link
                  to="/blog/art-of-material-selection-modern-design"
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Material Selection"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                        The Art of Material Selection in Modern Design
                      </h3>
                      <p className="text-muted text-sm">
                        Learn how choosing the right materials can transform your architectural project...
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/blog/maximizing-natural-light-urban-spaces"
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Natural Light"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                        Maximizing Natural Light in Urban Spaces
                      </h3>
                      <p className="text-muted text-sm">
                        Creative strategies for bringing natural light into dense urban environments...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Build Sustainably?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can incorporate sustainable design principles into your next project.
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