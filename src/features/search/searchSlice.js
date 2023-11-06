import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {searchInput} from '../../App'

let API_URL=""
const random = Math.floor(Math.random(1) * 30)

if(searchInput !== ""){
  API_URL = `https://api.unsplash.com/search/photos/?query=${searchInput}&client_id=ULtwv1v7E2bGDmFPnXhKdkZBa_Yb46f2OFUAOyETGxM`
}else{
  API_URL = `https://api.unsplash.com/photos/random/?count=${random}&client_id=ULtwv1v7E2bGDmFPnXhKdkZBa_Yb46f2OFUAOyETGxM`
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
