import style from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dots from "react-slick";
import { useMemo } from "react";

interface MainProps {
  title: string;
  array: string[];
}

const Main: React.FC<MainProps> = ({ array, title }) => {
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
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const memoSlider = useMemo(() => {
    return (
      <Slider {...settings}>
        {array.map((item, id) => {
          return <img key={id} src={item} alt="" />;
        })}
      </Slider>
    );
  }, [settings, array]);

  return (
    <>
      {memoSlider}
      <main className={style.main}>
        <p>Welcome to Kyrgyz Traces</p>
        <h1>{title}</h1>
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
