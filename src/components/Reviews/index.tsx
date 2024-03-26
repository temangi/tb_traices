import { useMemo } from "react";
import style from "./style.module.scss";
import ReviewsCard from "../TourCards/ReviewsCard";
import Slider from "react-slick";
import Prev from "../sliderButton/PrevButton";
import Next from "../sliderButton/NextButton";
import arrow from "../img/RightGreenArrow.svg";

interface Review {
  name: string;
  country: string;
  description: string;
}

const Review = () => {
  const ReviewObj: Review[] = [
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Kyrgyzstan",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Germany",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "China",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Kyrgyzstan",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Kyrgyzstan",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Kyrgyzstan",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Kyrgyzstan",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Kyrgyzstan",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
    },
    {
      name: "TOKTORBAEVA SABRINA",
      country: "Kyrgyzstan",
      description:
        "We had a great time on 12 days best of Turkey. What made it amazing was the great people from down under, England, Spain and the USA. Samy, no words to describe your sage...",
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
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
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

  const ReviewCardsMemo = useMemo(
    () =>
      ReviewObj.map((item, id) => (
        <ReviewsCard
          key={id}
          name={item.name}
          country={item.country}
          description={item.description}
        />
      )),
    []
  );

  return (
    <div className={style.slider}>
      <article className={style.header}>
        <h1>Reviews</h1>
        <section className={style.header__right}>
          <p>Watch all sights</p>
          <img src={arrow} alt="arrow" />
        </section>
      </article>
      <hr />
      <Slider {...settings}>{ReviewCardsMemo}</Slider>
    </div>
  );
};

export default Review;
