import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Main from "../pages/Main";
import BookDetails from "../pages/BooksDetails";
import Favorite from "../pages/Favorite";
import Cart from "../pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Main />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/cart" element={<Cart />} />
    </>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
