import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import VideoItem from './VideoItem'
import {connect} from "react-redux";
import {setCurrentVideo, setCurrentVideoStatistics} from './store/actions';
import {getStatisticYouTubeChannel} from "./methods/searchYouTubeChannel";

export default function VideoList(props) {
    function onPress(videoId) {
        props.setCurrentVideo(videoId);
        getStatisticYouTubeChannel(videoId).then(data => {
            props.setCurrentVideoStatistics(data);
        });
        props.navigation.navigate('Review');
    }
    const {videoList} = props;

    return (
        <View style={styles.containerView}>
            <Text>eKreative</Text>
            <ScrollView>
                {videoList.map((item) => {
                    return <VideoItem
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        thumbnailDefault={item.snippet.thumbnails.default}
                        onPress={onPress}
                        key={item.id.videoId}
                    />
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        paddingTop: '10%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentVideo: (ownProps) => dispatch(setCurrentVideo(ownProps)),
        setCurrentVideoStatistics: (ownProps) => dispatch(setCurrentVideoStatistics(ownProps))
    }
}

VideoList = connect(
    (state) => {
        return {
            videoList: state.toolkit.videoList,
            currentVideo: state.toolkit.currentVideo
        }
    }, mapDispatchToProps
)(VideoList);

