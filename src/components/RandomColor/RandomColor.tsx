import clsx from "clsx";
import React from "react";
import styles from "./RandomColor.module.css";

function arrayRandElement(arr: string[]) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

interface IRandomColorProps {
  colors: string[];
  children: React.ReactNode;
  className?: string;
}

const RandomColor: React.FC<IRandomColorProps> = ({
  children,
  colors,
  className,
}) => {
  const color: string = arrayRandElement(colors);

  return (
    <div
      className={clsx(styles.colorWrapper, className)}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default RandomColor;
