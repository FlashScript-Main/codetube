import { Link } from "react-router-dom";
import { setThisDataType } from "../types";
import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl } from "../constants";
import { BadgeCheck } from "lucide-react";


const VideoCard = ({video}: {video: setThisDataType}) => {

    return (
        <div className="w-full flex flex-col gap-4">
            <Link to={video.id?.videoId ? `/video/${video.id.videoId}` : demoVideoUrl} className="overflow-hidden group">
                <img 
                    src={video.snippet?.thumbnails.high?.url || demoProfilePicture} 
                    alt={video.snippet?.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-all"
                />
            </Link>

            <Link to={video.id?.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
                <h3 className="text-lg font-medium text-main-text-h1-light dark:text-white px-2 hover:text-red-500 dark:hover:text-main-title">
                    {video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </h3>
            </Link>

            <Link to={video.snippet?.channelId ? `/channel/${video.snippet.channelId}` : demoChannelUrl}>
                <div className="flex justify-start items-center px-2 group">
                    <h5 className="text-base font-bold text-orange-500 dark:text-indigo-400 group-hover:text-red-800 dark:group-hover:text-blue-500">
                        {video.snippet?.channelTitle || demoChannelTitle}
                    </h5>

                    <span>
                        <BadgeCheck className="ml-1 w-4 text-orange-500 dark:text-indigo-300 group-hover:text-red-800 dark:group-hover:text-blue-500 duration-0" />
                    </span>
                </div>
            </Link>
        </div>
    )

}

export default VideoCard