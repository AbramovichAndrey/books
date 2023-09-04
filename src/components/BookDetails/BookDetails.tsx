import React, { useEffect, useState, MouseEvent } from "react";
import styles from "./BookDetails.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSlice } from "../store/books/books.selectors";
import {
  setBook,
  setIsBookLoading,
  deleteBook,
  toggleBookIsFavorite,
} from "../store/books/books.reducer";
import { getBook } from "../../api/getBook";
import RandomColor from "../RandomColor/RandomColor";
import HeartButtons from "../Buttons/HeartButton/HeartButton";
import { NavLink } from "react-router-dom";
import BookActions from "../BookAction/BookActions";
import Typography from "../Typography/Typography";
import MainButton from "../Buttons/MainButton/MainButton";
import Tabs, { Tab } from "../Tabs/Tabs";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";
import Subscribe from "../Subscribe/Subscribe";

const tabs: Tab[] = [
  {
    label: "Description",
    value: "description",
  },
  { label: "Authors", value: "authors" },
  { label: "Reviews", value: "reviews" },
];

const BooksDetails: React.FC = () => {
  const colors = ["#D7E4FD", "#CAEFF0", "#F4EEFD", "#FEE9E2"];
  const { id: bookId } = useParams();
  const { book, isBookLoading: loading, books } = useSelector(getSlice);
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    if (book?.isbn13 !== undefined) {
      dispatch(toggleBookIsFavorite(book?.isbn13));
      const favoriteBooks = books.filter((b) => b.isFavorite);
      console.log();
      localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
    }
  };

  const handleChangeTab = (tab: Tab) => {
    // e.preventDefault();
    setActiveTab(tab.value);
  };

  useEffect(() => {
    if (!bookId) return;

    dispatch(setIsBookLoading(true));
    getBook({ id: bookId })
      .then((data) => dispatch(setBook(data)))
      .finally(() => dispatch(setIsBookLoading(false)));
    window.scrollTo(0, 0);

    return () => {
      dispatch(deleteBook());
    };
  }, [dispatch, bookId]);

  return (
    <div>
      {loading && "Loading"}

      {book && (
        <>
          <div>
            <NavLink to={"/"}>
              <button className={styles.backButton}>
                <BsArrowLeft />
              </button>
            </NavLink>
            <Typography variant="h1" children={book.title} />
          </div>
          <div className={styles.wrapper}>
            <div>
              <RandomColor className={styles.imgBG} colors={colors}>
                <img
                  className={styles.img}
                  src={book?.image}
                  alt={book?.title}
                />
                <HeartButtons
                  onClick={handleClick}
                  className={styles.heartButton}
                />
              </RandomColor>
            </div>
            <div className={styles.infoWrapper}>
              <BookActions book={book} />
              <div>
                <div className={styles.textWrap}>
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="secondary"
                    children={"Authors"}
                  />
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="primary"
                    children={book.authors}
                  />
                </div>
                <div className={styles.textWrap}>
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="secondary"
                    children={"Publisher"}
                  />
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="primary"
                    children={book.publisher}
                  />
                </div>
                <div className={styles.textWrap}>
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="secondary"
                    children={"Language"}
                  />
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="primary"
                    children={"English"}
                  />
                </div>
                <div className={styles.textWrap}>
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="secondary"
                    children={"Format"}
                  />
                  <Typography
                    variant="span"
                    font="secondaryFont"
                    color="primary"
                    children={"Paper book / ebook (PDF)"}
                  />
                </div>
                <MainButton
                  className={styles.addBut}
                  children={
                    <Typography color="secondary" children={"ADD TO CARD"} />
                  }
                />
                <div className={styles.previewBook}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"https://itbook.store/files/9781617294136/chapter2.pdf"}
                  >
                    <Typography
                      variant="p"
                      font="secondaryFont"
                      children={"Preview book"}
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <Tabs
            className={styles.tabs}
            activeTab={activeTab}
            tabs={tabs}
            onTabClick={handleChangeTab}
          />

          {!loading && activeTab === "description" && (
            <Typography
              className={styles.tabsContent}
              variant="p"
              font="secondaryFont"
              children={book.desc}
            />
          )}

          {!loading && activeTab === "authors" && (
            <Typography
              className={styles.tabsContent}
              variant="p"
              font="secondaryFont"
              children={book.authors}
            />
          )}

          {!loading && activeTab === "reviews" && (
            <Typography
              className={styles.tabsContent}
              variant="p"
              font="secondaryFont"
              children={book.desc}
            />
          )}

          <div className={styles.socialIconWrapper}>
            <SlSocialFacebook className={styles.socialIcon} />
            <CiTwitter className={styles.socialIcon} />
            <FiMoreHorizontal className={styles.socialIcon} />
          </div>

          <Subscribe />
        </>
      )}
    </div>
  );
};

export default BooksDetails;
