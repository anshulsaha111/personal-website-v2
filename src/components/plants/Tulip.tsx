'use client'

interface TulipProps {
  className?: string
  size?: number
  petalColor?: string
}

export function Tulip({ className = '', size = 40, petalColor = '#d4726a' }: TulipProps) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 40 80"
      fill="none"
      className={`plant-sway ${className}`}
    >
      {/* Hand-drawn wobbly stem */}
      <path
        d="M20 78 C19 70, 21 62, 20 54 C19 46, 21 40, 20 34"
        stroke="var(--color-stem)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Left leaf - hand-drawn curve */}
      <path
        d="M20 68 C14 64, 6 56, 4 44 C2 36, 6 32, 10 34 C16 38, 18 52, 20 64"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Right leaf */}
      <path
        d="M20 62 C26 58, 34 50, 36 40 C38 32, 34 28, 30 30 C24 34, 22 48, 20 58"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Tulip petals - hand-drawn overlapping shapes */}
      <g className="leaf-float">
        {/* Left petal */}
        <path
          d="M20 34 C14 32, 8 26, 6 18 C4 10, 8 4, 14 4 C18 4, 20 10, 20 18 C20 24, 20 30, 20 34"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="1"
          opacity="0.9"
        />
        {/* Center petal */}
        <path
          d="M20 34 C18 28, 16 18, 18 8 C19 4, 21 4, 22 8 C24 18, 22 28, 20 34"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="1"
        />
        {/* Right petal */}
        <path
          d="M20 34 C26 32, 32 26, 34 18 C36 10, 32 4, 26 4 C22 4, 20 10, 20 18 C20 24, 20 30, 20 34"
          fill={petalColor}
          stroke={petalColor}
          strokeWidth="1"
          opacity="0.9"
        />
      </g>
      
      {/* Petal texture lines */}
      <path
        d="M14 18 C16 14, 18 12, 20 14"
        stroke={petalColor}
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M26 18 C24 14, 22 12, 20 14"
        stroke={petalColor}
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}
