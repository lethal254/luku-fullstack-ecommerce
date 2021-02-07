import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/productsSlice";
import cartReducer from "../slices/cartSlice";
import slidesReducer from "../slices/sliderSlice";
import categorySlice from "../slices/categorySlice";
import userSlice from "../slices/userSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    slides: slidesReducer,
    categories: categorySlice,
    user: userSlice,
  },
});
