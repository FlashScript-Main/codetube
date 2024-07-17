import { useState } from "react"
import Videos from "./Videos"
import useYouTube from "../api/useYouTube";
import { searchUserLink } from "../constants";
import { setThisDataType } from "../types";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

    // const [userInput, setUserInput] = useState("")
    // const [userInputRestul, setUserInputRestul] = useState(null)

    const [mainData, setMainData] = useState<setThisDataType[] | null>([])

    const { searchTerm } = useParams();
    
    const { isLoading } = useYouTube(`${searchUserLink}${searchTerm}`, setMainData)

    return (
        <main className="p-4 md:p-8 overflow-y-auto h-[90vh] flex-1">
            <h1 className="text-4xl font-bold mb-6 md:8 text-main-text-h1-light dark:text-white text-center md:text-left">
                Search Result for {" "} 
                <span className="text-rose-500 dark:text-main-title">
                    {searchTerm} 
                </span>
                {" "} Videos
            </h1>

            {!isLoading && <Videos videos={mainData} />}
        </main>
    )

}

export default SearchFeed