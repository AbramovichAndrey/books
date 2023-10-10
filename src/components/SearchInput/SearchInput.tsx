import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { getSlice } from "../../store/books/books.selectors";
import { setSearch } from "../../store/books/books.reducer";
import debounce from "lodash.debounce";
import { getBooksBySearch } from "../../store/books/books.actions";
import { useDidUpdate } from "../../hooks/useDidUpdate";
import Input from "../Input/Input";

interface IPropsSearchInput {
  className: string;
}

const SearchInput: React.FC<IPropsSearchInput> = ({ className }) => {
  const { search } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const debouncedSetSearch = useCallback(
    debounce((searchValue: string, page: string) => {
      dispatch(getBooksBySearch({ searchValue, page }));
    }, 300),
    [dispatch]
  );

  useDidUpdate(() => {
    if (search !== "") debouncedSetSearch(search, "1");
  }, [debouncedSetSearch, search]);

  return (
    <>
      <Input
        type="text"
        className={className}
        placeholder="Search"
        value={search}
        onChange={handleChange}
        name={"search"}
      />
    </>
  );
};

export default SearchInput;
