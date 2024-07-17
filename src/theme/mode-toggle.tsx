import { Moon, Sun } from "lucide-react"

import { Button } from "../theme/button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {

  const { setTheme, theme } = useTheme()

  return (
  <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="border-rose-500 dark:border-main-title group">
    <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:text-main-title" />
    <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:text-yellow-300" />
  </Button>
  )
}
