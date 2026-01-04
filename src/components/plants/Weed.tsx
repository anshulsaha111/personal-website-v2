'use client'

interface WeedProps {
  className?: string
  size?: number
}

export function Weed({ className = '', size = 40 }: WeedProps) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 40 64"
      fill="none"
      className={`plant-sway ${className}`}
    >
      {/* Multiple thin stems spreading out - weedy look */}
      <path
        d="M20 62 C19 56, 18 50, 16 44 C14 38, 12 32, 8 26 C6 22, 4 16, 2 10"
        stroke="var(--color-stem)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 62 C20 54, 20 46, 20 38 C20 30, 20 22, 20 14 C20 10, 20 6, 20 4"
        stroke="var(--color-stem)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 62 C21 56, 22 50, 24 44 C26 38, 28 32, 32 26 C34 22, 36 16, 38 10"
        stroke="var(--color-stem)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Small leaves/buds at tips */}
      <path
        d="M2 10 C0 8, 0 4, 2 2 C4 4, 4 8, 2 10"
        fill="var(--color-leaf)"
      />
      <path
        d="M20 4 C18 2, 18 0, 20 0 C22 0, 22 2, 20 4"
        fill="var(--color-leaf)"
      />
      <path
        d="M38 10 C40 8, 40 4, 38 2 C36 4, 36 8, 38 10"
        fill="var(--color-leaf)"
      />
      
      {/* Small side leaves */}
      <path
        d="M16 44 C12 42, 8 44, 10 48"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
      />
      <path
        d="M24 44 C28 42, 32 44, 30 48"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
      />
    </svg>
  )
}

