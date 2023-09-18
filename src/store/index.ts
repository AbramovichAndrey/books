import { configureStore } from "@reduxjs/toolkit";
import bookReduser from "./books/books.reducer";

export const store = configureStore({
  reducer: {
    books: bookReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
