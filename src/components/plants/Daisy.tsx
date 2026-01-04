'use client'

interface DaisyProps {
  className?: string
  size?: number
  petalColor?: string
}

export function Daisy({ className = '', size = 45, petalColor = '#e8b84a' }: DaisyProps) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 45 72"
      fill="none"
      className={`plant-sway-slow ${className}`}
    >
      {/* Hand-drawn wobbly stem */}
      <path
        d="M22 70 C21 62, 23 54, 22 46 C21 38, 23 32, 22 26"
        stroke="var(--color-stem)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Small leaf on stem */}
      <path
        d="M22 52 C18 50, 12 48, 8 44 C6 42, 8 38, 12 38 C16 38, 20 44, 22 50"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Petals - hand-drawn wobbly ovals */}
      <g className="leaf-float">
        {/* Top petal */}
        <path
          d="M22 6 C20 8, 18 12, 18 16 C18 20, 20 24, 22 24 C24 24, 26 20, 26 16 C26 12, 24 8, 22 6"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
        {/* Top right */}
        <path
          d="M30 10 C28 12, 28 16, 30 20 C32 24, 36 24, 38 22 C40 20, 38 14, 34 12 C32 10, 30 10, 30 10"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
        {/* Right */}
        <path
          d="M36 22 C34 22, 34 26, 36 30 C38 34, 42 34, 44 32 C44 28, 40 24, 36 22"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
        {/* Bottom right */}
        <path
          d="M32 34 C32 32, 34 34, 36 38 C38 42, 36 46, 32 46 C28 46, 28 40, 30 36 C31 34, 32 34, 32 34"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
        {/* Bottom */}
        <path
          d="M22 42 C20 40, 18 38, 18 34 C18 32, 22 32, 26 34 C28 36, 26 40, 22 42"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
        {/* Bottom left */}
        <path
          d="M12 34 C14 32, 14 34, 12 38 C10 42, 8 44, 6 42 C4 40, 6 36, 10 34 C11 34, 12 34, 12 34"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
        {/* Left */}
        <path
          d="M6 24 C8 22, 8 26, 6 30 C4 34, 0 32, 0 28 C0 24, 4 22, 6 24"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
        {/* Top left */}
        <path
          d="M10 12 C12 10, 12 14, 10 18 C8 22, 4 22, 4 18 C4 14, 8 10, 10 12"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="0.5"
        />
      </g>
      
      {/* Center - hand-drawn circle */}
      <circle cx="22" cy="24" r="6" fill="#e86a33" stroke="#c55a2d" strokeWidth="1" />
      
      {/* Center texture dots */}
      <circle cx="20" cy="22" r="1" fill="#c55a2d" opacity="0.6" />
      <circle cx="24" cy="23" r="1" fill="#c55a2d" opacity="0.6" />
      <circle cx="22" cy="26" r="1" fill="#c55a2d" opacity="0.6" />
    </svg>
  )
}
