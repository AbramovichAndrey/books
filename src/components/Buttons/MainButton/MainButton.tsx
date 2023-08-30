import React from "react";
import styles from "./MainButton.module.css";
import clsx from "clsx";
import Typography from "../../Typography/Typography";

interface IMainButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const MainButton: React.FC<IMainButtonProps> = ({
  children,
  className,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, className)}
    >
      {children}
    </button>
  );
};

export default MainButton;
