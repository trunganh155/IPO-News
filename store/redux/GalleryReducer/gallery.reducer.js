import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "gallery",

  initialState: {
    gallery: [],
  },

  reducers: {
    setGallery: (state, action) => {
      state.gallery = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setGallery } = slice.actions;
