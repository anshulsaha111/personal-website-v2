'use client'

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
 */

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#projects' },
  { label: 'writing', href: '#writing' },
  { label: 'contact', href: '#contact' },
]

export function Header() {
  const { theme, toggleTheme, isTransitioning } = useTheme()
  
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-caption 
                  text-foreground/40 
                  hover:text-foreground/60 
                  transition-colors 
                  duration-300 
                  font-body
                "
              >
                {link.label}
              </a>
            ))}
            
            {/* Subtle separator before theme toggle */}
            <span className="text-foreground/20 select-none" aria-hidden="true">·</span>
            
            {/* Theme toggle — utilitarian, not emphasized */}
            <button
              onClick={toggleTheme}
              disabled={isTransitioning}
              className="
                text-caption 
                text-foreground/30 
                hover:text-foreground/50 
                transition-colors 
                duration-300 
                font-body 
                disabled:opacity-50
              "
              aria-label={`Switch to ${theme === 'sun' ? 'dark' : 'light'} mode`}
            >
              {theme === 'sun' ? 'dark' : 'light'}
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
