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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setSearch } from "../../store/books/books.reducer";
import clsx from "clsx";
import SearchInput from "../SearchInput/SearchInput";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handelChangeBurgerState = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <NavLink
          onClick={() => dispatch(setSearch(""))}
          style={{ textDecoration: "none" }}
          to={"/"}
        >
          <Typography className={styles.fontSizelogo} variant={"h1"}>
            BOOKSTORE
          </Typography>
        </NavLink>
      </div>
      <div className={styles.inputWrapper}>
        <SearchInput className={styles.input} />
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
                <Typography variant="h5">Favorites</Typography>
                <AiOutlineHeart className={styles.icon} />
              </div>
            </NavLink>
          </div>
          <div className={styles.burgerItem}>
            <Typography variant="h5">Sign In</Typography>
            <AiOutlineUser className={styles.icon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
