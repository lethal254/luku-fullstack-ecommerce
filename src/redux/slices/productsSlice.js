import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: "",
    lastFetch: "",
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
      state.lastFetch = Date.now();
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { addProducts, addError } = productsSlice.actions;

export const loadProducts = (category) => async (dispatch) => {
  try {
    const products = await axios.get(
      `/products${category ? "?category=" + category : ""}`
    );
    dispatch(addProducts(products.data));
  } catch (error) {
    dispatch(addError(error.message));
  }
};
export const selectProducts = (state) => state.products.products;
