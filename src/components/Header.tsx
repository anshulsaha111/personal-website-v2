'use client'

import { useTheme } from './ThemeProvider'
import { Sun } from './Sun'
import { Moon } from './Moon'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'me', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'writing', href: '#writing' },
  { label: 'contact', href: '#contact' },
]

export function Header() {
  const { theme, toggleTheme, isTransitioning } = useTheme()
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="max-w-content mx-auto flex items-center justify-between">
        {/* Sun/Moon indicator */}
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Sun size={60} isVisible={theme === 'sun'} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Moon size={50} isVisible={theme === 'moon'} />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-body text-foreground/80 hover:text-accent transition-colors duration-200 font-body lowercase"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.label}
            </motion.a>
          ))}
          
          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            disabled={isTransitioning}
            className="text-body text-accent hover:text-accent/80 transition-colors duration-200 font-body lowercase disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'sun' ? 'moon mode' : 'sun mode'}
          </motion.button>
        </nav>
      </div>
    </header>
  )
}

