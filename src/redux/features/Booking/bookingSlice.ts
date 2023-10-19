import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IService } from "../../../types/IService";
import { IBooking } from "../../../types/IBooking";

const initialState: IBooking = {
  addToCart: [],
};

export const BookingSlice = createSlice({
  name: "BookingReducer",
  initialState,
  reducers: {
    setAddToCart: (state, action: PayloadAction<IService>) => {
      //console.log(action.payload);

      state.addToCart.push(action.payload);
    },
  },
});

export const { setAddToCart } = BookingSlice.actions;
export default BookingSlice.reducer;
