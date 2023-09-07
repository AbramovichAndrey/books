import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBook } from "../../../models/book.model";
import { IBookDetails } from "../../../models/bookDetails.model";

interface BookState {
  isBooksLoading: boolean;
  books: IBook[];

  favoriteBooks: IBook[];

  isBookLoading: boolean;
  book: IBookDetails | null;
}

const initialState: BookState = {
  isBooksLoading: false,
  books: [],

  favoriteBooks: [],

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

      // if (book) {
      //   // Check if the book is already a favorite
      //   const isFavorite = state.favoriteBooks.some(
      //     (favoriteBook) => favoriteBook.isbn13 === action.payload
      //   );

      //   if (isFavorite) {
      //     // If it's a favorite, remove it from the favorites list
      //     state.favoriteBooks = state.favoriteBooks.filter(
      //       (favoriteBook) => favoriteBook.isbn13 !== action.payload
      //     );
      //   } else {
      //     // If it's not a favorite, add it to the favorites list
      //     state.favoriteBooks.push(book);
      //   }
    },

    setFavorites: (state, action: PayloadAction<IBook[]>) => {
      state.favoriteBooks = action.payload;
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
} = bookSlice.actions;

export default bookSlice.reducer;
