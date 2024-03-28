import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        cartshow: true,
        items: null,
        category: null,
        men: null,
        jewelry: null,
        electronics: null,
        women: null,
        product: null
        
    },
    reducers: {
        toggleCart: (state) =>{
            state.cartshow = !state.cartshow
        },
        addItems: (state, action) =>{
            state.items = action.payload
        },
        addMen: (state, action) =>{
            state.men = action.payload
        },
        addJewelry: (state, action) =>{
            state.jewelry = action.payload
        },
        addElectronics: (state, action) =>{
            state.electronics = action.payload
        },
        addWomen: (state, action) =>{
            state.women = action.payload
        },
        addCategory: (state, action) =>{
            state.category = action.payload
        },
        addProduct: (state, action) =>{
            state.product = action.payload
        }
        
    }
})

export const {toggleCart, addItems, addCategory, addMen, addJewelry, addElectronics, addWomen, addProduct} = appSlice.actions

export default appSlice.reducer