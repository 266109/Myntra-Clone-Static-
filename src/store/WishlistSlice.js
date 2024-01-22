import { createSlice } from "@reduxjs/toolkit";

const Wishlistslice = createSlice({
  name: "Wishlist",
  initialState: [],
  reducers: {
    addtoWishlist: (state, action) => {
      console.log(state);
      state.push(action.payload);
    },
    removefromWishlist: (state, action) => {
      console.log(state);
      return state.filter((item) => item != action.payload);
    },
  },
});

export const Wishlistactions = Wishlistslice.actions;

export default Wishlistslice;
