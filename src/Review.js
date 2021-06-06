import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe'
import {connect} from "react-redux";

export default function Review({currentVideo, currentVideoStatistics}) {
    return (
        <View styles={styles.container}>
            <SafeAreaView style={{marginTop: '10%'}}>
                <YoutubePlayer height={259} videoId={currentVideo.id.videoId}/>
            </SafeAreaView>
            <Text>Title: {currentVideo.snippet.title}</Text>
            <Text>Description: {currentVideo.snippet.description}</Text>
            <Text>Thambnail:</Text>
            <Image
                style={{
                    width: currentVideo.snippet.thumbnails.medium.width,
                    height: currentVideo.snippet.thumbnails.medium.height
                }}
                source={{uri: currentVideo.snippet.thumbnails.medium.url}}
            />
            <Text>View count: {currentVideoStatistics.items[0].statistics.viewCount}</Text>
            <Text>Like count: {currentVideoStatistics.items[0].statistics.likeCount}</Text>
            <Text>Favorite count: {currentVideoStatistics.items[0].statistics.favoriteCount}</Text>
            <Text>Comment count: {currentVideoStatistics.items[0].statistics.commentCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

Review = connect(
    (state) => {
        return {
            currentVideo: state.toolkit.currentVideo,
            currentVideoStatistics: state.toolkit.currentVideoStatistics
        }
    }, {}
)(Review);