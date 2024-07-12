import { useState } from "react"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import useYouTube from "../api/useYouTube";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("VS Code");
    const [mainData, setMainData] = useState(null)

    const { isFetched, refetch } = useYouTube(selectedCategory, setMainData)

    mainData && isFetched && console.log(mainData)
    return (
        <main className="flex flex-col md:flex-row">
            <aside className="h-auto md:h-[92vh] border-r border-r-[#3d3d3d] px-0 md:px-8">
                <Sidebar 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                    refetch={refetch}
                />

                <h5 className="copyright mt-6 text-white">
                    Copyright 2024 FlashScript
                </h5>
            </aside>

            <section className="p-4 overflow-y-auto h-[90vh] flex-1">
                <h1 className="text-4xl font-bold mb-4 text-white">
                    {selectedCategory} {" "}
                    <span className="text-[#FC1503]">
                        vidoes
                    </span>
                </h1>

                <Videos videos={[]} />
            </section>
        </main>
    )

}

export default Feed