import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainLayout from "../layouts/MainLayout";
import BooksDetails from "../components/BookDetails/BookDetails";

const BookDetails = () => {
  return <MainLayout header={<Header />} main={<BooksDetails />} footer={<Footer />} />;
};

export default BookDetails;
