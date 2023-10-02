import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IStoreBook } from "../../../types/IBook";

const initialState: IStoreBook = {
  searchBook: "",
};

export const bookSlice = createSlice({
  name: "bookReducer",
  initialState,
  reducers: {
    setSearchBook: (state, action: PayloadAction<string>) => {
      state.searchBook = action.payload;
    },
  },
});

export const { setSearchBook } = bookSlice.actions;
export default bookSlice.reducer;
