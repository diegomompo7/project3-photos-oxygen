import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addFav: (state, action) => {
            return state.concat(action.payload)
        }
    }
})

export const {addFav} = favSlice.actions
export const favData = (state) => state.favorite

export default favSlice.reducer;