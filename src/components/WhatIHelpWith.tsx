'use client'

import { Section } from './Section'
import { CapabilityItem } from './CapabilityItem'

const capabilities = [
  { prefix: 'Validate ideas early through ', highlight: 'rapid prototyping' },
  { prefix: 'Navigate ', highlight: 'build vs. buy', suffix: ' decisions for AI' },
  { prefix: 'Turn ML research into ', highlight: 'shipped products' },
  { prefix: 'Design ', highlight: 'evaluation frameworks', suffix: ' and feedback loops' },
  { prefix: 'Build AI ', highlight: 'roadmaps ', suffix: 'that hold up over time' },
  { prefix: 'Translate tradeoffs into ', highlight: 'business impact' },
  { prefix: 'Drive ', highlight: 'adoption and GTM', suffix: ' for AI products' },
]

export function WhatIHelpWith() {
  return (
    <Section spine>
      <hr className="rule mb-8" />
      
      <h2 className="font-headline text-section text-foreground mb-8">
        what i help with 
      </h2>

      <div className="max-w-prose">
        {capabilities.map((capability, index) => (
          <CapabilityItem key={index} capability={capability} />
        ))}
      </div>
    </Section>
  )
}
