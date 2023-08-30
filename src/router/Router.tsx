import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Main from "../pages/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Main />} />
    </>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
