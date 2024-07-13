import React from "react";

export type CategoriesType = {
    id: number;
    name: string;
    icon: string;
}

export type SidebarType = {
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export type setThisDataType = {
    id?: {
        videoId?: string;
        channelId?: string;
    }
    snippet?: {
        channelId?: string;
        title: string;
        description?: string;
        thumbnails: {
            default: {
                url: string;
            },
            medium?: {
                url: string;
            },
            high?: {
                url: string;
            }
        };
        channelTitle: string
    }
}

export type VideosType = {
    videos: setThisDataType[] | null
}

/*
{
    "kind": "youtube#searchResult",
    "id": {
        "kind": "youtube#playlist",
        "playlistId": "PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw"
    },
    "snippet": {
        "publishedAt": "2020-07-06T07:23:27Z",
        "channelId": "UCW5YeuERMmlnqo4oq8vwUpg",
        "title": "Tailwind CSS Tutorial",
        "description": "",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/bxmDnn7lrnk/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/bxmDnn7lrnk/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/bxmDnn7lrnk/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "Net Ninja",
        "liveBroadcastContent": "none",
        "publishTime": "2020-07-06T07:23:27Z"
    }
}
*/