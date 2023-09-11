import React from "react";
import MainButton from "../Buttons/MainButton/MainButton";
import Typography from "../Typography/Typography";
import styles from "./TotalOrder.module.css";

interface IBookProps {
  total: number;
}

const TotalOrder: React.FC<IBookProps> = ({ total }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrap}>
        <Typography font="secondaryFont" variant="span" color="secondary">
          Sum total
        </Typography>
        <Typography font="secondaryFont" variant="span" color="secondary">
          {`$ ${total.toFixed(2)}`}
        </Typography>
      </div>
      <div className={styles.infoWrap}>
        <Typography font="secondaryFont" variant="span" color="secondary">
          VAT
        </Typography>
        <Typography font="secondaryFont" variant="span" color="secondary">
          $ 12.50
        </Typography>
      </div>
      <div className={styles.infoWrap}>
        <Typography variant="h5">TOTAL:</Typography>
        <Typography variant="h5">{`$ ${(total - 12.5).toFixed(2)}`}</Typography>
      </div>
      <MainButton className={styles.button}>
        <Typography color="secondary">CHECK OUT</Typography>
      </MainButton>
    </div>
  );
};

export default TotalOrder;
