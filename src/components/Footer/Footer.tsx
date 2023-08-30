import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Typography
          color="secondary"
          font="secondaryFont"
          children={"©2023 Bookstore"}
        />
      </div>
      <div className={styles.content}>
        <Typography
          color="secondary"
          font="secondaryFont"
          children={"All rights reserved"}
        />
      </div>
    </div>
  );
};

export default Footer;
