"use client"

import { cn } from "@/lib/utils"
import { useLang } from "@/contexts/LanguageContext"

interface ModeTabsProps {
  value: "search" | "gacha"
  onChange: (v: "search" | "gacha") => void
}

export function ModeTabs({ value, onChange }: ModeTabsProps) {
  const { tr } = useLang()
  return (
    <div className="flex border-b border-[var(--color-border)]">
      {(["search", "gacha"] as const).map((mode) => (
        <button
          key={mode}
          onClick={() => onChange(mode)}
          className={cn(
            "flex-1 pb-2.5 pt-1 text-sm font-medium transition-colors cursor-pointer",
            value === mode
              ? "border-b-2 border-[var(--color-foreground)] text-[var(--color-foreground)] -mb-px"
              : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          )}
        >
          {mode === "search" ? tr.search : tr.gacha}
        </button>
      ))}
    </div>
  )
}
