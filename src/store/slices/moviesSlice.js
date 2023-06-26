import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: "movie", //should be unique for all slices
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
        // ,
        // reset(state, action){
        //     return []; // because immer is not good(we can but we dont want state.splice(0, state.length()) here so we dont use immer implementation here
        // }
    // }
    
    },  extraReducers: (builder) => {
            builder.addCase(reset, (state, action) => {
                return [];
            });
        }
});

export const { addMovie, removeMovie } = moviesSlice.actions;

// export default moviesSlice.reducer;
// OR

export const moviesReducer = moviesSlice.reducer;