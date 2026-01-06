import Link from 'next/link'

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="page-grid py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-caption uppercase tracking-wide text-muted hover:text-foreground transition-colors duration-300 font-body"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Structural Divider */}
      <div className="page-grid">
        <div className="rule" />
      </div>

      {/* Article Container */}
      <article className="page-grid py-section">
        <div className="max-w-[850px] mx-auto">
          {children}
        </div>
      </article>
    </main>
  )
}
