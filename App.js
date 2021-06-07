import 'react-native-gesture-handler';
import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import { createStore} from "redux"
import {Provider} from 'react-redux'
import youtubeVideoSlice from "./src/store/reducers"
import LoginScreen from './src/LoginScreen'
import VideoList from './src/VideoList'
import Review from './src/Review'

const AppStack = createStackNavigator();

export const store = createStore(youtubeVideoSlice);

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppStack.Navigator headerMode='none'>
                    <AppStack.Screen name='Login' component={LoginScreen}/>
                    <AppStack.Screen name='Home' component={VideoList}/>
                    <AppStack.Screen name='Review' component={Review}/>
                </AppStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
