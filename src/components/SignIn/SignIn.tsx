import React, { useCallback, useEffect, useRef, useState } from "react";
import MainButton from "../Buttons/MainButton/MainButton";
import Input from "../Input/Input";
import Typography from "../Typography/Typography";
import styles from "./SignIn.module.css";

interface IFormValues {
  email: string;
  password: string;
}

interface IFormErrors {
  email?: string;
  password?: string;
}

const initialValues: IFormValues = {
  email: "",
  password: "",
};

const validation = (formValues: IFormValues): IFormErrors => {
  const errors: IFormErrors = {};
  if (formValues.email.length === 0) {
    errors.email = "Required";
  }
  if (formValues.password.length === 0) {
    errors.password = "Required";
  }
  return errors;
};

const SignIn: React.FC = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<IFormErrors | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const errors = validation(values);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      console.log(values);
      setValues(initialValues);
      setErrors(null);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className={styles.form}>
      <Input
        className={styles.input}
        ref={inputRef}
        helperText={errors?.email}
        error={!!errors?.email}
        placeholder="Your email"
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        className={styles.input}
        helperText={errors?.password}
        error={!!errors?.password}
        placeholder="Your password"
        name="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
      />
      <p className={styles.text}>Forgot password?</p>
      <MainButton className={styles.button} onClick={handleSubmit}>
        <Typography variant="h5" color="secondary">
          Sign In
        </Typography>
      </MainButton>
    </form>
  );
};

export default SignIn;
