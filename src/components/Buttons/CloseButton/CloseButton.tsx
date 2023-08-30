import React from "react";
import styles from "./CloseButton.module.css";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";

interface ICloseButtonProps {
  className?: string;
  disabled?: boolean;
}

const CloseButton: React.FC<ICloseButtonProps> = ({
  className,
  disabled = false,
}) => {
  return (
    <button className={styles.button} disabled={disabled}>
      <IoCloseOutline className={clsx(styles.icon, className)} />
    </button>
  );
};

export default CloseButton;
