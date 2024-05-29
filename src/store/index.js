import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/users.slice";
import { productReducer } from "./slices/products.slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
  },
});
