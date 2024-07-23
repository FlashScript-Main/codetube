import { Button } from "../theme/button"
import { CircleChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { LanguageToggle } from "@/language/language-toggle"
import { ModeToggle } from "@/theme/mode-toggle"
import PWAToggle from "./PWAToggle"

const MobileMenu = () => {

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="border-rose-500 dark:border-main-title group">
            <CircleChevronDown className="dark:group-hover:text-main-title group-hover:text-rose-500" />
          </Button>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent className="flex py-4 px-3 justify-center items-center gap-4 bg-body-bg-light dark:bg-body-bg-dark border border-red-600 dark:border-blue-400 shadow-md shadow-red-500/50 dark:shadow-blue-500/50 mb-4">
              <ModeToggle />

              <LanguageToggle />

              <PWAToggle />
        </DropdownMenuContent>
      </DropdownMenu>
    )

}

export default MobileMenu


/*
"use client"





export function DropdownMenuCheckboxes() {
  

  return (
    
  )
}

*/