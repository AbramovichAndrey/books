import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainLayout from "../layouts/MainLayout";
import FavoriteComponent from "../components/Favorite/Favotite";

const Farotite = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<FavoriteComponent />}
      footer={<Footer />}
    />
  );
};

export default Farotite;
