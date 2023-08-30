import React, { useEffect } from "react";
import styles from "./Main.module.css";
import { IBook } from "../../models/book.model";
import { getSlice } from "../store/books/books.selectors";
import { useSelector, useDispatch } from "react-redux";
import { setIsBooksLoading, setBooks } from "../store/books/books.reducer";
import { getBooks } from "../../api/getBooks";
import { RootState } from "../store";
import NewReleasesBooks from "../NewReleasesBooks/NewReleasesBooks";
import Subscribe from "../Subscribe/Subscribe";
import Typography from "../Typography/Typography";

const Main: React.FC = () => {
  const { books, isBooksLoading: loading } = useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsBooksLoading(true));
    getBooks()
      .then((data) => dispatch(setBooks(data.books)))
      .finally(() => dispatch(setIsBooksLoading(false)));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.title}>
        <Typography variant="h1" children={"NEW RELEASES BOOKS"} />
      </div>
      <div className={styles.books}>
        {loading && "Loading"}
        {!loading && books.length > 0 && <NewReleasesBooks books={books} />}
      </div>
      <div className={styles.subscribeWrapper}>
        <Subscribe />
      </div>
    </div>
  );
};

export default Main;
