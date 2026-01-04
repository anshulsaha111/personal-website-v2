import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dynamic theme colors (via CSS variables)
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        
        // Sun mode palette
        sun: {
          bg: '#faf8f5',
          text: '#3d3929',
          accent: '#e86a33',
          muted: '#7d7564',
        },
        
        // Moon mode palette
        moon: {
          bg: '#0f172a',
          text: '#e2e0d8',
          accent: '#6b8cae',
          muted: '#64748b',
        },
        
        // Garden colors
        garden: {
          leaf: 'var(--color-leaf)',
          stem: 'var(--color-stem)',
          'leaf-sun': '#5a7c47',
          'leaf-moon': '#3d5a35',
          'stem-sun': '#7d9a6a',
          'stem-moon': '#4a6b42',
          orange: '#e86a33',
          pink: '#d4726a',
          yellow: '#e8b84a',
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'large': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        'content': '1100px',
        'prose': '680px',
      },
      spacing: {
        'section': 'clamp(4rem, 10vh, 8rem)',
      },
      animation: {
        'sway': 'sway 4s ease-in-out infinite',
        'sway-slow': 'sway 6s ease-in-out infinite',
        'sway-fast': 'sway 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
