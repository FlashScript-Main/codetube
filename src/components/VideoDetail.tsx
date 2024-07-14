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

    // const [mainData, setMainData] = useState<setThisDataType[] | null>(null)
    const [videoDetail, setVideoDetail] = useState<setThisDataType | null>(null)
    const [videos, setVideos] = useState<setThisDataType[] | null>([])
    
    const { isLoading: isVideoDetailLoading } = useYouTubeChannel(`${videoLink}${id}`, setVideoDetail)
    const { isLoading: isVideosLoading } = useYouTube(`${searchVideoLink}${id}`, setVideos)

    console.log(videoDetail)
    return (
        <main className="min-h-[95vh]">
            <div className="flex flex-col md:flex-row">

                <div className="flex flex-1">
                    <div className="w-full sticky top-[86px]">
                        {
                            isVideoDetailLoading ? 'Loading...' : 
                            <ReactPlayer 
                                url={`https://www.youtube.com/watch?v=${id}`} 
                                className="react-player"
                                controls
                            />
                        }

                        <h5 className="text-white text-base font-bold p-4">
                            {videoDetail?.snippet?.title}
                        </h5>

                        <div className="flex justify-between text-white py-2 px-4">
                            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                <p className="flex text-sm md:text-base text-white">
                                    {videoDetail?.snippet?.channelTitle}

                                    <span>
                                        <BadgeCheck className="text-gray-300 ml-1 w-5" />
                                    </span>
                                </p>
                            </Link>

                            <div className="flex gap-5 items-center">
                                <p className="text-sm opacity-70">
                                    {videoDetail?.statistics?.viewCount && parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                                </p>
                                
                                <p className="text-sm opacity-70">
                                    {videoDetail?.statistics?.likeCount && parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                                </p>
                            </div>
                        </div>
                        
                        <div className="px-4 py-10 md:py-2 flex justify-center items-center">
                            {
                                !isVideosLoading && 
                                <Videos 
                                    videos={videos}
                                    direction="column" 
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default VideoDetail