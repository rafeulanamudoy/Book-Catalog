import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../redux/features/auth/authSlice";
import { baseApi } from "../redux/api/baseApi";
import bookSlice from "../redux/features/book/bookFilterSlice";
import choiceSlice from "../redux/features/choiceList/choiceSlice";

// import bookSlice from "../redux/features/book/bookSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  book: bookSlice,
  choiceList: choiceSlice,

  [baseApi.reducerPath]: baseApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
