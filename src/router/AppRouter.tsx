import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Tours from "../Pages/Tours";
import Destinations from "../Pages/Destination";
import AboutUs from "../Pages/AboutUs";
import ShareTours from "../Pages/ShareTours";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ShareTours" element={<ShareTours />} />
      </Routes>
    </>
  );
};

export default AppRouter;
