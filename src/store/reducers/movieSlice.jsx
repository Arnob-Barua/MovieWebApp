// Importing necessary libraries and components
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the movie slice
const initialState = {
    info: null,
};

// Creating the movie slice
export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        // Reducer to load movie details
        loadmovie: (state, action) => {
            state.info = action.payload;
        },

        // Reducer to remove movie details
        removemovie: (state) => {
            state.info = null;
        }
    },
});

// Exporting the actions from the movie slice
export const { loadmovie, removemovie } = movieSlice.actions;

// Exporting the movie slice reducer
export default movieSlice.reducer;