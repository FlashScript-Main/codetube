import { codetubeDarkLogo, codetubeLightLogo } from "../constants"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { ModeToggle } from "@/theme/mode-toggle"
import { useTheme } from "@/theme/theme-provider"
import { LanguageToggle } from "@/language/language-toggle"
import { useLanguage } from "@/language/language-provider"

const Navbar = () => {

    const { theme } = useTheme()
    const { language } = useLanguage()
    
    return (   
        <nav className="flex justify-between items-center px-8 py-4 sticky bg-body-bg-light dark:bg-body-bg-dark top-0 left-0 z-20 border-b border-b-red-600 dark:border-b-blue-400 rounded-r-full rounded-l-full shadow-md shadow-red-500/50 dark:shadow-blue-500/50 mb-4">
            <Link to="/" className={`${language === "FA" ? "order-last" : ""}`}>
                <img 
                    src={theme === "dark" ? codetubeDarkLogo : codetubeLightLogo} 
                    alt="CodeTube" 
                    className="h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32"
                />
            </Link>

            <div className={`flex gap-4 lg:gap-8 ${language === "FA" ? "mr-auto ml-4 md:ml-8 lg:ml-10" : "ml-auto mr-4 md:mr-8 lg:mr-10"}`}>
                <ModeToggle />
                <LanguageToggle />
            </div>
            
            <SearchBar />
        </nav>
    )

}

export default Navbar