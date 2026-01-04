'use client'

import { motion } from 'framer-motion'

interface MoonProps {
  className?: string
  size?: number
  isVisible?: boolean
}

export function Moon({ className = '', size = 100, isVisible = true }: MoonProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      initial={{ x: -200, opacity: 0 }}
      animate={{
        x: isVisible ? 0 : -200,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Subtle glow */}
      <motion.ellipse
        cx="50"
        cy="50"
        rx="42"
        ry="42"
        fill="#6b8cae"
        opacity="0.1"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Moon crescent - organic shape */}
      <motion.path
        d="M65 10 
           C90 20, 95 45, 90 65 
           C85 85, 65 95, 45 90 
           C25 85, 12 65, 15 42 
           C18 22, 35 8, 65 10
           C50 20, 45 35, 48 50
           C51 65, 58 78, 70 82
           C60 75, 52 62, 52 48
           C52 34, 58 22, 65 10
           Z"
        fill="#e2e0d8"
        animate={{ 
          d: [
            "M65 10 C90 20, 95 45, 90 65 C85 85, 65 95, 45 90 C25 85, 12 65, 15 42 C18 22, 35 8, 65 10 C50 20, 45 35, 48 50 C51 65, 58 78, 70 82 C60 75, 52 62, 52 48 C52 34, 58 22, 65 10 Z",
            "M65 11 C91 21, 96 46, 91 66 C86 86, 66 96, 46 91 C26 86, 13 66, 16 43 C19 23, 36 9, 65 11 C51 21, 46 36, 49 51 C52 66, 59 79, 71 83 C61 76, 53 63, 53 49 C53 35, 59 23, 65 11 Z",
            "M65 10 C90 20, 95 45, 90 65 C85 85, 65 95, 45 90 C25 85, 12 65, 15 42 C18 22, 35 8, 65 10 C50 20, 45 35, 48 50 C51 65, 58 78, 70 82 C60 75, 52 62, 52 48 C52 34, 58 22, 65 10 Z"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Stars around moon */}
      <motion.g
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="20" cy="25" r="1.5" fill="#e2e0d8" opacity="0.8" />
        <circle cx="85" cy="20" r="1" fill="#e2e0d8" opacity="0.6" />
        <circle cx="15" cy="70" r="1.2" fill="#e2e0d8" opacity="0.7" />
        <circle cx="80" cy="85" r="1" fill="#e2e0d8" opacity="0.5" />
      </motion.g>
      
      {/* Additional twinkling stars */}
      <motion.circle
        cx="25"
        cy="45"
        r="0.8"
        fill="#e2e0d8"
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.circle
        cx="78"
        cy="55"
        r="0.6"
        fill="#e2e0d8"
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </motion.svg>
  )
}

