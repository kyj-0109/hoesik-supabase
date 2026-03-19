"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { Restaurant, Plan } from "@/data/types"
import { getMatchingPlans } from "@/data/filters"
import { useLang } from "@/contexts/LanguageContext"

interface RestaurantCardProps {
  restaurant: Restaurant
  people: number
  meal: string
  defaultExpanded?: boolean
  showWinHeader?: boolean
  total?: number
}

function PlanItem({ plan }: { plan: Plan }) {
  const { tr } = useLang()
  return (
    <div className="py-2.5 border-b border-[var(--color-border)] last:border-0">
      <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed mb-1.5">{plan.name}</p>
      <div className="flex flex-wrap items-center gap-2">
        {plan.price != null && (
          <span className="text-sm font-semibold tabular-nums text-[var(--color-foreground)]">
            ¥{plan.price.toLocaleString()}
          </span>
        )}
        {plan.lunch && <Badge>{tr.planLunch}</Badge>}
        {plan.dinner && <Badge>{tr.planDinner}</Badge>}
        {(plan.min_people != null || plan.max_people != null) && (
          <span className="text-xs text-[var(--color-muted-foreground)]">
            {tr.peopleRange(
              String(plan.min_people ?? "?"),
              String(plan.max_people ?? "?")
            )}
          </span>
        )}
        {plan.duration_hours != null && (
          <span className="text-xs text-[var(--color-muted-foreground)]">{plan.duration_hours}h</span>
        )}
      </div>
    </div>
  )
}

export function RestaurantCard({ restaurant: r, people, meal, defaultExpanded = false, showWinHeader = false, total }: RestaurantCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const { lang, tr } = useLang()
  const plans = getMatchingPlans(r, people, meal)

  const lowestPrice = plans.reduce((min, p) => {
    if (p.price == null) return min
    return min == null ? p.price : Math.min(min, p.price)
  }, null as number | null)

  // Smoking label based on DB value (Japanese) → localized
  const smokingLabel = r.smoking.includes("禁煙") && !r.smoking.includes("喫煙可")
    ? tr.smokingNo
    : r.smoking.includes("喫煙可")
    ? tr.smokingYes
    : tr.smokingPartial

  // Primary/secondary name by language
  const primaryName = lang === 'ja' ? (r.name_jp || r.name) : r.name
  const secondaryName = lang === 'ja'
    ? (r.name_jp !== r.name ? r.name : null)
    : (r.name_jp !== r.name ? r.name_jp : null)

  return (
    <div style={showWinHeader ? { animation: "card-reveal 0.5s ease-out" } : undefined}>
      {showWinHeader && total != null && (
        <p className="text-xs text-center text-[var(--color-muted-foreground)] mb-3">
          <span className="font-semibold text-[var(--color-foreground)]">{tr.wonFrom(total)}</span>
        </p>
      )}

      <div
        className={cn(
          "rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden",
          !defaultExpanded && "cursor-pointer hover:border-[var(--color-foreground)]/30 transition-colors"
        )}
        onClick={defaultExpanded ? undefined : () => setExpanded((v) => !v)}
      >
        {/* Card header */}
        <div className="px-4 py-3.5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-[var(--color-foreground)] leading-snug">{primaryName}</h3>
              {secondaryName && (
                <p className="text-xs text-[var(--color-muted-foreground)] mt-0.5">{secondaryName}</p>
              )}
            </div>
            {r.walk_minutes != null && (
              <div className="flex flex-col items-end shrink-0">
                <span className="text-base font-semibold tabular-nums text-[var(--color-foreground)]">
                  {r.walk_minutes}<span className="text-xs font-normal text-[var(--color-muted-foreground)]">{tr.walkMin}</span>
                </span>
                <span className="text-[10px] text-[var(--color-muted-foreground)]">{r.distance_km}km</span>
              </div>
            )}
          </div>

          {/* Genre tags + price summary */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            {r.genre.slice(0, 3).map((g) => (
              <Badge key={g}>{g}</Badge>
            ))}
            {r.genre.length > 3 && (
              <span className="text-[10px] text-[var(--color-muted-foreground)]">+{r.genre.length - 3}</span>
            )}
            {lowestPrice != null && !expanded && (
              <span className="ml-auto text-xs text-[var(--color-muted-foreground)]">
                ¥{lowestPrice.toLocaleString()}~
              </span>
            )}
          </div>
        </div>

        {/* Expanded detail */}
        {expanded && (
          <>
            <Separator />
            <div className="px-4 py-3.5 space-y-3">
              {/* All badges */}
              <div className="flex flex-wrap gap-1.5">
                {r.genre.map((g) => <Badge key={g}>{g}</Badge>)}
                <Badge>{smokingLabel}</Badge>
                {r.private_room && <Badge>{tr.privateRoom}</Badge>}
                {r.private_rental && <Badge>{tr.privateRental}</Badge>}
              </div>

              {/* Address */}
              <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed">{r.address}</p>

              {/* Plans */}
              {plans.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-[var(--color-muted-foreground)] mb-1 uppercase tracking-wide">
                    {tr.planAvailable(plans.length)}
                  </p>
                  <div>
                    {plans.map((p, i) => <PlanItem key={i} plan={p} />)}
                  </div>
                </div>
              )}

              {!defaultExpanded && (
                <p className="text-xs text-center text-[var(--color-muted-foreground)] pt-1">{tr.collapse}</p>
              )}
            </div>
          </>
        )}
      </div>

    </div>
  )
}
