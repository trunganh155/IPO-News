import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "thuong",

  initialState: {
    thuong: [],
  },

  reducers: {
    setHoa: (state, action) => {
      state.thuong = action.payload;
    },
  },
});

export default slice.reducer;

// Actions

export const { setHoa } = slice.actions;
