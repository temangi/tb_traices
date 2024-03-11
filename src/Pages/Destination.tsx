import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import home from "../components/img/HomeBg.png";
import tours from "../components/img/TourBg.png";
import destinations from "../components/img/DestinationsBg.png";
import aboutUs from "../components/img/AboutUsBg.png";

const Destinations = () => {
  const array: string[] = [destinations, tours, aboutUs, home];
  const title = "Choose your destination";
  return (
    <>
      <Header />
      <Main array={array} title={title} />
      <h1>Destinations</h1>
      <Footer />
    </>
  );
};

export default Destinations;
