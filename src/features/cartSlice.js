import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cartItems;

export default cartSlice.reducer;
