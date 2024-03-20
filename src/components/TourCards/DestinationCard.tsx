import style from "./Cards.module.scss";
import img from "../img/Picture 1.svg";

interface destinationProps {
  obj: {
    title: string;
    days: number;
  };
}

const DestinationCard: React.FC<destinationProps> = ({ obj }) => {
  return (
    <article className={style.destination}>
      <div className={style.destination__days}>
        <b>{obj.days} days</b>
      </div>
      <img src={img} alt="" />
      <div className={style.destination__bottom}>
        <p>Area:</p>
        <h3>{obj.title}</h3>
      </div>
    </article>
  );
};

export default DestinationCard;
