import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IBook } from "../../models/book.model";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import styles from "./SliderComponent.module.css";
import Typography from "../Typography/Typography";
import "./SliderStyles.css";
import { useMedia } from "../../hooks/useMedia";

interface ISliderProps {
  books: IBook[];
}

function mixArr(arr: IBook[]) {
  const filteredArr = arr.filter((item) => typeof item !== "number");
  return filteredArr
    .map((item) => [Math.random(), item])
    .sort()
    .map((item) => item[1]);
}

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const SliderComponent: React.FC<ISliderProps> = ({ books }) => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  if (isMobile) {
    SLIDER_SETTINGS.slidesToShow = 1;
  } else if (isTablet) {
    SLIDER_SETTINGS.slidesToShow = 2;
  } else if (isDesktop) {
    SLIDER_SETTINGS.slidesToShow = 3;
  }
  const mixedArray = mixArr(books).filter(
    (item): item is IBook => typeof item !== "number"
  );

  return (
    <div className={styles.wrapper}>
      <Typography variant="h4">Similar Books</Typography>
      <Slider {...SLIDER_SETTINGS}>
        {mixedArray.map((book: IBook) => (
          <div className={styles.sliderItem} key={book.isbn13}>
            <NavLink
              className={styles.bookWrapper}
              style={{ textDecoration: "none", color: "black" }}
              to={`/book/${book.isbn13}`}
            >
              <BookCard book={book} />
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
