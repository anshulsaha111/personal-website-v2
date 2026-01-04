'use client'

import { GardenSection } from './GardenSection'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <GardenSection id="contact" gardenDensity="lush" gardenPosition="bottom" className="pb-32">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          className="font-headline text-section text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          let&apos;s talk
        </motion.h2>

        <motion.p
          className="text-body-lg text-foreground/75 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m always interested in hard problems at the intersection of AI and product. 
          If you&apos;re building something ambitious, I&apos;d like to hear about it.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:hello@example.com"
            className="link-underline hover:text-foreground transition-colors duration-200"
          >
            hello@example.com
          </a>
          <a
            href="https://linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-foreground transition-colors duration-200"
          >
            Twitter
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </GardenSection>
  )
}
