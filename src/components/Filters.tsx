"use client"

import { GenreGroup } from "@/data/types"
import { GENRE_GROUPS } from "@/data/constants"
import { GenrePicker } from "./GenrePicker"
import { MealToggle } from "./MealToggle"
import { cn } from "@/lib/utils"

const WALK_PRESETS = [
  { label: "5분 이내", value: 5 },
  { label: "10분 이내", value: 10 },
  { label: "20분 이내", value: 20 },
]

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
  return (
    <div className="space-y-5 py-4 border-b border-[var(--color-border)]">
      <div>
        <Label>장르 (복수 선택)</Label>
        <GenrePicker groups={GENRE_GROUPS} selected={selectedGenres} onToggle={onToggleGenre} />
      </div>

      <div>
        <Label>인원수</Label>
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
            placeholder={`최대 ${maxPeopleInDB}`}
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
        <Label>도보 거리 (최대)</Label>
        <div className="flex rounded border border-[var(--color-border)] overflow-hidden">
          {WALK_PRESETS.map((preset, i) => (
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
        <Label>식사 시간대</Label>
        <MealToggle value={meal} onChange={onMealChange} />
      </div>
    </div>
  )
}
