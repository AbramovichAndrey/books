import React from "react";
import styles from "./BookCard.module.css";
import RandomColor from "../RandomColor/RandomColor";
import { IBook } from "../../models/book.model";
import Typography from "../Typography/Typography";
import BookActions from "../BookAction/BookActions";

interface ICardProps {
  book: IBook;
}

const Card: React.FC<ICardProps> = ({ book }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <RandomColor fullWidth>
          <img src={book.image} alt={book.title} />
        </RandomColor>
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
      </div>
      <BookActions price={book.price} rating={4} />
    </>
  );
};

export default Card;
