import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import React from 'react';

const useYouTube = (url: string, setThisData: any) => {

    const options = {
        // url: `https://youtube-v31.p.rapidapi.com/search?part=snippets&q=${url}`,
        // url: `https://youtube-v31.p.rapidapi.com/search/part=snippet&q=${url}`,
        url: `https://youtube-v31.p.rapidapi.com/search?q=${url}&part=snippet%2Cid`,
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
        // refetchOnMount: true,
        // enabled: false,
        
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