"use client"

import { cn } from "@/lib/utils"
import { GenreGroup } from "@/data/types"

interface GenrePickerProps {
  groups: GenreGroup[]
  selected: Set<string>
  onToggle: (group: GenreGroup) => void
}

export function GenrePicker({ groups, selected, onToggle }: GenrePickerProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {groups.map((g) => {
        const active = g.genres.every((genre) => selected.has(genre))
        return (
          <button
            key={g.label}
            onClick={() => onToggle(g)}
            className={cn(
              "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-pointer",
              active
                ? "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-primary-foreground)]"
                : "border-[var(--color-border)] bg-transparent text-[var(--color-muted-foreground)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
            )}
          >
            {g.label}
          </button>
        )
      })}
    </div>
  )
}
