'use client'

import { motion } from 'framer-motion'

interface ProjectBlockProps {
  name: string
  description: string
  tags?: string
  variant?: 'normal' | 'indented' | 'wide'
}

export function ProjectBlock({ name, description, tags, variant = 'normal' }: ProjectBlockProps) {
  const widthClass = {
    normal: 'max-w-prose',
    indented: 'max-w-prose ml-8 md:ml-16',
    wide: 'max-w-2xl',
  }[variant]

  return (
    <motion.div
      className={`${widthClass} py-6 border-b border-foreground/10 last:border-b-0`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-headline text-large text-foreground mb-2">{name}</h3>
      <p className="text-body-lg text-foreground/75 mb-2">{description}</p>
      {tags && (
        <p className="text-small text-muted">{tags}</p>
      )}
    </motion.div>
  )
}
