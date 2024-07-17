import { createContext, useContext, useEffect, useState } from "react"

type Language = "EN" | "FA"

type LanguageProviderProps = {
  children: React.ReactNode
  defaultLanguage?: Language
  storageKey?: string
}

type LanguageProviderState = {
  language: Language
  setlanguage: (language: Language) => void
}

const initialState: LanguageProviderState = {
  language: "EN",
  setlanguage: () => null,
}

const LanguageProviderContext = createContext<LanguageProviderState>(initialState)

export function LanguageProvider({
  children,
  defaultLanguage = "EN",
  storageKey = "vite-ui-language",
  ...props
}: LanguageProviderProps) {
  const [language, setlanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("EN", "FA")

    root.classList.add(language)
  }, [language])

  const value = {
    language,
    setlanguage: (language: Language) => {
      localStorage.setItem(storageKey, language)
      setlanguage(language)
    },
  }

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext)

  if (context === undefined)
    throw new Error("useLanguage must be used within a ThemeProvider")

  return context
}
