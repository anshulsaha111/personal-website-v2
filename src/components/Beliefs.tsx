'use client'

import { motion } from 'framer-motion'
import { Section } from './Section'

export function Beliefs() {
  return (
    <Section compact>
      <hr className="rule mb-block" />
      
      <motion.blockquote
        className="font-headline text-section md:text-hero text-foreground leading-tight text-center max-w-content mx-auto"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        The best AI products
        <br />
        don&apos;t feel like AI.
        <br />
        <em className="font-semibold not-italic">They just work.</em>
      </motion.blockquote>

      <motion.p
        className="text-body-lg text-muted mt-12 max-w-prose mx-auto text-center leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        I believe the next decade of AI isn&apos;t about making systems smarter — 
        it&apos;s about making them trustworthy. The winners will be the products 
        that know when to be invisible.
      </motion.p>
    </Section>
  )
}
