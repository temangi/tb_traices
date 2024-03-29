import style from "./style.module.scss";
import TeamCards from "../TourCards/TeamCards";
import Slider from "react-slick";
import { useMemo } from "react";
import Prev from "../sliderButton/PrevButton";
import Next from "../sliderButton/NextButton";

interface Team {
  name: string;
  description: string;
}

export const Team = () => {
  const TeamObj: Team[] = [
    {
      name: "Samira Djakipova",
      description: "Treking guide",
    },
    {
      name: "Samira Djakipova",
      description: "Treking guide",
    },
    {
      name: "Samira Djakipova",
      description: "Treking guide",
    },
    {
      name: "Samira Djakipova",
      description: "Treking guide",
    },
    {
      name: "Samira Djakipova",
      description: "Treking guide",
    },
    {
      name: "Samira Djakipova",
      description: "Treking guide",
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
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <PrevArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 945,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3.4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 2,
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
