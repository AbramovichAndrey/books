import React, { useEffect, MouseEvent } from "react";
import styles from "./BookCardFavorite.module.css";
import RandomColor from "../RandomColor/RandomColor";
import { IBook } from "../../models/book.model";
import Typography from "../Typography/Typography";
import BookActions from "../BookAction/BookActions";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../store/books/books.selectors";
import { toggleBookIsFavorite } from "../store/books/books.reducer";
import HeartButton from "../Buttons/HeartButton/HeartButton";

interface ICardProps {
  book: IBook;
}

const BookCardFavorite: React.FC<ICardProps> = ({ book }) => {
  const dispath = useDispatch();

  const handleClick = () => {
    // e.preventDefault();
    dispath(toggleBookIsFavorite(book));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <RandomColor className={styles.imgWrapper}>
          <img className={styles.img} src={book.image} alt={book.title} />
        </RandomColor>
        <div className={styles.infoWrapper}>
          <Typography className={styles.text} variant="h5">
            {book.title}
          </Typography>
          <Typography
            font={"secondaryFont"}
            className={styles.text}
            variant="span"
            color="secondary"
          >
            {book.subtitle}
          </Typography>
          <BookActions rating={4} price={book.price} />
        </div>
        <div className={styles.heartWrapper}>
          <AiFillHeart onClick={handleClick} className={styles.heart} />
        </div>
      </div>
    </>
  );
};

export default BookCardFavorite;
