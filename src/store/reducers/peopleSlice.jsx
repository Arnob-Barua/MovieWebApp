// Importing necessary libraries and components
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the people slice
const initialState = {
  info: null,
};

// Creating the people slice
export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    // Reducer to load person details
    loadperson: (state, action) => {
      state.info = action.payload;
    },
    // Reducer to remove person details
    removeperson: (state) => {
      state.info = null;
    },
  },
});

// Exporting the actions from the people slice
export const { loadperson, removeperson } = peopleSlice.actions;

// Exporting the people slice reducer
export default peopleSlice.reducer;