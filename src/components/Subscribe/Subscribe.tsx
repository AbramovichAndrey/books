import React, { useCallback, useState, MouseEvent } from "react";
import MainButton from "../Buttons/MainButton/MainButton";
import Input from "../Input/Input";
import Typography from "../Typography/Typography";
import styles from "./Subscribe.module.css";

const initialValue = {
  email: "",
};

const Subscribe: React.FC = () => {
  const [value, setEmail] = useState(initialValue);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    setEmail(initialValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <Typography variant="h3">Subscribe to Newsletter</Typography>
        <Typography color="secondary" font="secondaryFont">
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </Typography>
      </div>
      <div className={styles.compWrapper}>
        <Input
          type="email"
          className={styles.input}
          placeholder="Your email"
          value={value.email}
          onChange={handleChange}
          name={"email"}
        />
        <MainButton
          className={styles.button}
          children={<Typography color="secondary">Subscribe</Typography>}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Subscribe;
