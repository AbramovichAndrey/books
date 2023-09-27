import React, { useCallback, useState } from "react";
import styles from "./Header.module.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

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
import { AppDispatch } from "../../store";
import { getBooksBySearch } from "../../store/books/books.actions";
import { getSlice } from "../../store/books/books.selectors";
import { setSearch } from "../../store/books/books.reducer";
import debounce from "lodash.debounce";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import clsx from "clsx";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { search } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handelChangeBurgerState = () => {
    setOpen(!open);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const debouncedSetSearch = useCallback(
    debounce((searchValue: string, page: string) => {
      dispatch(getBooksBySearch({ searchValue, page }));
    }, 300),
    [dispatch]
  );

  useDidUpdate(() => {
    if (search !== "") debouncedSetSearch(search, "1");
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
          <AiOutlineHeart className={clsx(styles.icon, styles.favBut)} />
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={"/cart"}
        >
          <AiOutlineShopping className={styles.icon} />
        </NavLink>
        <AiOutlineUser className={clsx(styles.icon, styles.userBut)} />
        {open ? (
          <IoMdClose
            onClick={handelChangeBurgerState}
            className={styles.burgerButton}
          />
        ) : (
          <RxHamburgerMenu
            onClick={handelChangeBurgerState}
            className={styles.burgerButton}
          />
        )}
      </div>
      {open && (
        <div className={styles.burgerMenuWrapper}>
          <div>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to={"/favorites"}
            >
              <div className={styles.burgerItem}>
                <AiOutlineHeart className={styles.icon} />
                <Typography variant="span">Favorites</Typography>
              </div>
            </NavLink>
          </div>
          <div className={styles.burgerItem}>
            <AiOutlineUser className={styles.icon} />
            <Typography variant="span">Sign In/Sign Up</Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
