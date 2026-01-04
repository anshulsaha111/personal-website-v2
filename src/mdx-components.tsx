import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-headline text-section mb-8 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-headline text-large mb-6 text-foreground mt-12">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-body-lg text-foreground/85 mb-6 leading-relaxed font-body">{children}</p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="link-underline text-accent hover:text-accent/80 transition-colors">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent pl-6 my-8 italic text-muted font-body">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 text-foreground/85 font-body space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 text-foreground/85 font-body space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-body-lg">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    hr: () => (
      <hr className="border-foreground/10 my-12" />
    ),
    ...components,
  }
}
