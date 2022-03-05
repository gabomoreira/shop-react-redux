import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import cartSlice from "../features/cartSlice";
import menuSlice from "../features/menuSlice";
import totalPriceSlice from "../features/totalPriceSlice.js";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice,
    menu: menuSlice,
    total: totalPriceSlice,
  },
});
