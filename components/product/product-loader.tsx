"use client"

import { useTheme } from "next-themes"
import ContentLoader from "react-content-loader"

interface ProductCardLoaderProps {
  className?: string
}

export default function ProductCardLoader({
  className,
  ...props
}: ProductCardLoaderProps) {
  const { setTheme, theme } = useTheme()

  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      height={"100%"}
      className={className}
      viewBox="0 0 480 360"
      backgroundColor={theme === "dark" ? "#505050" : "#d0d0d0"}
      foregroundColor={theme === "dark" ? "#606060" : "#c0c0c0"}
      {...props}
    >
      <circle cx="30" cy="330" r="30" />
      <rect x="75" y="310" rx="3" ry="3" width="40%" height="12" />
      <rect x="75" y="340" rx="3" ry="3" width="20%" height="10" />
      <rect x="400" y="310" rx="18" ry="18" width="80" height="36" />
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="280" />
    </ContentLoader>
  )
}
