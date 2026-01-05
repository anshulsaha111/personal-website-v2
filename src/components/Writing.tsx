'use client'

import { Section } from './Section'
import { WritingItem } from './WritingItem'

const essays = [
  { number: '01', title: 'Why Most AI Products Fail at Launch', href: '/writing/ai-products-fail' },
  { number: '02', title: 'The Evaluation Problem No One Talks About', href: '/writing/evaluation-problem' },
  { number: '03', title: 'Building Trust in Black-Box Systems', href: '/writing/trust-black-box' },
  { number: '04', title: 'When to Fine-Tune vs. Prompt Engineer', href: '/writing/fine-tune-vs-prompt' },
  { number: '05', title: 'The PM\'s Guide to ML Team Dynamics', href: '/writing/pm-ml-dynamics' },
]

export function Writing() {
  return (
    <Section id="writing" spine>
      <hr className="rule mb-8" />
      
      <h2 className="font-headline text-section text-foreground mb-8">
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
