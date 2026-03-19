"use client"

import { useState, useCallback, useMemo } from "react"
import { Restaurant, GenreGroup } from "@/data/types"
import { getMatches } from "@/data/filters"
import { LanguageProvider, useLang } from "@/contexts/LanguageContext"
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

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <button
      onClick={() => setLang(lang === 'ko' ? 'ja' : 'ko')}
      className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[var(--color-border)] text-xs text-[var(--color-muted-foreground)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)] transition-colors cursor-pointer select-none"
    >
      <span className={lang === 'ko' ? 'text-[var(--color-foreground)] font-semibold' : ''}>KO</span>
      <span className="opacity-30">/</span>
      <span className={lang === 'ja' ? 'text-[var(--color-foreground)] font-semibold' : ''}>JA</span>
    </button>
  )
}

function HomeInner({ restaurants, maxPeople }: HomeClientProps) {
  const { lang, tr } = useLang()

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
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                {tr.title}
              </h1>
              <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                {tr.subtitle}
              </p>
            </div>
            <LangToggle />
          </div>
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
            <SearchResults matches={matches} people={people} meal={meal} lang={lang} />
          )}

          {mode === "gacha" && (
            <div className="space-y-5">
              <Button
                size="lg"
                className="w-full"
                onClick={spin}
                disabled={isSpinning}
              >
                {isSpinning ? tr.spinning : tr.spinBtn}
              </Button>

              {matches.length > 0 && !isSpinning && !isAnimating && gachaResults.length === 0 && (
                <p className="text-xs text-center text-[var(--color-muted-foreground)]">
                  {tr.waitingCount(matches.length)}
                </p>
              )}

              {matches.length === 0 && (
                <p className="text-sm text-center text-[var(--color-muted-foreground)] py-8">
                  {tr.noMatch}
                </p>
              )}

              {isAnimating && (
                <div>
                  <p className="text-xs text-center text-[var(--color-muted-foreground)] mb-3">
                    {tr.drawingFrom(matchCount)}
                  </p>
                  <SlotReel count={Math.min(GACHA_COUNT, matches.length)} onDone={onSlotDone} />
                </div>
              )}

              {gachaResults.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-center text-[var(--color-muted-foreground)]">
                    {tr.drawnResult(matchCount, gachaResults.length)}
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
                    {tr.retryHint}
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

export default function HomeClient(props: HomeClientProps) {
  return (
    <LanguageProvider>
      <HomeInner {...props} />
    </LanguageProvider>
  )
}
