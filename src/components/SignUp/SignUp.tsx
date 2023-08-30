import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./SignUp.module.css";
import MainButton from "../Buttons/MainButton/MainButton";
import Input from "../Input/Input";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IFormErrors {
  name?: string;
  email?: string;
  password?: string;
}

const initialValues: IFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validation = (formValues: IFormValues): IFormErrors => {
  const errors: IFormErrors = {};

  if (formValues.name.length === 0) {
    errors.name = "Required";
  }

  if (formValues.email.length === 0) {
    errors.email = "Required";
  }

  if (formValues.password.length === 0) {
    errors.password = "Required";
  }

  if (formValues.password != formValues.confirmPassword) {
    errors.password = "Password and confirm password should be equal";
  }

  return errors;
};

const SignUp: React.FC = () => {
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
        ref={inputRef}
        helperText={errors?.name}
        error={!!errors?.name}
        name="name"
        label="Name"
        value={values.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <Input
        helperText={errors?.email}
        error={!!errors?.email}
        name="email"
        label="Email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        helperText={errors?.password}
        error={!!errors?.password}
        name="password"
        label="Password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <Input
        name="confirmPassword"
        label="Confirm password"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <MainButton
        className={styles.button}
        children={"Sign Up"}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SignUp;
