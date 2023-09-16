import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";
import { stat } from "fs";

import { IBook } from "../../../models/book.model";
import { IBookDetails } from "../../../models/bookDetails.model";

interface BookState {
  isBooksLoading: boolean;
  books: IBook[];

  favoriteBooks: IBook[];

  cartBooks: IBook[];

  isBookLoading: boolean;
  book: IBookDetails | null;
}

const initialState: BookState = {
  isBooksLoading: false,
  books: [],

  favoriteBooks: [],

  cartBooks: [],

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
    deleteBook: (state) => {
      state.book = initialState.book;
    },
    toggleBookIsFavorite: (state, action: PayloadAction<IBook>) => {
      const favoriteBookIndex = state.favoriteBooks.findIndex(
        (b) => b.isbn13 === action.payload.isbn13
      );
      if (favoriteBookIndex === -1) {
        state.favoriteBooks.push(action.payload);
      } else {
        state.favoriteBooks.splice(favoriteBookIndex, 1);
      }
    },

    setFavorites: (state, action: PayloadAction<IBook[]>) => {
      state.favoriteBooks = action.payload;
    },
    addBookToCart: (state, action: PayloadAction<IBook>) => {
      const cartBookIndex = state.cartBooks.findIndex(
        (b) => b.isbn13 === action.payload.isbn13
      );
      if (cartBookIndex === -1) {
        state.cartBooks.push(action.payload);
      } else {
        return;
      }
    },
    setCart: (state, action: PayloadAction<IBook[]>) => {
      state.cartBooks = action.payload.map((cartBooks) => ({
        ...cartBooks,
        count: 1,
      }));
    },
    incCountBook: (state, action: PayloadAction<IBook>) => {
      const book = state.cartBooks.find(
        (b) => b.isbn13 === action.payload.isbn13
      );
      if (book) {
        book.count += 1;
      }
    },
    decCountBook: (state, action: PayloadAction<IBook>) => {
      const book = state.cartBooks.find(
        (b) => b.isbn13 === action.payload.isbn13
      );
      if (book) {
        if (book.count > 1) book.count -= 1;
      }
    },

    deleteFromCart: (state, action: PayloadAction<IBook>) => {
      const cartBookIndex = state.cartBooks.findIndex(
        (b) => b.isbn13 === action.payload.isbn13
      );
      if (cartBookIndex !== -1) {
        state.cartBooks.splice(cartBookIndex, 1);
      }
    },
  },
});

export const {
  setIsBooksLoading,
  setBooks,
  setIsBookLoading,
  setBook,
  deleteBook,
  toggleBookIsFavorite,
  setFavorites,
  addBookToCart,
  setCart,
  deleteFromCart,
  incCountBook,
  decCountBook,
} = bookSlice.actions;

export default bookSlice.reducer;
