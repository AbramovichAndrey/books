import React from "react";
import styles from "./Favorite.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import Typography from "../Typography/Typography";
import BookCardFavorite from "../BookCardFavorite/BookCardFavorite";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Favorite: React.FC = () => {
  const { favoriteBooks } = useSelector(getSlice);

  if (favoriteBooks.length === 0) {
    return (
      <Typography variant="h4" className={styles.haventBooksText}>
        You don't have favorite books
      </Typography>
    );
  }

  return (
    <>
      <div>
        <NavLink to={"/"}>
          <button className={styles.backButton}>
            <BsArrowLeft style={{ color: "black" }} />
          </button>
        </NavLink>
        <Typography variant="h1">Favorites</Typography>
      </div>
      <ul className={styles.books}>
        {favoriteBooks.map((book) => (
          <li className={styles.book} key={book.isbn13}>
            <BookCardFavorite book={book} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorite;
