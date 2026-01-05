'use client'

import { useState } from 'react'
import { Section } from './Section'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string
  title: string
  oneLine: string
  description: string
  impact: string[]
  tools: string[]
}

const projects: Project[] = [
  {
    id: 'cortex',
    title: 'NL → SQL Analytics Platform (Cortex)',
    oneLine: 'Self-serve analytics for business teams, powered by LLMs',
    description: 'Built and launched an internal NL→SQL platform enabling non-technical teams to query live data without analyst support.',
    impact: [
      'Enabled 100+ business users to self-serve analytics',
      'Reduced ad-hoc analyst workload by 15+ hours per analyst per week',
      'Took the system from hackathon prototype → production → org-wide rollout',
    ],
    tools: ['LLMs', 'schema grounding', 'prompt design', 'evaluation metrics', 'feedback loops', 'phased rollout'],
  },
  {
    id: 'vendor-bidding',
    title: 'LLM-Powered Vendor Bidding & Approval System',
    oneLine: 'Automated vendor bid ingestion and decisioning from WhatsApp',
    description: 'Designed an LLM system to parse unstructured vendor bids from WhatsApp and route them through a centralized, auditable approval workflow.',
    impact: [
      'Eliminated manual bid parsing and informal approval channels',
      'Reduced decision turnaround time and cut manual effort by ~80%',
      'Improved traceability and reduced operational errors',
    ],
    tools: ['LLM-based structured extraction', 'workflow automation', 'human-in-the-loop controls'],
  },
  {
    id: 'auto-batching',
    title: 'Auto-Batching & Trip Allocation Engine',
    oneLine: 'Optimization system for logistics execution at scale',
    description: 'Designed and deployed a patent-pending auto-batching algorithm to automate trip generation, driver allocation, and 3PL offloading across multi-city operations.',
    impact: [
      'Eliminated manual trip planning across 6+ cities',
      'Reduced operational errors to zero',
      'Improved execution speed and consistency',
    ],
    tools: ['Optimization and constraint modeling', 'sequencing heuristics', 'simulation', 'ops collaboration'],
  },
  {
    id: 'hub-task',
    title: 'Hub Task Allocation Engine',
    oneLine: 'Load balancing and real-time task prioritization for operations',
    description: 'Built a task allocation system to dynamically prioritize and distribute hub-level tasks based on capacity, urgency, and execution constraints.',
    impact: [
      'Balanced workload during peak operations',
      'Reduced bottlenecks and missed SLAs',
      'Improved execution consistency without manual intervention',
    ],
    tools: ['Rule-based prioritization', 'capacity modeling', 'real-time signals', 'feedback loops'],
  },
]

export function SelectedWork() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <Section id="projects" spine width="full">
      <hr className="rule mb-6" />
      
      <h2 className="font-headline text-section text-foreground mb-6">
        selected work
      </h2>

      <div className="space-y-0">
        {projects.map((project, index) => {
          const isExpanded = expandedId === project.id
          const isLast = index === projects.length - 1

          return (
            <div
              key={project.id}
              className={`border-b border-foreground/6 ${isLast ? 'border-b-0' : ''}`}
            >
              <button
                onClick={() => toggleProject(project.id)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group transition-colors duration-300"
                aria-expanded={isExpanded}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline text-large text-foreground mb-1 group-hover:text-foreground/80 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-body text-muted">
                    {project.oneLine}
                  </p>
                </div>
                
                <motion.div
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-300 ${
                    isExpanded ? 'text-foreground/60' : 'text-foreground/40 group-hover:text-foreground/60'
                  }`}
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="8"
                      y1="3"
                      x2="8"
                      y2="13"
                      stroke="currentColor"
                      strokeWidth={isExpanded ? '2' : '1.5'}
                      strokeLinecap="round"
                    />
                    <line
                      x1="3"
                      y1="8"
                      x2="13"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth={isExpanded ? '2' : '1.5'}
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
                      opacity: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-0 pr-24">
                      <p className="text-body text-foreground/85 mb-3 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-3.5">
                        <div className="mb-1.5 pt-3 border-t border-foreground/4">
                          <p className="text-small uppercase tracking-widest text-foreground/50 mb-2">
                            Impact
                          </p>
                        </div>
                        <ul className="space-y-1">
                          {project.impact.map((item, i) => (
                            <li
                              key={i}
                              className="text-body text-foreground/85 leading-relaxed flex items-start"
                            >
                              <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-small text-muted/60 leading-relaxed">
                        Tools & methods — {project.tools.join(', ')}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
