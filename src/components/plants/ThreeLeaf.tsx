'use client'

interface ThreeLeafProps {
  className?: string
  size?: number
}

export function ThreeLeaf({ className = '', size = 50 }: ThreeLeafProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 50 70"
      fill="none"
      className={`plant-sway-slow ${className}`}
    >
      {/* Hand-drawn main stem */}
      <path
        d="M25 68 C24 62, 26 56, 25 50 C24 44, 26 38, 25 32"
        stroke="var(--color-stem)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Center top leaf - hand-drawn blob */}
      <path
        d="M25 32 C22 26, 20 18, 22 10 C24 4, 26 4, 28 10 C30 18, 28 26, 25 32"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Left leaf - wobbly shape */}
      <path
        d="M25 42 C20 40, 12 38, 6 32 C2 28, 4 24, 8 22 C14 20, 20 26, 24 34 C24 38, 25 40, 25 42"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Right leaf - wobbly shape */}
      <path
        d="M25 42 C30 40, 38 38, 44 32 C48 28, 46 24, 42 22 C36 20, 30 26, 26 34 C26 38, 25 40, 25 42"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Vein lines for hand-drawn feel */}
      <path
        d="M25 32 L25 14"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <path
        d="M25 42 L10 28"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <path
        d="M25 42 L40 28"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  )
}
