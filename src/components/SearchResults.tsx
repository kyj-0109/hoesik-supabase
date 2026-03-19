"use client"

import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { Restaurant } from "@/data/types"
import { Lang } from "@/data/i18n"
import { t } from "@/data/i18n"
import { getMatchingPlans } from "@/data/filters"
import { RestaurantCard } from "./RestaurantCard"

type SortKey = "distance" | "price_asc" | "price_desc" | "name"

interface SearchResultsProps {
  matches: Restaurant[]
  people: number
  meal: string
  lang: Lang
}

function getLowestPrice(r: Restaurant, people: number, meal: string): number | null {
  const plans = getMatchingPlans(r, people, meal)
  return plans.reduce((min, p) => {
    if (p.price == null) return min
    return min == null ? p.price : Math.min(min, p.price)
  }, null as number | null)
}

export function SearchResults({ matches, people, meal, lang }: SearchResultsProps) {
  const [sort, setSort] = useState<SortKey>("distance")
  const tr = t[lang]

  const SORT_OPTIONS: { value: SortKey; label: string }[] = [
    { value: "distance", label: tr.sortDistance },
    { value: "price_asc", label: tr.sortPriceAsc },
    { value: "price_desc", label: tr.sortPriceDesc },
    { value: "name", label: tr.sortName },
  ]

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
        <p className="text-sm text-[var(--color-muted-foreground)]">{tr.noResults}</p>
        <p className="text-xs text-[var(--color-muted-foreground)] mt-1">{tr.noResultsHint}</p>
      </div>
    )
  }

  return (
    <div>
      {/* Header with count and sort */}
      <div className="flex items-center justify-between py-3 border-b border-[var(--color-border)] mb-4">
        <span className="text-sm text-[var(--color-muted-foreground)]">
          <span className="font-semibold text-[var(--color-foreground)]">{tr.shopCount(matches.length)}</span>
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
