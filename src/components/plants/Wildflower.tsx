'use client'

interface WildflowerProps {
  className?: string
  size?: number
  color?: string
}

export function Wildflower({ className = '', size = 35, color = '#d4726a' }: WildflowerProps) {
  return (
    <svg
      width={size}
      height={size * 1.8}
      viewBox="0 0 35 63"
      fill="none"
      className={`plant-sway ${className}`}
    >
      {/* Thin wobbly stem */}
      <path
        d="M17 61 C16 55, 18 49, 17 43 C16 37, 18 31, 17 25 C16 19, 18 15, 17 12"
        stroke="var(--color-stem)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Small leaves on stem */}
      <path
        d="M17 45 C14 43, 10 41, 8 37 C10 39, 14 41, 17 43"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
      />
      <path
        d="M17 35 C20 33, 24 31, 26 27 C24 29, 20 31, 17 33"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="0.5"
      />
      
      {/* Flower - simple hand-drawn petals */}
      <g className="leaf-float">
        <path
          d="M17 12 C15 10, 15 6, 17 4 C19 6, 19 10, 17 12"
          fill={color}
        />
        <path
          d="M17 12 C20 10, 24 10, 26 12 C24 14, 20 14, 17 12"
          fill={color}
        />
        <path
          d="M17 12 C19 14, 19 18, 17 20 C15 18, 15 14, 17 12"
          fill={color}
        />
        <path
          d="M17 12 C14 14, 10 14, 8 12 C10 10, 14 10, 17 12"
          fill={color}
        />
        {/* Diagonal petals */}
        <path
          d="M17 12 C19 8, 23 6, 25 8 C23 10, 19 10, 17 12"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M17 12 C15 8, 11 6, 9 8 C11 10, 15 10, 17 12"
          fill={color}
          opacity="0.8"
        />
      </g>
      
      {/* Center dot */}
      <circle cx="17" cy="12" r="2.5" fill="#e8b84a" stroke="#c99a3a" strokeWidth="0.5" />
    </svg>
  )
}

