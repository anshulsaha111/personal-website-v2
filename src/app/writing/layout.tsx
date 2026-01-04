import Link from 'next/link'

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen px-6 md:px-12 py-24 bg-background">
      <div className="max-w-prose mx-auto">
        <Link
          href="/"
          className="inline-block text-small text-muted hover:text-accent transition-colors duration-200 mb-16 font-body"
        >
          ← back to garden
        </Link>
        <article className="prose-garden">{children}</article>
      </div>
    </main>
  )
}
