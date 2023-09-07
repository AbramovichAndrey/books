import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainLayout from "../layouts/MainLayout";
import BooksDetailsComponent from "../components/BookDetails/BookDetails";

const BookDetails = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<BooksDetailsComponent />}
      footer={<Footer />}
    />
  );
};

export default BookDetails;
