import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import MainLayout from "../layouts/MainLayout";

const MainPage = () => {
  return <MainLayout header={<Header />} main={<Main />} footer={<Footer />} />;
};

export default MainPage;
