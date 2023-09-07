import React, { useEffect, MouseEvent } from "react";
import styles from "./BookDetails.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../store/books/books.selectors";
import {
  setBook,
  setIsBookLoading,
  deleteBook,
  toggleBookIsFavorite,
} from "../store/books/books.reducer";
import { getBook } from "../../api/getBook";
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

const BooksDetails: React.FC = () => {
  const { id: bookId } = useParams();
  const {
    book,
    isBookLoading: loading,
    favoriteBooks,
    cartBooks,
  } = useSelector(getSlice);
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (book) {
      dispatch(toggleBookIsFavorite(book));
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartBooks));
  }, [cartBooks]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  useEffect(() => {
    if (!bookId) return;

    dispatch(setIsBookLoading(true));
    getBook({ id: bookId })
      .then((data) => dispatch(setBook(data)))
      .finally(() => dispatch(setIsBookLoading(false)));
    window.scrollTo(0, 0);

    return () => {
      dispatch(deleteBook());
    };
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
