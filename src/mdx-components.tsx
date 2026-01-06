import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Article Title (H1) - Strong hierarchy, full foreground
    h1: ({ children }) => (
      <h1 className="font-headline text-section leading-tight text-foreground mb-8 tracking-tight font-semibold">
        {children}
      </h1>
    ),
    
    // Section Headings (H2) - Structural markers with subtle rule
    h2: ({ children }) => (
      <div className="mt-10 mb-5">
        <hr className="rule mb-5" />
        <h2 className="font-headline text-large text-foreground tracking-tight font-semibold">
          {children}
        </h2>
      </div>
    ),
    
    // Subsection Headings (H3) - Muted for secondary hierarchy
    h3: ({ children }) => (
      <h3 className="font-headline text-body-lg text-foreground/80 mt-8 mb-3 tracking-tight font-semibold">
        {children}
      </h3>
    ),
    
    // Body Paragraphs - Tighter spacing, comfortable reading
    p: ({ children }) => (
      <p className="text-body-lg text-foreground/90 leading-[1.75] mb-3 font-body">
        {children}
      </p>
    ),
    
    // Links - Subtle underline, accent on hover
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-foreground/90 underline decoration-foreground/30 hover:decoration-accent hover:text-accent transition-colors duration-300 underline-offset-2"
      >
        {children}
      </a>
    ),
    
    // Blockquotes - Editorial treatment
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-accent/40 pl-6 my-6 text-foreground/75 font-body italic text-body-lg">
        {children}
      </blockquote>
    ),
    
    // Unordered Lists - Tighter spacing
    ul: ({ children }) => (
      <ul className="mb-5 text-foreground/90 font-body space-y-2 ml-0">
        {children}
      </ul>
    ),
    
    // Ordered Lists - Tighter spacing
    ol: ({ children }) => (
      <ol className="mb-5 text-foreground/90 font-body space-y-2 ml-6 list-decimal">
        {children}
      </ol>
    ),
    
    // List Items - Clean, minimal bullets
    li: ({ children }) => (
      <li className="text-body-lg leading-[1.7] pl-6 relative before:content-['–'] before:absolute before:left-0 before:text-muted/60">
        {children}
      </li>
    ),
    
    // Strong Emphasis - Uses weight, not color
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),
    
    // Italic Emphasis - Subtle emphasis through weight
    em: ({ children }) => (
      <em className="font-medium not-italic text-foreground">
        {children}
      </em>
    ),
    
    // Horizontal Rule - Structural divider
    hr: () => (
      <hr className="rule my-10" />
    ),
    
    // Code (inline)
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 bg-foreground/5 text-foreground font-mono text-[0.9em] rounded">
        {children}
      </code>
    ),
    
    // Div (preserve className for metadata and other structural elements)
    div: ({ className, children, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
    
    ...components,
  }
}
