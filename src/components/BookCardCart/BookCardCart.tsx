import React from "react";
import { useDispatch } from "react-redux";
import { IBook } from "../../models/book.model";
import RandomColor from "../RandomColor/RandomColor";
import Typography from "../Typography/Typography";
import styles from "./BookCardCart.module.css";
import {
  deleteFromCart,
  incCountBook,
  decCountBook,
} from "../../store/books/books.reducer";
import CloseButton from "../Buttons/CloseButton/CloseButton";

interface ICardProps {
  book: IBook;
}

const BookCardCart: React.FC<ICardProps> = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteFromCart(book));
  };
  const incCountClick = () => {
    dispatch(incCountBook(book));
  };
  const decCountClick = () => {
    dispatch(decCountBook(book));
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
          <div className={styles.countWrapper}>
            <button className={styles.button} onClick={decCountClick}>
              <Typography variant="h5">-</Typography>
            </button>
            <Typography variant="h5">{book.count}</Typography>
            <button className={styles.button} onClick={incCountClick}>
              <Typography variant="h5">+</Typography>
            </button>
          </div>
        </div>
        <div className={styles.price}>
          <Typography variant="h5">{`$${(
            +book.price.slice(1) * book.count
          ).toFixed(2)}`}</Typography>
        </div>
        <div className={styles.closeButton}>
          <CloseButton className={styles.btClose} onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default BookCardCart;
