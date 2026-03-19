"use client"

import { GenreGroup } from "@/data/types"
import { GENRE_GROUPS } from "@/data/constants"
import { getGenreLabel } from "@/data/i18n"
import { useLang } from "@/contexts/LanguageContext"
import { GenrePicker } from "./GenrePicker"
import { MealToggle } from "./MealToggle"
import { cn } from "@/lib/utils"

interface FiltersProps {
  selectedGenres: Set<string>
  onToggleGenre: (group: GenreGroup) => void
  people: number
  onPeopleChange: (v: number) => void
  maxPeopleInDB: number
  maxWalk: number
  onMaxWalkChange: (v: number) => void
  meal: string
  onMealChange: (v: string) => void
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium text-[var(--color-muted-foreground)] mb-2 tracking-wide uppercase">
      {children}
    </p>
  )
}

export function Filters({
  selectedGenres,
  onToggleGenre,
  people,
  onPeopleChange,
  maxPeopleInDB,
  maxWalk,
  onMaxWalkChange,
  meal,
  onMealChange,
}: FiltersProps) {
  const { lang, tr } = useLang()

  const walkPresets = [
    { label: tr.walk5, value: 5 },
    { label: tr.walk10, value: 10 },
    { label: tr.walk20, value: 20 },
  ]

  const translatedGroups = GENRE_GROUPS.map((g) => ({
    ...g,
    label: getGenreLabel(g.label, lang),
  }))

  return (
    <div className="space-y-5 py-4 border-b border-[var(--color-border)]">
      <div>
        <Label>{tr.filterGenre}</Label>
        <GenrePicker groups={translatedGroups} selected={selectedGenres} onToggle={onToggleGenre} />
      </div>

      <div>
        <Label>{tr.filterPeople}</Label>
        <div className="relative flex items-center">
          <input
            type="number"
            value={people === 0 ? "" : people}
            onChange={(e) => {
              const raw = e.target.value
              if (raw === "") {
                onPeopleChange(0)
                return
              }
              const v = parseInt(raw, 10)
              if (!isNaN(v) && v >= 1) onPeopleChange(Math.min(v, maxPeopleInDB))
            }}
            placeholder={tr.peoplePlaceholder(maxPeopleInDB)}
            min={1}
            max={maxPeopleInDB}
            className="w-full px-3 py-2 pr-9 text-sm border border-[var(--color-border)] rounded-md bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-foreground)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="absolute right-3 text-sm text-[var(--color-muted-foreground)] pointer-events-none select-none">
            名
          </span>
        </div>
      </div>

      <div>
        <Label>{tr.filterWalk}</Label>
        <div className="flex rounded border border-[var(--color-border)] overflow-hidden">
          {walkPresets.map((preset, i) => (
            <button
              key={preset.value}
              onClick={() => onMaxWalkChange(preset.value)}
              className={cn(
                "flex-1 py-1.5 text-sm transition-colors cursor-pointer",
                i !== 0 && "border-l border-[var(--color-border)]",
                maxWalk === preset.value
                  ? "bg-[var(--color-foreground)] text-[var(--color-primary-foreground)] font-medium"
                  : "bg-transparent text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)]"
              )}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label>{tr.filterMeal}</Label>
        <MealToggle value={meal} onChange={onMealChange} />
      </div>
    </div>
  )
}
