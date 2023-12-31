import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainComponent from "../components/Main/Main";
import MainLayout from "../layouts/MainLayout";

const MainPage = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<MainComponent />}
      footer={<Footer />}
    />
  );
};

export default MainPage;
