import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../slices/user/user.js";
import productReducer from "../slices/products/products.js";
const rootReducer = combineReducers({
  user: userAuthReducer,
  products: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
