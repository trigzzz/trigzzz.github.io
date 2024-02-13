import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../data/data.js';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [], 
  reducers: {},
});

export default productsSlice.reducer;
