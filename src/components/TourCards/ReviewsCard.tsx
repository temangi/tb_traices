import style from "./Cards.module.scss";
import img from "../img/Photo.svg";

interface reviewProps {
  obj: {
    name: string;
    country: string;
    description: string
  };
}

const ReviewsCard = ({ obj }: reviewProps) => {
  return (
    <main className={style.review}>
      <section className={style.review__header}>
        <img src={img} alt="" />
        <div className={style.review__title}>
          <h3>{obj.name}</h3>
          <p>{obj.country}</p>
        </div>
      </section>
      <p className={style.review__description}>
       {obj.description}
      </p>
      <button>Link on full review</button>
    </main>
  );
};

export default ReviewsCard;
