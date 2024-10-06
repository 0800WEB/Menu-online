// redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.items = action.payload;
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setAllProducts,
  addProduct,
  removeProduct,
  setLoading,
  setError,
  clearError,
} = productSlice.actions;

export default productSlice.reducer;
