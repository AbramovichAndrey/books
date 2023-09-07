import React from "react";
import styles from "./BookDetailsInfo.module.css";
import { NavLink } from "react-router-dom";
import BookActions from "../BookAction/BookActions";
import MainButton from "../Buttons/MainButton/MainButton";
import Typography from "../Typography/Typography";
import { IBookDetails } from "../../models/bookDetails.model";

interface IBookDetailsInfoProps {
  book: IBookDetails;
}

const BookDetailsInfo: React.FC<IBookDetailsInfoProps> = ({ book }) => {
  return (
    <div>
      <BookActions price={book.price} rating={book.rating} />
      <div>
        <div className={styles.textWrap}>
          <Typography variant="span" font="secondaryFont" color="secondary">
            Authors
          </Typography>

          <Typography variant="span" font="secondaryFont" color="primary">
            {book.authors}
          </Typography>
        </div>
        <div className={styles.textWrap}>
          <Typography variant="span" font="secondaryFont" color="secondary">
            Publisher
          </Typography>

          <Typography variant="span" font="secondaryFont" color="primary">
            {book.publisher}
          </Typography>
        </div>
        <div className={styles.textWrap}>
          <Typography variant="span" font="secondaryFont" color="secondary">
            Language
          </Typography>

          <Typography variant="span" font="secondaryFont" color="primary">
            English
          </Typography>
        </div>
        <div className={styles.textWrap}>
          <Typography variant="span" font="secondaryFont" color="secondary">
            Format
          </Typography>

          <Typography variant="span" font="secondaryFont" color="primary">
            Paper book / ebook (PDF)
          </Typography>
        </div>

        <MainButton className={styles.addBut}>
          <Typography color="secondary"> ADD TO CARD </Typography>
        </MainButton>

        {typeof book.pdf === "object" && Object.keys(book.pdf).length > 0 && (
          <div className={styles.previewBook}>
            <a target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href={Object.values(book.pdf)[0]}
            >
              <Typography variant="p" font="secondaryFont">
                Preview book
              </Typography>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookDetailsInfo;
