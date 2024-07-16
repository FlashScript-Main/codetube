import { VideosType } from '../types/index';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }: VideosType) => {

    console.log(videos)
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 md:gap-x-4`}>
            {videos?.map((item, index) => (
                <div key={index} className={`${item.id?.kind === "youtube#playlist" ? "hidden" : 'w-full h-[110%] border-2 border-sky-800 hover:border-sky-500 hover:shadow-md hover:shadow-blue-500/50 duration-300 mx-auto overflow-hidden rounded-xl'}`}>
                    {item.id?.videoId && <VideoCard video={item} />}

                    {item.id?.channelId && <ChannelCard channelDetail={item} />}
                </div>
            ))}
        </div>
    )

}

export default Videos