import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const productSlice = createSlice({
  name: "users",
  initialState: {
    products: [],
    loading: true,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const getProductList = createAsyncThunk(
  "products/getAllProduct",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    } catch (error) {
      console.log("first error", error);
    }
  }
);

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;
