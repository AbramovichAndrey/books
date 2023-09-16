import React, { useCallback, useState } from "react";
import styles from "./Header.module.css";

import Typography from "../Typography/Typography";
import Input from "../Input/Input";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { getBooksBySearch } from "../store/books/books.actions";
import { getSlice } from "../store/books/books.selectors";
import { setSearch } from "../store/books/books.reducer";
import debounce from "lodash.debounce";
import { useDidUpdate } from "../../hooks/useDidUpdate";

const Header: React.FC = () => {
  const { search } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const debouncedSetSearch = useCallback(
    debounce((newSearch: string) => {
      dispatch(getBooksBySearch(newSearch));
    }, 300),
    [dispatch]
  );

  useDidUpdate(() => {
    if (search != "") debouncedSetSearch(search);
  }, [debouncedSetSearch, search]);

  return (
    <div className={styles.wrapper}>
      <div>
        <NavLink
          onClick={() => dispatch(setSearch(""))}
          style={{ textDecoration: "none" }}
          to={"/"}
        >
          <Typography variant={"h1"}>BOOKSTORE</Typography>
        </NavLink>
      </div>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          className={styles.input}
          placeholder="Search"
          value={search}
          onChange={handleChange}
          name={"search"}
        />
        <button className={styles.searchBut}>
          <AiOutlineSearch />
        </button>
      </div>
      <div className={styles.iconWrapper}>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={"/favorites"}
        >
          <AiOutlineHeart className={styles.icon} />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={"/cart"}
        >
          <AiOutlineShopping className={styles.icon} />
        </NavLink>
        <AiOutlineUser className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
