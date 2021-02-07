import { createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import cache from "../../helpers/caching";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    error: "",
    lastFetch: "",
  },
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload;
      state.lastFetch = Date.now();
    },
    addError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export default categorySlice.reducer;
export const { addCategories, addError } = categorySlice.actions;

export const selectCategories = (state) => state.categories.categories;

export const loadCategories = async (dispatch, getState) => {
  const { lastFetch } = getState().products;
  if (cache(lastFetch)) return;
  try {
    const response = await axios.get("/categories");
    dispatch(addCategories(response.data));
  } catch (error) {
    dispatch(addError({ error: error.message }));
  }
};
