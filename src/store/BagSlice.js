import { createSlice } from "@reduxjs/toolkit";

const Bagslice = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    RemovefromBag: (state, action) => {
      return state.filter((item) => item != action.payload);
    },
  },
});

export const Bagactions = Bagslice.actions;

export default Bagslice;
