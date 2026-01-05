import Link from 'next/link'

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen page-grid section-padding bg-background">
      <div className="max-w-prose">
        <Link
          href="/"
          className="inline-block text-small text-muted hover:text-accent transition-colors duration-200 mb-block font-body"
        >
          ← back home
        </Link>
        <article className="prose-container">{children}</article>
      </div>
    </main>
  )
}
