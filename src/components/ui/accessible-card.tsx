import * as React from "react"
import { cn } from "@/lib/utils"

const AccessibleCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
    interactive?: boolean
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  }
>(({ className, asChild = false, interactive = false, headingLevel = 2, ...props }, ref) => {
  const Component = asChild ? React.Fragment : "div"
  
  const cardProps = {
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      interactive && "transition-all duration-200 hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
      className
    ),
    ref,
    role: interactive ? "button" : undefined,
    tabIndex: interactive ? 0 : undefined,
    ...props
  }

  return asChild ? <>{props.children}</> : <Component {...cardProps} />
})
AccessibleCard.displayName = "AccessibleCard"

const AccessibleCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  }
>(({ className, headingLevel = 2, children, ...props }, ref) => {
  const HeadingComponent = `h${headingLevel}` as keyof JSX.IntrinsicElements
  
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AccessibleCardTitle) {
          return React.cloneElement(child as React.ReactElement<{ as?: React.ElementType }>, {
            as: HeadingComponent
          })
        }
        return child
      })}
    </div>
  )
})
AccessibleCardHeader.displayName = "AccessibleCardHeader"

const AccessibleCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: keyof JSX.IntrinsicElements
  }
>(({ className, as: Component = "h3", ...props }, ref) => {
  const HeadingComponent = Component as React.ElementType
  return (
    <HeadingComponent
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
})
AccessibleCardTitle.displayName = "AccessibleCardTitle"

const AccessibleCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AccessibleCardDescription.displayName = "AccessibleCardDescription"

const AccessibleCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
AccessibleCardContent.displayName = "AccessibleCardContent"

const AccessibleCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
AccessibleCardFooter.displayName = "AccessibleCardFooter"

export { 
  AccessibleCard, 
  AccessibleCardHeader, 
  AccessibleCardFooter, 
  AccessibleCardTitle, 
  AccessibleCardDescription, 
  AccessibleCardContent 
}