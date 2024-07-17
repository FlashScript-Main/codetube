import { Link } from "react-router-dom"
import { setThisDataType } from "../types"
import { demoProfilePicture } from "../constants"
import { BadgeCheck } from "lucide-react"

const ChannelCard = ({channelDetail, marginTop}: {channelDetail: setThisDataType | null, marginTop?: boolean}) => {

    return (
        <div className={`grid place-content-center h-full w-full ${marginTop && `-mt-24 mb-8`}`}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <div className="flex flex-col justify-center text-center">
                    <img 
                        src={channelDetail?.snippet?.thumbnails.high?.url || demoProfilePicture} 
                        alt={channelDetail?.snippet?.title} 
                        className={`rounded-full w-48 mb-4 border-4 ${marginTop ? "border-yellow-400 dark:border-indigo-600" : "border-rose-500 dark:border-main-title"} hover:border-rose-700 dark:hover:border-indigo-500 mx-auto`}
                    />

                    <div className="flex justify-start items-center px-2 group mx-auto">
                        <h5 className={`font-bold ${marginTop ? "text-red-600 dark:text-indigo-200 text-lg md:text-xl" : "text-orange-500 dark:text-indigo-400 text-base"} group-hover:text-red-800 dark:group-hover:text-blue-500 text-center`}>
                            {channelDetail?.snippet?.title}
                        </h5>

                        <span>
                            <BadgeCheck className="ml-1 w-4 text-orange-500 dark:text-indigo-300 group-hover:text-red-800 dark:group-hover:text-blue-500 duration-0" />
                        </span>
                    </div>

                    {channelDetail?.statistics?.subscriberCount && (
                        <p className="text-orange-700 dark:text-blue-300">
                            {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()}
                            {" "} Subscribers
                        </p>
                    )}
                </div>
            </Link>
        </div>
    )

}

export default ChannelCard