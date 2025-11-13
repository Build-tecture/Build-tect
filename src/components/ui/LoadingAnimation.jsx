import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function LoadingAnimation({ isLoading, onComplete, message = 'Loading...' }) {
  useEffect(() => {
    if (isLoading) {
      // Disable scrolling when loading
      document.body.style.overflow = 'hidden'
      
      const timer = setTimeout(() => {
        onComplete?.()
      }, 1800) // Slightly longer for better visual feedback

      return () => {
        clearTimeout(timer)
        // Re-enable scrolling when loading is done
        document.body.style.overflow = 'unset'
      }
    }
  }, [isLoading, onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-md flex items-center justify-center"
          style={{ 
            pointerEvents: 'all',
            userSelect: 'none'
          }}
          onClick={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: -50 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              stiffness: 200,
              damping: 20
            }}
            className="bg-white rounded-3xl p-12 shadow-2xl flex flex-col items-center max-w-sm mx-4"
            style={{ 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Enhanced Circular Loading Animation */}
            <div className="relative w-24 h-24 mb-8">
              {/* Outer ring with gradient */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #1363DF, #D9B08C, #1363DF)',
                  padding: '3px'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-white rounded-full"></div>
              </motion.div>
              
              {/* Middle rotating circle */}
              <motion.div
                className="absolute inset-2 border-4 border-transparent border-t-brand-600 border-r-brand-600 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner pulsing circle */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-brand-600 to-accent rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white font-bold text-xl">B</span>
              </motion.div>

              {/* Orbiting dots */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full shadow-lg"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0'
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * 90) * Math.PI / 180) * 35,
                    y: Math.sin((i * 90) * Math.PI / 180) * 35,
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    x: { duration: 4, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "linear" },
                  }}
                />
              ))}

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-brand-600/20 blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Company Name */}
            <motion.h3
              className="text-2xl font-bold text-brand-900 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Buildtecture
            </motion.h3>

            {/* Loading Text */}
            <motion.p
              className="text-brand-900 font-medium text-base mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <motion.span
                key={message}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {message}
              </motion.span>
            </motion.p>

            {/* Enhanced Pulsing dots */}
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-brand-600 rounded-full"
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Progress indicator */}
            <motion.div
              className="w-32 h-1 bg-gray-200 rounded-full mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-brand-600 to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}