import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import home from "../components/img/HomeBg.png";
import tours from "../components/img/TourBg.png";
import destinations from "../components/img/DestinationsBg.png";
import aboutUs from "../components/img/AboutUsBg.png";
import FindToursCard from "../components/TourCards/FindToursCard";
import Destination from "../components/Destination";
import Review from "../components/Reviews";
import { Team } from "../components/Team";

interface Tour {
  title: string;
  days: number;
}


const HomePage = () => {
  const array: string[] = [home, tours, destinations, aboutUs];
  const title = "Discover the Kyrgyzstan";

  const ToursObj: Tour = {
    title: "Naryn",
    days: 5,
  };


  return (
    <>
      <Header />
      <Main array={array} title={title} />
      <FindToursCard obj={ToursObj} />
      <Destination />
      <Review />
      <Team />
      <Footer />
    </>
  );
};

export default HomePage;
