import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../store/books/books.selectors";
import { setCart } from "../store/books/books.reducer";
import styles from "./Cart.module.css";
import Typography from "../Typography/Typography";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import BookCardFavorite from "../BookCardFavorite/BookCardFavorite";
import BookCardCart from "../BookCardCart/BookCardCart";

const Cart: React.FC = () => {
  const { cartBooks } = useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartBooks));
  }, [cartBooks]);

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem("cart");
    if (cartLocalStorage) {
      dispatch(setCart(JSON.parse(cartLocalStorage)));
    }
  }, []);

  if (cartBooks.length === 0) {
    return (
      <Typography variant="h4" className={styles.emptyCartText}>
        Cart is empty
      </Typography>
    );
  }

  return (
    <>
      <div>
        <NavLink to={"/"}>
          <button className={styles.backButton}>
            <BsArrowLeft />
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
    </>
  );
};

export default Cart;
