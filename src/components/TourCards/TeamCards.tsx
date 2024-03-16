import style from "./Cards.module.scss";
import img from "../img/Photo (3).png";

const TeamCards = () => {
  return (
    <main className={style.team}>
      <img className={style.team__image} src={img} alt="" />
      <section className={style.team__bottom}>
        <h3>MONICA CANDAMO</h3>
        <p>Treking guide</p>
      </section>
    </main>
  );
};

export default TeamCards;
