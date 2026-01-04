'use client'

interface FernProps {
  className?: string
  size?: number
}

export function Fern({ className = '', size = 50 }: FernProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 50 70"
      fill="none"
      className={`plant-sway-slow ${className}`}
    >
      {/* Multiple fern fronds spreading from center */}
      
      {/* Left frond */}
      <g>
        <path
          d="M25 68 C20 60, 14 50, 8 40 C4 32, 2 24, 4 16"
          stroke="var(--color-stem)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Leaflets */}
        <path d="M18 54 C14 52, 10 54, 12 58" fill="var(--color-leaf)" />
        <path d="M14 46 C10 44, 6 46, 8 50" fill="var(--color-leaf)" />
        <path d="M10 38 C6 36, 2 38, 4 42" fill="var(--color-leaf)" />
        <path d="M6 28 C2 26, 0 28, 2 32" fill="var(--color-leaf)" />
      </g>
      
      {/* Center frond */}
      <g>
        <path
          d="M25 68 C25 58, 25 48, 25 38 C25 28, 25 18, 25 8"
          stroke="var(--color-stem)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Leaflets */}
        <path d="M25 52 C21 50, 17 52, 19 56" fill="var(--color-leaf)" />
        <path d="M25 52 C29 50, 33 52, 31 56" fill="var(--color-leaf)" />
        <path d="M25 40 C21 38, 17 40, 19 44" fill="var(--color-leaf)" />
        <path d="M25 40 C29 38, 33 40, 31 44" fill="var(--color-leaf)" />
        <path d="M25 28 C21 26, 17 28, 19 32" fill="var(--color-leaf)" />
        <path d="M25 28 C29 26, 33 28, 31 32" fill="var(--color-leaf)" />
        <path d="M25 16 C22 14, 19 16, 21 19" fill="var(--color-leaf)" />
        <path d="M25 16 C28 14, 31 16, 29 19" fill="var(--color-leaf)" />
      </g>
      
      {/* Right frond */}
      <g>
        <path
          d="M25 68 C30 60, 36 50, 42 40 C46 32, 48 24, 46 16"
          stroke="var(--color-stem)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Leaflets */}
        <path d="M32 54 C36 52, 40 54, 38 58" fill="var(--color-leaf)" />
        <path d="M36 46 C40 44, 44 46, 42 50" fill="var(--color-leaf)" />
        <path d="M40 38 C44 36, 48 38, 46 42" fill="var(--color-leaf)" />
        <path d="M44 28 C48 26, 50 28, 48 32" fill="var(--color-leaf)" />
      </g>
    </svg>
  )
}

