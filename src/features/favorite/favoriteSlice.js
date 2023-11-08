import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addFav: (state, action) => {
            return state.concat(action.payload)
        },
        removeFav: (state, action) => {
            return state.filter(fav => fav.id !== action.payload)
        }
        
    }
})

export const {addFav, removeFav} = favSlice.actions
export const favData = (state) => state.favorite

export default favSlice.reducer;