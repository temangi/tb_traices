import style from "./Cards.module.scss";
import img from "../img/Picture 1.svg";

interface TourCardsProp {
  title: string[];
  days: number[];
}

const FindToursCard: React.FC<TourCardsProp> = ({ title, days }) => {
  return (
    <article className={style.tour}>
      <div className={style.tour__days}>
        <b>{days} days</b>
      </div>
      <img src={img} alt="" />
      <section className={style.tour__bottom}>
        <div className={style.bottom__title}>
          <p>Tour name:</p>
          <h3>Discover {title}</h3>
        </div>
        <div className={style.bottom__choice}>
          <p>Tour class:</p>
          <div className={style.bottom__choice_btns}>
            <button>Trekking</button>
            <button>Trekking</button>
            <button>Trekking</button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default FindToursCard;
