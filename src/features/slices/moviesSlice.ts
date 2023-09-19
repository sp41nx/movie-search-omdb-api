import {createSlice} from "@reduxjs/toolkit";
import {fetchInfo, fetchList} from "../api/searchRequest";
import {MovieInfo, ResponseList} from "../../utils/types";


const moviesList = createSlice({
    name: 'list',
    initialState: {
        moviesList: {} as ResponseList,
        movieInfo: {} as MovieInfo,
        pending: false
    },
    reducers: {},
    extraReducers:
     builder => {
        builder
            .addCase(fetchList.fulfilled, (state, action) => {
                return {...state, moviesList: action.payload}
            })
            .addCase(fetchInfo.fulfilled, (state, action) => {
                return {...state, movieInfo: action.payload, pending: false}
            })
            .addCase(fetchInfo.pending, (state, action) => {
                return {...state, pending: true}
            })
     }

});

export default moviesList.reducer;