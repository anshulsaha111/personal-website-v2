'use client'

import { Sprout, ThreeLeaf, Grass, Daisy, Tulip, Bush, Wildflower, Weed, Fern } from './plants'

// Fixed positions for a hand-crafted lush garden landscape
const gardenElements = [
  // Far left
  { Component: Fern, x: 0, size: 45, delay: 0 },
  { Component: Grass, x: 3, size: 25, delay: 200 },
  { Component: Wildflower, x: 5, size: 32, delay: 100, props: { color: '#d4726a' } },
  { Component: Weed, x: 7, size: 35, delay: 300 },
  { Component: Sprout, x: 9, size: 28, delay: 150 },
  
  // Left section
  { Component: Daisy, x: 11, size: 40, delay: 0, props: { petalColor: '#e8b84a' } },
  { Component: Grass, x: 13, size: 22, delay: 400 },
  { Component: ThreeLeaf, x: 14, size: 38, delay: 200 },
  { Component: Bush, x: 16, size: 55, delay: 100 },
  { Component: Tulip, x: 18, size: 38, delay: 300, props: { petalColor: '#e86a33' } },
  { Component: Weed, x: 20, size: 30, delay: 150 },
  { Component: Grass, x: 21, size: 28, delay: 500 },
  
  // Left-center
  { Component: Wildflower, x: 23, size: 30, delay: 0, props: { color: '#e86a33' } },
  { Component: Sprout, x: 25, size: 32, delay: 250 },
  { Component: Daisy, x: 27, size: 42, delay: 100, props: { petalColor: '#d4726a' } },
  { Component: Fern, x: 29, size: 40, delay: 350 },
  { Component: Grass, x: 31, size: 24, delay: 200 },
  { Component: ThreeLeaf, x: 32, size: 35, delay: 400 },
  
  // Center
  { Component: Tulip, x: 34, size: 42, delay: 0, props: { petalColor: '#d4726a' } },
  { Component: Weed, x: 36, size: 32, delay: 150 },
  { Component: Bush, x: 38, size: 60, delay: 300 },
  { Component: Grass, x: 40, size: 26, delay: 100 },
  { Component: Wildflower, x: 42, size: 35, delay: 450, props: { color: '#e8b84a' } },
  { Component: Sprout, x: 44, size: 30, delay: 200 },
  { Component: Daisy, x: 46, size: 38, delay: 350, props: { petalColor: '#e8b84a' } },
  
  // Right-center
  { Component: Fern, x: 48, size: 42, delay: 0 },
  { Component: Grass, x: 50, size: 28, delay: 250 },
  { Component: Tulip, x: 52, size: 40, delay: 100, props: { petalColor: '#e86a33' } },
  { Component: ThreeLeaf, x: 54, size: 36, delay: 400 },
  { Component: Weed, x: 56, size: 34, delay: 150 },
  { Component: Wildflower, x: 58, size: 32, delay: 300, props: { color: '#d4726a' } },
  { Component: Grass, x: 60, size: 22, delay: 500 },
  
  // Right section
  { Component: Bush, x: 62, size: 58, delay: 0 },
  { Component: Sprout, x: 64, size: 30, delay: 200 },
  { Component: Daisy, x: 66, size: 44, delay: 100, props: { petalColor: '#e86a33' } },
  { Component: Grass, x: 68, size: 26, delay: 350 },
  { Component: ThreeLeaf, x: 70, size: 40, delay: 150 },
  { Component: Weed, x: 72, size: 36, delay: 400 },
  { Component: Tulip, x: 74, size: 36, delay: 250, props: { petalColor: '#e8b84a' } },
  
  // Far right
  { Component: Fern, x: 76, size: 38, delay: 0 },
  { Component: Grass, x: 78, size: 30, delay: 300 },
  { Component: Wildflower, x: 80, size: 34, delay: 100, props: { color: '#e8b84a' } },
  { Component: Sprout, x: 82, size: 28, delay: 450 },
  { Component: Bush, x: 84, size: 52, delay: 200 },
  { Component: Daisy, x: 87, size: 40, delay: 350, props: { petalColor: '#d4726a' } },
  { Component: Grass, x: 89, size: 24, delay: 150 },
  { Component: Weed, x: 91, size: 32, delay: 500 },
  { Component: ThreeLeaf, x: 93, size: 34, delay: 100 },
  { Component: Tulip, x: 95, size: 38, delay: 400, props: { petalColor: '#d4726a' } },
  { Component: Grass, x: 97, size: 26, delay: 250 },
  { Component: Fern, x: 99, size: 42, delay: 0 },
]

export function HeroGarden() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 pointer-events-none overflow-hidden">
      {gardenElements.map((element, index) => {
        const { Component, x, size, delay, props = {} } = element
        const randomOffset = (index * 7) % 3 - 1 // Slight variation
        
        return (
          <div
            key={index}
            className="absolute bottom-0 origin-bottom"
            style={{
              left: `${x + randomOffset}%`,
              animationDelay: `${delay}ms`,
              zIndex: Math.floor(Math.random() * 5) + 1,
            }}
          >
            <Component size={size} {...props} />
          </div>
        )
      })}
    </div>
  )
}

