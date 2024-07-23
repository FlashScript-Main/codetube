import { Button } from "../theme/button"
import { useLanguage } from "./language-provider"


export function LanguageToggle() {

  const { setlanguage, language } = useLanguage()

  return (
    <Button variant="outline" size="default" onClick={() => setlanguage(language === "EN" ? "FA" : "EN")} className="border-green-500 group xs:hidden">
      <span className={`group-hover:text-green-500 hidden sm:block`}>
        {language === "EN" ? "فارسی" : "English"}
      </span>
      <span className={`group-hover:text-green-500 sm:hidden`}>
        {language === "EN" ? "FA" : "EN"}
      </span>
    </Button>
  )
}
