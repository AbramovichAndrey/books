import React, { MouseEvent, useState } from "react";
import styles from "./BookDetailsInfo.module.css";
import BookActions from "../BookAction/BookActions";
import MainButton from "../Buttons/MainButton/MainButton";
import Typography from "../Typography/Typography";
import { IBookDetails } from "../../models/bookDetails.model";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import { addBookToCart } from "../../store/books/books.reducer";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

interface IBookDetailsInfoProps {
  iBook: IBookDetails;
}
interface State extends SnackbarOrigin {
  open: boolean;
}

const BookDetailsInfo: React.FC<IBookDetailsInfoProps> = ({ iBook }) => {
  const { book } = useSelector(getSlice);
  const dispatch = useDispatch();

  // Snackbar
  const [state, setState] = useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (book) {
      dispatch(addBookToCart(book));
    }
    setState({ ...state, open: true });
  };

  return (
    <div>
      <BookActions price={iBook.price} rating={iBook.rating} />
      <div>
        <div className={styles.textWrap}>
          <Typography variant="span" font="secondaryFont" color="secondary">
            Authors
          </Typography>

          <Typography variant="span" font="secondaryFont" color="primary">
            {iBook.authors}
          </Typography>
        </div>
        <div className={styles.textWrap}>
          <Typography variant="span" font="secondaryFont" color="secondary">
            Publisher
          </Typography>

          <Typography variant="span" font="secondaryFont" color="primary">
            {iBook.publisher}
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

        <MainButton className={styles.addBut} onClick={handleClick}>
          <Typography color="secondary"> ADD TO CART </Typography>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            autoHideDuration={3000}
            message="Book add to cart"
            key={vertical + horizontal}
          />
        </MainButton>

        {typeof iBook.pdf === "object" && Object.keys(iBook.pdf).length > 0 && (
          <div className={styles.previewBook}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href={Object.values(iBook.pdf)[0]}
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
