import React, { useEffect } from "react";
import styles from "./BookDetails.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../store/books/books.selectors";
import { setBook, setIsBookLoading } from "../store/books/books.reducer";
import { getBook } from "../../api/getBook";
import RandomColor from "../RandomColor/RandomColor";
import HeartButtons from "../Buttons/HeartButton/HeartButton";
import { NavLink } from "react-router-dom";

const BooksDetails: React.FC = () => {
  const colors = ["#D7E4FD", "#CAEFF0", "#F4EEFD", "#FEE9E2"];
  const { id: bookId } = useParams();
  const { book, isBookLoading: loading } = useSelector(getSlice);
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
      {loading && "Loading"}

      {book && (
        <>
          <div>
            <NavLink to={"/"}>
              <button className={styles.backButton}>
                <BsArrowLeft />
              </button>
            </NavLink>
          </div>
          <div>
            <RandomColor colors={colors}>
              <img className={styles.img} src={book?.image} alt={book?.title} />
              <HeartButtons className={styles.heartButton} />
            </RandomColor>
          </div>
        </>
      )}
    </div>
  );
};

export default BooksDetails;
