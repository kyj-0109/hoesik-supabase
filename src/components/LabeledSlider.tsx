"use client"

import * as SliderPrimitive from "@radix-ui/react-slider"

interface LabeledSliderProps {
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
  unit: string
}

export function LabeledSlider({ value, onChange, min, max, step = 1, unit }: LabeledSliderProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xl font-semibold tabular-nums min-w-[52px] text-right text-[var(--color-foreground)]">
        {value}<span className="text-xs font-normal text-[var(--color-muted-foreground)] ml-0.5">{unit}</span>
      </span>
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none flex-1 h-5"
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
      >
        <SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-[var(--color-border)]">
          <SliderPrimitive.Range className="absolute h-full bg-[var(--color-foreground)]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block h-4 w-4 rounded-full border border-[var(--color-border)] bg-white shadow-sm cursor-pointer focus-visible:outline-none"
        />
      </SliderPrimitive.Root>
    </div>
  )
}
