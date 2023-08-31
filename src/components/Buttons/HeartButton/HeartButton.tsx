import React from "react";
import styles from "./HeartButton.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import clsx from "clsx";

interface IHeartButtonsProps {
  className?: string;
  disabled?: boolean;
}

const HeartButton: React.FC<IHeartButtonsProps> = ({
  className,
  disabled = false,
}) => {
  return (
    <button disabled={disabled} className={clsx(styles.button, className)}>
      <AiOutlineHeart className={styles.icon} />
    </button>
  );
};

export default HeartButton;
