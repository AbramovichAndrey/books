import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainLayout from "../layouts/MainLayout";
import AuthorizationComponent from "../components/Authorization/Authorization";

const Authorization = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<AuthorizationComponent />}
      footer={<Footer />}
    />
  );
};

export default Authorization;
