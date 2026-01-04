'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { GardenLayer } from './GardenLayer'

type GardenDensity = 'sparse' | 'light' | 'medium' | 'dense' | 'lush'

interface GardenSectionProps {
  id?: string
  children: ReactNode
  className?: string
  gardenDensity?: GardenDensity
  gardenPosition?: 'bottom' | 'sides' | 'both' | 'none'
}

export function GardenSection({
  id,
  children,
  className = '',
  gardenDensity = 'light',
  gardenPosition = 'bottom',
}: GardenSectionProps) {
  return (
    <section id={id} className={`relative py-section px-6 md:px-12 overflow-hidden ${className}`}>
      <motion.div
        className="max-w-content mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
      
      {gardenPosition !== 'none' && (
        <GardenLayer density={gardenDensity} position={gardenPosition} />
      )}
    </section>
  )
}

