import React from "react";
import Typography from "../Typography/Typography";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Typography
          className={styles.fontSize}
          color="secondary"
          font="secondaryFont"
        >
          ©2023 Bookstore
        </Typography>
      </div>
      <div className={styles.content}>
        <Typography
          className={styles.fontSize}
          color="secondary"
          font="secondaryFont"
        >
          All rights reserved
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
