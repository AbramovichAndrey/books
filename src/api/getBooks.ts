import axios from "axios";
import { IBook } from "../models/book.model";

type GetBooksSuccessResponse = {
  total: string;
  page: number;
  books: IBook[];
};

export const getBooks = (searchValue: string): Promise<GetBooksSuccessResponse> => {
  return axios
    .get(`https://api.itbook.store/1.0/search/${searchValue}`)
    .then((res) => res.data);
};
