'use client'

import { Section } from './Section'
import { ProjectBlock } from './ProjectBlock'

const projects = [
  {
    name: 'Enterprise Search Replatform',
    description: 'Led the migration from Elasticsearch to a vector-first architecture. Reduced latency by 60% while improving relevance metrics across 200M documents.',
    tags: 'Search · Embeddings · Infra',
    variant: 'normal' as const,
  },
  {
    name: 'Recommendation Engine v3',
    description: 'Shipped a hybrid collaborative-content system that increased engagement 34%. The key insight: users don\'t want more options, they want better defaults.',
    tags: 'ML Systems · A/B Testing · Personalization',
    variant: 'indented' as const,
  },
  {
    name: 'LLM-Powered Support Agent',
    description: 'Built an internal copilot that reduced ticket resolution time from 4 hours to 18 minutes. Now handles 40% of tier-1 support autonomously.',
    tags: 'LLMs · RAG · Production AI',
    variant: 'wide' as const,
  },
  {
    name: 'Data Quality Platform',
    description: 'Created an automated pipeline monitoring system that catches data drift before it breaks models. Prevented three major incidents in its first quarter.',
    tags: 'Data Engineering · MLOps · Monitoring',
    variant: 'normal' as const,
  },
  {
    name: 'Pricing Intelligence System',
    description: 'Designed an ML-driven pricing engine that adapts to market conditions in real-time. Contributed to a 12% margin improvement across product lines.',
    tags: 'Dynamic Pricing · Time Series · Strategy',
    variant: 'indented' as const,
  },
]

export function SelectedWork() {
  return (
    <Section id="projects" spine>
      <hr className="rule mb-8" />
      
      <h2 className="font-headline text-section text-foreground mb-8">
        selected work
      </h2>

      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectBlock key={project.name} {...project} />
        ))}
      </div>
    </Section>
  )
}
