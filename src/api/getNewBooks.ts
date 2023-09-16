import axios from "axios";
import { IBook } from "../models/book.model";

type GetBooksSuccessResponse = {
  total: string;
  books: IBook[];
};

export const getNewBooks = (): Promise<GetBooksSuccessResponse> => {
  return axios
    .get("https://api.itbook.store/1.0/new")
    .then((res) => res.data );
};
