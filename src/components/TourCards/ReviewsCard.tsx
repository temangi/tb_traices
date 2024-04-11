import style from "./Cards.module.scss";
import img from "../img/Photo.svg";
import React from "react";

interface reviewProps {
  name: string;
  country: string;
  description: string;
}

const ReviewsCard: React.FC<reviewProps> = ({ name, description, country }) => {
  return (
    <main className={style.review}>
      <section className={style.review_header}>
        <img src={img} alt="" />
        <div className={style.review__title}>
          <h3>{name}</h3>
          <p>{country}</p>
        </div>
      </section>
      <p className={style.review_description}>{description}</p>
      <button>Link on full review</button>
    </main>
  );
};

export default ReviewsCard;
