import React from "react";
import { IBook } from "../../models/book.model";
import Typography from "../Typography/Typography";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styles from "./BookActions.module.css";

interface IBookActionProps {
  book: IBook;
}

const BookActions: React.FC<IBookActionProps> = ({ book }) => {
  return (
    <div className={styles.iconsWrapper}>
      <Typography variant="h5">{book.price}</Typography>
      <div>
        <AiFillStar className={styles.rating} />
        <AiFillStar className={styles.rating} />
        <AiFillStar className={styles.rating} />
        <AiFillStar className={styles.rating} />
        <AiOutlineStar className={styles.rating} />
      </div>
    </div>
  );
};

export default BookActions;
