import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { searchVideoLink, videoLink } from "../constants";
import { useState } from "react";
import { setThisDataType } from "../types";
import useYouTubeChannel from "../api/useYouTubeChannel";
import { BadgeCheck } from "lucide-react";
import useYouTube from "../api/useYouTube";
import Videos from "./Videos";
import { useLanguage } from "@/language/language-provider";
import { Loader } from "./Loader";
// import Loader from "./Loader";
import { motion } from 'framer-motion';

const VideoDetail = () => {

    const { id } = useParams();

    const [videoDetail, setVideoDetail] = useState<setThisDataType | null>(null)
    const [videos, setVideos] = useState<setThisDataType[] | null>([])
    
    useYouTubeChannel(`${videoLink}${id}`, setVideoDetail)
    const { isLoading } = useYouTube(`${searchVideoLink}${id}`, setVideos)

    // console.log(videoDetail)

    const { language } = useLanguage();

    return (
        <main className="min-h-[95vh]">
            <div className="flex flex-col">
                <div className="flex">
                    <div className="w-full">
                        <ReactPlayer 
                            url={`https://www.youtube.com/watch?v=${id}`} 
                            className="react-player"
                            controls
                        />

                        <motion.h5 
                            className="py-2 md:py-4 px-4 md:px-6 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-rose-700 dark:text-indigo-200"
                            initial={{ x: "10%" }}
                            animate={{ x: "0%" }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            {videoDetail?.snippet?.title}
                        </motion.h5>

                        <div className="py-2 mx-4 md:mx-6 flex flex-col md:flex-row justify-between text-main-text-h1-light font-medium dark:font-normal dark:text-white border-b border-yellow-600 dark:border-blue-400 pb-3 mb-4">
                            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                <motion.div 
                                    className="flex justify-start items-center group"
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <h5 className="text-base md:text-lg font-bold text-orange-500 dark:text-indigo-400 group-hover:text-red-800 dark:group-hover:text-blue-500">
                                        {videoDetail?.snippet?.channelTitle}
                                    </h5>

                                    <span>
                                        <BadgeCheck className="ml-1 w-4 md:w-5 text-orange-500 dark:text-indigo-300 group-hover:text-red-800 dark:group-hover:text-blue-500 duration-0" />
                                    </span>
                                </motion.div>
                            </Link>

                            <motion.div 
                                className="flex gap-5 items-center justify-end md:justify-normal mt-2 md:mt-0"
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <p className="text-sm md:text-base opacity-70 flex gap-1">
                                    <span>
                                        {videoDetail?.statistics?.viewCount && parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} 
                                    </span>
                                    <span className={`${language === "FA" && "order-first"}`}>
                                        {language === "FA" ? "بازدید" : "Views"}
                                    </span>
                                </p>
                                
                                <p className="text-sm md:text-base opacity-70 flex gap-1">
                                    <span>
                                        {videoDetail?.statistics?.likeCount && parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}
                                    </span>
                                    <span className={`${language === "FA" && "order-first"}`}>
                                        {language === "FA" ? "پسندیده" : "Likes"}
                                    </span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-10 md:py-2 flex justify-center items-center">
                    {
                        isLoading ? <Loader /> : 
                        <Videos 
                            videos={videos}
                        />
                    }
                </div>
            </div>
        </main>
    )

}

export default VideoDetail