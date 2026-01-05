import Link from 'next/link'

export default function AccountExpansionAnalystPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="page-grid pt-8 pb-6 border-b border-foreground/[0.06]">
        <Link
          href="/#projects"
          className="text-caption text-foreground/40 hover:text-foreground/60 transition-colors duration-300 tracking-wide uppercase"
        >
          ← Projects
        </Link>
      </div>

      {/* Main content */}
      <article className="page-grid py-block md:py-section-sm">
        <div className="max-w-[900px]">
          {/* Header */}
          <header className="mb-6 pb-5 border-b border-foreground/[0.06]">
            <p className="text-caption text-muted uppercase tracking-widest mb-3">
              Case Study
            </p>
            <h1 className="font-headline text-section text-foreground mb-2 font-medium">
              Account Expansion Analyst
            </h1>
            <p className="text-body-lg text-muted leading-relaxed">
              AI employee for post-sale growth in B2B SaaS
            </p>
          </header>

          {/* Section 01: Why this problem */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">01</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                Why this problem
              </h2>
            </div>
            <div className="pl-12 space-y-4 text-body text-foreground/90 leading-relaxed">
              <p>
                Account Managers in B2B SaaS spend most of their time preparing for expansion and renewals, not actually selling. Critical signals live across CRMs, usage dashboards, support tools, and internal docs, making it hard to identify which accounts are ready to expand and why.
              </p>
              <p>
                For a mid-market SaaS company, this results in millions of dollars in missed expansion revenue every year, even when customers are actively showing buying intent.
              </p>
              <p>
                This problem is high-frequency, high-stakes, and perfectly suited for an AI agent that can reason across systems and act autonomously.
              </p>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 02: The gap */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">02</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                The gap
              </h2>
            </div>
            <div className="pl-12 space-y-6 text-body text-foreground/90 leading-relaxed">
              <div>
                <p className="mb-3">Today there is no system that:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                    <span>Unifies expansion signals across data sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                    <span>Explains why an account is ready to expand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                    <span>Generates tailored pitches and assets instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                    <span>Continuously monitors accounts without manual work</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-3">As a result:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                    <span>60-70% of expansion-ready accounts go unidentified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                    <span>AEs spend 5-8 hours per account on research and prep</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                    <span>Upsell pitches are generic and poorly timed</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 03: The solution */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">03</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                The solution
              </h2>
            </div>
            <div className="pl-12 space-y-4 text-body text-foreground/90 leading-relaxed">
              <p>
                Account Expansion Analyst (AEA) is an AI employee that acts as a dedicated expansion analyst and strategist for every Account Manager.
              </p>
              <p>
                It continuously analyzes accounts, surfaces expansion opportunities with clear reasoning, and generates ready-to-use sales assets in seconds.
              </p>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 04: What the agent does */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">04</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                What the agent does
              </h2>
            </div>
            <div className="pl-12">
              <p className="text-body text-foreground/90 leading-relaxed mb-4">AEA is responsible for:</p>
              <ul className="space-y-3 ml-4 text-body text-foreground/90">
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Identifying expansion-ready accounts and explaining the reasoning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Recommending the right products, tiers, or seat expansions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Generating personalized pitch decks, emails, and talking points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Aggregating CRM, usage, support, and activity data into one view</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Monitoring accounts continuously and updating recommendations</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 05: End-to-end workflow */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-caption text-muted font-mono">05</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                End-to-end workflow
              </h2>
            </div>
            <div className="pl-12 space-y-6">
              {/* Workflow steps */}
              <div className="space-y-5">
                <div className="border-l-2 border-foreground/10 pl-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-caption text-muted font-mono">1</span>
                    <p className="font-semibold text-body text-foreground">The Account Manager opens their portfolio</p>
                  </div>
                  <p className="text-body text-muted leading-relaxed">
                    AEA instantly ranks accounts by expansion potential and churn risk, saving hours of manual analysis.
                  </p>
                </div>

                <div className="border-l-2 border-foreground/10 pl-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-caption text-muted font-mono">2</span>
                    <p className="font-semibold text-body text-foreground">The Account Manager explores an account</p>
                  </div>
                  <p className="text-body text-muted leading-relaxed">
                    AEA presents a unified view of usage trends, support tickets, adoption patterns, and historical context.
                  </p>
                </div>

                <div className="border-l-2 border-foreground/10 pl-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-caption text-muted font-mono">3</span>
                    <p className="font-semibold text-body text-foreground">AEA identifies opportunities</p>
                  </div>
                  <p className="text-body text-muted leading-relaxed">
                    It highlights insights like feature adoption spikes or plan limits reached, along with confidence scores and data sources.
                  </p>
                </div>

                <div className="border-l-2 border-foreground/10 pl-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-caption text-muted font-mono">4</span>
                    <p className="font-semibold text-body text-foreground">The Account Manager selects an expansion path</p>
                  </div>
                  <p className="text-body text-muted leading-relaxed">
                    Options include adding seats, upgrading plans, or cross-selling products.
                  </p>
                </div>

                <div className="border-l-2 border-foreground/10 pl-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-caption text-muted font-mono">5</span>
                    <p className="font-semibold text-body text-foreground">AEA generates assets</p>
                  </div>
                  <p className="text-body text-muted leading-relaxed">
                    Personalized pitch deck, outreach email, talking points, and a CRM opportunity with estimated ARR are created instantly.
                  </p>
                </div>

                <div className="border-l-2 border-foreground/10 pl-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-caption text-muted font-mono">6</span>
                    <p className="font-semibold text-body text-foreground">Outreach and follow-up</p>
                  </div>
                  <p className="text-body text-muted leading-relaxed">
                    AEA continues monitoring signals and updates recommendations automatically.
                  </p>
                </div>
              </div>

              {/* Impact callout */}
              <div className="mt-8 p-5 border border-foreground/10 bg-foreground/[0.02]">
                <p className="text-body text-foreground/90">
                  This workflow saves approximately <strong className="text-foreground">10-15 hours per Account Manager per week</strong>.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 06: Agent architecture */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">06</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                Agent architecture
              </h2>
            </div>
            <div className="pl-12">
              <p className="text-body text-foreground/90 leading-relaxed mb-4">This is an agentic AI system that:</p>
              <ul className="space-y-3 ml-4 text-body text-foreground/90">
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">→</span>
                  <span>Understands the user request</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">→</span>
                  <span>Plans a multi-step workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">→</span>
                  <span>Calls tools to fetch CRM, usage, ticket, and activity data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">→</span>
                  <span>Synthesizes signals into expansion insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">→</span>
                  <span>Generates assets and streams outputs to the UI in real-time</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 07: Prototype implementation */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">07</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                Prototype implementation
              </h2>
            </div>
            <div className="pl-12 space-y-6 text-body text-foreground/90 leading-relaxed">
              <p>The prototype uses a real database and live reasoning.</p>
              
              <div>
                <p className="font-semibold text-foreground mb-3">Tech stack:</p>
                <div className="grid gap-4">
                  <div className="border-l-2 border-foreground/10 pl-4">
                    <p className="text-caption text-muted uppercase tracking-wide mb-1">Frontend</p>
                    <p>Next.js for the frontend</p>
                  </div>
                  <div className="border-l-2 border-foreground/10 pl-4">
                    <p className="text-caption text-muted uppercase tracking-wide mb-1">Database</p>
                    <p>Supabase as the database with five tables: accounts, usage events, support tickets, user activity, opportunities</p>
                  </div>
                  <div className="border-l-2 border-foreground/10 pl-4">
                    <p className="text-caption text-muted uppercase tracking-wide mb-1">AI Layer</p>
                    <p>Claude Sonnet for reasoning, tool calling, and streaming responses</p>
                  </div>
                </div>
              </div>

              <p>
                All insights shown in the UI are generated from synthetic but structured data, designed to mimic real enterprise workflows.
              </p>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 08: Validation approach */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">08</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                Validation approach
              </h2>
            </div>
            <div className="pl-12 grid md:grid-cols-3 gap-6">
              <div className="border border-foreground/10 p-5">
                <p className="font-semibold text-body text-foreground mb-3">Feasibility</p>
                <p className="text-body text-muted leading-relaxed">
                  Seeded the database with sample accounts and tested end-to-end prompts like "Show top expansion opportunities" and "Analyze Acme Corp." Goal was to validate reasoning, tool calling, and output quality.
                </p>
              </div>
              <div className="border border-foreground/10 p-5">
                <p className="font-semibold text-body text-foreground mb-3">Desirability</p>
                <p className="text-body text-muted leading-relaxed">
                  Shared generated insights and pitch snippets with Account Managers and asked whether this would meaningfully reduce their workload. Target signal was usefulness rated 8/10 or higher.
                </p>
              </div>
              <div className="border border-foreground/10 p-5">
                <p className="font-semibold text-body text-foreground mb-3">Usability</p>
                <p className="text-body text-muted leading-relaxed">
                  Compared time taken, confidence, and quality of decisions before and after using the prototype.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 09: Measuring success */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">09</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                Measuring success
              </h2>
            </div>
            <div className="pl-12">
              <p className="text-body text-foreground/90 leading-relaxed mb-4">Success would be measured across:</p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-body text-foreground/90">
                <div className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Expansion ARR growth</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Net revenue retention uplift</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Reduction in churn</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Account Manager hours saved per week</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>Adoption of AI-generated assets</span>
                </div>
                <div className="flex items-start">
                  <span className="text-foreground/30 mr-3 flex-shrink-0 select-none">–</span>
                  <span>User satisfaction and trust</span>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-foreground/[0.06] mb-6" />

          {/* Section 10: Risks and mitigation */}
          <section className="mb-6">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-caption text-muted font-mono">10</span>
              <h2 className="font-headline text-body-lg text-foreground font-semibold">
                Risks and mitigation
              </h2>
            </div>
            <div className="pl-12 space-y-5">
              <div className="flex gap-6">
                <div className="w-32 flex-shrink-0">
                  <p className="font-semibold text-body text-foreground">Hallucinations</p>
                </div>
                <div className="flex-1">
                  <p className="text-body text-muted leading-relaxed">
                    Mitigated through evidence-based generation and human approval loops.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-32 flex-shrink-0">
                  <p className="font-semibold text-body text-foreground">Data quality issues</p>
                </div>
                <div className="flex-1">
                  <p className="text-body text-muted leading-relaxed">
                    Handled via schema validation, monitoring, and fallback logic.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-32 flex-shrink-0">
                  <p className="font-semibold text-body text-foreground">Workflow resistance</p>
                </div>
                <div className="flex-1">
                  <p className="text-body text-muted leading-relaxed">
                    Addressed through transparent explanations and visible data sources.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-32 flex-shrink-0">
                  <p className="font-semibold text-body text-foreground">Over-reliance on AI</p>
                </div>
                <div className="flex-1">
                  <p className="text-body text-muted leading-relaxed">
                    Reduced using confidence scores and uncertainty indicators.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="pt-8 border-t border-foreground/[0.06]">
            <a
              href="https://account-expansion-analyst.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body text-foreground/40 hover:text-foreground/60 transition-colors duration-300 tracking-wide"
            >
              <span>Open live prototype</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  )
}

