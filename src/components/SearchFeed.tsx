import { useState } from "react"
import Videos from "./Videos"
import useYouTube from "../api/useYouTube";
import { searchUserLink } from "../constants";
import { setThisDataType } from "../types";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { motion } from 'framer-motion';
import { useLanguage } from "@/language/language-provider";

const SearchFeed = () => {

    // const [userInput, setUserInput] = useState("")
    // const [userInputRestul, setUserInputRestul] = useState(null)

    const [mainData, setMainData] = useState<setThisDataType[] | null>([])

    const { searchTerm } = useParams();
    
    const { isLoading } = useYouTube(`${searchUserLink}${searchTerm}`, setMainData)

    const { language } = useLanguage();

    return (
        <main className="p-4 md:p-8 overflow-y-auto h-[90vh] flex-1">
            <motion.h1 
                className={`flex gap-2 text-4xl font-bold mb-6 md:8 text-main-text-h1-light dark:text-white justify-center items-center ${language === "FA" ? "md:justify-end" : "md:justify-start"}`}
                initial={language === "FA" ? { x: "-10%" } : { x: "10%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >   
                {language === "FA" ? "نتایج جستجو برای" : "Search Result for"}
                
                <span className={`${language === "FA" && "order-first"} text-rose-500 dark:text-main-title`}>
                    {searchTerm} 
                </span>
                
                <span className={`${language === "FA" && "hidden"}`}>
                    Videos
                </span>
            </motion.h1>

            {isLoading ? <Loader /> : <Videos videos={mainData} />}
        </main>
    )

}

export default SearchFeed