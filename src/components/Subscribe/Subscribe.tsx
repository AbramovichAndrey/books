import React from "react";
import MainButton from "../Buttons/MainButton/MainButton";
import Input from "../Input/Input";
import Typography from "../Typography/Typography";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <Typography variant="h3" children={"Subscribe to Newsletter"} />
        <Typography
          color="secondary"
          font="secondaryFont"
          children={
            "Be the first to know about new IT books, upcoming releases, exclusive offers and more."
          }
        />
      </div>
      <div className={styles.compWrapper}>
        <Input
          className={styles.input}
          placeholder="Your email"
          value={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          name={"Subscribe"}
        />
        <MainButton
          className={styles.button}
          children={<Typography color="secondary" children={"Subscribe"} />}
          onClick={function (e: React.MouseEvent<Element, MouseEvent>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default Subscribe;
