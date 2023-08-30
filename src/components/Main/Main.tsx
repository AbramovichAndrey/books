import React, { useEffect } from "react";
import styles from "./Main.module.css";
import { IBook } from "../../models/book.model";
import { getSlice } from "../store/posts/posts.selectors";
import { useSelector, useDispatch } from "react-redux";
import { setIsPostsLoading, setPosts } from "../store/posts/posts.reducer";
import { getBooks } from "../../api/getBooks";
import { RootState } from "../store";
import NewReleasesBooks from "../NewReleasesBooks/NewReleasesBooks";
import Subscribe from "../Subscribe/Subscribe";

const Main: React.FC = () => {
  const { posts, isPostsLoading: loading } = useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsPostsLoading(true));
    getBooks()
      .then((data) => dispatch(setPosts(data.books)))
      .finally(() => dispatch(setIsPostsLoading(false)));
    console.log(posts);
  }, [dispatch]);

  return (
    <div>
      <div className={styles.books}>
        {loading && "Loading"}
        {!loading && posts.length > 0 && <NewReleasesBooks books={posts} />}
      </div>
      <div className={styles.subscribeWrapper}>
        <Subscribe />
      </div>
    </div>
  );
};

export default Main;
