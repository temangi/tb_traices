import style from "./Cards.module.scss";
import img from "../img/Picture 1.svg";

const DestinationCard = () => {
  return (
    <article className={style.destination}>
      <div className={style.destination__days}>
        <b>12 days</b>
      </div>
      <img src={img} alt="" />
      <div className={style.destination__bottom}>
        <p>Area:</p>
        <h3>Naryn</h3>
      </div>
    </article>
  );
};

export default DestinationCard;
