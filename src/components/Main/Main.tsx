import React, { useEffect } from "react";
import styles from "./Main.module.css";
import { getSlice } from "../store/books/books.selectors";
import { useSelector, useDispatch } from "react-redux";
import { setIsBooksLoading, setBooks } from "../store/books/books.reducer";
import { getNewBooks } from "../../api/getNewBooks";
import NewReleasesBooks from "../NewReleasesBooks/NewReleasesBooks";
import Subscribe from "../Subscribe/Subscribe";
import Typography from "../Typography/Typography";

const Main: React.FC = () => {
  const { books, isBooksLoading: loading } = useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsBooksLoading(true));
    getNewBooks()
      .then((data) => dispatch(setBooks(data.books)))
      .finally(() => dispatch(setIsBooksLoading(false)));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.title}>
        <Typography variant="h1">NEW RELEASES BOOKS</Typography>
      </div>
      <div className={styles.books}>
        {loading && <Typography>Loading</Typography>}
        {!loading && books.length > 0 && <NewReleasesBooks books={books} />}
      </div>
      <div className={styles.subscribeWrapper}>
        <Subscribe />
      </div>
    </div>
  );
};

export default Main;
