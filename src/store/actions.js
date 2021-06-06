export function setVideoList(payload) {
    return {type: "videoList/setVideoList", payload}
}

export function setCurrentVideo(payload) {
    return {type: "videoList/forSetCurrentVideo", payload}
}

export function setCurrentVideoStatistics(payload) {
    return {type: "videoList/forSetCurrentVideoStatistics", payload}
}

export const videoExample = [{
    "etag": "L034N-Ik5JhwkVXSbYdzENHfRyk",
    "id": {
        "kind": "youtube#video",
        "videoId": "tv8ARwUm0CI",
    },
    "kind": "youtube#searchResult",
    "snippet": {
        "channelId": "UCP_IYZTiqbmUqmI3KXHIEoQ",
        "channelTitle": "eKreative",
        "description": "",
        "liveBroadcastContent": "none",
        "publishTime": "2018-08-25T16:35:03Z",
        "publishedAt": "2018-08-25T16:35:03Z",
        "thumbnails": {
            "default": {
                "height": 90,
                "url": "https://i.ytimg.com/vi/tv8ARwUm0CI/default.jpg",
                "width": 120,
            },
            "high": {
                "height": 360,
                "url": "https://i.ytimg.com/vi/tv8ARwUm0CI/hqdefault.jpg",
                "width": 480,
            },
            "medium": {
                "height": 180,
                "url": "https://i.ytimg.com/vi/tv8ARwUm0CI/mqdefault.jpg",
                "width": 320,
            },
        },
        "title": "eKreative second office soft launch",
    },
}];

export const videoStatisticsExample = {
    "kind": "youtube#videoListResponse",
    "etag": "traVdrsTIGEou-AiHy1O7Sjhz-k",
    "items": [
        {
            "kind": "youtube#video",
            "etag": "BuBtHj5eCKxVHA7Hxa0YB52Pyt8",
            "id": "tv8ARwUm0CI",
            "statistics": {
                "viewCount": "19",
                "likeCount": "0",
                "dislikeCount": "0",
                "favoriteCount": "0",
                "commentCount": "0"
            }
        }
    ],
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    }
}