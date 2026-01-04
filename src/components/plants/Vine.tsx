'use client'

interface VineProps {
  className?: string
  size?: number
  flip?: boolean
}

export function Vine({ className = '', size = 60, flip = false }: VineProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 60 90"
      fill="none"
      className={`plant-sway-slow ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      {/* Hand-drawn curving vine stem */}
      <path
        d="M12 88 C10 78, 14 68, 20 58 C26 48, 34 40, 42 30 C48 22, 52 14, 50 8"
        stroke="var(--color-stem)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Leaves along vine - hand-drawn blobs */}
      <path
        d="M16 72 C10 70, 4 66, 2 58 C0 52, 4 48, 10 50 C16 52, 18 64, 18 70"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      <path
        d="M28 52 C22 48, 16 42, 18 34 C20 28, 26 28, 30 34 C34 42, 30 48, 28 52"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      <path
        d="M44 28 C40 24, 38 16, 42 10 C46 6, 52 8, 52 14 C52 22, 46 26, 44 28"
        fill="var(--color-leaf)"
        stroke="var(--color-stem)"
        strokeWidth="1"
      />
      
      {/* Tendrils - sketchy curls */}
      <path
        d="M50 8 C54 4, 58 6, 56 10 C54 14, 50 12, 52 8"
        stroke="var(--color-stem)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      <path
        d="M32 44 C36 42, 40 44, 38 48"
        stroke="var(--color-stem)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  )
}
