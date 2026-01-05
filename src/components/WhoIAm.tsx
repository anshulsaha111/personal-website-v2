'use client'

import { Section } from './Section'

export function WhoIAm() {
  return (
    <Section id="about" width="content" spine>
      <div className="max-w-prose">
        <h2 className="font-headline text-section text-foreground mb-6">
          who am i
        </h2>
        
        <div className="prose-container text-foreground/90">
          <p>
            I&apos;ve spent the last few years working at the intersection of machine learning and product - 
            not from the sidelines, but inside messy, real systems. I started as a data scientist,
            which means I know what happens when a model meets messy data at 2AM.
          </p>
          <p>
            Over time, I moved into product because I cared less about models in isolation and more about 
            whether they actually shipped, got used, and moved a business metric. Today, I work as an AI 
            Product Manager - sitting between engineering teams and users.
          </p>
          <p>
            My work has touched systems across analytics, supply chain, and generative AI - from LLM-powered 
            internal tools to optimization engines running daily operations. The common thread in all of it: 
            making complex systems feel simple.
          </p>
        </div>
      </div>
    </Section>
  )
}
