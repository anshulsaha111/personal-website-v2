'use client'

import { Section } from './Section'
import { motion } from 'framer-motion'

const roles = [
  { title: 'Senior AI Product Manager', company: 'Current Company', years: '2022–Present' },
  { title: 'Product Manager, ML Platform', company: 'Growth Stage Startup', years: '2019–2022' },
  { title: 'Senior Data Scientist', company: 'Enterprise Tech', years: '2017–2019' },
  { title: 'Data Scientist', company: 'Consulting', years: '2015–2017' },
]

export function Experience() {
  return (
    <Section spine>
      <hr className="rule mb-8" />
      
      <h2 className="font-headline text-section text-foreground mb-8">
        experience
      </h2>

      <div className="max-w-prose space-y-2">
        {roles.map((role, index) => (
          <motion.div
            key={role.years}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-gutter py-tight"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div>
              <span className="text-body text-foreground/80">{role.title}</span>
              <span className="text-muted"> — </span>
              <span className="text-muted">{role.company}</span>
            </div>
            <span className="text-small text-muted tabular-nums">{role.years}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-small text-muted mt-element max-w-prose"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Each role taught me something different about how AI actually gets adopted.
      </motion.p>
    </Section>
  )
}

