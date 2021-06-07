import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function VideoItem(props) {
    const onPress = () => {
        props.onPress(props.videoId)
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Image
                style={{
                    width: props.thumbnailDefault.width,
                    height: props.thumbnailDefault.height
                }}
                source={{uri: props.thumbnailDefault.url}}
            />
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
    },
    text: {
        fontSize: 12,
    },
});