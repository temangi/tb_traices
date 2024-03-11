import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";

const Destinations = () => {
  const title = "Choose your destination";
  return (
    <>
      <Header />
      <Main title={title} />
      <h1>Destinations</h1>
      <Footer />
    </>
  );
};

export default Destinations;
