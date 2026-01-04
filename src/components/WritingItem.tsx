'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface WritingItemProps {
  number: string
  title: string
  href: string
}

export function WritingItem({ number, title, href }: WritingItemProps) {
  return (
    <Link href={href} className="block group">
      <motion.div
        className="flex items-baseline gap-5 py-3"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-body text-small text-muted/50 group-hover:text-muted/30 transition-colors duration-200 w-8 tabular-nums">
          {number}
        </span>
        <span className="font-headline text-large text-foreground/85 group-hover:text-foreground relative">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </span>
      </motion.div>
    </Link>
  )
}
