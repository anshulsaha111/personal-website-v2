# DESIGN_CONTEXT.md
Personal Website Design System

This document defines the design intent, constraints, and decision rules
for my personal website. It exists to prevent design drift and ensure
all UI, animation, and layout decisions express the same underlying idea.

--------------------------------------------------
PRIMARY GOAL
--------------------------------------------------

Within 30 seconds, a senior AI PM, founder, or hiring manager should feel:
“This person designs and ships real AI systems under real constraints.”

--------------------------------------------------
CORE CONCEPT
--------------------------------------------------

The site is a blueprint for how I think.

Structure leads.
Life exists underneath.
Nothing is decorative without meaning.

This is not a branding site.
This is an interface to judgment.

--------------------------------------------------
THEMES
--------------------------------------------------

PRIMARY THEME: Living Blueprint

Living Blueprint represents intentional system design, judgment,
and constraint-driven thinking.

This theme should express:
- Clear hierarchy and structure
- Explicit boundaries and modules
- Decisions made visible
- Systems that feel designed, not magical

Visual signals:
- Grid-based layouts
- Strong alignment and margins
- Thin rules, dividers, and section boundaries
- Modular components
- Labels, annotations, and structure cues

If a design choice increases clarity, structure, or legibility,
it aligns with Living Blueprint.

If it adds visual interest without structural meaning,
it does NOT align.


SECONDARY ACCENT: Engineered Nature

Engineered Nature represents adaptability and human imperfection
within structured systems.

This theme should express:
- Subtle organic variation
- Life constrained by structure
- Human judgment within engineered systems

Visual signals:
- Slightly imperfect or hand-drawn lines
- Organic easing (not mechanical snaps)
- Abstract flowing forms contained inside structured layouts

Engineered Nature must:
- Always remain secondary
- Never define layout
- Never repeat excessively
- Never become illustrative or literal

--------------------------------------------------
WHAT THIS SITE IS NOT
--------------------------------------------------

This site is NOT:
- A nature-themed or garden-themed website
- A whimsical or illustration-driven portfolio
- A generic AI lab / research blog aesthetic
- A SaaS marketing landing page
- A resume or skills dump

If a design choice makes the site feel:
- cute
- cozy
- decorative-first
- vibe-driven

it is likely incorrect.

--------------------------------------------------
SIGNATURE INTERACTION
--------------------------------------------------

The site has ONE signature interaction: the System Line.

The System Line:
- Is a single continuous line that runs through the page
- Originates in the hero section
- Extends as the user scrolls
- Branches subtly at section boundaries
- Reconnects later
- Terminates at the footer

Rules:
- SVG or canvas-based
- Thin stroke (1–2px)
- Slight organic imperfection
- Never loops
- Never distracts
- Never exists without meaning

If removed, the site should still work.
If present, it should add understanding.

--------------------------------------------------
MOTION DOCTRINE
--------------------------------------------------

Motion exists to:
- Reveal hierarchy
- Explain transitions
- Emphasize relationships
- Signal cause → effect

Motion must:
- Be subtle
- Be slow enough to read
- Stop when its job is done

Motion must NOT:
- Loop indefinitely
- Exist purely for delight
- Compete with content
- Add visual noise

If motion does not improve understanding,
it should be removed.

--------------------------------------------------
SECTION INTENT
--------------------------------------------------

Hero:
- Clear thesis
- Strong typographic hierarchy
- Faint grid or structure cues
- System Line originates here

About:
- Structured layout
- Main content + marginal notes
- Feels like a working document

Work:
- Projects presented as system modules
- Clear boundaries, constraints, and outcomes
- Emphasis on decisions and impact

Writing:
- Essays, not blog posts
- Strong point of view
- Highlight thesis, not chronology

Tools:
- Toolkit framing, not skill list
- Grouped by intent and usage
- Signals real-world application

Footer:
- Philosophical close
- Calm, confident ending
- System Line terminates cleanly

--------------------------------------------------
DESIGN DECISION HEURISTICS
--------------------------------------------------

When choosing between options:
- Choose clarity over cleverness
- Choose structure over decoration
- Choose restraint over novelty
- Choose legibility over expressiveness

If unsure:
- Remove rather than add
- Simplify rather than embellish
- Default to fewer elements

If a section works without visuals,
only then consider adding one.

--------------------------------------------------
TONE
--------------------------------------------------

Calm.
Sharp.
Opinionated.
Senior.

Signals:
"I design and ship AI systems that survive real constraints."

--------------------------------------------------
COLOR SYSTEM — Editorial Palette
--------------------------------------------------

PHILOSOPHY:
Color is structural, not emotional.
Hierarchy comes from typography, spacing, and restraint.

PALETTE (Light Mode):
- Background:     #faf8f5   — Warm off-white (paper)
- Foreground:     #1f1f1f   — Deep ink (cool undertone)
- Muted:          #6e6e6e   — Neutral gray (secondary text)
- Accent:         #5b7a8f   — Muted slate blue (structural)
- Rule:           rgba(31, 31, 31, 0.06) — Hairline dividers

PALETTE (Dark Mode):
- Background:     #0f172a   — Deep slate
- Foreground:     #e8e8e8   — Off-white
- Muted:          #9a9a9a   — Mid gray
- Accent:         #7a9aaf   — Lighter slate blue
- Rule:           rgba(232, 232, 232, 0.06)

