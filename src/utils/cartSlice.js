// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 1
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
    
      if (existingItemIndex !== -1) {
        // If item already exists in cart, update its quantity
        state.items[existingItemIndex].quantity += newItem.quantity;
      } else {
        // If item is not in cart, add it to the cart
        state.items.push(newItem);
      }
    },
    
    
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: state => {
      state.items = [];
    },
    addQuantity: (state, action) =>{
      state.quantity = action.payload
  }
  },
});

export const { addItemToCart, removeItemFromCart, clearCart, addQuantity } = cartSlice.actions;
export default cartSlice.reducer;
