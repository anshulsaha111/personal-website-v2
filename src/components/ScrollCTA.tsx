'use client'

import { motion } from 'framer-motion'

interface ScrollCTAProps {
  className?: string
}

export function ScrollCTA({ className = '' }: ScrollCTAProps) {
  return (
    <motion.div
      className={`flex flex-col items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <span className="text-small text-muted font-body">
        scroll to explore
      </span>
      
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-accent"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M12 4 L12 18 M6 14 L12 20 L18 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  )
}

