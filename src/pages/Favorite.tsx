import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainLayout from "../layouts/MainLayout";
import Favorite from "../components/Favorite/Favotite";

const Farotite = () => {
  return (
    <MainLayout header={<Header />} main={<Favorite />} footer={<Footer />} />
  );
};

export default Farotite;
