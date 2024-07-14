import { setThisDataType } from "../types"
import { demoProfilePicture } from "../constants"
import { BadgeCheck } from "lucide-react"

const MainChannelCard = ({channelDetail, marginTop}: {channelDetail: setThisDataType | null, marginTop?: string}) => {

    return (
        <div className={`rounded-[20px] flex justify-center w-[356px] md:w-[320px] h-[326px] ${marginTop && `-mt-[110px]`} mx-auto`}>
            <div className="flex flex-col justify-center text-center">
                <img 
                    src={channelDetail?.snippet?.thumbnails.high?.url || demoProfilePicture} 
                    alt={channelDetail?.snippet?.title} 
                    className="rounded-[50%] h-[180px] w-[180px] mb-4 border border-[#e3e3e3]"
                />

                <div className="flex">
                    <h5 className="text-base font-bold text-white">
                        {channelDetail?.snippet?.title}
                    </h5>

                    <span>
                        <BadgeCheck className="text-gray-300 ml-1 w-5" />
                    </span>
                </div>

                {channelDetail?.statistics?.subscriberCount && (
                    <p className="text-slate-500">
                        {parseInt(channelDetail.statistics.subscriberCount).toLocaleString()}
                        {" "} Subscribers
                    </p>
                )}
            </div>
        </div>
    )

}

export default MainChannelCard