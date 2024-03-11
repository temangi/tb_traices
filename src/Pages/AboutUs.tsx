import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";

const AboutUs = () => {
  const title = "About Kyrgyz Traces";
  return (
    <>
      <Header />
      <Main title={title} />
      <h1>About us</h1>
      <Footer />
    </>
  );
};

export default AboutUs;
