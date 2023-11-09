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
        },
        updateFav: (state, action) => {
            const findId = state.findIndex((data) => data.id === action.payload.id)
            if(findId !== -1) {
                const updateData = {...state[findId]}

                if(action.payload.newValues.title){
                    updateData.description = action.payload.newValues.title
                }
                state[findId] = updateData
            }
        },
        sortFav: (state, action) => {

            switch (action.payload.order) {
                case "width":
                    return state.sort((a, b) => b.width - a.width);
                case "height":
                    return state.sort((a, b) => b.height - a.height);
                case "likes":
                    return state.sort((a, b) => b.likes - a.likes);
                case "date":
                    return state.sort((a, b) => b.date - a.date);;
                default:
                    break;
            }
        },
    }
})

export const {addFav, removeFav, updateFav, sortFav} = favSlice.actions
export const favData = (state) => state.favorite

export default favSlice.reducer;