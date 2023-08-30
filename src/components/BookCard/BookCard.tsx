import React from "react";
import styles from "./BookCard.module.css";
import RandomColor from "../RandomColor/RandomColor";
import { IBook } from "../../models/book.model";
import Typography from "../Typography/Typography";
import { AiOutlineStar } from "react-icons/ai";

interface ICardProps {
  book: IBook;
}

const Card: React.FC<ICardProps> = ({ book }) => {
  const colors = ["#D7E4FD", "#CAEFF0", "#F4EEFD", "#FEE9E2"];

  return (
    <>
      <div className={styles.wrapper}>
        <RandomColor colors={colors}>
          <img src={book.image} alt={book.title} />
        </RandomColor>
        <Typography variant="h5">{book.title}</Typography>
        <Typography className={styles.truncate} variant="h5" color="secondary">
          {book.subtitle}
        </Typography>
      </div>
      <div className={styles.iconsWrapper}>
        <Typography variant="h5">{book.price}</Typography>
        <AiOutlineStar className={styles.rating} />
      </div>
    </>
  );
};

export default Card;