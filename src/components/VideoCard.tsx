import { Link } from "react-router-dom";
import { setThisDataType } from "../types";
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../constants";
import { BadgeCheck } from "lucide-react";


const VideoCard = ({video}: {video: setThisDataType}) => {

    return (
        <div className="w-full md:w-[320px]">
            <Link to={video.id?.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
                <img 
                    src={video.snippet?.thumbnails.high?.url} 
                    alt={video.snippet?.title}
                    className="w-[358px] h-[180px]"
                />
            </Link>

            <Link to={video.id?.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
                <h3 className="text-xl font-bold text-white">
                    {video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </h3>
            </Link>

            <Link to={video.snippet?.channelId ? `/channel/${video.snippet.channelId}` : demoChannelUrl}>
                <div className="flex">
                    <h5 className="text-base font-bold text-gray-600">
                        {video.snippet?.channelTitle || demoChannelTitle}
                    </h5>

                    <span>
                        <BadgeCheck className="text-gray-300 ml-1 w-5" />
                    </span>
                </div>
            </Link>
        </div>
    )

}

export default VideoCard