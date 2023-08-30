import { IBook } from "./book.model";

export interface IBookDetails extends IBook {
  error: number;
  authors: string;
  publisher: string;
  isbn10: number;
  pages: number;
  year: number;
  rating: number;
  desc: string;
  pdf: {};
}
