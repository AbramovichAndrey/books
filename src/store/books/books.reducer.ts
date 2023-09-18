import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBook } from "../../models/book.model";
import { IBookDetails } from "../../models/bookDetails.model";
import {
  getNewBooksThunk,
  getBookThunk,
  getBooksBySearch,
} from "./books.actions";

interface BookState {
  isBooksLoading: boolean;
  books: IBook[];

  favoriteBooks: IBook[];

  cartBooks: IBook[];

  isBookLoading: boolean;
  book: IBookDetails | null;

  total: string;
  search: string;
  searchBooks: IBook[];
  isSearchLoading: boolean;
}

const initialState: BookState = {
  isBooksLoading: false,
  books: [],

  favoriteBooks: [],

  cartBooks: [],

  isBookLoading: false,
  book: null,

  total:"",
  search: "",
  searchBooks: [],
  isSearchLoading: false,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      
    },
  },

  extraReducers(builder) {
    builder.addCase(getNewBooksThunk.pending, (state) => {
      state.isBooksLoading = true;
    });

    builder.addCase(getNewBooksThunk.fulfilled, (state, action) => {
      state.isBooksLoading = false;
      state.books = action.payload.books;
    });

    builder.addCase(getBookThunk.pending, (state) => {
      state.isBookLoading = true;
    });

    builder.addCase(getBookThunk.fulfilled, (state, action) => {
      state.isBookLoading = false;
      state.book = action.payload;
    });

    builder.addCase(getBooksBySearch.pending, (state) => {
      state.isSearchLoading = true;
    });

    builder.addCase(getBooksBySearch.fulfilled, (state, action) => {
      state.isSearchLoading = false;
      state.searchBooks = action.payload.books;
      state.total = action.payload.total;
    });
  },
});

export const {
  deleteBook,
  toggleBookIsFavorite,
  setFavorites,
  addBookToCart,
  setCart,
  deleteFromCart,
  incCountBook,
  decCountBook,
  setSearch,
} = bookSlice.actions;

export default bookSlice.reducer;
