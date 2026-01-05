'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** Use smaller section padding */
  compact?: boolean
  /** Max width variant: 'content' (default), 'prose', 'narrow', 'full' */
  width?: 'content' | 'prose' | 'narrow' | 'full'
  /** Show structural spine line */
  spine?: boolean
}

const widthClasses = {
  content: 'max-w-content',
  prose: 'max-w-prose',
  narrow: 'max-w-narrow',
  full: 'max-w-grid',
}

export function Section({
  id,
  children,
  className = '',
  compact = false,
  width = 'content',
  spine = false,
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`
        relative 
        ${compact ? 'section-padding-sm' : 'section-padding'}
        page-grid
        ${spine ? 'with-spine' : ''}
        ${className}
      `}
    >
      <motion.div
        className={`${widthClasses[width]} relative z-10`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
