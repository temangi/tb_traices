import style from "./style.module.scss";
import home from "../img/HomeBg.png";
import tours from "../img/TourBg.png";
import destinations from "../img/DestinationsBg.png";
import aboutUs from "../img/AboutUsBg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dots from "react-slick";
import { useMemo } from "react";

const Main = () => {
  interface Settings {
    dots: boolean;
    infinite: boolean;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    pauseOnHover: boolean;
  }

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const Images: string[] = [home, tours, destinations, aboutUs];

  const memoSlider = useMemo(() => {
    return (
      <Slider {...settings}>
        {Images.map((img, id) => {
          return <img key={id} src={img} alt="" />;
        })}
      </Slider>
    );
  }, [settings, Images]);

  return (
    <>
      {memoSlider}
      <main className={style.main}>
        <p>Welcome to Kyrgyz Traces</p>
        <h1>Discover the Kyrgyzstan</h1>
        <section className={style.main_btns}>
          <button>Find your tours</button>
          <button>Share tours</button>
          <button>Watch video</button>
        </section>
        <article className={style.main_pagination}>
          <Dots />
        </article>
      </main>
    </>
  );
};

export default Main;
