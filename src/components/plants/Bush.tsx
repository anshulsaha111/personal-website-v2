'use client'

interface BushProps {
  className?: string
  size?: number
}

export function Bush({ className = '', size = 70 }: BushProps) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 70 50"
      fill="none"
      className={`plant-sway-slow ${className}`}
    >
      {/* Hand-drawn bush - multiple overlapping wobbly shapes */}
      
      {/* Back layer */}
      <path
        d="M35 46 C20 46, 6 42, 4 36 C2 30, 10 24, 20 24 C30 24, 50 24, 60 26 C68 28, 68 36, 60 42 C54 46, 44 46, 35 46"
        fill="var(--color-stem)"
        opacity="0.5"
      />
      
      {/* Middle left cluster */}
      <path
        d="M22 42 C10 40, 2 34, 4 26 C6 18, 16 14, 26 16 C34 18, 36 28, 32 36 C30 40, 26 42, 22 42"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Middle right cluster */}
      <path
        d="M48 42 C60 40, 68 34, 66 26 C64 18, 54 14, 44 16 C36 18, 34 28, 38 36 C40 40, 44 42, 48 42"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Front center cluster */}
      <path
        d="M35 40 C24 38, 16 30, 18 22 C20 14, 30 10, 42 12 C52 14, 56 24, 52 32 C48 38, 42 40, 35 40"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Top accent blobs */}
      <path
        d="M25 18 C22 14, 24 8, 30 8 C36 8, 36 14, 32 18"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
      />
      <path
        d="M45 16 C48 12, 52 12, 52 18 C52 22, 48 22, 45 18"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
      />
      
      {/* Texture lines */}
      <path d="M30 28 C32 24, 36 26, 34 30" stroke="var(--color-stem)" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M40 26 C42 22, 46 24, 44 28" stroke="var(--color-stem)" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  )
}
