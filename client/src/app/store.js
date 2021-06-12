import { configureStore } from "@reduxjs/toolkit";
import cardRepoReducer from "../features/cardRepo/cardRepoSlice";
import authReducer from "../features/auth/authSlice";
import errorReducer from "../features/error/errorSlice";

export const store = configureStore({
  reducer: {
    cardRepo: cardRepoReducer,
    auth: authReducer,
    error: errorReducer
  },
});
