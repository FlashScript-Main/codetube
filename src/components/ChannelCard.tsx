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
                        className={`rounded-full w-48 mb-4 border-4 ${marginTop ? "border-indigo-600" : "border-main-title"} hover:border-indigo-500 mx-auto`}
                    />

                    <div className="flex justify-start items-center px-2 group mx-auto">
                        <h5 className={`font-bold ${marginTop ? "text-indigo-200 text-lg md:text-xl" : "text-indigo-400 text-base"}  group-hover:text-blue-500 text-center`}>
                            {channelDetail?.snippet?.title}
                        </h5>

                        <span>
                            <BadgeCheck className="ml-1 w-4 text-indigo-300 group-hover:text-blue-500 duration-0" />
                        </span>
                    </div>

                    {channelDetail?.statistics?.subscriberCount && (
                        <p className="text-blue-300">
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