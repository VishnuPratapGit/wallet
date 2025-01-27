import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import balanceReducer from "./accountBalanceSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    balance: balanceReducer,
  },
});
