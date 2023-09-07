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

const initialValue = {
  search: "",
};

const Header: React.FC = () => {
  const [search, setSearch] = useState(initialValue);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <NavLink style={{ textDecoration: "none" }} to={"/"}>
          <Typography variant={"h1"}>BOOKSTORE</Typography>
        </NavLink>
      </div>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          className={styles.input}
          placeholder="Search"
          value={search.search}
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
