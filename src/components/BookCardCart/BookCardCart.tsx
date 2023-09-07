import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IBook } from "../../models/book.model";
import RandomColor from "../RandomColor/RandomColor";
import Typography from "../Typography/Typography";
import styles from "./BookCardCart.module.css";
import { deleteFromCart } from "../store/books/books.reducer";
import CloseButton from "../Buttons/CloseButton/CloseButton";

interface ICardProps {
  book: IBook;
}

const BookCardCart: React.FC<ICardProps> = ({ book }) => {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteFromCart(book));
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
            <button
              className={styles.button}
              onClick={() => {
                if (count > 1) setCount(count - 1);
              }}
            >
              <Typography variant="h5">-</Typography>
            </button>
            <Typography variant="h5">{count}</Typography>
            <button
              className={styles.button}
              onClick={() => setCount(count + 1)}
            >
              <Typography variant="h5">+</Typography>
            </button>
          </div>
        </div>
        <div className={styles.price}>
          {count === 1 && <Typography variant="h5">{book.price}</Typography>}
          {count > 1 && (
            <Typography variant="h5">{`$${
              count * +book.price.slice(1)
            }`}</Typography>
          )}
        </div>
        <div className={styles.closeButton}>
          <CloseButton onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default BookCardCart;
