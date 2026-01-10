'use client'

import { motion } from 'framer-motion'

/**
 * Hero Section
 * 
 * Design intent: Clear thesis with strong typographic hierarchy.
 * Typography refinement (editorial):
 * - Line breaks create natural emphasis
 * - Weight contrast (light body → heavy emphasis → light close)
 * - Tighter spacing creates single visual unit
 * - Authority through restraint, not volume
 * 
 * Typographic structure:
 *   greeting (recedes)
 *   i build
 *   ai systems (natural emphasis through position + weight)
 *   from problem → scale
 *   role descriptor (recedes)
 */

export function Hero() {
  
  return (
    <section className="relative min-h-[calc(100vh-41px)] flex flex-col items-center justify-center w-full">
      {/* Main content - centered */}
      <div className="relative z-10 text-center max-w-prose mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        {/* Greeting - recedes into background */}
        <motion.p
          className="font-body text-body sm:text-body-lg text-muted/85 mb-4 sm:mb-6 tracking-wide"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          hi! i&apos;m anshul
        </motion.p>
        
        {/* Headline - structured with deliberate line breaks */}
        <motion.h1
          className="font-headline text-hero text-foreground leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 font-light text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block">i build</span>
          <span className="block font-bold">ai systems</span>
          <span className="block whitespace-nowrap relative -left-[0.78em]">from problem → scale</span>
        </motion.h1>
        
        {/* Role descriptor - secondary, muted */}
        <motion.p
          className="font-body text-small sm:text-body text-muted/85 tracking-wide px-4 sm:px-0"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          product manager · gtm & adoption · builder 
        </motion.p>
      </div>
    </section>
  )
}
