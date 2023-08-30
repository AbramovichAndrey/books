import { IBook } from "../models/book.model";

type GetBookParams = {id: IBook['isbn13']}

type GetBookSuccessResponse = IBook;

