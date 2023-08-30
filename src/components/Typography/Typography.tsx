import React from "react";
import styles from "./Typography.module.css";
import clsx from "clsx";

interface ITypographyProps {
  className?: string;
  children: React.ReactNode;
  color?: "primary" | "secondary";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  font?: "primaryFont" | "secondaryFont";
}

const Typography: React.FC<ITypographyProps> = ({
  className,
  children,
  color = "primary",
  variant = "p",
  font = "primaryFont",
}) => {
  const Tag = variant;
  return (
    <Tag
      className={clsx(styles[color], styles[variant], styles[font], className)}
    >
      {children}
    </Tag>
  );
};

export default Typography;
