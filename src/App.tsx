import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Tours from "./Pages/Tours";
import Destinations from "./Pages/Destination";
import AboutUs from "./Pages/AboutUs";
import ShareTours from "./Pages/ShareTours";

function App() {
  return (
    <>
    <article className="container">
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ShareTours" element={<ShareTours />} />
      </Routes>
    </article>
    </>
  );
}

export default App;
