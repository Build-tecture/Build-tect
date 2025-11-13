import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Heart, Share2, Check } from 'lucide-react'
import { useQuote } from '../contexts/QuoteContext'

const materialData = {
  'natural-limestone': {
    name: 'Natural Limestone',
    category: 'Stone',
    finish: 'Polished',
    color: 'Cream',
    priceRange: 'Premium',
    price: '₹3,600-5,200 per sq ft',
    images: [
      'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premium natural limestone with a beautiful cream finish, perfect for both interior and exterior applications. This high-quality stone offers exceptional durability and timeless elegance.',
    specifications: {
      'Material Type': 'Natural Limestone',
      'Finish': 'Polished',
      'Color': 'Cream with natural veining',
      'Size Options': '12"x12", 18"x18", 24"x24"',
      'Thickness': '3/4" (20mm)',
      'Weight': '13 lbs per sq ft',
      'Absorption Rate': '< 0.5%',
      'Compressive Strength': '8,500 PSI'
    },
    features: [
      'Natural stone with unique veining patterns',
      'Suitable for interior and exterior use',
      'Frost resistant and durable',
      'Easy to maintain and clean',
      'Environmentally sustainable',
      'Available in multiple sizes'
    ],
    applications: [
      'Flooring (residential and commercial)',
      'Wall cladding and facades',
      'Countertops and vanities',
      'Fireplace surrounds',
      'Pool decking and coping',
      'Landscape features'
    ],
    relatedProducts: [
      { name: 'Marble Tiles', slug: 'marble-tiles', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Travertine Pavers', slug: 'travertine-pavers', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  },
  'reclaimed-red-brick': {
    name: 'Reclaimed Red Brick',
    category: 'Brick',
    finish: 'Weathered',
    color: 'Red',
    priceRange: 'Mid-Range',
    price: '₹2,000-2,800 per sq ft',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Authentic reclaimed red brick with rich patina and character. Each brick tells a story, bringing warmth and historical charm to modern construction projects.',
    specifications: {
      'Material Type': 'Reclaimed Clay Brick',
      'Finish': 'Weathered/Natural',
      'Color': 'Deep red with variations',
      'Size': 'Standard 2.25" x 3.75" x 8"',
      'Weight': '4.5 lbs per brick',
      'Compressive Strength': '3,000+ PSI',
      'Water Absorption': '10-15%',
      'Age': '50-100+ years'
    },
    features: [
      'Authentic weathered patina',
      'Sustainable reclaimed material',
      'Unique character and variations',
      'Excellent thermal mass properties',
      'Fire resistant',
      'Low maintenance requirements'
    ],
    applications: [
      'Exterior wall cladding',
      'Interior accent walls',
      'Fireplace construction',
      'Garden walls and landscaping',
      'Restoration projects',
      'Architectural features'
    ],
    relatedProducts: [
      { name: 'Clay Roof Tiles', slug: 'clay-roof-tiles', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Natural Stone', slug: 'natural-stone', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  },
  'oak-hardwood-flooring': {
    name: 'Oak Hardwood Flooring',
    category: 'Wood',
    finish: 'Matte',
    color: 'Natural',
    priceRange: 'Premium',
    price: '₹2,800-4,400 per sq ft',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premium oak hardwood flooring with natural grain patterns and matte finish. Sustainably sourced and expertly milled for exceptional quality and longevity.',
    specifications: {
      'Wood Species': 'White Oak (Quercus alba)',
      'Grade': 'Select & Better',
      'Finish': 'Matte Polyurethane',
      'Plank Size': '5" x 3/4" x Random Length',
      'Janka Hardness': '1,360 lbf',
      'Moisture Content': '6-8%',
      'Installation': 'Nail-down or Glue-down',
      'Warranty': '25 years residential'
    },
    features: [
      'Beautiful natural grain patterns',
      'Exceptional durability and hardness',
      'Can be refinished multiple times',
      'Adds value to property',
      'Sustainably harvested',
      'Low VOC finish'
    ],
    applications: [
      'Residential flooring',
      'Commercial spaces',
      'Stairs and landings',
      'Feature walls',
      'Custom millwork',
      'Furniture applications'
    ],
    relatedProducts: [
      { name: 'Walnut Flooring', slug: 'walnut-flooring', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Cedar Siding', slug: 'cedar-siding', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  },
  'structural-steel-beams': {
    name: 'Structural Steel Beams',
    category: 'Metal',
    finish: 'Galvanized',
    color: 'Silver',
    priceRange: 'Standard',
    price: '₹1,200-2,000 per linear ft',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-strength structural steel beams with galvanized coating for superior corrosion resistance. Engineered for maximum load-bearing capacity in commercial and residential construction.',
    specifications: {
      'Material': 'ASTM A992 Grade 50 Steel',
      'Coating': 'Hot-dip galvanized',
      'Sizes Available': 'W8 through W44 sections',
      'Yield Strength': '50 ksi minimum',
      'Tensile Strength': '65 ksi minimum',
      'Coating Thickness': '3.9 mils minimum',
      'Length': 'Up to 60 feet',
      'Certification': 'AISC certified'
    },
    features: [
      'Superior strength-to-weight ratio',
      'Excellent corrosion resistance',
      'Precise dimensional tolerances',
      'Weldable and machinable',
      'Recyclable material',
      'Long service life'
    ],
    applications: [
      'Building frame construction',
      'Bridge construction',
      'Industrial facilities',
      'High-rise buildings',
      'Warehouse structures',
      'Infrastructure projects'
    ],
    relatedProducts: [
      { name: 'Steel Columns', slug: 'steel-columns', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Metal Decking', slug: 'metal-decking', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  },
  'marble-tiles': {
    name: 'Marble Tiles',
    category: 'Stone',
    finish: 'Polished',
    color: 'White',
    priceRange: 'Premium',
    price: '₹4,400-6,800 per sq ft',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Luxurious white marble tiles with subtle veining, perfect for creating elegant and timeless interiors. Each tile showcases the natural beauty and sophistication of premium marble.',
    specifications: {
      'Material Type': 'Natural Marble',
      'Finish': 'High-gloss polished',
      'Color': 'Pure white with gray veining',
      'Size Options': '12"x12", 18"x18", 24"x24", 12"x24"',
      'Thickness': '3/8" (10mm)',
      'Weight': '8 lbs per sq ft',
      'Absorption Rate': '< 0.2%',
      'Mohs Hardness': '3-4'
    },
    features: [
      'Luxurious natural marble beauty',
      'Unique veining patterns in each tile',
      'Heat resistant surface',
      'Increases property value',
      'Timeless elegance',
      'Available in multiple sizes'
    ],
    applications: [
      'Bathroom floors and walls',
      'Kitchen backsplashes',
      'Luxury shower surrounds',
      'Foyer and entryway flooring',
      'Fireplace surrounds',
      'Accent walls'
    ],
    relatedProducts: [
      { name: 'Natural Limestone', slug: 'natural-limestone', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Granite Countertops', slug: 'granite-countertops', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  },
  'cedar-siding': {
    name: 'Cedar Siding',
    category: 'Wood',
    finish: 'Natural',
    color: 'Brown',
    priceRange: 'Mid-Range',
    price: '₹2,240-3,360 per sq ft',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Premium Western Red Cedar siding with natural weather resistance and beautiful grain patterns. This sustainable choice provides excellent insulation and develops a distinguished patina over time.',
    specifications: {
      'Wood Species': 'Western Red Cedar',
      'Grade': 'Clear Vertical Grain',
      'Profile': 'Bevel, Board & Batten, Shiplap',
      'Dimensions': '1/2" x 6", 3/4" x 8", 1" x 10"',
      'Moisture Content': '12-15%',
      'Thermal Rating': 'R-1.25 per inch',
      'Fire Rating': 'Class C',
      'Warranty': '15 years against defects'
    },
    features: [
      'Natural weather and insect resistance',
      'Excellent thermal insulation properties',
      'Beautiful natural grain patterns',
      'Sustainable and renewable resource',
      'Ages to attractive silver-gray patina',
      'Easy to work with and install'
    ],
    applications: [
      'Exterior wall siding',
      'Accent walls and features',
      'Shed and outbuilding construction',
      'Fence and privacy screens',
      'Architectural trim and details',
      'Interior paneling'
    ],
    relatedProducts: [
      { name: 'Oak Hardwood Flooring', slug: 'oak-hardwood-flooring', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Pine Beams', slug: 'pine-beams', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  },
  'tempered-glass-panels': {
    name: 'Tempered Glass Panels',
    category: 'Glass',
    finish: 'Clear',
    color: 'Transparent',
    priceRange: 'Mid-Range',
    price: '₹1,600-3,200 per sq ft',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-quality tempered glass panels offering exceptional clarity and safety. Perfect for curtain walls, storefronts, and architectural glazing applications.',
    specifications: {
      'Glass Type': 'Tempered Safety Glass',
      'Thickness': '1/4" to 1" available',
      'Size Range': 'Up to 96" x 144"',
      'Strength': '4-5x stronger than annealed glass',
      'Safety Rating': 'CPSC 16 CFR 1201 compliant',
      'Thermal Rating': 'Withstands 250°F temperature differential',
      'Edge Work': 'Polished or ground edges',
      'Certification': 'SGCC certified'
    },
    features: [
      'Superior strength and safety',
      'Excellent optical clarity',
      'Thermal shock resistance',
      'Easy to clean and maintain',
      'UV resistant',
      'Customizable sizes and shapes'
    ],
    applications: [
      'Curtain wall systems',
      'Storefront glazing',
      'Interior partitions',
      'Balcony railings',
      'Skylights and canopies',
      'Architectural features'
    ],
    relatedProducts: [
      { name: 'Insulated Glass Units', slug: 'insulated-glass-units', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Laminated Glass', slug: 'laminated-glass', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  },
  'precast-concrete-blocks': {
    name: 'Precast Concrete Blocks',
    category: 'Concrete',
    finish: 'Smooth',
    color: 'Gray',
    priceRange: 'Standard',
    price: '₹960-1,760 per sq ft',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'High-quality precast concrete blocks manufactured under controlled conditions for consistent strength and appearance. Ideal for both structural and architectural applications.',
    specifications: {
      'Concrete Strength': '4,000 PSI minimum',
      'Block Size': '8" x 8" x 16" standard',
      'Weight': '35-40 lbs per block',
      'Absorption': 'Less than 13%',
      'Compressive Strength': '1,900 PSI minimum',
      'Fire Rating': '4-hour fire resistance',
      'Thermal Mass': 'High thermal storage capacity',
      'Standards': 'ASTM C90 compliant'
    },
    features: [
      'Consistent quality and dimensions',
      'Excellent fire resistance',
      'Superior thermal mass properties',
      'Sound dampening qualities',
      'Low maintenance requirements',
      'Environmentally friendly'
    ],
    applications: [
      'Load-bearing walls',
      'Retaining walls',
      'Foundation construction',
      'Fire walls and barriers',
      'Architectural features',
      'Industrial construction'
    ],
    relatedProducts: [
      { name: 'Decorative Blocks', slug: 'decorative-blocks', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
      { name: 'Concrete Pavers', slug: 'concrete-pavers', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
    ]
  }
}

export default function MaterialDetail() {
  const { slug } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useQuote()
  
  const material = materialData[slug]

  if (!material) {
    return (
      <div className="pt-20 section-padding text-center">
        <h1 className="text-2xl font-bold text-brand-900 mb-4">Material Not Found</h1>
        <Link to="/materials" className="btn-primary">Back to Materials</Link>
      </div>
    )
  }

  const handleAddToQuote = () => {
    addItem({
      id: Date.now(),
      name: material.name,
      category: material.category,
      price: material.price,
      image: material.images[0]
    })
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm text-muted">
            <Link to="/materials" className="hover:text-brand-600">Materials</Link>
            <span>/</span>
            <Link to="/materials" className="hover:text-brand-600">{material.category}</Link>
            <span>/</span>
            <span className="text-brand-900">{material.name}</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link
            to="/materials"
            className="inline-flex items-center space-x-2 text-muted hover:text-brand-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Materials</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <img
                  src={material.images[selectedImage]}
                  alt={material.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-4">
                {material.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-brand-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${material.name} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-brand-100 text-brand-600 px-3 py-1 rounded-full text-sm font-medium">
                    {material.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    material.priceRange === 'Premium' ? 'bg-yellow-100 text-yellow-800' :
                    material.priceRange === 'Mid-Range' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {material.priceRange}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
                  {material.name}
                </h1>

                <div className="text-2xl font-bold text-brand-600 mb-6">
                  {material.price}
                </div>

                <p className="text-lg text-muted leading-relaxed mb-8">
                  {material.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleAddToQuote}
                    className="btn-primary flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Quote</span>
                  </button>
                  
                  <button className="btn-secondary flex items-center justify-center space-x-2">
                    <span>Request Sample</span>
                  </button>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center space-x-6 pb-8 border-b border-gray-200">
                  <button className="flex items-center space-x-2 text-muted hover:text-brand-600 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>Save to Favorites</span>
                  </button>
                  <button className="flex items-center space-x-2 text-muted hover:text-brand-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Key Features */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-brand-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {material.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Applications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-brand-900 mb-6">Specifications</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  {Object.entries(material.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-muted">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-brand-900 mb-6">Applications</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <ul className="space-y-3">
                  {material.applications.map((application, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-brand-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {material.relatedProducts.map((product, index) => (
                <Link
                  key={index}
                  to={`/materials/${product.slug}`}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-brand-900 group-hover:text-brand-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}