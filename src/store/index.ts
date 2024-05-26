// store.ts
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/Categories.slice";
import productsReducer from "./slices/Products.slice";
import cartReducer from "./slices/cart.slice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
