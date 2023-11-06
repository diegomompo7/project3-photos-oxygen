import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {searchInput} from '../../App'

let API_URL=""


if(searchInput !== ""){
  API_URL = `https://api.unsplash.com/search/photos/?query=${searchInput}&client_id=4PC_QDoXSrF2wFtTFAp6I7GlcARBFeSIfk-II145rrQ`
}else{
  const random = Math.floor(Math.random(1) * 30)
  API_URL = `https://api.unsplash.com/photos/random/?count=${random}&client_id=4PC_QDoXSrF2wFtTFAp6I7GlcARBFeSIfk-II145rrQ`
}

export const searchPhotos = createAsyncThunk(
      'search/searchPhotos',
      async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        if(searchInput !== ""){
          return json.results;
        }else{
        return json;
        }
      }
  )
  const search = createSlice({
    name: 'search',
    initialState: {
      photos: [],
      isLoadingPhotos: false,
      hasError: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchPhotos.pending, (state) => {
          state.isLoadingPhotos = true;
          state.hasError = false;
        })
        .addCase(searchPhotos.fulfilled, (state, action) => {
          state.isLoadingPhotos = false;
          state.photos = action.payload;
        })
        .addCase(searchPhotos.rejected, (state, action) => {
          state.isLoadingPhotos = false;
          state.hasError = true;
          state.photos = [];
        })
    }
  });

export const selectSearchPhotos = (state) => state.search.photos;

export const isLoading = (state) => state.search.isLoading;

export default search.reducer;
