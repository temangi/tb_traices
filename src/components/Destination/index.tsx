import style from "./style.module.scss";
import { useMemo } from "react";
import Slider from "react-slick";
import DestinationCard from "../TourCards/DestinationCard";
import Prev from "../sliderButton/PrevButton";
import Next from "../sliderButton/NextButton";
import arrow from "../img/ArrowRight.svg";

interface Tour {
  title: string;
  days: number;
}

const Destination = () => {
  const ToursObj: Tour[] = [
    {
      title: "Naryn",
      days: 5,
    },
    {
      title: "Talas",
      days: 9,
    },
    {
      title: "Bishkek",
      days: 1,
    },
    {
      title: "Ysyk-Kol",
      days: 6,
    },
    {
      title: "Naryn",
      days: 5,
    },
    {
      title: "Talas",
      days: 9,
    },
    {
      title: "Bishkek",
      days: 1,
    },
    {
      title: "Naryn",
      days: 10,
    },
    {
      title: "Osh",
      days: 4,
    },
  ];

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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1.5,
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
          <section className={style.header__left}>
            <h1>Destination</h1>
            <p>
              Learn more about the beautiful sights. Choose an area and we will
              tell you what attractions and tours there are in this area.
            </p>
          </section>
          <section className={style.header__right}>
            <p>Watch all sights</p>
            <img src={arrow} alt="" />
          </section>
        </article>
        <hr />
        <Slider {...settings}>{DestinationCardsMemo}</Slider>
      </div>
    </>
  );
};

export default Destination;
