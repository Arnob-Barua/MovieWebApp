
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadperson: (state, action) => {
      state.info = action.payload;
    },
    removeperson: (state) => {
      state.info = null;
    },
  },
});

export const { loadperson, removeperson } = peopleSlice.actions;

export default peopleSlice.reducer;