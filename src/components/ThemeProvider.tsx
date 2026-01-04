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
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('garden-theme') as Theme | null
    if (savedTheme && (savedTheme === 'sun' || savedTheme === 'moon')) {
      setTheme(savedTheme)
      if (savedTheme === 'moon') {
        document.documentElement.classList.add('dark')
      }
    }
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

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'sun', toggleTheme: () => {}, isTransitioning: false }}>
        <div style={{ visibility: 'hidden' }}>
          {children}
        </div>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  )
}
