'use client'

interface SproutProps {
  className?: string
  size?: number
}

export function Sprout({ className = '', size = 40 }: SproutProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      fill="none"
      className={`plant-sway ${className}`}
    >
      {/* Hand-drawn stem - wobbly line */}
      <path
        d="M20 58 C19 52, 21 46, 20 40 C19 34, 21 28, 20 22"
        stroke="var(--color-stem)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Left leaf - sketchy organic shape */}
      <path
        d="M20 30 C16 28, 10 24, 6 18 C4 14, 6 10, 10 8 C14 6, 18 10, 20 16 C19 20, 19 26, 20 30"
        fill="var(--color-leaf)"
        stroke="var(--color-leaf)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      
      {/* Right leaf - sketchy organic shape */}
      <path
        d="M20 26 C24 24, 30 20, 34 14 C36 10, 34 6, 30 4 C26 2, 22 6, 20 12 C21 16, 21 22, 20 26"
        fill="var(--color-leaf)"
        stroke="var(--color-leaf)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      
      {/* Sketch marks for hand-drawn feel */}
      <path
        d="M12 14 C14 12, 16 14, 15 16"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}
