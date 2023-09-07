import clsx from "clsx";
import React, { useMemo } from "react";
import styles from "./RandomColor.module.css";

function arrayRandElement(arr: string[]) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

const colors = ["#D7E4FD", "#CAEFF0", "#F4EEFD", "#FEE9E2"];

interface IRandomColorProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const RandomColor: React.FC<IRandomColorProps> = ({
  children,
  className,
  fullWidth,
}) => {
  const color: string = useMemo(() => arrayRandElement(colors), []);

  return (
    <div
      className={clsx(
        styles.colorWrapper,
        { [styles.fullWidth]: fullWidth },
        className
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default RandomColor;
