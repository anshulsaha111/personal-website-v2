'use client'

import { motion } from 'framer-motion'

interface CapabilityItemProps {
  text: string
}

export function CapabilityItem({ text }: CapabilityItemProps) {
  return (
    <motion.div
      className="group flex items-center gap-4 py-3 cursor-default"
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
    >
      <span className="w-2 h-2 rounded-full bg-garden-stem group-hover:bg-accent transition-colors duration-200" />
      <span className="font-headline text-large text-foreground/85 group-hover:text-foreground transition-colors duration-200">
        {text}
      </span>
    </motion.div>
  )
}
