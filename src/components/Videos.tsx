
type VideosProps = {
    videos: string[]
}
const Videos = ({ videos }: VideosProps) => {

    console.log(videos)
    return (
        <div>Videos</div>
    )

}

export default Videos