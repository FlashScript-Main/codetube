import { useState } from "react"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import useYouTube from "../api/useYouTube";
import { searchLink } from "../constants";
import { setThisDataType } from "../types";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("VS Code");
    const [mainData, setMainData] = useState<setThisDataType[] | null>([])
    
    const { isLoading } = useYouTube(`${searchLink}${selectedCategory}`, setMainData)

    // mainData && isFetched && console.log(mainData)
    return (
        <main className="flex flex-col md:flex-row">
            <aside className="h-auto md:h-[92vh] border-r border-r-[#3d3d3d] px-0 md:px-8">
                <Sidebar 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                />
            </aside>


            <section className="p-4 overflow-y-auto h-[90vh] flex-1">
                <h1 className="text-4xl font-bold mb-6 md:8 text-main-title text-center md:text-left">
                    {selectedCategory} {" "}
                    <span className="text-white">
                        Videos
                    </span>
                </h1>

                {!isLoading && <Videos videos={mainData} />}
            </section>
        </main>
    )

}

export default Feed