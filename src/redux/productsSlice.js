// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await axios.get('http://localhost:3000/products');
//   return response.data;
// });

// const productsSlice = createSlice({
//   name: 'products',
//   initialState: { products: [], status: 'idle' },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.products = action.payload;
//       });
//   },
// });

// export default productsSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://localhost:3000/products');
  return response.data;  
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';  
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload; 
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed'; 
      });
  },
});

export default productsSlice.reducer;