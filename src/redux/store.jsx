import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProductsAsync } from './reducers/productsSlice';
import cartReducer from './reducers/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(fetchProductsAsync());
