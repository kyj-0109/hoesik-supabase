"use client"

import { useState, useCallback, useMemo } from "react"
import { Restaurant, GenreGroup } from "@/data/types"
import { getMatches } from "@/data/filters"
import { ModeTabs } from "@/components/ModeTabs"
import { Filters } from "@/components/Filters"
import { SlotReel } from "@/components/SlotReel"
import { RestaurantCard } from "@/components/RestaurantCard"
import { SearchResults } from "@/components/SearchResults"
import { Button } from "@/components/ui/button"

const GACHA_COUNT = 3

interface HomeClientProps {
  restaurants: Restaurant[]
  maxPeople: number
}

export default function HomeClient({ restaurants, maxPeople }: HomeClientProps) {
  const [mode, setMode] = useState<"search" | "gacha">("search")
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set())
  const [people, setPeople] = useState(4)
  const [maxWalk, setMaxWalk] = useState(20)
  const [meal, setMeal] = useState("any")

  const [isSpinning, setIsSpinning] = useState(false)
  const [gachaResults, setGachaResults] = useState<Restaurant[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [matchCount, setMatchCount] = useState(0)
  const [chosenRestaurants, setChosenRestaurants] = useState<Restaurant[]>([])

  const toggleGenre = (group: GenreGroup) => {
    setSelectedGenres((prev) => {
      const next = new Set(prev)
      const allSelected = group.genres.every((g) => next.has(g))
      if (allSelected) group.genres.forEach((g) => next.delete(g))
      else group.genres.forEach((g) => next.add(g))
      return next
    })
  }

  const matches = useMemo(
    () => getMatches(restaurants, selectedGenres, people, maxWalk, meal),
    [restaurants, selectedGenres, people, maxWalk, meal]
  )

  const onSlotDone = useCallback(() => {
    setIsSpinning(false)
    setIsAnimating(false)
    setGachaResults(chosenRestaurants)
  }, [chosenRestaurants])

  const spin = () => {
    if (isSpinning) return
    if (matches.length === 0) {
      setGachaResults([])
      setIsAnimating(false)
      setMatchCount(0)
      return
    }
    setIsSpinning(true)
    setGachaResults([])

    const shuffled = [...matches].sort(() => Math.random() - 0.5)
    const count = Math.min(GACHA_COUNT, shuffled.length)
    const chosen = shuffled.slice(0, count)

    setIsAnimating(true)
    setMatchCount(matches.length)
    setChosenRestaurants(chosen)
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="max-w-xl mx-auto px-5">
        {/* Header */}
        <div className="pt-10 pb-6 border-b border-[var(--color-border)]">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
            회식 어디갈까?
          </h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
            赤坂 · 紀尾井町 エリア
          </p>
        </div>

        {/* Mode tabs */}
        <div className="mt-5 mb-5">
          <ModeTabs value={mode} onChange={setMode} />
        </div>

        {/* Filters */}
        <Filters
          selectedGenres={selectedGenres}
          onToggleGenre={toggleGenre}
          people={people}
          onPeopleChange={setPeople}
          maxPeopleInDB={maxPeople}
          maxWalk={maxWalk}
          onMaxWalkChange={setMaxWalk}
          meal={meal}
          onMealChange={setMeal}
        />

        {/* Content */}
        <div className="mt-5 pb-20">
          {mode === "search" && (
            <SearchResults matches={matches} people={people} meal={meal} />
          )}

          {mode === "gacha" && (
            <div className="space-y-5">
              <Button
                size="lg"
                className="w-full"
                onClick={spin}
                disabled={isSpinning}
              >
                {isSpinning ? "추첨 중..." : "랜덤 추첨"}
              </Button>

              {matches.length > 0 && !isSpinning && !isAnimating && gachaResults.length === 0 && (
                <p className="text-xs text-center text-[var(--color-muted-foreground)]">
                  조건에 맞는 가게 <span className="font-semibold text-[var(--color-foreground)]">{matches.length}곳</span> 대기 중
                </p>
              )}

              {matches.length === 0 && (
                <p className="text-sm text-center text-[var(--color-muted-foreground)] py-8">
                  조건에 맞는 가게가 없습니다
                </p>
              )}

              {isAnimating && (
                <div>
                  <p className="text-xs text-center text-[var(--color-muted-foreground)] mb-3">
                    <span className="font-semibold text-[var(--color-foreground)]">{matchCount}곳</span> 중에서 추첨 중...
                  </p>
                  <SlotReel count={Math.min(GACHA_COUNT, matches.length)} onDone={onSlotDone} />
                </div>
              )}

              {gachaResults.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-center text-[var(--color-muted-foreground)]">
                    <span className="font-semibold text-[var(--color-foreground)]">{matchCount}곳</span> 중에서 {gachaResults.length}곳 추첨
                  </p>
                  {gachaResults.map((r) => (
                    <RestaurantCard
                      key={r.id}
                      restaurant={r}
                      people={people}
                      meal={meal}
                      defaultExpanded={false}
                      showWinHeader={false}
                      total={matchCount}
                    />
                  ))}
                  <p className="text-xs text-center text-[var(--color-muted-foreground)] pt-2">
                    마음에 안 들면 다시 돌려보세요
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
