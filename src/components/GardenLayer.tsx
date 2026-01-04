'use client'

import { useMemo } from 'react'
import { Sprout, ThreeLeaf, Grass, Daisy, Tulip, Vine, Bush, Wildflower, Weed, Fern } from './plants'

type GardenDensity = 'sparse' | 'light' | 'medium' | 'dense' | 'lush'

interface GardenLayerProps {
  density?: GardenDensity
  position?: 'bottom' | 'sides' | 'both'
  className?: string
}

// Plant components with their relative sizes and weights
const plants = [
  { Component: Sprout, weight: 3, size: 'sm' },
  { Component: ThreeLeaf, weight: 2, size: 'md' },
  { Component: Grass, weight: 5, size: 'sm' },
  { Component: Weed, weight: 3, size: 'sm' },
  { Component: Fern, weight: 2, size: 'md' },
  { Component: Daisy, weight: 1, size: 'md', props: { petalColor: '#e8b84a' } },
  { Component: Daisy, weight: 1, size: 'md', props: { petalColor: '#d4726a' } },
  { Component: Wildflower, weight: 2, size: 'sm', props: { color: '#d4726a' } },
  { Component: Wildflower, weight: 2, size: 'sm', props: { color: '#e86a33' } },
  { Component: Tulip, weight: 1, size: 'lg', props: { petalColor: '#d4726a' } },
  { Component: Tulip, weight: 1, size: 'lg', props: { petalColor: '#e86a33' } },
  { Component: Bush, weight: 1, size: 'lg' },
]

const densityConfig: Record<GardenDensity, { count: number; spread: number }> = {
  sparse: { count: 6, spread: 22 },
  light: { count: 10, spread: 16 },
  medium: { count: 16, spread: 10 },
  dense: { count: 24, spread: 6 },
  lush: { count: 36, spread: 4 },
}

const sizeScale = {
  sm: 0.7,
  md: 1,
  lg: 1.3,
}

// Seeded random for consistent plant placement
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function selectPlant(seed: number) {
  const totalWeight = plants.reduce((sum, p) => sum + p.weight, 0)
  let random = seededRandom(seed) * totalWeight
  
  for (const plant of plants) {
    random -= plant.weight
    if (random <= 0) return plant
  }
  return plants[0]
}

export function GardenLayer({ density = 'medium', position = 'bottom', className = '' }: GardenLayerProps) {
  const config = densityConfig[density]
  
  const bottomPlants = useMemo(() => {
    if (position === 'sides') return []
    
    return Array.from({ length: config.count }, (_, i) => {
      const plant = selectPlant(i * 17 + 42)
      const leftPos = (i / config.count) * 100 + seededRandom(i * 31) * config.spread - config.spread / 2
      const scale = sizeScale[plant.size as keyof typeof sizeScale] * (0.8 + seededRandom(i * 47) * 0.4)
      const delay = Math.floor(seededRandom(i * 73) * 8) * 100
      const zIndex = Math.floor(seededRandom(i * 89) * 3)
      
      return {
        id: i,
        Component: plant.Component,
        props: plant.props || {},
        style: {
          left: `${Math.max(0, Math.min(98, leftPos))}%`,
          transform: `scale(${scale})`,
          zIndex: 10 + zIndex,
        },
        delayClass: `animate-delay-${delay}`,
      }
    })
  }, [config.count, config.spread, position])
  
  const sidePlants = useMemo(() => {
    if (position === 'bottom') return { left: [], right: [] }
    
    const sideCount = Math.floor(config.count / 4)
    
    const leftPlants = Array.from({ length: sideCount }, (_, i) => {
      const plant = selectPlant(i * 23 + 100)
      const topPos = 20 + (i / sideCount) * 60
      const scale = sizeScale[plant.size as keyof typeof sizeScale] * 0.8
      
      return {
        id: `left-${i}`,
        Component: plant.Component === Vine ? Vine : Sprout,
        props: plant.Component === Vine ? { flip: false } : {},
        style: {
          top: `${topPos}%`,
          transform: `scale(${scale})`,
        },
      }
    })
    
    const rightPlants = Array.from({ length: sideCount }, (_, i) => {
      const plant = selectPlant(i * 29 + 200)
      const topPos = 25 + (i / sideCount) * 55
      const scale = sizeScale[plant.size as keyof typeof sizeScale] * 0.8
      
      return {
        id: `right-${i}`,
        Component: plant.Component === Vine ? Vine : ThreeLeaf,
        props: plant.Component === Vine ? { flip: true } : {},
        style: {
          top: `${topPos}%`,
          transform: `scale(${scale}) scaleX(-1)`,
        },
      }
    })
    
    return { left: leftPlants, right: rightPlants }
  }, [config.count, position])
  
  return (
    <>
      {/* Bottom garden */}
      {(position === 'bottom' || position === 'both') && (
        <div className={`absolute bottom-0 left-0 right-0 h-28 pointer-events-none overflow-hidden ${className}`}>
          {bottomPlants.map(({ id, Component, props, style, delayClass }) => (
            <div
              key={id}
              className={`absolute bottom-0 origin-bottom ${delayClass}`}
              style={style}
            >
              <Component {...props} />
            </div>
          ))}
        </div>
      )}
      
      {/* Side gardens */}
      {(position === 'sides' || position === 'both') && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none overflow-hidden">
            {sidePlants.left.map(({ id, Component, props, style }) => (
              <div
                key={id}
                className="absolute left-2 origin-bottom"
                style={style}
              >
                <Component {...props} />
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none overflow-hidden">
            {sidePlants.right.map(({ id, Component, props, style }) => (
              <div
                key={id}
                className="absolute right-2 origin-bottom"
                style={style}
              >
                <Component {...props} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
