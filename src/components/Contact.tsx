'use client'

import { Section } from './Section'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <Section id="contact" className="pb-16">
      <hr className="rule mb-6" />
      
      <div className="text-center max-w-prose mx-auto">
        <motion.h2
          className="font-headline text-section text-foreground mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          let&apos;s talk
        </motion.h2>

        <motion.p
          className="text-body-lg text-foreground/75 mb-7 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          I&apos;m always interested in hard problems at the intersection of AI and product. 
          If you&apos;re building something ambitious, I&apos;d like to hear about it.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-muted"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
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
      
      {/* Footer rule */}
      <hr className="rule mt-section" />
      <p className="text-caption text-muted text-center mt-element">
        Designed with intention. Built with constraints.
      </p>
    </Section>
  )
}
