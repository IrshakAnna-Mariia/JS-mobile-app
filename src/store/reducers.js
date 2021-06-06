import {combineReducers} from "redux";
import {createSlice} from '@reduxjs/toolkit'
import React from "react";
import {videoExample, videoStatisticsExample} from './actions'

export const youtubeVideoSlice = createSlice({
    name: 'videoList',
    initialState: {
        videoList: [...videoExample],
        currentVideo: videoExample[0],
        currentVideoStatistics: videoStatisticsExample
    },
    reducers: {
        forSetVideoList: (state, action) => {
            state.videoList = [...action.payload];
        },
        forSetCurrentVideo: (state, action) => {
            state.videoList.map((value, index) => {
                if (value.id.videoId === action.payload) {
                    state.currentVideo = state.videoList[index];
                }
            })
        },
        forSetCurrentVideoStatistics: (state, action) => {
            state.currentVideoStatistics = action.payload;
        }
    }
});

const EventsApp = combineReducers({
    toolkit: youtubeVideoSlice.reducer
});

export  default EventsApp;
export const {forSetVideoList, forSetCurrentVideo} = youtubeVideoSlice.actions