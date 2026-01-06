'use client'

import { Section } from './Section'

const roles = [
  { title: 'Associate Product Manager', company: 'Licious', dates: '2025 — Present' },
  { title: 'Data Scientist & Product Analyst', company: 'Licious', dates: '2024 — 2025' },
  { title: 'Product Associate', company: 'Intugine Technologies', dates: '2023 — 2024' },
  { title: 'Investment Analyst Intern', company: 'Titan Capital', dates: '2022 — 2023' },
]

export function Experience() {
  return (
    <Section id="experience" spine width="full">
      <hr className="rule mb-5" />
      
      <div className="flex items-baseline justify-between mb-5">
        <h2 className="font-headline text-section text-foreground">
          experience
        </h2>
        <a
          href="/resume.pdf"
          download="Anshul_Sahai_Resume.pdf"
          className="group text-small text-accent hover:text-accent/80 transition-colors duration-300 font-medium tracking-wide hover:underline underline-offset-4"
        >
          download resume{' '}
          <span className="inline-block transition-transform duration-300 group-hover:translate-y-[2px]">
            ↓
          </span>
        </a>
      </div>

      <div className="space-y-0">
        {roles.map((role, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 py-2.5 border-b border-foreground/6 last:border-b-0"
          >
            <p className="text-body-lg text-foreground font-semibold">
              {role.title}
            </p>
            <p className="text-body text-muted/75">
              {role.company}
            </p>
            <p className="text-small text-muted/50 font-light tabular-nums sm:ml-auto">
              {role.dates}
            </p>
            </div>
        ))}
      </div>

      <p className="text-small text-muted/70 mt-5">
      Each role has shaped me & taught me how to think about building products & audience.
      </p>
    </Section>
  )
}

