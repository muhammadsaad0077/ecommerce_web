import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        cartshow: true,
        
    },
    reducers: {
        toggleCart: (state) =>{
            state.cartshow = !state.cartshow
        },
        
    }
})

export const {toggleCart} = appSlice.actions

export default appSlice.reducer