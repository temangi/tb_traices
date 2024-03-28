import style from "./Cards.module.scss";
import img from "../img/Picture 1.svg";

interface destinationProps {
  title: string;
  days: number;
}

const DestinationCard: React.FC<destinationProps> = ({title, days}) => {
  return (
    <article className={style.destination}>
      <div className={style.destination__days}>
        <b>{days} days</b>
      </div>
      <img src={img} alt="" />
      <div className={style.destination__bottom}>
        <p>Area:</p>
        <h3>{title}</h3>
      </div>
    </article>
  );
};

export default DestinationCard;
