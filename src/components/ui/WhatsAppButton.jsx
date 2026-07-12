import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappNumber = '911234567890' // Placeholder - will be replaced later
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute bottom-full right-0 mb-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
        >
          Chat with us on WhatsApp
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#1a1a1a]"></div>
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeatDelay: 3
          }
        }}
        className="flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>
    </div>
  )
}
