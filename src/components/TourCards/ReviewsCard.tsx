import style from "./Cards.module.scss";
import img from "../img/Photo.svg";

const ReviewsCard = () => {
  return (
    <main className={style.review}>
      <section className={style.review__header}>
        <img src={img} alt="" />
        <div className={style.review__title}>
          <h3>MONICA CANDAMO</h3>
          <p>Kyrgyzstan</p>
        </div>
      </section>
      <p className={style.review__description}>
        We had a great time on 12 days best of Turkey. What made it amazing was
        the great people from down under, England, Spain and the USA. Samy, no
        words to describe your sage...
      </p>
      <button>Link on full review</button>
    </main>
  );
};

export default ReviewsCard;
