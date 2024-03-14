import style from "./style.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dots from "react-slick";
import { useMemo } from "react";
import { Link } from "react-router-dom";

interface MainProps {
  title: string;
  array: string[];
}
interface Settings {
  dots: boolean;
  infinite: boolean;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
}

interface Links {
  title: string;
  link: string;
}
const Main: React.FC<MainProps> = ({ array, title }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const links: Links[] = [
    {
      title: "Find your tours",
      link: "/Tours",
    },
    {
      title: "Share Tours",
      link: "/ShareTours",
    },
    {
      title: "Watch video",
      link: "https://youtu.be/4xnsmyI5KMQ?si=ZZoucUBCdGusSRNh",
    },
  ];

  const memoSlider = useMemo(() => {
    return (
      <Slider {...settings}>
        {array.map((item, id) => {
          return <img key={id} src={item} alt="" />;
        })}
      </Slider>
    );
  }, [settings, array]);

  const renderBtns = useMemo(() => {
    return (
      <section className={style.main_btns}>
        {links.map((item, id) => (
          <Link to={item.link}>
            <button key={id}>{item.title}</button>
          </Link>
        ))}
      </section>
    );
  }, [links]);

  return (
    <>
      {memoSlider}
      <main className={style.main}>
        <p>Welcome to Kyrgyz Traces</p>
        <h1>{title}</h1>
        {renderBtns}
        <article className={style.main_pagination}>
          <Dots />
        </article>
      </main>
    </>
  );
};

export default Main;
