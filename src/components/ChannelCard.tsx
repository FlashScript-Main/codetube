import { Link } from "react-router-dom"
import { setThisDataType } from "../types"
import { demoProfilePicture } from "../constants"
import { BadgeCheck } from "lucide-react"
import { useLanguage } from "@/language/language-provider"
import { motion } from 'framer-motion';

const ChannelCard = ({channelDetail, marginTop}: {channelDetail: setThisDataType | null, marginTop?: boolean}) => {

    const { language } = useLanguage();

    return (
        <div className={`grid place-content-center h-full w-full ${marginTop && `-mt-24 mb-8`}`}>
            <Link to={marginTop ? "" : `/channel/${channelDetail?.id?.channelId}`}>
                <div className="flex flex-col justify-center text-center">
                    <motion.img 
                        src={channelDetail?.snippet?.thumbnails?.default?.url || demoProfilePicture} 
                        alt={channelDetail?.snippet?.title} 
                        className={`rounded-full w-48 mb-4 border-4 ${marginTop ? "border-yellow-400 dark:border-indigo-600" : "border-rose-500 dark:border-main-title"} hover:border-rose-700 dark:hover:border-indigo-500 mx-auto`}
                        initial={marginTop && { y: "-30%" }}
                        animate={marginTop && { y: "0%" }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    />

                    <motion.div 
                        className="flex justify-start items-center px-2 group mx-auto"
                        initial={marginTop && { y: "30%" }}
                        animate={marginTop && { y: "0%" }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <h5 className={`font-bold ${marginTop ? "text-red-600 dark:text-indigo-200 text-lg md:text-xl" : "text-orange-500 dark:text-indigo-400 text-base"} group-hover:text-red-800 dark:group-hover:text-blue-500 text-center`}>
                            {channelDetail?.snippet?.title}
                        </h5>

                        <span>
                            <BadgeCheck className="ml-1 w-4 text-orange-500 dark:text-indigo-300 group-hover:text-red-800 dark:group-hover:text-blue-500 duration-0" />
                        </span>
                    </motion.div>

                    {channelDetail?.statistics?.subscriberCount && (
                        <motion.p 
                            className="text-orange-700 dark:text-blue-300 flex gap-1 mx-auto"
                            initial={marginTop && { y: "30%" }}
                            animate={marginTop && { y: "0%" }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <span>
                                {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()}
                            </span>
                            <span className={`${language === "FA" && "order-first"}`}>
                                {language === "FA" ? "مشترک" : "Subscribers"}
                            </span>
                        </motion.p>
                    )}
                </div>
            </Link>
        </div>
    )

}

export default ChannelCard