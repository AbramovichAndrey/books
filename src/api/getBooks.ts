import axios from "axios";
import { IBook } from "../models/book.model";

type GetBooksSuccessResponse = {
  total: string;
  page: number;
  books: IBook[];
};

type GetBooksParams = {
  searchValue: string;
  page: string;
};

export const getBooks = ({
  searchValue,
  page,
}: GetBooksParams): Promise<GetBooksSuccessResponse> => {
  return axios
    .get(`https://api.itbook.store/1.0/search/${searchValue}/${page}`)
    .then((res) => res.data);
};
