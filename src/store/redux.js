import { configureStore } from "@reduxjs/toolkit";
import itemslice from "./Itemslice";
import FetchStatusSlice from "./FetchStatusSlice";
import Bagslice from "./BagSlice";
import Wishlist from "../routes/Wishlist";
import Wishlistslice from "./WishlistSlice";

const myntrastore = configureStore({
  reducer: {
    items: itemslice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    Bag: Bagslice.reducer,
    Wishlist: Wishlistslice.reducer,
  },
});

export default myntrastore;
