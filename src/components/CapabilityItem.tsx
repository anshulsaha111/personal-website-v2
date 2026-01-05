'use client'

import { motion } from 'framer-motion'

interface CapabilityItemProps {
  text: string
}

export function CapabilityItem({ text }: CapabilityItemProps) {
  return (
    <motion.div
      className="group flex items-center gap-element py-tight cursor-default"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-rule group-hover:bg-accent transition-colors duration-200" />
      <span className="font-headline text-large text-foreground/85 group-hover:text-foreground transition-colors duration-200">
        {text}
      </span>
    </motion.div>
  )
}
