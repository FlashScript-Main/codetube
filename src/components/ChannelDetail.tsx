import { useParams } from "react-router-dom"
import { channelLink, searchChannelLink } from "../constants";
import { useState } from "react";
import useYouTubeChannel from "../api/useYouTubeChannel";
import { setThisDataType } from "../types";
import useYouTube from "../api/useYouTube";
import { Videos, ChannelCard } from "./";
import { Loader } from "./Loader";

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState<setThisDataType | null>(null);
    const [videos, setVideos] = useState<setThisDataType[] | null>([])
    const { id } = useParams();

    const { isLoading: isVideosLoading }= useYouTube(`${searchChannelLink}${id}`, setVideos)
    const { isLoading: isChannelLoading, isFetched } = useYouTubeChannel(`${channelLink}${id}`, setChannelDetail)

    // {!isChannelLoading && console.log(channelDetail)}
    // {!isVideosLoading && console.log(videos)}

    return (
        <main>
            <div>
                <div className="h-[300px] z-10 bg-gradient-to-r from-yellow-400 dark:from-indigo-500 from-10% via-orange-500 dark:via-sky-500 via-30% to-rose-600 dark:to-emerald-500 to-90%" />
                {   
                    !isChannelLoading && isFetched &&
                    <ChannelCard
                        channelDetail={channelDetail} 
                        marginTop={true}
                    />
                }
            </div>

            <main className="flex p-4 mx-auto">
                {
                    !isChannelLoading && isFetched && isVideosLoading ? <Loader /> :
                    <Videos videos={videos} />
                }
            </main>
        </main>
    )

}

export default ChannelDetail