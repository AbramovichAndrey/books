import React, { useEffect } from "react";
import styles from "./Main.module.css";
import { getSlice } from "../store/books/books.selectors";
import { useSelector, useDispatch } from "react-redux";
import ListOfBook from "../ListOfBook/ListOfBook";
import Subscribe from "../Subscribe/Subscribe";
import Typography from "../Typography/Typography";
import { getNewBooksThunk } from "../store/books/books.actions";
import { AppDispatch } from "../store";

const Main: React.FC = () => {
  const {
    books,
    search,
    searchBooks,
    isBooksLoading: loading,
    isSearchLoading: searchLoading,
  } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNewBooksThunk());
  }, [dispatch]);

  return (
    <>
      {search === "" && (
        <div>
          <div className={styles.title}>
            <Typography variant="h1">NEW RELEASES BOOKS</Typography>
          </div>
          <div className={styles.books}>
            {loading && <Typography>Loading</Typography>}
            {!loading && books.length > 0 && <ListOfBook books={books} />}
          </div>
          <div className={styles.subscribeWrapper}>
            <Subscribe />
          </div>
        </div>
      )}
      {search != "" && (
        <div>
          {searchLoading && <Typography>Loading</Typography>}
          {!searchLoading && searchBooks.length > 0 && (
            <>
              <div className={styles.title}>
                <Typography variant="h1">{`'${search}' SEARCH RESULTS`}</Typography>
                <Typography
                  variant="span"
                  font="secondaryFont"
                  color="secondary"
                >
                  {`found ${searchBooks.length} books`}
                </Typography>
              </div>
              <ListOfBook books={searchBooks} />
            </>
          )}
          {!searchLoading && searchBooks.length === 0 && (
            <>
              <Typography variant="h1" className={styles.notFound}>
                BOOKS NOT FOUND
              </Typography>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Main;
