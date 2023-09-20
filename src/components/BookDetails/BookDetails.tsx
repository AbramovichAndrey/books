import React, { useEffect, MouseEvent } from "react";
import styles from "./BookDetails.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import {
  deleteBook,
  toggleBookIsFavorite,
} from "../../store/books/books.reducer";
import RandomColor from "../RandomColor/RandomColor";
import HeartButtons from "../Buttons/HeartButton/HeartButton";
import { NavLink } from "react-router-dom";
import Typography from "../Typography/Typography";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";
import Subscribe from "../Subscribe/Subscribe";
import BookDetailsTabs from "../BookDetailsTabs/BookDetailsTabs";
import BookDetailsInfo from "../BookDetailsInfo/BookDetailsInfo";
import { AppDispatch } from "../../store";
import { getBookThunk } from "../../store/books/books.actions";
import Loading from "../Loading/Loading";

const BooksDetails: React.FC = () => {
  const { id: bookId } = useParams();
  const { book, isBookLoading: loading } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (book) {
      dispatch(toggleBookIsFavorite(book));
    }
  };

  useEffect(() => {
    if (!bookId) return;

    dispatch(getBookThunk(bookId));
    window.scrollTo(0, 0);

    return () => {
      dispatch(deleteBook());
    };
  }, [dispatch, bookId]);

  return (
    <div>
      {loading && <Loading />}

      {book && (
        <>
          <div>
            <NavLink to={"/"}>
              <button className={styles.backButton}>
                <BsArrowLeft />
              </button>
            </NavLink>
            <Typography variant="h1"> {book.title}</Typography>
          </div>
          <div className={styles.wrapper}>
            {/* Image */}
            <div>
              <RandomColor className={styles.imgBG}>
                <img src={book?.image} alt={book?.title} />
                <HeartButtons
                  onClick={handleClick}
                  className={styles.heartButton}
                />
              </RandomColor>
            </div>

            {/* Information  */}
            <div className={styles.infoWrapper}>
              <BookDetailsInfo iBook={book} />
            </div>
          </div>

          {/* Tabs */}
          <BookDetailsTabs book={book} />

          {/* Icons */}
          <div className={styles.socialIconWrapper}>
            <SlSocialFacebook className={styles.socialIcon} />
            <CiTwitter className={styles.socialIcon} />
            <FiMoreHorizontal className={styles.socialIcon} />
          </div>

          <Subscribe />
        </>
      )}
    </div>
  );
};

export default BooksDetails;
