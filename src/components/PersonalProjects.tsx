'use client'

import { Section } from './Section'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Project One',
    description: 'Brief description of personal project.',
    year: '2024',
  },
  {
    name: 'Project Two',
    description: 'Brief description of personal project.',
    year: '2023',
  },
  {
    name: 'Project Three',
    description: 'Brief description of personal project.',
    year: '2023',
  },
]

export function PersonalProjects() {
  return (
    <Section spine>
      <hr className="rule mb-6" />
      
      <h2 className="font-headline text-section text-foreground mb-6">
        personal projects
      </h2>

      <div className="max-w-prose space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-baseline justify-between mb-1.5">
              <h3 className="text-large font-headline text-foreground">{project.name}</h3>
              <span className="text-small text-muted tabular-nums">{project.year}</span>
            </div>
            <p className="text-body text-foreground/75 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

