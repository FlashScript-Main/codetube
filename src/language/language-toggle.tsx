import { Button } from "../theme/button"
import { useLanguage } from "./language-provider"


export function LanguageToggle() {

  const { setlanguage, language } = useLanguage()

  return (
    <Button variant="outline" size="icon" onClick={() => setlanguage(language === "EN" ? "FA" : "EN")} className="border-green-500 group">
      <span className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-green-500">
        {language === "EN" ? "EN" : "FA"}
      </span>

      <span className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-green-500">
        {language === "EN" ? "FA" : "EN"}
      </span>
    </Button>
  )
}
