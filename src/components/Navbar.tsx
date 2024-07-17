import { codetubeDarkLogo, codetubeLightLogo } from "../constants"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import { ModeToggle } from "@/theme/mode-toggle"
import { useTheme } from "@/theme/theme-provider"

const Navbar = () => {

  const { theme } = useTheme()
    
    return (   
        <nav className="flex justify-between items-center px-8 py-4 sticky bg-body-bg-light dark:bg-body-bg-dark top-0 left-0 z-20 border-b border-b-red-600 dark:border-b-blue-400 rounded-r-full rounded-l-full shadow-md shadow-red-500/50 dark:shadow-blue-500/50 mb-4">
            <Link to="/">
                <img 
                    src={theme === "dark" ? codetubeDarkLogo : codetubeLightLogo} 
                    alt="CodeTube" 
                    className="h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32" 
                />
            </Link>

            <div className="grid ml-auto mr-4 md:mr-8 lg:mr-10">
                <ModeToggle />
            </div>
            
            <SearchBar />
        </nav>
    )

}

export default Navbar