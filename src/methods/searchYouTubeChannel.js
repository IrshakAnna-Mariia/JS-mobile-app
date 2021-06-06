import {Alert} from "react-native";

const API_KAY = 'AIzaSyAeUmrlpOEU59zdEKrGwPe7j2wHYK_7Yf0';
const channel_id = 'UCP_IYZTiqbmUqmI3KXHIEoQ';

const httpsUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCP_IYZTiqbmUqmI3KXHIEoQ&maxResults=100&type=video&key=AIzaSyAeUmrlpOEU59zdEKrGwPe7j2wHYK_7Yf0'

export async function searchYouTubeChannel() {
    try {
        return fetch(httpsUrl).then(res => res.json()).then(data => {
            if (data) return data;
        })
    } catch ({ message }) {
        Alert.alert('Error!',`YouTube List Error: ${message}`);
    }
}

export async function getStatisticYouTubeChannel(videoId) {
    try {
        const apiCall = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&maxResults=1&key=AIzaSyAeUmrlpOEU59zdEKrGwPe7j2wHYK_7Yf0`

        return fetch(apiCall).then(res => res.json()).then(data => {
            if (data) return data;
        })
    } catch ({ message }) {
        Alert.alert('Error!',`YouTube List Error: ${message}`);
    }
}
