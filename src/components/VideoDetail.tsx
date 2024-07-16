import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import { searchVideoLink, videoLink } from "../constants";
import { useState } from "react";
import { setThisDataType } from "../types";
import useYouTubeChannel from "../api/useYouTubeChannel";
import { BadgeCheck } from "lucide-react";
import useYouTube from "../api/useYouTube";
import Videos from "./Videos";

const VideoDetail = () => {

    const { id } = useParams();

    const [videoDetail, setVideoDetail] = useState<setThisDataType | null>(null)
    const [videos, setVideos] = useState<setThisDataType[] | null>([])
    
    const { isLoading: isVideoDetailLoading } = useYouTubeChannel(`${videoLink}${id}`, setVideoDetail)
    const { isLoading: isVideosLoading } = useYouTube(`${searchVideoLink}${id}`, setVideos)

    console.log(videoDetail)
    return (
        <main className="min-h-[95vh]">
            <div className="flex flex-col">
                <div className="flex">
                    <div className="w-full">
                        {
                            isVideoDetailLoading ? 'Loading...' : 
                            <ReactPlayer 
                                url={`https://www.youtube.com/watch?v=${id}`} 
                                className="react-player"
                                controls
                            />
                        }

                        <h5 className="py-2 md:py-4 px-4 md:px-6 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-indigo-200">
                            {videoDetail?.snippet?.title}
                        </h5>

                        <div className="py-2 mx-4 md:mx-6 flex flex-col md:flex-row justify-between text-white border-b">
                            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                <div className="flex justify-start items-center group">
                                    <h5 className="text-base font-bold text-indigo-400 group-hover:text-blue-500">
                                        {videoDetail?.snippet?.channelTitle}
                                    </h5>

                                    <span>
                                        <BadgeCheck className="ml-1 w-4 text-indigo-300 group-hover:text-blue-500" />
                                    </span>
                                </div>
                            </Link>

                            <div className="flex gap-5 items-center justify-end md:justify-normal">
                                <p className="text-sm opacity-70">
                                    {videoDetail?.statistics?.viewCount && parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                                </p>
                                
                                <p className="text-sm opacity-70">
                                    {videoDetail?.statistics?.likeCount && parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 py-10 md:py-2 flex justify-center items-center">
                    {
                        !isVideosLoading && 
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