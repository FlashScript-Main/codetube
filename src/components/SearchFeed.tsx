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
        <main className="p-4 overflow-y-auto h-[90vh] flex-1">
            <h1 className="text-4xl font-bold mb-4 text-white">
                Search Result for: {" "} 
                <span className="text-[#FC1503]">
                    {searchTerm} 
                </span>
                {" "} vidoes
            </h1>

            {!isLoading && <Videos videos={mainData} />}
        </main>
    )

}

export default SearchFeed