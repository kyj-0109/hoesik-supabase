"use client"

import { createContext, useContext, useState } from "react"
import { Lang, t } from "@/data/i18n"

type Tr = typeof t.ko | typeof t.ja

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  tr: Tr
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'ko',
  setLang: () => {},
  tr: t.ko,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko')
  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
