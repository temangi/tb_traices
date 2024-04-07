import style from "./Cards.module.scss";
import img from "../img/Picture 1.svg";

interface Tour {
  obj: {
    title: string;
    days: number;
  };
}

const FindToursCard: React.FC<Tour> = ({obj}) => {
  return (
    <article className={style.tour}>
      <div className={style.tour_days}>
        <b>{obj.days} days</b>
      </div>
      <img src={img} alt="" />
      <section className={style.tour_bottom}>
        <div className={style.bottom__title}>
          <p>Tour name:</p>
          <h3>Discover {obj.title}</h3>
        </div>
        <div className={style.bottom_choice}>
          <p>Tour class:</p>
          <div className={style.bottom_choice__btns}>
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
