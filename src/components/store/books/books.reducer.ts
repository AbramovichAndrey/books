import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBook } from "../../../models/book.model";
import { IBookDetails } from "../../../models/bookDetails.model";


interface BookState {
  isBooksLoading: boolean;
  books: IBook[];

  isBookLoading: boolean;
  book: IBookDetails | null;
}

const initialState: BookState = {
  isBooksLoading: false,
  books: [],

  isBookLoading: false,
  book: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setIsBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isBooksLoading = action.payload;
    },
    setBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
    },
    setIsBookLoading: (state, action: PayloadAction<boolean>) => {
      state.isBookLoading = action.payload;
    },
    setBook: (state, action: PayloadAction<IBookDetails>) => {
      state.book = action.payload;
    },
  },
});

export const { setIsBooksLoading, setBooks, setIsBookLoading, setBook } =
  bookSlice.actions;

export default bookSlice.reducer;