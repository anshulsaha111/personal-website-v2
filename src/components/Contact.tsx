'use client'

import { useState } from 'react'
import { Section } from './Section'
import { motion } from 'framer-motion'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'asahai100@gmail.com'

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  return (
    <Section id="contact" width="full" className="pb-16">
      <hr className="rule mb-6" />
      
      <div className="text-center max-w-prose mx-auto">
        <motion.h2
          className="font-headline text-section text-foreground mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          working on something ambitious?
        </motion.h2>

        <motion.p
          className="text-body-lg text-foreground/75 mb-7 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          I work at the intersection of AI, product, and execution.
          If you’re building or scaling an AI product, or thinking through evaluation, or adoption - I’m happy to chat.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-muted"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=asahai100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-foreground transition-colors duration-200"
            >
              asahai100@gmail.com
            </a>
            <button
              onClick={copyToClipboard}
              className="text-foreground/40 hover:text-foreground/60 transition-colors duration-200"
              aria-label="Copy email to clipboard"
              title={copied ? 'Copied!' : 'Copy email'}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {copied ? (
                  <path
                    d="M13.5 4.5L6 12L2.5 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <>
                    <rect
                      x="5.5"
                      y="5.5"
                      width="8"
                      height="8"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.5 10.5H2.5C2.224 10.5 2 10.276 2 10V3C2 2.724 2.224 2.5 2.5 2.5H9.5C9.776 2.5 10 2.724 10 3V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
          <a
            href="https://www.linkedin.com/in/anshul-sahai/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/anshulsaha111"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-foreground transition-colors duration-200"
          >
            X
          </a>
          <a
            href="https://github.com/anshulsaha111"
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
        Designed & built with intention 🤎
      </p>
    </Section>
  )
}
