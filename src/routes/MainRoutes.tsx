import { Route, Routes } from "react-router-dom"
import { Feed, VideoDetail, ChannelDetail, SearchFeed, NotFound } from '../components';

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default MainRoutes