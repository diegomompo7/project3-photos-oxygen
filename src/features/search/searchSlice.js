import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const searchPhotos = createAsyncThunk(
  'search/searchPhotos',
  async (searchInput = "") => {

    let API_URL = ""

    if (searchInput !== "") {
      API_URL = `https://api.unsplash.com/search/photos/?query=${searchInput}&client_id=${process.env.REACT_APP_SECRET_KEY}`
    } else {
      API_URL = `https://api.unsplash.com/photos/random/?count=10&client_id=${process.env.REACT_APP_SECRET_KEY}`
    }

    try{
    const data = await fetch(API_URL);
    if (!data.ok) {
      throw new Error("No se pudieron cargar las fotos.");
    }
    const json = await data.json();
    if (searchInput !== "") {
      return json.results;
    } else {
      return json;
    }
    }catch (error) {
      throw new Error("No se pudieron cargar las fotos.");
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
      })
  }
});

export const selectSearchPhotos = (state) => state.search.photos;

export const isLoading = (state) => state.search.isLoading;

export default search.reducer;
