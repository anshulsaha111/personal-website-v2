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
        rule: 'var(--color-rule)',
        
        // Light mode palette (editorial)
        light: {
          bg: '#faf8f5',
          text: '#1f1f1f',
          accent: '#5b7a8f',
          muted: '#6e6e6e',
        },
        
        // Dark mode palette (editorial)
        dark: {
          bg: '#0f172a',
          text: '#e8e8e8',
          accent: '#7a9aaf',
          muted: '#9a9a9a',
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'section': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'large': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.45' }],
        'body-lg': ['1.125rem', { lineHeight: '1.8' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'small': ['0.875rem', { lineHeight: '1.65' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      
      // ==============================================
      // GRID SYSTEM — Living Blueprint
      // ==============================================
      // Based on 12-column grid with 8px base unit
      // Visible in rhythm, not in weight
      
      maxWidth: {
        // Container hierarchy
        'grid': '1200px',      // Full grid container
        'content': '1000px',   // Primary content (10 cols)
        'prose': '680px',      // Reading width (7 cols)
        'narrow': '560px',     // Focused content (6 cols)
        'margin': '240px',     // Margin note width (2.5 cols)
      },
      
      // Spacing scale — 8px base unit
      // Named for intent, not just size
      spacing: {
        // Base increments
        'px': '1px',
        '0.5': '4px',      // 0.5 base
        '1': '8px',        // 1 base
        '1.5': '12px',     // 1.5 base
        '2': '16px',       // 2 base
        '3': '24px',       // 3 base
        '4': '32px',       // 4 base
        '5': '40px',       // 5 base
        '6': '48px',       // 6 base
        '8': '64px',       // 8 base
        '10': '80px',      // 10 base
        '12': '96px',      // 12 base
        '16': '128px',     // 16 base
        
        // Semantic spacing
        'gutter': '24px',                          // Column gutter
        'margin-mobile': '24px',                   // Page margin (mobile)
        'margin-tablet': '48px',                   // Page margin (tablet)
        'margin-desktop': '64px',                  // Page margin (desktop)
        'section': 'clamp(80px, 10vh, 120px)',     // Between sections (reduced ~17%)
        'section-sm': 'clamp(56px, 7vh, 80px)',    // Smaller section gap (reduced ~17%)
        'block': '40px',                           // Between content blocks (reduced ~17%)
        'element': '20px',                         // Between elements (reduced ~17%)
        'tight': '12px',                           // Tight element spacing (reduced 25%)
        'micro': '8px',                            // Micro adjustments
        'header': '41px',                          // Header height (reserved)
      },
      
      // Grid template columns
      gridTemplateColumns: {
        // 12-column base grid
        '12': 'repeat(12, minmax(0, 1fr))',
        
        // Common layouts
        'main': '1fr',                                           // Single column
        'main-margin': '1fr 240px',                              // Content + margin
        'margin-main': '240px 1fr',                              // Margin + content
        'asymmetric': '2fr 1fr',                                 // 2:1 split
        'sidebar': '280px 1fr',                                  // Sidebar layout
      },
      
      // Gap scale (uses spacing values)
      gap: {
        'gutter': '24px',
        'row': '48px',
        'col': '24px',
      },
    },
  },
  plugins: [],
}

export default config
