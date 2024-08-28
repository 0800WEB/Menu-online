import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../slices/user/user.js";

const rootReducer = combineReducers({
  user: userAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export default store;
