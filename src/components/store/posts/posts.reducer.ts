import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { arch } from "os";

import { IBook } from "../../../models/book.model";

interface PostState{
    isPostsLoading : boolean;
    posts: IBook[];

    isPostLoading : boolean;
    post: IBook | null;

}

const initialState : PostState = {
    isPostsLoading : false,
    posts: [],

    isPostLoading : false,
    post: null,
}

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers: {
        setIsPostsLoading: (state, action: PayloadAction<boolean>) => {
            state.isPostsLoading = action.payload;
          },
          setPosts: (state,action: PayloadAction<IBook[]>) =>{
            state.posts = action.payload;
          },
          setIsPostLoading: (state, action: PayloadAction<boolean>) => {
            state.isPostLoading = action.payload;
          },
          setPost: (state,action:PayloadAction<IBook>) =>{
            state.post = action.payload;
          }

    }
})

export const { setIsPostsLoading,
    setPosts,
    setIsPostLoading,
    setPost,} = postSlice.actions;

    export default postSlice.reducer;