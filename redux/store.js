import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"

// Global store
export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});