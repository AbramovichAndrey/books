import React from "react";
import { IBook } from "../../models/book.model";
import BookCard from "../BookCard/BookCard";
import styles from "./Favorite.module.css";

const Favorite: React.FC = () => {
  const favBLocalStorage = localStorage.getItem("favorites");
  let favoriteBooks = [];

  if (favBLocalStorage) {
    favoriteBooks = JSON.parse(favBLocalStorage);
  } else {
    favoriteBooks = [];
  }
  return (
    <ul className={styles.books}>
      {typeof favoriteBooks === "object" &&
        favoriteBooks.map((book: IBook) => (
          <li className={styles.book} key={book.isbn13}>
            <BookCard book={book} />
          </li>
        ))}
    </ul>
  );
};

export default Favorite;
