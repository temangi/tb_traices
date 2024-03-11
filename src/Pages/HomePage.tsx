import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";


const HomePage = () => {
  const title = "Discover the Kyrgyzstan";
  return (
    <>
      <Header />
      <Main title={title} />
      <Footer />
    </>
  );
};

export default HomePage;
