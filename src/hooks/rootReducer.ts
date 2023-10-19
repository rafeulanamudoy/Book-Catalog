import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../redux/features/auth/authSlice";
import { baseApi } from "../redux/api/baseApi";
import toggleSlice from "../redux/features/toggole/toggleSlice";
import serviceSlice from "../redux/features/service/serviceSlice";
import bookingSlice from "../redux/features/Booking/bookingSlice";

// import bookSlice from "../redux/features/book/bookSlice";

export const rootReducer = combineReducers({
  auth: authSlice,

  toggle: toggleSlice,
  service: serviceSlice,
  booking: bookingSlice,

  [baseApi.reducerPath]: baseApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
