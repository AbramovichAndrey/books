import React, { useState } from "react";
import styles from "./Pagination.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../../store/books/books.selectors";
import { AppDispatch } from "../../store";
import { setActivePage } from "../../store/books/books.reducer";
import clsx from "clsx";

interface PaginationProps {
  page?: number;
  onClick?: (page: number) => void;
  total: number;
}

const generatePagination = (page: number, total: number) => {
  if (total < 7) {
    return Array.from(Array(total), (_, i) => i + 1);
  }

  if (page < 5) {
    return [1, 2, 3, 4, 5, "...", total];
  }

  if (page > total - 4) {
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  }

  return [1, "...", page - 1, page, page + 1, "...", total];
};

const Pagination: React.FC<PaginationProps> = ({ page, total, onClick }) => {
  const { activePage } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  const pagination = generatePagination(activePage, total);

  const incActivePage = () => {
    if (activePage === total) {
      return;
    } else {
      dispatch(setActivePage(activePage + 1));
    }
  };
  const decActivePage = () => {
    if (activePage === 1) {
      return;
    } else {
      dispatch(setActivePage(activePage - 1));
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <div>
        <button className={styles.nextAndPrevBut} onClick={decActivePage}>
          <GrFormPrevious />
        </button>
      </div>
      <div className={styles.numbersContainer}>
        {pagination.map((item, index) => (
          <React.Fragment key={index}>
            {typeof item === "number" ? (
              <button
                className={styles.buttons}
                style={{ color: item === activePage ? "black" : "#a8a8a8" }}
                onClick={() => {
                  onClick?.(item);
                }}
              >
                {item}
              </button>
            ) : (
              <span>{item}</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div>
        <button className={styles.nextAndPrevBut} onClick={incActivePage}>
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
