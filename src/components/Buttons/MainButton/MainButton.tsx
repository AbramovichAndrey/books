import React from "react";
import styles from "./MainButton.module.css";
import clsx from "clsx";
import Typography from "../../Typography/Typography";

interface IMainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
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
      {<Typography variant="span" children={children} />}
    </button>
  );
};

export default MainButton;
