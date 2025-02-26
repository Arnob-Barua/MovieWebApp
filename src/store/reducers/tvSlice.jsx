// Importing necessary libraries and components
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the TV slice
const initialState = {
    info: null,
};

// Creating the TV slice
export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {
        // Reducer to load TV show details
        loadtv: (state, action) => {
            state.info = action.payload;
        },

        // Reducer to remove TV show details
        removetv: (state) => {
            state.info = null;
        }
    },
});

// Exporting the actions from the TV slice
export const { loadtv, removetv } = tvSlice.actions;

// Exporting the TV slice reducer
export default tvSlice.reducer;