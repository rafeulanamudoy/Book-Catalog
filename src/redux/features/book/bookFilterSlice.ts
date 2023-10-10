import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IStoreBook } from "../../../types/IBook";

const initialState: IStoreBook = {
  searchBook: "",
  genre: "",
  publicationYear: "",
};

export const bookSlice = createSlice({
  name: "bookReducer",
  initialState,
  reducers: {
    setSearchBook: (state, action: PayloadAction<string>) => {
      state.searchBook = action?.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action?.payload;
    },
    setYear: (state, action: PayloadAction<string>) => {
      state.publicationYear = action?.payload;
    },
  },
});

export const { setSearchBook, setGenre, setYear } = bookSlice.actions;
export default bookSlice.reducer;
