import React from "react";
import styles from "./HeartButton.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { getSlice } from "../../../store/books/books.selectors";

interface IHeartButtonsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
}

const HeartButton: React.FC<IHeartButtonsProps> = ({
  className,
  disabled = false,
  onClick,
}) => {
  const { book, favoriteBooks } = useSelector(getSlice);
  const isFavorite = favoriteBooks.some(
    (favoriteBook) => favoriteBook.isbn13 === book?.isbn13
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, className)}
    >
      {!isFavorite && <AiOutlineHeart className={styles.icon} />}
      {isFavorite && <AiFillHeart className={styles.iconFill} />}
    </button>
  );
};

export default HeartButton;
