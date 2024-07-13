import { useParams } from "react-router-dom"
import { channelLink, searchChannelLink } from "../constants";
import { useState } from "react";
import useYouTubeChannel from "../api/useYouTubeChannel";
import { setThisDataType } from "../types";
import useYouTube from "../api/useYouTube";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState<setThisDataType | null>(null);
    const [videos, setVideos] = useState<setThisDataType[] | null>([])
    const { id } = useParams();

    const {isLoading: isChannelLoading } = useYouTubeChannel(`${channelLink}${id}`, setChannelDetail)
    const {isLoading: isVideosLoading }= useYouTube(`${searchChannelLink}${id}`, setVideos)

    {!isChannelLoading && console.log(channelDetail)}
    {!isVideosLoading && console.log(videos)}

    return (
        <main>
            <div>
                <div className="h-[300px] z-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" />

                <ChannelCard
                    channelDetail={channelDetail} 
                    marginTop="-110"
                />
            </div>

            <main className="flex p-4 mx-auto">
                <Videos videos={videos} />
            </main>
        </main>
    )

}

export default ChannelDetail