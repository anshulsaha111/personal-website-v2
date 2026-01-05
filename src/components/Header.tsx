'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

/**
 * Header / Navigation
 * 
 * Design intent: Infrastructural frame, not content.
 * Should feel invisible when reading, reassuring when navigating.
 * 
 * Key decisions:
 * - Sticky (not fixed) to respect document flow
 * - Lower contrast text to not compete with body content
 * - Compact height to reduce visual dominance
 * - Hairline divider marks structural boundary
 * - No motion, shadows, or decorative elements
 * - Active section indicator provides subtle orientation
 */

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'writing', href: '#writing' },
  { label: 'contact', href: '#contact' },
]

export function Header() {
  const { theme, toggleTheme, isTransitioning } = useTheme()
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is ~30% into viewport
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.querySelector(link.href)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])
  
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
      {/* Navigation container — aligned to page grid */}
      <div className="page-grid">
        <nav 
          className="flex items-center justify-between py-2 md:py-3"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Site identifier — quiet, structural */}
          <a 
            href="#" 
            className="
              text-caption 
              font-body 
              text-foreground/40 
              hover:text-foreground/60 
              transition-colors 
              duration-300
              tracking-wider
              uppercase
            "
          >
            Anshul Sahai
          </a>
          
          {/* Navigation links — secondary to content */}
          <div className="flex items-center gap-5 md:gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
              <a
                key={link.href}
                href={link.href}
                  className={`
                  text-caption 
                    ${isActive ? 'text-foreground/80 border-b-2 border-foreground/50' : 'text-foreground/40'} 
                  hover:text-foreground/60 
                    transition-all
                  duration-300 
                  font-body
                    pb-0.5
                  `}
              >
                {link.label}
              </a>
              )
            })}
            
            {/* Theme toggle — utilitarian, not emphasized */}
            <button
              onClick={toggleTheme}
              disabled={isTransitioning}
              className="
                text-body
                text-foreground/30 
                hover:text-foreground/50 
                transition-colors 
                duration-300 
                disabled:opacity-50
              "
              aria-label={`Switch to ${theme === 'sun' ? 'dark' : 'light'} mode`}
            >
              {theme === 'sun' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Hairline divider — structural boundary */}
      <div className="page-grid">
        <div 
          className="h-px bg-foreground/[0.06]" 
          role="separator" 
          aria-hidden="true" 
        />
      </div>
    </header>
  )
}
