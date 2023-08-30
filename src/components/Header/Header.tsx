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
        <Typography variant={"h1"} children={"BOOKSTORE"} />
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
        <AiOutlineHeart className={styles.icon} />
        <AiOutlineShopping className={styles.icon} />
        <AiOutlineUser className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
