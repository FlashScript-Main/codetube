import { VideosType } from '../types/index';
import { VideoCard, ChannelCard } from './';
import { motion } from 'framer-motion';

const Videos = ({ videos }: VideosType ) => {

    // console.log(videos)
    
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 md:gap-x-4 mb-8`}>
            {videos?.map((item, index) => (
                <motion.div 
                    key={index} 
                    className={`${item.id?.kind === "youtube#playlist" ? "hidden" : 'w-full h-[110%] border-2 border-rose-500 dark:border-sky-800 hover:border-rose-600 dark:hover:border-sky-500 hover:shadow-md hover:shadow-rose-600/50 dark:hover:shadow-blue-500/50 duration-300 mx-auto overflow-hidden rounded-xl'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeIn", delay: Number(`0.${index}`)}}
                >
                    {item.id?.videoId && <VideoCard video={item} />}

                    {item.id?.channelId && <ChannelCard channelDetail={item} />}
                </motion.div>
            ))}
        </div>
    )

}

export default Videos