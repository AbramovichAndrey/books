import React from "react";
import styles from "./NewReleasesBooks.module.css";
import { IBook } from "../../models/book.model";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";

interface INewReleasesBookProps {
  books: IBook[];
}

const NewReleasesBooks: React.FC<INewReleasesBookProps> = ({ books }) => {
  return (
    <>
      <ul className={styles.books}>
        {books.map((book) => (
          <li className={styles.book} key={book.isbn13}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewReleasesBooks;
