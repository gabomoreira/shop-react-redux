import { createSlice } from "@reduxjs/toolkit";

export const totalPriceSlice = createSlice({
  name: "total",
  initialState: {
    totalPrice: 0.0,
  },
  reducers: {
    totalPriceItems: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { totalPriceItems } = totalPriceSlice.actions;

export const selectTotalPrice = (state) => state.total.totalPrice;

export default totalPriceSlice.reducer;
