import style from "./style.module.scss";
import { useMemo } from "react";
import Slider from "react-slick";
import DestinationCard from "../TourCards/DestinationCard";
import Prev from "../sliderButton/PrevButton";
import Next from "../sliderButton/NextButton";
import arrow from "../img/ArrowRight.svg";
import { Link } from "react-router-dom";
import { ToursObj } from "../../constants/TourCards";

const Destination = () => {
  const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <div className={style.prev__arrow}>
      <Prev onClick={onClick} />
    </div>
  );

  const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <div className={style.next__arrow}>
      <Next onClick={onClick} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 855,
        settings: {
          slidesToShow: 2.4,
        },
      },
      {
        breakpoint: 795,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 605,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 385,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const DestinationCardsMemo = useMemo(
    () =>
      ToursObj.map((item, id) => (
        <DestinationCard key={id} title={item.title} days={item.days} />
      )),
    []
  );

  return (
    <>
      <div className={style.slider}>
        <article className={style.header}>
          <section className={style.header_left}>
            <h1>Destination</h1>
            <p>
              Learn more about the beautiful sights. Choose an area and we will
              tell you what attractions and tours there are in this area.
            </p>
          </section>
          <Link to="/destinations">
            <section className={style.header_right}>
              <p>Watch all sights</p>
              <img src={arrow} alt="arrow" />
            </section>
          </Link>
        </article>
        <hr />
        <Slider {...settings}>{DestinationCardsMemo}</Slider>
      </div>
    </>
  );
};

export default Destination;
