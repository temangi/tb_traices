import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import home from "../components/img/HomeBg.png";
import tours from "../components/img/TourBg.png";
import destinations from "../components/img/DestinationsBg.png";
import aboutUs from "../components/img/AboutUsBg.png";
import FindToursCard from "../components/TourCards/FindToursCard";
import DestinationCard from "../components/TourCards/DestinationCard";
import ReviewsCard from "../components/TourCards/ReviewsCard";
import TeamCards from "../components/TourCards/TeamCards";

const HomePage = () => {
  const array: string[] = [home, tours, destinations, aboutUs];
  const title = "Discover the Kyrgyzstan";
  return (
    <>
      <Header />
      <Main array={array} title={title} />
      <FindToursCard/>
      <DestinationCard/>
      <ReviewsCard/>
      <TeamCards/>
      <Footer />
    </>
  );
};

export default HomePage;
