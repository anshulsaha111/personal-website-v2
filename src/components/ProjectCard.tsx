'use client'

import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  previewUrl?: string
  previewImage?: string
  caseStudyUrl: string
  liveUrl?: string
}

export function ProjectCard({
  title,
  description,
  previewUrl,
  previewImage,
  caseStudyUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="border border-foreground/[0.06] rounded overflow-hidden group">
      {/* Preview */}
      <div className="relative h-[160px] border-b border-foreground/[0.06] overflow-hidden">
        {previewUrl ? (
          <iframe
            src={previewUrl}
            title={`${title} preview`}
            loading="lazy"
            className="w-full h-full border-0 pointer-events-none"
          />
        ) : previewImage ? (
          <img
            src={previewImage}
            alt={`${title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-headline text-body-lg text-foreground font-semibold mb-2">
          {title}
        </h3>

        <p className="text-body text-muted leading-normal mb-4">
          {description}
        </p>

        {/* CTA links */}
        <div className="flex items-center gap-6 text-caption">
          <Link
            href={caseStudyUrl}
            className="text-foreground/40 hover:text-foreground/60 transition-colors duration-300 tracking-wide"
          >
            View case study →
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-foreground/60 transition-colors duration-300 tracking-wide"
            >
              Open live →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
