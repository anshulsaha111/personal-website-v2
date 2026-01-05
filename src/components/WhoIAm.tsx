'use client'

import { Section } from './Section'

export function WhoIAm() {
  return (
    <Section id="about" width="content" spine>
      <div className="max-w-prose">
        <h2 className="font-headline text-section text-foreground mb-8">
          who am i
        </h2>
        
        <div className="prose-container text-foreground/90">
          <p>
            I&apos;ve spent the last eight years at the intersection of machine learning and product — 
            not as an observer, but as someone who builds. I started as a data scientist, 
            which means I know what happens when a model meets messy data at 2AM.
          </p>
          <p>
            Now I lead AI product teams. I translate research papers into shipped features. 
            I sit between the ML engineers who want perfection and the users who just want it to work.
          </p>
          <p>
            My work has touched recommendation systems, search infrastructure, 
            and more recently, generative AI applications. 
            The thread connecting all of it: making complex systems feel simple.
          </p>
        </div>
      </div>
    </Section>
  )
}
