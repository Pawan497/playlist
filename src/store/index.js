import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";


const store = configureStore({  // creating store
    reducer: {
        songs: songsReducer,  //naming of state keys are here
        movies: moviesReducer
    }
});

export { addSong, removeSong, addMovie, removeMovie, reset, store };

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

//create seperate slice then add store

// export const reset = createAction("app/reset"); //any name can be written for type like app/reset , koaol, jsos/ksl etc

// console.log(reset("pop"), reset.toString());

// const songsSlice = createSlice({  //slice do 3 things 1) Define some initial state. 2) Combines "mini-reducers" into a big reducer. 3) Create a set of "action creator" function.
//     name: "song",
//     initialState: [],
//     reducers: {
//         //"song" (name) + "/" + "addSong"(reducer name)
//         addSong(state, action) {
//             //STATE IS NOT THE BIG STATE OBJECT IN THE STORE, IT IS THE PIECE OF STATE MANAGED BY THIS REDUCER
//             state.push(action.payload); //using immer library internally hence state.push is used instead of something like {...state, song: action.payload}
//         },
//         // action of type : "song" + "/" + "removeSong" = "song/removeSong"
//         removeSong(state, action){
//             // action.payload === string, the song we want to remove
//             const index = state.indexOf(action.payload);
//             state.splice(index, 1);
//         }
//     }, 
//     extraReducers(builder) { // watch about additional action type
//         ////When reset reducer is defined in moviesSlice
//         // // builder.addCase("movie/reset", (state, action) => {
//         // builder.addCase(moviesSlice.actions.reset, (state, action) => {    
//         //     return [];
//         // });

//         builder.addCase(reset, (state, action) => {
//             return [];
//         });
//     }
// });


// console.log("STORE => ",store);

// // console.log(songsSlice.actions.addSong("Some song!"));//actually its actionCreatorsand not actions

// const startingState = store.getState(); // see state in store
// console.log(JSON.stringify(startingState));

// // store.dispatch({
// //     type: "song/addSong",
// //     payload: "New Song!!!"
// // });

// //OR

// store.dispatch(songsSlice.actions.addSong("Some song!"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

// console.log(songsSlice.reducer);

// const moviesSlice = createSlice({
//     name: "movie", //should be unique for all slices
//     initialState: [],
//     reducers: {
//         addMovie(state, action) {
//             state.push(action.payload);
//         },
//         removeMovie(state, action) {
//             const index = state.indexOf(action.payload);
//             state.splice(index, 1);
//         }
//         // ,
//         // reset(state, action){
//         //     return []; // because immer is not good(we can but we dont want state.splice(0, state.length()) here so we dont use immer implementation here
//         // }
//     // }
    
//     },  extraReducers: (builder) => {
//             builder.addCase(reset, (state, action) => {
//                 return [];
//             });
//         }
// });


// const store = configureStore({  // creating store
//     reducer: {
//         songs: songsSlice.reducer,  //naming of state keys are here
//         movies: moviesSlice.reducer
//     }
// });

// export { store };

// export const { addSong, removeSong } = songsSlice.actions;
// // export const { addMovie, removeMovie, reset } = moviesSlice.actions; //when moviesSlice had reset reducer
// export const { addMovie, removeMovie } = moviesSlice.actions;

// console.log("action creater type => ",moviesSlice.actions.reset.toString());