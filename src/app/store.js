import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
// import favoriteReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    // favorite: favoriteReducer,
  },
});
