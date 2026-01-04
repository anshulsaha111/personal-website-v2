'use client'

import { motion } from 'framer-motion'
import { GardenSection } from './GardenSection'

export function Beliefs() {
  return (
    <GardenSection gardenDensity="dense" gardenPosition="both">
      <motion.blockquote
        className="font-headline text-section md:text-hero text-foreground leading-tight text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        The best AI products
        <br />
        don&apos;t feel like AI.
        <br />
        <span className="text-accent">They just work.</span>
      </motion.blockquote>

      <motion.p
        className="text-body-lg text-muted mt-12 max-w-prose mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I believe the next decade of AI isn&apos;t about making systems smarter — 
        it&apos;s about making them trustworthy. The winners will be the products 
        that know when to be invisible.
      </motion.p>
    </GardenSection>
  )
}
