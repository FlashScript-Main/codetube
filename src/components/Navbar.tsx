// import { codetubeDarkLogo, codetubeLightLogo } from "../constants"
import { Link } from "react-router-dom"
import { codetubeDarkLogo } from "../constants"
import SearchBar from "./SearchBar"

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center px-8 py-4 sticky bg-body-bg-dark top-0 left-0 z-20 border-b border-b-blue-400 rounded-r-full rounded-l-full shadow-md shadow-blue-500/50 mb-4">
            <Link to="/">
                <img 
                    src={codetubeDarkLogo} 
                    alt="CodeTube" 
                    className="h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32" 
                />
            </Link>

            <SearchBar />
        </nav>
    )

}

export default Navbar