import * as Facebook from "expo-facebook";
import * as Google from 'expo-google-app-auth';
import {Alert} from "react-native";

export async function logInWithFacebook() {
    try {
        await Facebook.initializeAsync({
            appId: '4504910682947163',
        });
        const {
            type,
            token,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
        });
        console.dir({type, token})
        if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        }
    } catch ({ message }) {
        console.log(message)
        Alert.alert('Error!',`Facebook Login Error: ${message}`);
        return message;
    }
}

export async function logInWithGoogle() {
    try {
        const {type, accessToken, user} = await Google.logInAsync({
            clientId: '456183061327-dt1u4qu40d6rjh7f9421vb0re84s1362.apps.googleusercontent.com',
            iosClientId: '456183061327-maeccrft9qfk0m3h6ap5bv6niga8l14b.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });

        if (type === 'success') {
            const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            Alert.alert('Logged in!', `Hi ${(await userInfoResponse.json()).name}!`);
        } else return type;
    } catch ({ message }) {
        Alert.alert('Error!',`Google Login Error: ${message}`);
        return message;
    }
}