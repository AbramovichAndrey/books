import React from "react";
import { useSelector } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import styles from "./Cart.module.css";
import Typography from "../Typography/Typography";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import BookCardCart from "../BookCardCart/BookCardCart";
import TotalOrder from "../TotalOrder/TotalOrder";

const Cart: React.FC = () => {
  const { cartBooks } = useSelector(getSlice);

  if (cartBooks.length === 0) {
    return (
      <Typography variant="h4" className={styles.emptyCartText}>
        Cart is empty
      </Typography>
    );
  }
  const total = cartBooks.reduce((acc, book) => {
    const bookPrice = +book.price.slice(1);
    return acc + book.count * bookPrice;
  }, 0);

  return (
    <>
      <div>
        <NavLink to={"/"}>
          <button className={styles.backButton}>
            <BsArrowLeft style={{ color: "black" }} />
          </button>
        </NavLink>
        <Typography variant="h1">YOUR CART</Typography>
      </div>
      <ul className={styles.books}>
        {cartBooks.map((book) => (
          <li className={styles.book} key={book.isbn13}>
            <BookCardCart book={book} />
          </li>
        ))}
      </ul>
      <div className={styles.totalOrderWrapper}>
        <TotalOrder total={total} />
      </div>
    </>
  );
};

export default Cart;
