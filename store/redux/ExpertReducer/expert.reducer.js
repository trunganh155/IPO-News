import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "expert",

  initialState: {
    expert: [],
  },

  reducers: {
    setExpert: (state, action) => {
      state.expert = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setExpert } = slice.actions;
