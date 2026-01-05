'use client'

import { Section } from './Section'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    id: 'account-expansion-analyst',
    title: 'Account Expansion Analyst',
    description: 'Agentic AI for post-sale expansion and churn detection',
    previewUrl: 'https://account-expansion-analyst.vercel.app/',
    caseStudyUrl: '/projects/account-expansion-analyst',
    liveUrl: 'https://account-expansion-analyst.vercel.app/',
  },
  // Add more projects here as needed
]

export function PersonalProjects() {
  return (
    <Section spine width="full">
      <hr className="rule mb-6" />

      <h2 className="font-headline text-section text-foreground mb-6">
        personal projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            previewUrl={project.previewUrl}
            caseStudyUrl={project.caseStudyUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </Section>
  )
}
