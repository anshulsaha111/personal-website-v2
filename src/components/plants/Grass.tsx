'use client'

interface GrassProps {
  className?: string
  size?: number
}

export function Grass({ className = '', size = 30 }: GrassProps) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 30 60"
      fill="none"
      className={`plant-sway ${className}`}
    >
      {/* Hand-drawn grass blades - sketchy lines */}
      <path
        d="M6 58 C5 48, 3 36, 2 20 C1 12, 3 6, 4 4"
        stroke="var(--color-stem)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M12 58 C11 46, 12 32, 11 18 C10 10, 12 4, 13 2"
        stroke="var(--color-stem)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M18 58 C19 48, 18 36, 19 22 C20 14, 18 6, 17 3"
        stroke="var(--color-stem)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M24 58 C25 50, 24 40, 26 28 C27 18, 25 10, 26 6"
        stroke="var(--color-stem)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Extra wispy blade */}
      <path
        d="M28 58 C29 52, 28 46, 30 38"
        stroke="var(--color-stem)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  )
}
