'use client'

import { motion } from 'framer-motion'
import { HeroGarden } from './HeroGarden'
import { ScrollCTA } from './ScrollCTA'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      {/* Main content - centered */}
      <div className="relative z-10 text-center max-w-3xl mx-auto pt-24 pb-48">
        <motion.p
          className="font-headline text-large md:text-section text-foreground mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          hi! i&apos;m anshul
        </motion.p>
        
        <motion.h1
          className="font-headline text-hero text-foreground mb-6 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          i build{' '}
          <span className="text-accent">ai systems</span>
          {' '}that scale
        </motion.h1>
        
        <motion.p
          className="font-body text-body-lg text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          product manager · builder · data scientist · thinker
        </motion.p>
      </div>
      
      {/* Scroll CTA */}
      <div className="absolute bottom-44 md:bottom-52 left-1/2 -translate-x-1/2 z-20">
        <ScrollCTA />
      </div>
      
      {/* Lush garden landscape at bottom */}
      <HeroGarden />
    </section>
  )
}
