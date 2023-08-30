import { configureStore } from "@reduxjs/toolkit";
import postReduser from "./posts/posts.reducer";

export const store = configureStore({
    reducer: {
        posts: postReduser,
    },
});

export type RootState = ReturnType<typeof store.getState>