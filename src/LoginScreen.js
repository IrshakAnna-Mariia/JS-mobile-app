import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'
import LoginButton from './LoginButton';
import {logInWithFacebook, logInWithGoogle} from './methods/login';
import {searchYouTubeChannel} from './methods/searchYouTubeChannel'
import {forSetVideoList} from "./store/reducers";

export default function LoginScreen(props) {
    function loginFacebook() {
        logInWithFacebook().then(r => {
            if (!r) props.navigation.navigate('Home')
            searchYouTubeChannel().then(data => {
                props.forSetVideoList(data.items);
            })
        });
    }

    function loginGoogle() {
        logInWithGoogle().then(r => {
            if (!r) props.navigation.navigate('Home')
            searchYouTubeChannel().then(data => {
                props.forSetVideoList(data.items);
            })
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Log In</Text>
            <LoginButton
                backgroundColor="#de4d41"
                text='Google Login'
                iconName='google'
                onPress={() => {
                    loginGoogle()
                }}
            />
            <LoginButton
                backgroundColor="#4867aa"
                text='Facebook Login'
                iconName='facebook'
                onPress={() => {
                    loginFacebook();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#102099FF"
    },
});

LoginScreen = connect(
    (state) => {
        return {
            videoList: state.toolkit.videoList
        }
    },
    {
        forSetVideoList
    }
)(LoginScreen);
