// Package data with designs and materials
export const packagesData = {
  basic: {
    id: 'basic',
    name: 'Basic Package',
    title: 'Basic Package Materials',
    description: 'Essential materials for standard construction projects',
    designs: [
      {
        id: 'arch-layout',
        title: 'Architectural Layout | 2D',
        description: 'A basic drawing showing how rooms and spaces are organized in a building.',
        image: '/images/architectural-layout.jpg'
      },
      {
        id: 'basic-elevation',
        title: 'Basic Elevation',
        description: 'A simple drawing illustrating the external appearance and features of a building from a specific viewpoint.',
        image: '/images/basic-elevation.jpg'
      },
      {
        id: 'structural-design',
        title: 'Structural Design',
        description: 'A straightforward depiction outlining the internal framework and support system of a building or structure.',
        image: '/images/structural-design.jpg'
      }
    ],
    categories: [
      {
        id: 'designs',
        name: 'Designs & Drawings',
        active: true
      },
      {
        id: 'structure',
        name: 'Structure'
      },
      {
        id: 'kitchen',
        name: 'Kitchen'
      },
      {
        id: 'bathroom',
        name: 'Bathroom'
      },
      {
        id: 'doors-windows',
        name: 'Doors & Windows'
      },
      {
        id: 'painting',
        name: 'Painting'
      },
      {
        id: 'flooring',
        name: 'Flooring'
      },
      {
        id: 'electrical',
        name: 'Electrical'
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous'
      }
    ],
    materials: {
      structure: [
        { name: 'Ordinary Portland Cement (OPC)', spec: 'Grade 43', price: 'Upto ₹350 per Bag', image: '/images/cement.jpg' },
        { name: 'Red Clay Brick', spec: 'Standard', price: 'Upto ₹8 per Piece', image: '/images/brick.jpg' },
        { name: 'River Sand', spec: 'Fine Grade', price: 'Upto ₹1,500 per Ton', image: '/images/sand.jpg' },
        { name: 'TMT Steel Bars', spec: '8mm-16mm', price: 'Upto ₹55 per Kg', image: '/images/steel-bars.jpg' },
        { name: 'Coarse Aggregates', spec: '20mm', price: 'Upto ₹1,800 per Ton', image: '/images/ready-mix-concrete.jpg' }
      ],
      kitchen: [
        { name: 'Ceramic Tiles', spec: 'Standard Grade', price: 'Upto ₹35 per Sqft', image: '/images/granite-floor.jpg' },
        { name: 'Stainless Steel Sink', spec: 'Single Bowl', price: 'Upto ₹3,500 per Unit', image: '/images/kitchen-sink.jpg' },
        { name: 'Basic Kitchen Faucet', spec: 'Chrome Finish', price: 'Upto ₹1,200 per Unit', image: '/images/kitchen-faucet.jpg' }
      ],
      bathroom: [
        { name: 'Ceramic Floor Tiles', spec: 'Standard', price: 'Upto ₹30 per Sqft', image: '/images/epoxy-floor.jpg' },
        { name: 'Basic Commode', spec: 'White Ceramic', price: 'Upto ₹4,500 per Unit', image: '/images/commode.jpg' },
        { name: 'Wall Mounted Wash Basin', spec: 'Standard', price: 'Upto ₹2,500 per Unit', image: '/images/wash-basin.jpg' },
        { name: 'PVC Pipes', spec: 'Standard Grade', price: 'Upto ₹150 per Meter', image: '/images/pvc-pipes.jpg' }
      ],
      'doors-windows': [
        { name: 'Wooden Doors', spec: 'Sal Wood', price: 'Upto ₹8,000 per Unit', image: '/images/wooden-door.jpg' },
        { name: 'Aluminum Windows', spec: 'Standard Frame', price: 'Upto ₹350 per Sqft', image: '/images/upvc-window.jpg' },
        { name: 'Clear Float Glass', spec: '5mm', price: 'Upto ₹80 per Sqft', image: '/images/glass.jpg' }
      ],
      painting: [
        { name: 'Emulsion Paint', spec: 'Interior Matte', price: 'Upto ₹18 per Sqft', image: '/images/wall-paint.jpg' },
        { name: 'Exterior Paint', spec: 'Weather Proof', price: 'Upto ₹22 per Sqft', image: '/images/exterior-paint.jpg' },
        { name: 'Putty', spec: 'Wall Primer', price: 'Upto ₹12 per Sqft', image: '/images/primer.jpg' }
      ],
      flooring: [
        { name: 'Ceramic Floor Tiles', spec: '2x2 feet', price: 'Upto ₹35 per Sqft', image: '/images/granite-floor.jpg' },
        { name: 'Vitrified Tiles', spec: 'Standard Grade', price: 'Upto ₹45 per Sqft', image: '/images/marble-floor.jpg' }
      ],
      electrical: [
        { name: 'Copper Wires', spec: '2.5mm', price: 'Upto ₹25 per Meter', image: '/images/electrical-wiring.jpg' },
        { name: 'MCB Board', spec: '4-Way', price: 'Upto ₹1,500 per Unit', image: '/images/mcb-board.jpg' },
        { name: 'Switches & Sockets', spec: 'Standard White', price: 'Upto ₹150 per Unit', image: '/images/switches.jpg' },
        { name: 'LED Bulbs', spec: '9W', price: 'Upto ₹200 per Unit', image: '/images/led-lights.jpg' }
      ],
      miscellaneous: [
        { name: 'Plaster of Paris', spec: 'Standard', price: 'Upto ₹15 per Kg', image: '/images/plaster-of-paris.jpg' },
        { name: 'Adhesives', spec: 'Tile Adhesive', price: 'Upto ₹350 per Bag', image: '/images/epoxy-adhesive.jpg' },
        { name: 'Nails & Screws', spec: 'Assorted', price: 'Upto ₹80 per Kg', image: '/images/nails-screws.jpg' }
      ]
    }
  },
  classic: {
    id: 'classic',
    name: 'Classic Package',
    title: 'Classic Package Materials',
    description: 'Enhanced materials for quality construction with better finishes',
    designs: [
      {
        id: 'arch-layout-3d',
        title: 'Architectural Layout | 2D',
        description: 'A basic drawing showing how rooms and spaces are organized in a building.',
        image: '/images/architectural-layout.jpg'
      },
      {
        id: 'basic-elevation-classic',
        title: 'Basic Elevation',
        description: 'A simple drawing illustrating the external appearance and features of a building from a specific viewpoint.',
        image: '/images/basic-elevation.jpg'
      },
      {
        id: 'structural-design-classic',
        title: 'Structural Design',
        description: 'A straightforward depiction outlining the internal framework and support system of a building or structure.',
        image: '/images/structural-design.jpg'
      },
      {
        id: '3d-elevation',
        title: '3D Elevation',
        description: 'A clear visual showcasing the three-dimensional appearance of a building from different angles.',
        image: '/images/3d-elevation.jpg'
      },
      {
        id: 'electrical-drawings',
        title: 'Electrical Drawings',
        description: 'A detailed diagram showcasing the electrical layout and wiring plan for a building.',
        image: '/images/electrical-drawing.jpg'
      },
      {
        id: 'plumbing-drawings',
        title: 'Plumbing Drawings',
        description: 'A detailed diagram illustrating the plumbing layout and pipe routing for water supply and drainage.',
        image: '/images/plumbing-drawing.jpg'
      }
    ],
    categories: [
      {
        id: 'designs',
        name: 'Designs & Drawings',
        active: true
      },
      {
        id: 'structure',
        name: 'Structure'
      },
      {
        id: 'kitchen',
        name: 'Kitchen'
      },
      {
        id: 'bathroom',
        name: 'Bathroom'
      },
      {
        id: 'doors-windows',
        name: 'Doors & Windows'
      },
      {
        id: 'painting',
        name: 'Painting'
      },
      {
        id: 'flooring',
        name: 'Flooring'
      },
      {
        id: 'electrical',
        name: 'Electrical'
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous'
      }
    ],
    materials: {
      structure: [
        { name: 'Portland Pozzolana Cement (PPC)', spec: 'Grade 53', price: 'Upto ₹400 per Bag', image: '/images/cement.jpg' },
        { name: 'Fly Ash Bricks', spec: 'Eco-Friendly', price: 'Upto ₹10 per Piece', image: '/images/brick.jpg' },
        { name: 'M-Sand', spec: 'Manufactured Sand', price: 'Upto ₹1,800 per Ton', image: '/images/sand.jpg' },
        { name: 'TMT Steel Bars', spec: '8mm-25mm', price: 'Upto ₹60 per Kg', image: '/images/steel-bars.jpg' },
        { name: 'Ready Mix Concrete', spec: 'M20 Grade', price: 'Upto ₹5,500 per Cum', image: '/images/ready-mix-concrete.jpg' },
        { name: 'AAC Blocks', spec: 'Lightweight', price: 'Upto ₹55 per Piece', image: '/images/aac-blocks.jpg' }
      ],
      kitchen: [
        { name: 'Vitrified Tiles', spec: 'Polished', price: 'Upto ₹55 per Sqft', image: '/images/marble-floor.jpg' },
        { name: 'Granite Counter Top', spec: 'Standard Grade', price: 'Upto ₹180 per Sqft', image: '/images/granite-countertop.jpg' },
        { name: 'Stainless Steel Sink', spec: 'Double Bowl', price: 'Upto ₹6,500 per Unit', image: '/images/kitchen-sink.jpg' },
        { name: 'Premium Kitchen Faucet', spec: 'Chrome Finish', price: 'Upto ₹2,500 per Unit', image: '/images/kitchen-faucet.jpg' },
        { name: 'Modular Kitchen Cabinets', spec: 'Laminated', price: 'Upto ₹1,200 per Sqft', image: '/images/modular-kitchen.jpg' }
      ],
      bathroom: [
        { name: 'Vitrified Floor Tiles', spec: 'Anti-Skid', price: 'Upto ₹50 per Sqft', image: '/images/bathroom.jpg' },
        { name: 'Wall Tiles', spec: 'Ceramic Glazed', price: 'Upto ₹40 per Sqft', image: '/images/wall-cladding.jpg' },
        { name: 'Premium Commode', spec: 'Wall Mounted', price: 'Upto ₹8,500 per Unit', image: '/images/commode.jpg' },
        { name: 'Designer Wash Basin', spec: 'Counter Top', price: 'Upto ₹5,500 per Unit', image: '/images/wash-basin.jpg' },
        { name: 'CPVC Pipes', spec: 'Hot/Cold Water', price: 'Upto ₹200 per Meter', image: '/images/pvc-pipes.jpg' },
        { name: 'Shower Panel', spec: 'Chrome Finish', price: 'Upto ₹4,500 per Unit', image: '/images/shower-panel.jpg' }
      ],
      'doors-windows': [
        { name: 'Teak Wood Doors', spec: 'Polished', price: 'Upto ₹15,000 per Unit', image: '/images/wooden-door.jpg' },
        { name: 'UPVC Windows', spec: 'Double Glazed', price: 'Upto ₹550 per Sqft', image: '/images/upvc-window.jpg' },
        { name: 'Tempered Glass', spec: '6mm Safety', price: 'Upto ₹120 per Sqft', image: '/images/glass.jpg' },
        { name: 'Designer Door Handles', spec: 'Stainless Steel', price: 'Upto ₹800 per Unit', image: '/images/hardware.jpg' }
      ],
      painting: [
        { name: 'Premium Emulsion', spec: 'Washable', price: 'Upto ₹28 per Sqft', image: '/images/wall-paint.jpg' },
        { name: 'Exterior Texture Paint', spec: 'Weather Resistant', price: 'Upto ₹35 per Sqft', image: '/images/exterior-paint.jpg' },
        { name: 'Enamel Paint', spec: 'High Gloss', price: 'Upto ₹32 per Sqft', image: '/images/texture-paint.jpg' },
        { name: 'Primer & Putty', spec: 'Premium Grade', price: 'Upto ₹18 per Sqft', image: '/images/primer.jpg' }
      ],
      flooring: [
        { name: 'Vitrified Tiles', spec: 'Polished 2x2 feet', price: 'Upto ₹60 per Sqft', image: '/images/vinyl-floor.jpg' },
        { name: 'Granite Flooring', spec: 'Polished', price: 'Upto ₹150 per Sqft', image: '/images/epoxy-floor.jpg' },
        { name: 'Wooden Flooring', spec: 'Laminated', price: 'Upto ₹180 per Sqft', image: '/images/wood-floor.jpg' }
      ],
      electrical: [
        { name: 'Copper Wires', spec: '4mm Premium', price: 'Upto ₹35 per Meter', image: '/images/electrical-wiring.jpg' },
        { name: 'MCB Board', spec: '8-Way', price: 'Upto ₹2,500 per Unit', image: '/images/mcb-board.jpg' },
        { name: 'Modular Switches', spec: 'Premium Finish', price: 'Upto ₹300 per Unit', image: '/images/switches.jpg' },
        { name: 'LED Lights', spec: 'Designer 12W', price: 'Upto ₹400 per Unit', image: '/images/led-lights.jpg' },
        { name: 'Ceiling Fans', spec: 'Energy Efficient', price: 'Upto ₹2,500 per Unit', image: '/images/premium-fans.jpg' }
      ],
      miscellaneous: [
        { name: 'Waterproofing Compound', spec: 'Premium', price: 'Upto ₹80 per Sqft', image: '/images/waterproofing.jpg' },
        { name: 'Tile Adhesive', spec: 'High Bond', price: 'Upto ₹450 per Bag', image: '/images/epoxy-adhesive.jpg' },
        { name: 'Sealants', spec: 'Silicone Based', price: 'Upto ₹250 per Unit', image: '/images/sealants.jpg' },
        { name: 'Hardware Fittings', spec: 'Stainless Steel', price: 'Upto ₹150 per Kg', image: '/images/hardware.jpg' }
      ]
    }
  },
  premium: {
    id: 'premium',
    name: 'Premium Package',
    title: 'Premium Package Materials',
    description: 'Luxury materials with premium finishes for high-end construction',
    designs: [
      {
        id: 'arch-layout-premium',
        title: 'Architectural Layout | 2D',
        description: 'A basic drawing showing how rooms and spaces are organized in a building.',
        image: '/images/architectural-layout.jpg'
      },
      {
        id: 'basic-elevation-premium',
        title: 'Basic Elevation',
        description: 'A simple drawing illustrating the external appearance and features of a building from a specific viewpoint.',
        image: '/images/basic-elevation.jpg'
      },
      {
        id: 'structural-design-premium',
        title: 'Structural Design',
        description: 'A straightforward depiction outlining the internal framework and support system of a building or structure.',
        image: '/images/structural-design.jpg'
      },
      {
        id: '3d-elevation-premium',
        title: '3D Elevation',
        description: 'A clear visual showcasing the three-dimensional appearance of a building from different angles.',
        image: '/images/3d-elevation.jpg'
      },
      {
        id: 'electrical-drawings-premium',
        title: 'Electrical Drawings',
        description: 'A detailed diagram showcasing the electrical layout and wiring plan for a building.',
        image: '/images/electrical-drawing.jpg'
      },
      {
        id: 'plumbing-drawings-premium',
        title: 'Plumbing Drawings',
        description: 'A detailed diagram illustrating the plumbing layout and pipe routing for water supply and drainage.',
        image: '/images/plumbing-drawing.jpg'
      },
      {
        id: 'interior-design',
        title: 'Interior Design',
        description: 'Comprehensive interior design plans with detailed specifications and 3D visualizations.',
        image: '/images/interior-design.jpg'
      },
      {
        id: 'landscape-design',
        title: 'Landscape Design',
        description: 'Professional landscape and garden design with detailed planting and hardscape plans.',
        image: '/images/landscape-design.jpg'
      }
    ],
    categories: [
      {
        id: 'designs',
        name: 'Designs & Drawings',
        active: true
      },
      {
        id: 'structure',
        name: 'Structure'
      },
      {
        id: 'kitchen',
        name: 'Kitchen'
      },
      {
        id: 'bathroom',
        name: 'Bathroom'
      },
      {
        id: 'doors-windows',
        name: 'Doors & Windows'
      },
      {
        id: 'painting',
        name: 'Painting'
      },
      {
        id: 'flooring',
        name: 'Flooring'
      },
      {
        id: 'electrical',
        name: 'Electrical'
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous'
      }
    ],
    materials: {
      structure: [
        { name: 'White Cement', spec: 'Premium Grade', price: 'Upto 600 per Bag', image: '/images/cement.jpg' },
        { name: 'AAC Blocks', spec: 'Lightweight Premium', image: '/images/aac-blocks.jpg' },
        { name: 'M-Sand', spec: 'Washed & Graded', image: '/images/sand.jpg' },
        { name: 'TMT Steel Bars', spec: 'Fe 550D Grade', image: '/images/steel-bars.jpg' },
        { name: 'Ready Mix Concrete', spec: 'M30 Grade', image: '/images/ready-mix-concrete.jpg' },
        { name: 'Structural Steel Beams', spec: 'I-Beam Premium', image: '/images/structural-steel-beams.jpg' }
      ],
      kitchen: [
        { name: 'Italian Marble', spec: 'Premium Grade', image: '/images/granite-floor.jpg' },
        { name: 'Imported Granite', spec: 'Counter Top', image: '/images/granite-countertop.jpg' },
        { name: 'Designer Sink', spec: 'Undermount Stainless Steel', image: '/images/kitchen-sink.jpg' },
        { name: 'Premium Faucet', spec: 'Touch Control', image: '/images/kitchen-faucet.jpg' },
        { name: 'Modular Kitchen', spec: 'Premium Finish with Soft Close', image: '/images/modular-kitchen.jpg' },
        { name: 'Built-in Appliances', spec: 'Chimney, Hob, Oven', image: '/images/built-in-appliances.jpg' }
      ],
      bathroom: [
        { name: 'Imported Tiles', spec: 'Designer Collection', image: '/images/bathroom.jpg' },
        { name: 'Premium Sanitary Ware', spec: 'Wall Hung Commode', image: '/images/commode.jpg' },
        { name: 'Designer Wash Basin', spec: 'Vessel Type', image: '/images/wash-basin.jpg' },
        { name: 'Jacuzzi/Bathtub', spec: 'Premium', image: '/images/jacuzzi-bathtub.jpg' },
        { name: 'Rain Shower', spec: 'Overhead with Body Jets', image: '/images/shower-panel.jpg' },
        { name: 'Premium Fittings', spec: 'Gold/Chrome Finish', image: '/images/premium-fittings.jpg' },
        { name: 'Smart Mirror', spec: 'LED with Defogger', image: '/images/smart-mirror.jpg' }
      ],
      'doors-windows': [
        { name: 'Teak Wood Doors', spec: 'Premium Carved', image: '/images/wooden-door.jpg' },
        { name: 'UPVC Windows', spec: 'Triple Glazed', image: '/images/upvc-window.jpg' },
        { name: 'Laminated Glass', spec: '8mm Safety', image: '/images/glass.jpg' },
        { name: 'Designer Hardware', spec: 'Imported Brass', image: '/images/hardware.jpg' },
        { name: 'Automatic Doors', spec: 'Sensor Based', image: '/images/automatic-door.jpg' }
      ],
      painting: [
        { name: 'Luxury Emulsion', spec: 'Washable Premium', image: '/images/wall-paint.jpg' },
        { name: 'Texture Paint', spec: 'Designer Finish', image: '/images/texture-paint.jpg' },
        { name: 'Metallic Paint', spec: 'Special Effects', image: '/images/metallic-paint.jpg' },
        { name: 'Imported Primer', spec: 'Premium Grade', image: '/images/primer.jpg' },
        { name: 'Wallpaper', spec: 'Designer Collection', image: '/images/false-ceiling.jpg' }
      ],
      flooring: [
        { name: 'Italian Marble', spec: 'Premium Polished', image: '/images/marble-floor.jpg' },
        { name: 'Imported Granite', spec: 'Polished', image: '/images/granite-countertop.jpg' },
        { name: 'Hardwood Flooring', spec: 'Engineered Oak', image: '/images/wood-floor.jpg' },
        { name: 'Vinyl Flooring', spec: 'Luxury Plank', image: '/images/vinyl-floor.jpg' },
        { name: 'Epoxy Flooring', spec: 'Designer Finish', image: '/images/epoxy-floor.jpg' }
      ],
      electrical: [
        { name: 'Copper Wires', spec: '6mm Premium', image: '/images/electrical-wiring.jpg' },
        { name: 'MCB Board', spec: '16-Way Digital', image: '/images/mcb-board.jpg' },
        { name: 'Designer Switches', spec: 'Touch Panel', image: '/images/switches.jpg' },
        { name: 'Smart Lighting', spec: 'App Controlled', image: '/images/led-lights.jpg' },
        { name: 'Home Automation', spec: 'Complete System', image: '/images/home-automation.jpg' },
        { name: 'Premium Fans', spec: 'BLDC Technology', image: '/images/premium-fans.jpg' },
        { name: 'Chandelier', spec: 'Designer Collection', image: '/images/chandelier.jpg' }
      ],
      miscellaneous: [
        { name: 'Premium Waterproofing', spec: 'Imported', image: '/images/waterproofing.jpg' },
        { name: 'Epoxy Adhesive', spec: 'High Strength', image: '/images/epoxy-adhesive.jpg' },
        { name: 'Sealants', spec: 'Premium Silicone', image: '/images/sealants.jpg' },
        { name: 'Hardware', spec: 'Imported Brass', image: '/images/hardware.jpg' },
        { name: 'False Ceiling', spec: 'Gypsum with Lighting', image: '/images/false-ceiling.jpg' },
        { name: 'Cladding', spec: 'Stone/Wood Veneer', image: '/images/wall-cladding.jpg' }
      ]
    }
  }
}