import { VideosType } from '../types/index';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }: VideosType) => {

    return (
        <div className={`flex flex-wrap justify-start gap-4 ${direction && `flex-col`}`}>
            {videos?.map((item, index) => (
                <div key={index}>
                    {item.id?.videoId && <VideoCard video={item} />}

                    {item.id?.channelId && <ChannelCard channelDetail={item} />}
                </div>
            ))}
        </div>
    )

}

export default Videos