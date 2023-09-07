import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainLayout from "../layouts/MainLayout";
import CartComponent from "../components/Cart/Cart";

const Cart = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<CartComponent />}
      footer={<Footer />}
    />
  );
};

export default Cart;
