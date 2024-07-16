import { Route, Routes } from "react-router-dom"
import { Feed } from '../components';
import React from "react";

const LazyAbout = React.lazy(() => import("../components/About.tsx"))
const LazyVideoDetail = React.lazy(() => import("../components/VideoDetail.tsx"))
const LazyChannelDetail = React.lazy(() => import("../components/ChannelDetail.tsx"))
const LazySearchFeed = React.lazy(() => import("../components/SearchFeed.tsx"))
const LazyNotFound = React.lazy(() => import("../components/NotFound.tsx"))

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about" element={<React.Suspense fallback="Loading..."><LazyAbout /></React.Suspense>} />
        <Route path="/video/:id" element={<React.Suspense fallback="Loading..."><LazyVideoDetail /></React.Suspense>} />
        <Route path="/channel/:id" element={<React.Suspense fallback="Loading..."><LazyChannelDetail /></React.Suspense>} />
        <Route path="/search/:searchTerm" element={<React.Suspense fallback="Loading..."><LazySearchFeed /></React.Suspense>} />
        <Route path="*" element={<React.Suspense fallback="Loading..."><LazyNotFound /></React.Suspense>} />
    </Routes>
)

export default MainRoutes