'use client'

import { GardenSection } from './GardenSection'
import { CapabilityItem } from './CapabilityItem'

const capabilities = [
  'Turn ML research into shipped products',
  'Build AI roadmaps that survive board meetings',
  'Bridge the gap between data science and product',
  'Design evaluation frameworks that actually matter',
  'Navigate the build vs. buy decision for AI',
  'Ship LLM features without burning budget',
  'Make AI systems that users trust',
]

export function WhatIHelpWith() {
  return (
    <GardenSection gardenDensity="medium" gardenPosition="bottom">
      <h2 className="font-headline text-section text-foreground mb-10">
        what i help with
      </h2>

      <div className="max-w-2xl">
        {capabilities.map((capability) => (
          <CapabilityItem key={capability} text={capability} />
        ))}
      </div>
    </GardenSection>
  )
}
