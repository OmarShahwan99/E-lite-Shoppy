import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";
import productsSlice from "./products-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
