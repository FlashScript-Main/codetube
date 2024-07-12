
const useYouTube = () => {

    return (
        <div>useYouTube</div>
    )

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