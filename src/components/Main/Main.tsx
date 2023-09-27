import React, { useEffect } from "react";
import styles from "./Main.module.css";
import { getSlice } from "../../store/books/books.selectors";
import { useSelector, useDispatch } from "react-redux";
import ListOfBook from "../ListOfBook/ListOfBook";
import Subscribe from "../Subscribe/Subscribe";
import Typography from "../Typography/Typography";
import {
  getBooksBySearch,
  getNewBooksThunk,
} from "../../store/books/books.actions";
import { AppDispatch } from "../../store";
import Pagination from "../Pagination/Pagination";
import { setActivePage } from "../../store/books/books.reducer";
import Loading from "../Loading/Loading";

const Main: React.FC = () => {
  const {
    books,
    search,
    searchBooks,
    total,
    isBooksLoading: loading,
    isSearchLoading: searchLoading,
    activePage,
  } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNewBooksThunk());
  }, [dispatch]);

  const handlePaginationClick = (page: number) => {
    dispatch(setActivePage(page));
  };

  useEffect(() => {
    dispatch(
      getBooksBySearch({ searchValue: search, page: String(activePage) })
    );
  }, [activePage]);

  return (
    <>
      {search === "" && (
        <div>
          <div className={styles.title}>
            <Typography className={styles.fontSizeTitle} variant="h1">
              NEW RELEASES BOOKS
            </Typography>
          </div>

          <div className={styles.books}>
            {loading && <Loading />}
            {!loading && books.length > 0 && <ListOfBook books={books} />}
          </div>
          <div className={styles.subscribeWrapper}>
            <Subscribe />
          </div>
        </div>
      )}
      {search != "" && (
        <div>
          {searchLoading && <Loading />}
          {!searchLoading && searchBooks.length > 0 && (
            <>
              <div className={styles.title}>
                <Typography variant="h1">{`'${search}' SEARCH RESULTS`}</Typography>
                <Typography
                  variant="span"
                  font="secondaryFont"
                  color="secondary"
                >
                  {`found ${total} books`}
                </Typography>
              </div>
              <ListOfBook books={searchBooks} />
              <div className={styles.pagination}>
                <Pagination
                  onClick={handlePaginationClick}
                  total={Math.ceil(+total / 10)}
                />
              </div>
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
