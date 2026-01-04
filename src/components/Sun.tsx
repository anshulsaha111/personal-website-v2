'use client'

import { motion } from 'framer-motion'

interface SunProps {
  className?: string
  size?: number
  isVisible?: boolean
}

export function Sun({ className = '', size = 120, isVisible = true }: SunProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial={{ x: 0, opacity: 1 }}
      animate={{
        x: isVisible ? 0 : 200,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Sun body - organic circle */}
      <motion.ellipse
        cx="60"
        cy="60"
        rx="28"
        ry="27"
        fill="#e86a33"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Sun rays - organic shapes */}
      <motion.g
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '60px 60px' }}
      >
        {/* Top ray */}
        <path
          d="M60 8 C62 18, 58 22, 60 28 C62 22, 58 18, 60 8"
          fill="#e86a33"
          opacity="0.9"
        />
        {/* Top right ray */}
        <path
          d="M92 20 C86 28, 82 26, 78 32 C84 28, 88 30, 92 20"
          fill="#e86a33"
          opacity="0.85"
        />
        {/* Right ray */}
        <path
          d="M112 60 C102 58, 98 62, 92 60 C98 58, 102 62, 112 60"
          fill="#e86a33"
          opacity="0.9"
        />
        {/* Bottom right ray */}
        <path
          d="M92 100 C86 92, 82 94, 78 88 C84 92, 88 90, 92 100"
          fill="#e86a33"
          opacity="0.85"
        />
        {/* Bottom ray */}
        <path
          d="M60 112 C58 102, 62 98, 60 92 C58 98, 62 102, 60 112"
          fill="#e86a33"
          opacity="0.9"
        />
        {/* Bottom left ray */}
        <path
          d="M28 100 C34 92, 38 94, 42 88 C36 92, 32 90, 28 100"
          fill="#e86a33"
          opacity="0.85"
        />
        {/* Left ray */}
        <path
          d="M8 60 C18 62, 22 58, 28 60 C22 62, 18 58, 8 60"
          fill="#e86a33"
          opacity="0.9"
        />
        {/* Top left ray */}
        <path
          d="M28 20 C34 28, 38 26, 42 32 C36 28, 32 30, 28 20"
          fill="#e86a33"
          opacity="0.85"
        />
      </motion.g>
      
      {/* Longer accent rays */}
      <motion.g
        animate={{ rotate: [0, -3, 0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '60px 60px' }}
      >
        <ellipse cx="60" cy="12" rx="3" ry="8" fill="#e86a33" opacity="0.7" />
        <ellipse cx="108" cy="60" rx="8" ry="3" fill="#e86a33" opacity="0.7" />
        <ellipse cx="60" cy="108" rx="3" ry="8" fill="#e86a33" opacity="0.7" />
        <ellipse cx="12" cy="60" rx="8" ry="3" fill="#e86a33" opacity="0.7" />
      </motion.g>
    </motion.svg>
  )
}

