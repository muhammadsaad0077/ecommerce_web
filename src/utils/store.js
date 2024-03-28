// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appSlice
  },
});

export default store;
