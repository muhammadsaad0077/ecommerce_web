import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productData: null,
    },
    reducers: {
        addData: (state, action)=>{
            state.productData = action.payload
        },
    }
});

export default productSlice.reducer;
export const { addData } = productSlice.actions;
