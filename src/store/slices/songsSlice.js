import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({  //slice do 3 things 1) Define some initial state. 2) Combines "mini-reducers" into a big reducer. 3) Create a set of "action creator" function.
    name: "song",
    initialState: [],
    reducers: {
        //"song" (name) + "/" + "addSong"(reducer name)
        addSong(state, action) {
            //STATE IS NOT THE BIG STATE OBJECT IN THE STORE, IT IS THE PIECE OF STATE MANAGED BY THIS REDUCER
            state.push(action.payload); //using immer library internally hence state.push is used instead of something like {...state, song: action.payload}
        },
        // action of type : "song" + "/" + "removeSong" = "song/removeSong"
        removeSong(state, action){
            // action.payload === string, the song we want to remove
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }, 
    extraReducers(builder) { 
        builder.addCase(reset, (state, action) => {
            return [];
        });
    }
});



export const { addSong, removeSong } = songsSlice.actions;

// export default moviesSlice.reducer;
// OR

export const songsReducer = songsSlice.reducer;