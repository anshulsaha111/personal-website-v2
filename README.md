# Personal Website v2 — Garden Edition

A whimsical, organic personal website for an AI/ML Product Manager. Features a growing garden aesthetic with sun/moon mode toggle.

## Design Philosophy

- **Organic & Calming**: Hand-drawn style SVG plants create a garden that grows as you scroll
- **Sun/Moon Mode**: Toggle between warm daytime and peaceful nighttime themes
- **Typography-first**: Expressive headlines with highly readable body text
- **Generous whitespace**: Content breathes, creating a relaxed reading experience

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **MDX** for writing/blog content

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design System

### Color Palette

**Sun Mode (Light)**
- Background: `#faf8f5` (warm off-white)
- Text: `#3d3929` (dark warm brown)
- Accent: `#e86a33` (warm orange)
- Muted: `#7d7564` (warm gray)

**Moon Mode (Dark)**
- Background: `#0f172a` (deep navy)
- Text: `#e2e0d8` (soft cream)
- Accent: `#6b8cae` (muted blue)
- Muted: `#64748b` (slate)

**Garden Colors**
- Leaf green: `#5a7c47` (sun) / `#3d5a35` (moon)
- Stem: `#7d9a6a` (sun) / `#4a6b42` (moon)
- Flower orange: `#e86a33`
- Flower pink: `#d4726a`
- Flower yellow: `#e8b84a`

### Typography

- **Headlines**: Fraunces (variable serif, expressive)
- **Body**: Nunito (rounded, friendly sans-serif)

## Features

### Sun/Moon Toggle
Click "moon mode" or "sun mode" in the navigation to switch themes. The sun animates down and moon rises (and vice versa), with smooth color transitions.

### Growing Garden
The garden density increases as you scroll:
- **Hero**: Sparse — few plants
- **About**: Light — plants on sides
- **What I Help With**: Medium — more plants
- **Selected Work**: Dense — flowers appearing
- **Contact**: Lush — full garden floor

### Plant Components
Custom SVG plants with subtle swaying animations:
- Sprout, ThreeLeaf, Grass
- Daisy, Tulip (with configurable petal colors)
- Vine, Bush

## Structure

```
src/
├── app/
│   ├── page.tsx              # Main page with all sections
│   ├── layout.tsx            # Root layout with fonts & ThemeProvider
│   ├── globals.css           # CSS variables & animations
│   └── writing/              # MDX blog posts
├── components/
│   ├── ThemeProvider.tsx     # Sun/Moon context & toggle
│   ├── Header.tsx            # Navigation with theme toggle
│   ├── Hero.tsx              # Landing section
│   ├── GardenSection.tsx     # Section wrapper with garden
│   ├── GardenLayer.tsx       # Plant placement logic
│   ├── Sun.tsx               # Animated sun SVG
│   ├── Moon.tsx              # Animated moon SVG
│   ├── plants/               # Individual plant components
│   └── ...                   # Section components
└── mdx-components.tsx        # MDX styling
```

## License

MIT
