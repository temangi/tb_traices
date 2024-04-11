import style from "./style.module.scss";
import TeamCards from "../TourCards/TeamCards";
import Slider from "react-slick";
import { useMemo } from "react";
import Prev from "../sliderButton/PrevButton";
import Next from "../sliderButton/NextButton";
import { TeamObj } from "../../constants/Team";

export const Team = () => {
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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3.6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 435,
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

  const TeamCardsMemo = useMemo(
    () =>
      TeamObj.map((item, id) => (
        <TeamCards key={id} name={item.name} description={item.description} />
      )),
    []
  );
  return (
    <div className={style.slider}>
      <article className={style.header}>
        <h1>Our team</h1>
      </article>
      <hr />
      <Slider {...settings}>{TeamCardsMemo}</Slider>
    </div>
  );
};
