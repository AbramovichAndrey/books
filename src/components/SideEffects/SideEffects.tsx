import React, { useEffect } from "react";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import { setFavorites, setCart } from "../../store/books/books.reducer";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import { AppDispatch } from "../../store";

const SideEffects = () => {
  const { cartBooks, favoriteBooks } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();
  useDidUpdate(() => {
    localStorage.setItem("cart", JSON.stringify(cartBooks));
  }, [cartBooks]);

  useDidUpdate(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);
  useEffect(() => {
    const favBLocalStorage = localStorage.getItem("favorites");
    if (favBLocalStorage) {
      dispatch(setFavorites(JSON.parse(favBLocalStorage)));
    }
  }, []);
  useEffect(() => {
    const cartLocalStorage = localStorage.getItem("cart");
    if (cartLocalStorage) {
      dispatch(setCart(JSON.parse(cartLocalStorage)));
    }
  }, []);

  return null;
};

export default SideEffects;
