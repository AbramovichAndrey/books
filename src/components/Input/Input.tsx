import React, { memo, forwardRef } from "react";
import clsx from "clsx";
import Typography from "../Typography/Typography";

import styles from "./Input.module.css";

interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id?: string;
  type?: "text" | "number" | "email" | "password";
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  className?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      value,
      name,
      onChange,
      id,
      className,
      type,
      disabled,
      placeholder,
      error,
      helperText,
    },
    ref
  ) => {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          ref={ref}
          className={clsx(
            styles.input,
            { [styles.inputError]: error },
            className
          )}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
        />
        {!!helperText && (
          <Typography
            font="secondaryFont"
            color="secondary"
            className={clsx(styles.helperText, {
              [styles.helperTextError]: error,
            })}
          >
            {helperText}
          </Typography>
        )}
      </div>
    );
  }
);

export default memo(Input);
