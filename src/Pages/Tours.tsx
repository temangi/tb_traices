import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import home from "../components/img/HomeBg.png";
import tours from "../components/img/TourBg.png";
import destinations from "../components/img/DestinationsBg.png";
import aboutUs from "../components/img/AboutUsBg.png";

const Tours = () => {
  const array: string[] = [tours, home, destinations, aboutUs];
  const title = "Choose your tour";
  return (
    <>
      <Header />
      <Main array={array} title={title} />
      <Footer />
    </>
  );
};

export default Tours;
