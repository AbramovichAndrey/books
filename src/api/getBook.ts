import axios from "axios";
import { IBookDetails } from "../models/bookDetails.model";

type GetBookParams = {id: IBookDetails['isbn13']}

type GetBookSuccessResponse = IBookDetails;

export const getBook = ({id}:GetBookParams) :Promise<GetBookSuccessResponse> =>{
    return axios.get(`https://api.itbook.store/1.0/books/${id}`).then((res)=>res.data)
}

