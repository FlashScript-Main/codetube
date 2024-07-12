import { Route, Routes } from "react-router-dom"
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, NotFound } from './components';
const App = () => {

    return (
        <div className="bg-black text-white">
            <Navbar />

            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )

}

export default App