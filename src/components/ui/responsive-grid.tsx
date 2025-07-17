import * as React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    "2xl"?: number
  }
  gap?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    "2xl"?: number
  }
  children: React.ReactNode
}

const ResponsiveGrid = React.forwardRef<HTMLDivElement, ResponsiveGridProps>(
  ({ className, cols = { default: 1, md: 2, lg: 3 }, gap = { default: 4 }, children, ...props }, ref) => {
    const getGridClasses = () => {
      const colClasses = []
      const gapClasses = []

      // Grid columns
      if (cols.default) colClasses.push(`grid-cols-${cols.default}`)
      if (cols.sm) colClasses.push(`sm:grid-cols-${cols.sm}`)
      if (cols.md) colClasses.push(`md:grid-cols-${cols.md}`)
      if (cols.lg) colClasses.push(`lg:grid-cols-${cols.lg}`)
      if (cols.xl) colClasses.push(`xl:grid-cols-${cols.xl}`)
      if (cols["2xl"]) colClasses.push(`2xl:grid-cols-${cols["2xl"]}`)

      // Grid gap
      if (gap.default) gapClasses.push(`gap-${gap.default}`)
      if (gap.sm) gapClasses.push(`sm:gap-${gap.sm}`)
      if (gap.md) gapClasses.push(`md:gap-${gap.md}`)
      if (gap.lg) gapClasses.push(`lg:gap-${gap.lg}`)
      if (gap.xl) gapClasses.push(`xl:gap-${gap.xl}`)
      if (gap["2xl"]) gapClasses.push(`2xl:gap-${gap["2xl"]}`)

      return [...colClasses, ...gapClasses].join(' ')
    }

    return (
      <div
        ref={ref}
        className={cn("grid", getGridClasses(), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ResponsiveGrid.displayName = "ResponsiveGrid"

export { ResponsiveGrid }