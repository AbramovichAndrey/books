import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../api/getBook";
import { getBooks } from "../../api/getBooks";
import { getNewBooks } from "../../api/getNewBooks";
import { IBookDetails } from "../../models/bookDetails.model";

export const getNewBooksThunk = createAsyncThunk(
  "books/getNewBooksThunk",
  async () => {
    return getNewBooks();
  }
);

export const getBookThunk = createAsyncThunk(
  "books/getBookThunk",
  async (id: IBookDetails["isbn13"]) => {
    return getBook({ id });
  }
);

type GetBooksParams = {
  searchValue: string;
  page: string;
};

export const getBooksBySearch = createAsyncThunk(
  "books/getBooks",
  async ({ searchValue, page }: GetBooksParams) => {
    return getBooks({ searchValue, page });
  }
);
