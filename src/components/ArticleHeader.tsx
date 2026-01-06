export function ArticleHeader({
  date,
  readingTime,
}: {
  date: string
  readingTime: string
}) {
  return (
    <div className="border-b border-foreground/10 pb-6 mb-12">
      <div className="flex items-center gap-3 text-caption uppercase tracking-wide text-muted font-body">
        <span>Essay</span>
        <span className="text-foreground/20">·</span>
        <span>{date}</span>
        <span className="text-foreground/20">·</span>
        <span>{readingTime}</span>
      </div>
    </div>
  )
}

