import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";

const Tours = () => {
  const title = "Choose your tour";
  return (
    <>
      <Header />
      <Main title={title} />
      <h1>Tours</h1>
      <Footer />
    </>
  );
};

export default Tours;
