import { Route, Routes, useLocation } from "react-router-dom"
import { Feed } from '../components';
import React from "react";
import { Loader } from "@/components/Loader.tsx";
import { AnimatePresence } from 'framer-motion';

const LazyAbout = React.lazy(() => import("../components/About.tsx"))
const LazyVideoDetail = React.lazy(() => import("../components/VideoDetail.tsx"))
const LazyChannelDetail = React.lazy(() => import("../components/ChannelDetail.tsx"))
const LazySearchFeed = React.lazy(() => import("../components/SearchFeed.tsx"))
const LazyNotFound = React.lazy(() => import("../components/NotFound.tsx"))

const MainRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence initial={false} mode="popLayout">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<React.Suspense fallback={<Loader />}><LazyAbout /></React.Suspense>} />
                <Route path="/video/:id" element={<React.Suspense fallback={<Loader />}><LazyVideoDetail /></React.Suspense>} />
                <Route path="/channel/:id" element={<React.Suspense fallback={<Loader />}><LazyChannelDetail /></React.Suspense>} />
                <Route path="/search/:searchTerm" element={<React.Suspense fallback={<Loader />}><LazySearchFeed /></React.Suspense>} />
                <Route path="*" element={<React.Suspense fallback={<Loader />}><LazyNotFound /></React.Suspense>} />
            </Routes>
        </AnimatePresence>

    )
}

export default MainRoutes