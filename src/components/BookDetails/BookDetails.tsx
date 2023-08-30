import React, { useEffect } from "react";
import styles from "./BookDetails.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../store/books/books.selectors";
import { setBook, setIsBookLoading } from "../store/books/books.reducer";
import { getBook } from "../../api/getBook";

const BooksDetails: React.FC = () => {
  const { id: bookId } = useParams();
  const { book, isBooksLoading } = useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bookId) return;

    dispatch(setIsBookLoading(true));
    getBook({ id: bookId })
      .then((data) => dispatch(setBook(data)))
      .finally(() => dispatch(setIsBookLoading(false)));
  }, [dispatch, bookId]);

  return (
    <div>
      <div>
        <button>
          <BsArrowLeft className={styles.backButton} />
        </button>
      </div>
    </div>
  );
};

export default BooksDetails;
