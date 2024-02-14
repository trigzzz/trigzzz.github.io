import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    notification: null, 
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.notification = 'Item added to the cart :)'; 
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearNotification: (state) => {
      state.notification = null; 
    },
  },
});

export const { addToCart, removeFromCart, clearNotification } = cartSlice.actions;

export default cartSlice.reducer;
