import { createSlice } from "@reduxjs/toolkit";

const itemslice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitalItems: (state, action) => {
      return action.payload;
    },
  },
});

export const Itemactions = itemslice.actions;

export default itemslice;
