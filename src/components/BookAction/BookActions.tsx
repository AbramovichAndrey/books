import React from "react";
import { IBook } from "../../models/book.model";
import Typography from "../Typography/Typography";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styles from "./BookActions.module.css";
import { IBookDetails } from "../../models/bookDetails.model";

interface IBookActionProps {
  price: IBookDetails["price"];
  rating: IBookDetails["rating"];
}

const BookActions: React.FC<IBookActionProps> = ({ price, rating }) => {
  const stars = Array.from(new Array(5), (_, index) =>
    index + 1 <= rating ? (
      <AiFillStar className={styles.rating} />
    ) : (
      <AiOutlineStar className={styles.rating} />
    )
  );

  return (
    <div className={styles.iconsWrapper}>
      <Typography variant="h5">{price}</Typography>
      <div>{stars}</div>
    </div>
  );
};

export default BookActions;
