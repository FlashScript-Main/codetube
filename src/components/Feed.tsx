import { useState } from "react"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import useYouTube from "../api/useYouTube";
import { searchLink } from "../constants";
import { setThisDataType } from "../types";
import { useLanguage } from "@/language/language-provider";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("VS Code");
    const [mainData, setMainData] = useState<setThisDataType[] | null>([])
    
    const { isLoading } = useYouTube(`${searchLink}${selectedCategory}`, setMainData)
    // mainData && isFetched && console.log(mainData)

    const { language } = useLanguage()

    return (
        <main className="flex flex-col md:flex-row">
            <aside className={`h-auto md:h-[92vh]  px-0 md:px-8 ${language === "FA" ? "md:order-last border-l border-l-amber-500 dark:border-l-[#3d3d3d]" : "border-r border-r-amber-500 dark:border-r-[#3d3d3d]"}`}>
                <Sidebar 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                />
            </aside>


            <section className="p-4 overflow-y-auto h-[90vh] flex-1">
                <h1 className={`text-4xl font-bold mb-6 md:mb-8 text-rose-500 dark:text-main-title text-center ${language === "FA" ? "md:text-end" : "md:text-left"}`}>
                    {selectedCategory} {" "}
                    <span className="text-main-text-h1-light dark:text-white">
                        {language === "FA" ? "ویدیو های" : "Videos"}
                    </span>
                </h1>

                {!isLoading && <Videos videos={mainData} />}
            </section>
        </main>
    )

}

export default Feed