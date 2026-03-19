"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

const FOOD_EMOJIS = [
  "🍣", "🍱", "🍜", "🍛", "🍲", "🥘", "🍝", "🍤",
  "🍙", "🍗", "🍖", "🥗", "🍚", "🍘", "🥟", "🍢",
  "🍥", "🦐", "🍺", "🍶", "🍡", "🫕", "🥩", "🍾",
]

interface SlotReelProps {
  count: number
  onDone: () => void
}

function ReelColumn({ stopAfter, onStop }: { stopAfter: number; onStop: () => void }) {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * FOOD_EMOJIS.length))
  const [stopped, setStopped] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const onStopRef = useRef(onStop)
  onStopRef.current = onStop

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % FOOD_EMOJIS.length)
    }, 75)

    const stopTimeout = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setStopped(true)
      onStopRef.current()
    }, stopAfter)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      clearTimeout(stopTimeout)
    }
  }, [stopAfter])

  return (
    <div
      className={cn(
        "flex-1 flex items-center justify-center rounded-lg border text-4xl transition-colors duration-300",
        stopped
          ? "border-[var(--color-foreground)] bg-[var(--color-card)]"
          : "border-[var(--color-border)] bg-[var(--color-card)]"
      )}
      style={{ height: 80 }}
    >
      {FOOD_EMOJIS[idx]}
    </div>
  )
}

export function SlotReel({ count, onDone }: SlotReelProps) {
  const stoppedCount = useRef(0)

  const handleStop = useCallback(() => {
    stoppedCount.current += 1
    if (stoppedCount.current >= count) {
      setTimeout(onDone, 500)
    }
  }, [count, onDone])

  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <ReelColumn
          key={i}
          stopAfter={1200 + i * 600}
          onStop={handleStop}
        />
      ))}
    </div>
  )
}
