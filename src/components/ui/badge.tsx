import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "secondary"
}

function Badge({ className, variant = "outline", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
    outline: "border border-[var(--color-border)] text-[var(--color-muted-foreground)]",
    secondary: "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
