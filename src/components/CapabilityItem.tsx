'use client'

import { motion } from 'framer-motion'

interface CapabilityItemProps {
  capability: {
    prefix: string
    highlight: string
    suffix?: string
  }
}

export function CapabilityItem({ capability }: CapabilityItemProps) {
  return (
    <motion.div
      className="group flex items-start gap-2 sm:gap-3 py-2 sm:py-2.5 cursor-default"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <span className="w-1 h-1 rounded-full bg-foreground/20 group-hover:bg-accent transition-colors duration-200 mt-2 sm:mt-2.5 flex-shrink-0" />
      <span className="font-headline text-body-lg sm:text-large text-foreground/85 group-hover:text-foreground transition-colors duration-200">
        {capability.prefix}
        <strong className="font-semibold">{capability.highlight}</strong>
        {capability.suffix}
      </span>
    </motion.div>
  )
}
