import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setThisDataType } from '../types';
// import React from 'react';

const useYouTubeChannel = (url: string, setThisData: React.Dispatch<React.SetStateAction<setThisDataType | null>>) => {

    const options = {
        url: `https://youtube-v31.p.rapidapi.com/${url}`,
        params: {
            // maxResults: '50',
        },
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
    };


    return useQuery({
        queryKey: [url],
        queryFn: async () => {
            setThisData((await axios.request(options)).data.items[0])

            return setThisData
        },
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        enabled: false
    })

}

export default useYouTubeChannel