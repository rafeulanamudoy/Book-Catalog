import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../redux/features/auth/authSlice";
import { baseApi } from "../redux/api/baseApi";
import bookSlice from "../redux/features/book/bookSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  book: bookSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
