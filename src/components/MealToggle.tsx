"use client"

import { cn } from "@/lib/utils"
import { useLang } from "@/contexts/LanguageContext"

interface MealToggleProps {
  value: string
  onChange: (v: string) => void
}

export function MealToggle({ value, onChange }: MealToggleProps) {
  const { tr } = useLang()
  const options = [
    { value: "any", label: tr.mealAny },
    { value: "lunch", label: tr.mealLunch },
    { value: "dinner", label: tr.mealDinner },
  ]
  return (
    <div className="flex rounded border border-[var(--color-border)] overflow-hidden">
      {options.map((opt, i) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "flex-1 py-1.5 text-sm transition-colors cursor-pointer",
            i !== 0 && "border-l border-[var(--color-border)]",
            value === opt.value
              ? "bg-[var(--color-foreground)] text-[var(--color-primary-foreground)] font-medium"
              : "bg-transparent text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)]"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