ACCENT COLOR USAGE (Structural Only):
The accent is used for:
- Active navigation states
- Interactive underlines (hover)
- Section label text (Skills)
- Structural markers (bullets, dots)
- Focus/active states
- System spine line

The accent is NOT used for:
- Emphasis within prose
- Headings or body text
- Highlighting important words
- Emotional expression

HIERARCHY WITHOUT COLOR:
Emphasis is achieved through:
1. Font weight (semibold for key phrases)
2. Font style (italic for <em>, but displayed as semibold)
3. Scale (heading sizes establish hierarchy)
4. Spacing (generous whitespace separates content)
5. Contrast (foreground vs muted for text hierarchy)

Example:
  "i build <em>ai systems</em> that scale"
  → <em> renders as font-semibold, not italic or colored
  → Visual weight comes from typography, not hue

RATIONALE:
- Editorial / publishing aesthetic (timeless)
- Authoritative and serious tone
- Color as infrastructure, not decoration
- Avoids Claude/Anthropic orange associations
- Calm, restrained, opinionated

--------------------------------------------------
LAYOUT GRID SYSTEM
--------------------------------------------------

PHILOSOPHY:
The grid is visible in spirit, not in weight.
Alignment creates rhythm. Spacing creates hierarchy.
Structure leads. Content follows.

BASE UNIT: 8px
All spacing derives from multiples of 8px.
This creates consistent vertical and horizontal rhythm.

COLUMN STRUCTURE:
- 12-column underlying grid
- Content typically spans 8-10 columns
- Margin/annotation column: 2-3 columns
- Gutter between columns: 24px (3 base units)

MAX WIDTHS:
- grid:     1200px  — Full container boundary
- content:  1000px  — Primary content area (default)
- prose:    680px   — Optimal reading width
- narrow:   560px   — Focused content
- margin:   240px   — Annotation/aside column

PAGE MARGINS (responsive):
- Mobile (<768px):   24px
- Tablet (768px+):   48px
- Desktop (1024px+): 64px

SPACING SCALE:
Spacing tokens named by intent:
- micro:    8px   — Micro adjustments
- tight:    16px  — Tight element spacing
- element:  24px  — Between elements
- gutter:   24px  — Column gutter
- block:    48px  — Between content blocks
- section:  96-144px (responsive) — Between sections

LAYOUT PATTERNS:

1. Single Column (default)
   Full-width content within max-width constraint.
   Used for: Hero, Beliefs, most sections.

2. Content + Margin Notes
   Main content (left) + annotation column (right).
   Margin column only visible on desktop.
   Used for: About section.

3. Prose Width
   Constrained to 680px for optimal reading.
   Used for: Writing, body text.

RULES & DIVIDERS:
- Thin (1px) horizontal rules separate sections
- Use sparingly to denote structural boundaries
- Color: --color-rule (subtle, low contrast)
- Never decorative — always structural

CSS CLASSES:
- .page-grid       — Base container with responsive margins
- .content-grid    — Content max-width
- .prose-grid      — Reading max-width
- .section-padding — Standard section vertical spacing
- .layout-with-margin — Content + margin notes layout
- .margin-notes    — Sticky margin note container
- .rule            — Horizontal divider

USAGE PRINCIPLES:
1. Use max-width constraints, not percentage widths
2. Let content breathe — generous section spacing
3. Align everything to the 8px grid
4. Rules mark structure, not decoration
5. Margin notes are supplementary, never essential

--------------------------------------------------
NAVIGATION
--------------------------------------------------

PHILOSOPHY:
Navigation is infrastructure, not decoration.
It is the frame of the blueprint — present but unobtrusive.
Should feel invisible when reading, reassuring when navigating.

STRUCTURE:
- Part of document flow (not fixed overlay)
- Sticky after initial scroll
- Height always reserved in layout (49px)
- Aligned to same grid as content
- Separated from content by hairline rule

VISUAL TREATMENT:
- No shadows, no cards, no floating effects
- Very low contrast text (foreground/40)
- No decorative icons or illustrations
- Background: near-transparent with subtle blur
- Hairline divider: foreground/6 (barely visible)

TYPOGRAPHY:
- Font size: caption (0.75rem / 12px)
- Letter-spacing: slightly expanded for legibility
- Weight: normal (never bold)
- Site identifier: uppercase, extra subtle
- Nav links: lowercase, secondary hierarchy

HOVER STATES:
- Color only (foreground/40 → foreground/60)
- Transition: 300ms (calm, not snappy)
- No scale, no motion, no underlines

THEME TOGGLE:
- Visually separated with subtle dot separator
- Even lower contrast than nav links (foreground/30)
- Text-only: "dark" / "light"
- Purely utilitarian, not a feature

LAYOUT SPECS:
- Height: 49px (including divider)
- Padding: py-3 (mobile) / py-4 (desktop)
- Uses page-grid for margin alignment
- Divider: 1px, foreground/6

CSS IMPLEMENTATION:
- bg-background/95 backdrop-blur-sm (subtle scroll effect)
- text-caption for all nav text
- text-foreground/40 default, /60 hover
- Dot separator: text-foreground/20

WHY NOT FIXED:
Fixed navigation creates:
- Constant visual competition with content
- Overlap management complexity
- "Floating" feeling that contradicts blueprint aesthetic

Sticky navigation:
- Respects document flow
- Stays accessible without competing
- Feels structurally bounded

SUCCESS CRITERIA:
Header should feel invisible when reading,
but reassuring when navigating.
