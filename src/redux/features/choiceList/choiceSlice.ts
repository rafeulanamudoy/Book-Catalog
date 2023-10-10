import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IChoiceList } from "../../../types/IChoice";
import { IBook } from "../../../types/IBook";

const initialState: IChoiceList = {
  wishList: [] as IBook[], // Specify the type as an array of IBook
  readingList: [] as IBook[],
};

export const choiceSlice = createSlice({
  name: "choiceReducer",
  initialState,
  reducers: {
    setWishList: (state, action: PayloadAction<IBook>) => {
      const selectedBook = state.wishList.find(
        (book) => book._id === action.payload._id
      );
      console.log(selectedBook, "from setwishlist");

      if (selectedBook) {
        return;
      }

      state.wishList = [...state.wishList, action.payload];
    },
    setReadingList: (state, action: PayloadAction<IBook>) => {
      console.log(action.payload);
      const selectedBook = state.readingList.find(
        (book) => book._id === action.payload._id
      );
      console.log(selectedBook, "from setwishlist");

      if (selectedBook) {
        return;
      }

      state.readingList = [...state.readingList, action.payload];
    },

    deleteReadingList: (state, action: PayloadAction<IBook>) => {
      const filterBook = state.readingList.filter(
        (book) => book._id !== action.payload._id
      );

      state.readingList = [...filterBook];
    },
    deleteWishList: (state, action: PayloadAction<IBook>) => {
      const filterBook = state.wishList.filter(
        (book) => book._id !== action.payload._id
      );

      state.wishList = [...filterBook];
    },
  },
});

export const {
  setWishList,
  setReadingList,
  deleteReadingList,
  deleteWishList,
} = choiceSlice.actions;
export default choiceSlice.reducer;
