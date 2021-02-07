import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
    totalPrice: 0,
  },
  reducers: {
    loadToCart: (state, action) => {
      state.count = action.payload.length;
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.count += 1;
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.count -= 1;
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filteredItems;
    },
    increaseItems: (state, action) => {
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[productIndex].quantity = action.payload.quantity;
    },
    updateTotal: (state, action) => {
      let total = 0;
      state.items.forEach((item) => {
        total += item.quantity * parseInt(item.price.replace("Ksh.", ""));
      });
      state.totalPrice = total;
    },
  },
});
export default cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  loadToCart,
  increaseItems,
  updateTotal,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.items;
export const selectCount = (state) => state.cart.count;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const loadCart = (dispatch) => {
  try {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (!cartItems) {
      throw new Error("Something went wrong");
    }
    dispatch(loadToCart(cartItems));
  } catch (error) {}
};
