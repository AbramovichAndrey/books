import React from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { getSlice } from "../../store/books/books.selectors";
import { setSnackBar } from "../../store/books/books.reducer";

const initialSnackbarOrigin: SnackbarOrigin = {
  vertical: "bottom",
  horizontal: "right",
};

const SnackBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { snackBar } = useSelector(getSlice);

  const handleClose = () => {
    dispatch(setSnackBar(false));
  };
  const { vertical, horizontal } = initialSnackbarOrigin;
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={snackBar}
      onClose={handleClose}
      autoHideDuration={3000}
      message="Book add to cart"
      key={vertical + horizontal}
    />
  );
};

export default SnackBar;
