"use client"

import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { Restaurant } from "@/data/types"
import { getMatchingPlans } from "@/data/filters"
import { RestaurantCard } from "./RestaurantCard"

type SortKey = "distance" | "price_asc" | "price_desc" | "name"

interface SearchResultsProps {
  matches: Restaurant[]
  people: number
  meal: string
}

function getLowestPrice(r: Restaurant, people: number, meal: string): number | null {
  const plans = getMatchingPlans(r, people, meal)
  return plans.reduce((min, p) => {
    if (p.price == null) return min
    return min == null ? p.price : Math.min(min, p.price)
  }, null as number | null)
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "distance", label: "거리순" },
  { value: "price_asc", label: "가격 낮은순" },
  { value: "price_desc", label: "가격 높은순" },
  { value: "name", label: "이름순" },
]

export function SearchResults({ matches, people, meal }: SearchResultsProps) {
  const [sort, setSort] = useState<SortKey>("distance")

  const sorted = useMemo(() => {
    const arr = [...matches]
    switch (sort) {
      case "distance": return arr.sort((a, b) => (a.walk_minutes ?? 99) - (b.walk_minutes ?? 99))
      case "price_asc": return arr.sort((a, b) => (getLowestPrice(a, people, meal) ?? 99999) - (getLowestPrice(b, people, meal) ?? 99999))
      case "price_desc": return arr.sort((a, b) => (getLowestPrice(b, people, meal) ?? 0) - (getLowestPrice(a, people, meal) ?? 0))
      case "name": return arr.sort((a, b) => a.name.localeCompare(b.name, "ja"))
      default: return arr
    }
  }, [matches, sort, people, meal])

  if (matches.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-[var(--color-muted-foreground)]">조건에 맞는 가게가 없습니다</p>
        <p className="text-xs text-[var(--color-muted-foreground)] mt-1">장르, 인원수, 거리를 조정해보세요</p>
      </div>
    )
  }

  return (
    <div>
      {/* Header with count and sort */}
      <div className="flex items-center justify-between py-3 border-b border-[var(--color-border)] mb-4">
        <span className="text-sm text-[var(--color-muted-foreground)]">
          <span className="font-semibold text-[var(--color-foreground)]">{matches.length}</span>곳
        </span>
        <div className="flex gap-1">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSort(opt.value)}
              className={cn(
                "px-2 py-1 text-xs rounded transition-colors cursor-pointer",
                sort === opt.value
                  ? "bg-[var(--color-foreground)] text-[var(--color-primary-foreground)]"
                  : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        {sorted.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} people={people} meal={meal} />
        ))}
      </div>
    </div>
  )
}
