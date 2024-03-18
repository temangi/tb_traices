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
  const shaar: string[] = ["Naryn"];
  const day: number[] = [7];

  interface Review {
    name: string;
    country: string;
    description: string;
  }

  const ReviewObj: Review = {
    name: "TOKTORBAEVA SABRINA",
    country: "Kyrgyzstan",
    description:
      "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
  };

  interface Team {
    name: string;
    description: string;
  }

  const TeamObj: Team = {
    name: "Samira Djakipova",
    description: "Treking guide",
  };
  return (
    <>
      <Header />
      <Main array={array} title={title} />
      <FindToursCard days={day} title={shaar} />
      <DestinationCard days={day} title={shaar} />
      <ReviewsCard obj={ReviewObj} />
      <TeamCards obj={TeamObj} />
      <Footer />
    </>
  );
};

export default HomePage;
