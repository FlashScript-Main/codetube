import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setThisDataType } from '../types';
// import React from 'react';

const useYouTube = (url: string, setThisData: React.Dispatch<React.SetStateAction<setThisDataType[] | null>>) => {

    const options = {
        url: `https://youtube-v31.p.rapidapi.com/${url}`,
        params: {
            maxResults: '50',
        },
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };


    return useQuery({
        queryKey: [url],
        queryFn: async () => {
            setThisData((await axios.request(options)).data.items)

            return setThisData
        },
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        enabled: false
    })

}

export default useYouTube


/*
🔹 API's Info 🔹

🔻 https://youtube-v31.p.rapidapi.com/search 🔻
    relatedToVideoId 👉🏻 7ghhRHRP6t4 (videoId)
    part 👉🏻 id,snippets
    type 👉🏻 video
    maxResults 👉🏻 50
    q 👉🏻 music
    order 👉🏻 date
    channelId 👉🏻 UCBVjMGOIkavEAhyqpxJ73Dw (channelId)


🔻 https://youtube-v31.p.rapidapi.com/videos 🔻
    part 👉🏻 contentDetails,snippet,statistics
    id 👉🏻 7ghhRHRP6t4 (videoId)


🔻 https://youtube-v31.p.rapidapi.com/channels 🔻
    part 👉🏻 snippet,statistics
    id 👉🏻 UCBVjMGOIkavEAhyqpxJ73Dw (channelId)
*/
