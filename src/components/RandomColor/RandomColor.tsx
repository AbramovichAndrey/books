import React from "react";
import styles from "./RandomColor.module.css";

function arrayRandElement(arr: string[]) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

interface IRandomColorProps {
  colors: string[];
  children: React.ReactNode;
}

const RandomColor: React.FC<IRandomColorProps> = ({ children, colors }) => {
  const color: string = arrayRandElement(colors);

  return (
    <div className={styles.colorWrapper} style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default RandomColor;
