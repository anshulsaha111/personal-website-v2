'use client'

import { Section } from './Section'
import { WritingItem } from './WritingItem'

const essays = [
  { number: '01', title: 'Why Most AI Products Fail at Launch', href: '/writing/ai-products-fail' },
  { number: '02', title: 'When to Fine-Tune vs. Prompt Engineer', href: '/writing/fine-tune-vs-prompt' },
]

export function Writing() {
  return (
    <Section id="writing" spine>
      <hr className="rule mb-5" />
      
      <h2 className="font-headline text-section text-foreground mb-5">
        writing
      </h2>

      <div className="max-w-prose">
        {essays.map((essay) => (
          <WritingItem key={essay.href} {...essay} />
        ))}
      </div>
    </Section>
  )
}
