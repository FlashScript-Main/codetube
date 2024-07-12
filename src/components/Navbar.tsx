// import { codetubeDarkLogo, codetubeLightLogo } from "../constants"
import { Link } from "react-router-dom"
import { codetubeDarkLogo } from "../constants"
import SearchBar from "./SearchBar"

const Navbar = () => {

    return (
        <nav className="flex justify-between items-center p-4 sticky bg-black top-0">
            <Link to="/" className="flex items-center">
                <img src={codetubeDarkLogo} alt="CodeTube" className="h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-28" />
            </Link>

            <SearchBar />
        </nav>
    )

}

export default Navbar