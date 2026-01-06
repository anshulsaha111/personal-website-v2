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
      <div className="relative h-[160px] border-b border-foreground/[0.06] overflow-hidden bg-foreground/5">
        {previewUrl ? (
          <iframe
            src={previewUrl}
            title={`${title} preview`}
            loading="lazy"
            scrolling="no"
            className="absolute top-0 left-0 w-[1200px] h-[800px] border-0 pointer-events-none origin-top-left"
            style={{ 
              transform: 'scale(0.3)',
              transformOrigin: 'top left'
            }}
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
            className="group/link text-foreground/40 hover:text-foreground/60 transition-colors duration-300 tracking-wide hover:underline underline-offset-4"
          >
            View case study{' '}
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-[2px]">
              →
            </span>
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link text-foreground/40 hover:text-foreground/60 transition-colors duration-300 tracking-wide hover:underline underline-offset-4"
            >
              Open live{' '}
              <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-[2px]">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
