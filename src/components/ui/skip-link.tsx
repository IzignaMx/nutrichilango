import * as React from "react"
import { cn } from "@/lib/utils"

interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId: string
  children: React.ReactNode
}

const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(
  ({ className, targetId, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`#${targetId}`}
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50",
          "bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium",
          "transition-all duration-200 focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
SkipLink.displayName = "SkipLink"

export { SkipLink }