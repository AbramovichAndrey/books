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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Main />} />
      <Route path="/book/:id" element={<BookDetails/>}/>
    </>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
