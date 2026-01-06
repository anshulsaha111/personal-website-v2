'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'sun' | 'moon'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'sun',
  toggleTheme: () => {},
  isTransitioning: false,
})

export function useTheme() {
  return useContext(ThemeContext)
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('sun')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Load theme from localStorage on mount and reset scroll
  useEffect(() => {
    // Aggressively reset scroll to top
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('garden-theme') as Theme | null
    if (savedTheme && (savedTheme === 'sun' || savedTheme === 'moon')) {
      setTheme(savedTheme)
      if (savedTheme === 'moon') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    
    // Also reset on page show (handles back/forward navigation)
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.scrollTo(0, 0)
      }
    }
    
    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [])

  const toggleTheme = () => {
    setIsTransitioning(true)
    
    const newTheme = theme === 'sun' ? 'moon' : 'sun'
    
    // Start transition
    setTimeout(() => {
      setTheme(newTheme)
      localStorage.setItem('garden-theme', newTheme)
      
      if (newTheme === 'moon') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // End transition after colors have changed
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    }, 300) // Delay for sun/moon animation to start
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  )
}
