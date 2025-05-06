"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

interface LogoProps {
  width?: number
  height?: number
}

export function Logo({ width = 48, height = 48 }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return <div style={{ width, height }} />
  }

  const logoSrc = resolvedTheme === "dark" ? "/logo-dark.webp" : "/logo.jpg"

  return <Image src={logoSrc || "/placeholder.svg"} alt="CK Logo" width={width} height={height} priority />
}
