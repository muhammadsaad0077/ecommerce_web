import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        products: productSlice,
        // Pass the reducer directly
    }
});

export default store;
